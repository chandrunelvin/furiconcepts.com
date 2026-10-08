import { useEffect } from 'react';

/**
 * Per-page <head>: title, meta tags, canonical link and JSON-LD.
 *
 * The blog's SEO data comes from the old site (public/blog-content/*.json).
 * The build writes the same tags into each article URL's HTML, marked
 * data-seo, so crawlers see them without running JavaScript; here they are
 * swapped as the reader moves between pages, and the site defaults from
 * index.html come back when a page with its own tags is left.
 */
const DEFAULTS = typeof document === 'undefined' ? null : {
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
};

function clear() {
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
}

function descriptionTag() {
  let el = document.head.querySelector('meta[name="description"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'description');
    document.head.appendChild(el);
  }
  return el;
}

export function applySeo(seo) {
  clear();
  if (!seo) {
    document.title = DEFAULTS.title;
    descriptionTag().setAttribute('content', DEFAULTS.description);
    return;
  }
  document.title = seo.title ?? DEFAULTS.title;
  for (const m of seo.meta ?? []) {
    if (m.name === 'description') { descriptionTag().setAttribute('content', m.content); continue; }
    const el = document.createElement('meta');
    el.setAttribute(m.name ? 'name' : 'property', m.name ?? m.property);
    el.setAttribute('content', m.content);
    el.dataset.seo = '';
    document.head.appendChild(el);
  }
  if (seo.canonical) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = seo.canonical;
    link.dataset.seo = '';
    document.head.appendChild(link);
  }
  for (const data of seo.jsonld ?? []) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = data.__raw ?? JSON.stringify(data);
    script.dataset.seo = '';
    document.head.appendChild(script);
  }
}

/** Sets the page's head while it is mounted; `seo` may arrive late (fetched). */
export function useSeo(seo) {
  useEffect(() => {
    if (seo) applySeo(seo);
  }, [seo]);
  useEffect(() => () => applySeo(null), []);
}

const cache = new Map();

/** The old site's body and SEO tags for one blog page (or `_index` for the list). */
export function loadBlogContent(slug) {
  if (!cache.has(slug)) {
    cache.set(slug, fetch(`/blog-content/${slug}.json`).then((r) => {
      if (!r.ok) throw new Error(`blog content ${slug}: ${r.status}`);
      return r.json();
    }).catch((e) => { cache.delete(slug); throw e; }));
  }
  return cache.get(slug);
}
