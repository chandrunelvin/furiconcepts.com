import { BLOG_HERO, getArticleByPath } from '../data/blog.js';
import { BRANDS } from '../data/brands.js';
import { CATALOGS } from '../data/catalogs.js';
import { getCategoryByPath } from '../data/categories.js';
import { CONTACT_HERO } from '../data/contact.js';
import { FC_COLLECTIONS } from '../data/fcProfiles.js';
import { PROFILES } from '../data/profiles.js';
import { PROJECTS } from '../data/projects.js';
import { REDIRECTS } from '../data/redirects.js';
import SEO from '../data/seo.json';

/**
 * Every page's <head> tags, in one place: the title, description, keywords,
 * social and JSON-LD tags copied from the old site's matching page
 * (data/seo.json, blog articles from public/blog-content), finished here with
 *  - a canonical link and og:url on https://www.furniconcepts.com + the path,
 *  - og:image / twitter:image set to the page's own hero image (the old
 *    site's image paths do not exist on this site),
 *  - links to old URLs in the copied tags rewritten to their new pages.
 * Pages the old site did not have (projects, catalogues) get tags built from
 * their own content. App.jsx applies these on every page change; the build
 * (blog-pages.js) writes the same tags into each page's static HTML.
 */
export const SITE = 'https://www.furniconcepts.com';

const OLD_TO_NEW = new Map(REDIRECTS);
const IMAGE_FILE = /\.(jpe?g|png|webp|gif|svg|avif)$/i;
const DEFAULT_IMAGE = '/images/common/hero1.webp';

const absolute = (src) => (/^https?:/.test(src) ? src : SITE + encodeURI(src));
const slugAfter = (path, prefix) => (path.startsWith(prefix) ? decodeURIComponent(path.slice(prefix.length)) : null);

/** The photo that represents a page in link previews. */
export function pageImage(path) {
  const fixed = {
    '/': DEFAULT_IMAGE,
    '/about': '/images/about-us/about-hero-bg.webp',
    '/contact': CONTACT_HERO.image,
    '/career.php': '/images/projects/furniconcept-lab-showroom/07.webp',
    '/newsletter.php': '/images/projects/star-cinemas/banner.webp',
    '/certificates.php': '/images/certificates/iso-9001-singapore.webp',
    '/blogs.php': BLOG_HERO.image,
    '/projects': PROJECTS[0]?.media[0],
    '/categories': '/images/projects/al-futtaim-ho-phone-booth/banner.webp',
    '/download-profiles': '/images/about-us/about-hero-bg.webp',
    '/download-profiles/furniconcepts': DEFAULT_IMAGE,
  };
  if (fixed[path]) return fixed[path];
  const category = getCategoryByPath(path);
  if (category) return category.hero;
  const article = getArticleByPath(decodeURI(path));
  if (article) return article.hero ?? article.image;
  const brand = BRANDS[slugAfter(path, '/brands/')];
  if (brand) return brand.heroImage ?? DEFAULT_IMAGE;
  const project = PROJECTS.find((p) => p.slug === slugAfter(path, '/projects/'));
  if (project) return project.media.find((m) => typeof m === 'string') ?? DEFAULT_IMAGE;
  const catalog = CATALOGS.find((c) => c.slug === slugAfter(path, '/catalogs/'));
  if (catalog) return catalog.cover;
  const collection = FC_COLLECTIONS.find((c) => c.slug === slugAfter(path, '/download-profiles/furniconcepts/'));
  if (collection) return collection.cover;
  const profile = PROFILES.find((p) => p.path === path);
  if (profile) return profile.cover;
  return DEFAULT_IMAGE;
}

/** A furniconcepts.com URL from the old site, pointed at this site. */
function newUrl(url, image) {
  const m = /^https?:\/\/(?:www\.)?furniconcepts\.com(\/[^?#]*)?([?#].*)?$/i.exec(url);
  if (!m) return url;
  const path = decodeURI(m[1] || '/');
  if (IMAGE_FILE.test(path)) return absolute(image);
  const trimmed = path.length > 1 ? path.replace(/\/+$/, '') : path;
  const target = OLD_TO_NEW.get(path) ?? OLD_TO_NEW.get(trimmed) ?? OLD_TO_NEW.get(`${trimmed}.php`) ?? trimmed;
  return SITE + encodeURI(target);
}

/** Rewrites every old-site URL inside copied JSON-LD. */
function rewrite(value, image) {
  if (typeof value === 'string') return newUrl(value, image);
  if (Array.isArray(value)) return value.map((v) => rewrite(v, image));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rewrite(v, image)]));
  }
  return value;
}

const metaKey = (m) => m.name ?? m.property;

/**
 * Finishes a page's tags: canonical and og:url on the www address, the page's
 * own image, and og/twitter title and description filled in where missing.
 */
export function finalizeSeo(seo, path, image = pageImage(path)) {
  const canonical = SITE + encodeURI(path);
  const img = absolute(image);
  const meta = (seo.meta ?? [])
    .filter((m) => !['og:url', 'og:image', 'twitter:image'].includes(metaKey(m)))
    .map((m) => ({ ...m, content: newUrl(m.content, image) }));
  const has = (key) => meta.some((m) => metaKey(m) === key);
  const description = meta.find((m) => m.name === 'description')?.content;

  if (!has('og:title')) meta.push({ property: 'og:title', content: seo.title });
  if (description && !has('og:description')) meta.push({ property: 'og:description', content: description });
  if (!has('og:type')) meta.push({ property: 'og:type', content: 'website' });
  if (!has('og:site_name')) meta.push({ property: 'og:site_name', content: 'Furniconcepts' });
  meta.push({ property: 'og:url', content: canonical }, { property: 'og:image', content: img });
  if (!has('twitter:card')) meta.push({ name: 'twitter:card', content: 'summary_large_image' });
  if (!has('twitter:title')) meta.push({ name: 'twitter:title', content: seo.title });
  if (description && !has('twitter:description')) meta.push({ name: 'twitter:description', content: description });
  meta.push({ name: 'twitter:image', content: img });

  const jsonld = (seo.jsonld ?? []).map((d) => {
    if (!d.__raw) return rewrite(d, image);
    // blog JSON-LD arrives as text; text that is not valid JSON goes out as-is
    try { return rewrite(JSON.parse(d.__raw), image); } catch { return d; }
  });
  return { title: seo.title, meta, canonical, jsonld };
}

const describe = (title, description, extra = []) => ({
  title,
  meta: [{ name: 'description', content: description }, { name: 'robots', content: 'index, follow' }, ...extra],
});

/** Tags for pages the old site had no page for, written from their content. */
function generated(path) {
  const project = PROJECTS.find((p) => p.slug === slugAfter(path, '/projects/'));
  if (project) {
    return describe(
      `${project.title} – ${project.subtitle} | Furniconcepts Projects`,
      `See how Furniconcepts furnished ${project.title}, ${project.subtitle}: furniture supply, fit-out and installation by our teams in Dubai, India and Singapore.`,
    );
  }
  const catalog = CATALOGS.find((c) => c.slug === slugAfter(path, '/catalogs/'));
  if (catalog) {
    return describe(`${catalog.brand} Catalogue – ${catalog.title} | Furniconcepts`, catalog.intro);
  }
  if (path === '/home-old') {
    return { title: 'Furniconcepts', meta: [{ name: 'robots', content: 'noindex, follow' }] };
  }
  return null;
}

/** Every page with tags of its own: the build writes a static HTML file for each. */
export function seoRoutes() {
  return [
    ...Object.keys(SEO),
    ...PROJECTS.map((p) => `/projects/${p.slug}`),
    ...CATALOGS.map((c) => `/catalogs/${c.slug}`),
  ];
}

/** A non-blog page's finished tags, or null when it has none of its own. */
export function staticSeo(path) {
  const seo = SEO[path] ?? generated(path);
  if (!seo) return null;
  // the retired home page still points search engines at the real one
  return finalizeSeo(seo, path === '/home-old' ? '/' : path);
}

/** Any page's finished tags; blog pages load theirs from public/blog-content. */
export async function seoFor(path, loadBlogContent) {
  if (path === '/blogs.php' || path === '/blog') {
    const { seo } = await loadBlogContent('_index');
    return finalizeSeo(seo, '/blogs.php');
  }
  const article = getArticleByPath(decodeURI(path));
  if (article) {
    const { seo } = await loadBlogContent(article.slug);
    return finalizeSeo(seo, article.path);
  }
  return staticSeo(path);
}

