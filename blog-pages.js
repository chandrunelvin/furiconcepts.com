import fs from 'node:fs';
import path from 'node:path';

/**
 * Vite plugin that gives every page its SEO without running JavaScript, and
 * keeps the old site's URLs working.
 *
 * - dev: the old blog URLs (/blogs.php, /<article>.php) are served the app
 *   shell, like any other route.
 * - build:
 *   - every page gets its own HTML file at its URL (/about → about.html,
 *     /office-furniture.php → office-furniture.php, / → index.html) carrying
 *     its <title>, description, keywords, Open Graph/Twitter, canonical
 *     (https://www.furniconcepts.com/…) and JSON-LD tags from src/lib/seo.js,
 *     plus readable text — the article itself for blog posts. The app mounts
 *     over it as usual. A _headers entry makes the host serve .php as HTML.
 *   - old URLs that moved (/about.php, /cavaletti.php, …) get 301 redirects
 *     ahead of the app's catch-all rule in _redirects.
 *   - sitemap.xml lists every page on the www address; robots.txt points to it.
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

const summary = (seo) => {
  const description = seo.meta?.find((m) => m.name === 'description')?.content;
  return `<main><h1>${esc(seo.title)}</h1>${description ? `<p>${esc(description)}</p>` : ''}</main>`;
};

/** Where a route's HTML file goes: .php URLs keep their name, others gain .html. */
const fileFor = (route) => {
  if (route === '/') return 'index.html';
  const clean = decodeURI(route).replace(/^\//, '');
  return clean.endsWith('.php') ? clean : `${clean}.html`;
};

export default function blogPages() {
  let routes = null; // blog URL path -> article (or the index)
  const loadBlog = async (root) => {
    const { ARTICLES } = await import(path.join(root, 'src/data/blog.js'));
    routes = new Map(ARTICLES.map((a) => [a.path, a]));
    return ARTICLES;
  };

  let root;
  return {
    name: 'blog-pages',
    configResolved(config) { root = config.root; },

    async configureServer(server) {
      await loadBlog(root);
      server.middlewares.use((req, _res, next) => {
        const url = decodeURI((req.url ?? '').split('?')[0]);
        if (url === '/blogs.php' || routes.has(url)) req.url = '/index.html';
        next();
      });
    },

    async closeBundle() {
      const dist = path.join(root, 'dist');
      const shellPath = path.join(dist, 'index.html');
      if (!fs.existsSync(shellPath)) return;
      const shell = fs.readFileSync(shellPath, 'utf8');

      // lib/seo.js imports the app's data (JSON included), so it is loaded
      // through a bare Vite server rather than plain Node
      const { createServer } = await import('vite');
      const server = await createServer({ root, configFile: false, logLevel: 'error', server: { middlewareMode: true }, appType: 'custom' });
      let seoLib; let redirects; let articles;
      try {
        seoLib = await server.ssrLoadModule('/src/lib/seo.js');
        ({ REDIRECTS: redirects } = await server.ssrLoadModule('/src/data/redirects.js'));
        ({ ARTICLES: articles } = await server.ssrLoadModule('/src/data/blog.js'));
      } finally {
        await server.close();
      }

      const headers = [];
      const servedAsHtml = (urlPath) => {
        headers.push(`${encodeURI(urlPath)}\n  Content-Type: text/html; charset=utf-8`);
        if (encodeURI(urlPath) !== urlPath) headers.push(`${urlPath}\n  Content-Type: text/html; charset=utf-8`);
      };
      const write = (route, html) => {
        const file = path.join(dist, fileFor(route));
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
        if (route.endsWith('.php')) servedAsHtml(route);
      };
      const sitemap = [];

      // blog: the old article text and tags
      const content = (slug) => JSON.parse(fs.readFileSync(path.join(root, 'public/blog-content', `${slug}.json`), 'utf8'));
      for (const a of articles) {
        const { seo, html } = content(a.slug);
        const body = `<main><article><h1>${esc(a.heading ?? a.title)}</h1>${html}</article></main>`;
        write(a.path, page(shell, seoLib.finalizeSeo(seo, a.path), body));
        sitemap.push(a.path);
      }
      const index = content('_index');
      const list = articles.map((a) => `<li><a href="${esc(encodeURI(a.path))}">${esc(a.title)}</a><p>${esc(a.excerpt)}</p></li>`).join('');
      write('/blogs.php', page(shell, seoLib.finalizeSeo(index.seo, '/blogs.php'), `<main><h1>Our Blog</h1><ul>${list}</ul></main>`));
      sitemap.push('/blogs.php');

      // every other page; the home page's tags go into index.html itself
      for (const route of seoLib.seoRoutes()) {
        const seo = seoLib.staticSeo(route);
        if (!seo) continue;
        write(route, page(shell, seo, summary(seo)));
        if (route !== '/home-old') sitemap.push(route);
      }

      const headersFile = path.join(dist, '_headers');
      const existing = fs.existsSync(headersFile) ? `${fs.readFileSync(headersFile, 'utf8').trimEnd()}\n\n` : '';
      fs.writeFileSync(headersFile, `${existing}# old .php URLs are static HTML pages\n${headers.join('\n')}\n`);

      // moved pages redirect before the app's catch-all rule
      const redirectsFile = path.join(dist, '_redirects');
      const rules = fs.existsSync(redirectsFile) ? fs.readFileSync(redirectsFile, 'utf8') : '/*  /index.html  200\n';
      const moved = redirects.map(([from, to]) => `${encodeURI(from)}  ${encodeURI(to)}  301`).join('\n');
      fs.writeFileSync(redirectsFile, `# old furniconcepts.com URLs that moved\n${moved}\n\n${rules}`);

      const today = new Date().toISOString().slice(0, 10);
      const urls = [...new Set(sitemap)].map((r) => `  <url><loc>${esc(seoLib.SITE + encodeURI(r))}</loc><lastmod>${today}</lastmod></url>`).join('\n');
      fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
      fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${seoLib.SITE}/sitemap.xml\n`);
    },
  };
}
