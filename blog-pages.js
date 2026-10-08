import fs from 'node:fs';
import path from 'node:path';

/**
 * Vite plugin that keeps the old blog URLs (/blogs.php, /<article>.php)
 * working with their original SEO.
 *
 * - dev: those URLs are served the app shell, like any other route.
 * - build: each one gets its own HTML file at the same path, carrying the old
 *   page's <title>, meta, Open Graph/Twitter, canonical and JSON-LD tags plus
 *   the article text, so crawlers and link previews see them without running
 *   JavaScript. The app then mounts over it as usual. A _headers entry makes
 *   the host serve those .php files as HTML.
 */
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headTags(seo) {
  const out = [];
  for (const m of seo.meta ?? []) {
    if (m.name === 'description') continue; // replaces the shell's own description
    const key = m.name ? `name="${esc(m.name)}"` : `property="${esc(m.property)}"`;
    out.push(`<meta ${key} content="${esc(m.content)}" data-seo>`);
  }
  if (seo.canonical) out.push(`<link rel="canonical" href="${esc(seo.canonical)}" data-seo>`);
  for (const d of seo.jsonld ?? []) {
    const json = (d.__raw ?? JSON.stringify(d)).replace(/<\/script/gi, '<\\/script');
    out.push(`<script type="application/ld+json" data-seo>${json}</script>`);
  }
  return out.join('\n');
}

function page(shell, seo, body) {
  const description = seo.meta?.find((m) => m.name === 'description')?.content;
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  if (description) {
    html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`);
  }
  html = html.replace('</head>', `${headTags(seo)}\n</head>`);
  // readable content for crawlers; React replaces it when the app mounts
  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

export default function blogPages() {
  let routes = null; // URL path -> article (or the index)
  const load = async (root) => {
    const { ARTICLES } = await import(path.join(root, 'src/data/blog.js'));
    routes = new Map(ARTICLES.map((a) => [a.path, a]));
    return ARTICLES;
  };

  let root;
  return {
    name: 'blog-pages',
    configResolved(config) { root = config.root; },

    async configureServer(server) {
      await load(root);
      server.middlewares.use((req, _res, next) => {
        const url = decodeURI((req.url ?? '').split('?')[0]);
        if (url === '/blogs.php' || routes.has(url)) req.url = '/index.html';
        next();
      });
    },

    async closeBundle() {
      const articles = await load(root);
      const dist = path.join(root, 'dist');
      const shellPath = path.join(dist, 'index.html');
      if (!fs.existsSync(shellPath)) return;
      const shell = fs.readFileSync(shellPath, 'utf8');
      const content = (slug) => JSON.parse(fs.readFileSync(path.join(root, 'public/blog-content', `${slug}.json`), 'utf8'));
      const headers = [];
      const servedAsHtml = (urlPath) => {
        headers.push(`${encodeURI(urlPath)}\n  Content-Type: text/html; charset=utf-8`);
        if (encodeURI(urlPath) !== urlPath) headers.push(`${urlPath}\n  Content-Type: text/html; charset=utf-8`);
      };

      for (const a of articles) {
        const { seo, html } = content(a.slug);
        const body = `<main><article><h1>${esc(a.heading ?? a.title)}</h1>${html}</article></main>`;
        fs.writeFileSync(path.join(dist, a.path), page(shell, seo, body));
        servedAsHtml(a.path);
      }

      const index = content('_index');
      const list = articles.map((a) => `<li><a href="${esc(encodeURI(a.path))}">${esc(a.title)}</a><p>${esc(a.excerpt)}</p></li>`).join('');
      fs.writeFileSync(path.join(dist, 'blogs.php'), page(shell, index.seo, `<main><h1>Our Blog</h1><ul>${list}</ul></main>`));
      servedAsHtml('/blogs.php');

      const headersFile = path.join(dist, '_headers');
      const existing = fs.existsSync(headersFile) ? `${fs.readFileSync(headersFile, 'utf8').trimEnd()}\n\n` : '';
      fs.writeFileSync(headersFile, `${existing}# old blog URLs are static HTML pages\n${headers.join('\n')}\n`);
    },
  };
}
