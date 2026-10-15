import { brandLogo } from '../components/Home2Chrome.jsx';
import { ARTICLES } from '../data/blog.js';
import { BRANDS } from '../data/brands.js';
import { CATALOGS } from '../data/catalogs.js';
import { CATEGORY_PAGES } from '../data/categories.js';
import { CERTIFICATES } from '../data/certificates.js';
import { NEWSLETTERS } from '../data/newsletters.js';
import { PROFILES } from '../data/profiles.js';
import { PROJECTS } from '../data/projects.js';

/**
 * The site search behind the header's search icon: one flat list of every
 * page, brand, product, project, article and document, ranked in the browser.
 * SiteSearch loads this module only when the search first opens, so the data
 * it gathers stays out of the first page load.
 */

/** Result groups, in the order the search panel lists them. */
export const SEARCH_GROUPS = [
  { key: 'page', label: 'Pages' },
  { key: 'category', label: 'Categories' },
  { key: 'brand', label: 'Brands' },
  { key: 'product', label: 'Products' },
  { key: 'project', label: 'Projects' },
  { key: 'article', label: 'Blog' },
  { key: 'document', label: 'Catalogues & Documents' },
];

/** Suggestions shown before anything is typed. */
export const SEARCH_SUGGESTIONS = [
  'Office chairs', 'Auditorium seating', 'Acoustic pods', 'Hospital furniture',
  'Umbrellas', 'Stadium seating', 'Cavaletti', 'Leadcom',
];

const PAGES = [
  { title: 'Home', sub: 'Furniconcepts — furniture for Dubai, India & Singapore', href: '/', text: 'home start' },
  { title: 'About Us', sub: 'Our story, team and clients', href: '/about', text: 'company story vision mission team clients testimonials iso' },
  { title: 'Certificates', sub: 'ISO, trademark, ICV and HSE documents', href: '/certificates.php', text: 'iso 9001 14001 45001 certificate trademark icv hse compliance quality' },
  { title: 'Contact Us', sub: 'Offices in UAE, India & Singapore', href: '/contact', text: 'contact phone email whatsapp address office location map quote enquiry' },
  { title: 'Careers', sub: "We're hiring — send us your CV", href: '/career.php', text: 'career careers job jobs hiring vacancy cv resume work' },
  { title: 'Projects', sub: 'Completed projects across the region', href: '/projects', text: 'projects portfolio case studies clients work' },
  { title: 'Blog', sub: 'Guides, pricing and buying advice', href: '/blogs.php', text: 'blog articles news guides insights' },
  { title: 'Download Profiles', sub: 'Company profiles and brand catalogues', href: '/download-profiles', text: 'download profiles catalogue catalog brochure pdf' },
  { title: 'Furnijournal Newsletter', sub: 'Monthly newsletter archive', href: '/newsletter.php', text: 'newsletter furnijournal monthly news' },
];

const strip = (s) => (typeof s === 'string' ? s : '');

/** Lower case, accents dropped (Doğuş → dogus), punctuation to spaces. */
export const normalize = (s) =>
  strip(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i')
    .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();

let cache;

export function searchIndex() {
  if (cache) return cache;
  const docs = [];
  const add = (group, d) => docs.push({ ...d, group, _title: normalize(d.title), _text: normalize(`${d.title} ${d.sub ?? ''} ${d.text ?? ''}`) });

  PAGES.forEach((p) => add('page', p));

  for (const c of CATEGORY_PAGES) {
    add('category', {
      title: c.parent ? `${c.title} ${c.titleAccent ?? ''}`.trim() : c.name,
      sub: c.parent ? 'Region page' : c.eyebrow,
      href: c.path,
      image: c.hero,
      text: `${c.title} ${c.titleAccent ?? ''} ${c.summary ?? ''}`,
    });
  }

  for (const b of Object.values(BRANDS)) {
    add('brand', {
      title: b.name,
      sub: [b.origin, strip(b.tagline).replace(/\n/g, ' ')].filter(Boolean).join(' · '),
      href: `/brands/${b.slug}`,
      // brands without a hero photo show their logo instead
      ...(b.heroImage ? { image: b.heroImage } : { image: brandLogo(b.name), logo: true }),
      text: (b.products?.categories ?? []).map((g) => g.label).join(' '),
    });
    for (const p of b.products?.items ?? []) {
      add('product', {
        title: p.name,
        sub: `${b.name} · ${p.type ?? ''}`.replace(/ · $/, ''),
        // brand pages open a product's enquiry from #<id>
        href: `/brands/${b.slug}#${p.id}`,
        image: p.image,
        text: `${b.name} ${p.type ?? ''} ${p.category ?? ''} ${strip(p.description).slice(0, 160)}`,
      });
    }
  }

  for (const p of PROJECTS) {
    add('project', { title: p.title, sub: p.subtitle, href: `/projects/${p.slug}`, image: p.media?.find((m) => typeof m === 'string'), text: p.subtitle });
  }

  for (const a of ARTICLES) {
    add('article', { title: a.heading ?? a.title, sub: strip(a.excerpt), href: a.path, image: a.image, text: a.title });
  }

  for (const c of CATALOGS) {
    add('document', { title: `${c.brand} Catalogue`, sub: c.title, href: `/catalogs/${c.slug}`, image: c.cover, text: `${c.focus} ${(c.ranges ?? []).join(' ')} catalog brochure` });
  }
  for (const p of PROFILES) {
    add('document', { title: `${p.name} Profiles`, sub: p.title, href: p.path, image: p.card ?? p.cover, text: 'download profile catalogue catalog brochure pdf' });
  }
  for (const n of NEWSLETTERS) {
    add('document', { title: n.title, sub: n.story, href: '/newsletter.php', image: n.cover, text: `newsletter vol ${n.vol}` });
  }
  for (const c of CERTIFICATES) {
    add('document', { title: c.title, sub: c.meta, href: '/certificates.php', image: c.cover, text: `${c.text} certificate` });
  }

  cache = docs;
  return docs;
}

/**
 * Every word typed must start a word somewhere in a result ("iso" finds
 * "ISO 9001" but not "comparison"); longer words may also sit inside a title
 * word, for model codes. Title matches outrank body matches, and whole-title
 * or start-of-title matches rank highest. Groups keep a fixed order.
 */
export function runSearch(query, limitPerGroup = 6) {
  const q = normalize(query);
  if (!q) return [];
  const words = q.split(' ');
  const scored = [];

  for (const d of searchIndex()) {
    let score = 0;
    let ok = true;
    for (const w of words) {
      // a trailing "s" is dropped so "chairs" also finds "chair"
      const stem = w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w;
      const titleWord = new RegExp(`(^| )${stem}`).test(d._title);
      if (titleWord) score += 30;
      else if (stem.length > 3 && d._title.includes(stem)) score += 18;
      else if (new RegExp(`(^| )${stem}`).test(d._text)) score += 8;
      else { ok = false; break; }
    }
    if (!ok) continue;
    if (d._title === q) score += 120;
    else if (d._title.startsWith(q)) score += 60;
    else if (d._title.includes(q)) score += 30;
    scored.push({ d, score });
  }

  scored.sort((a, b) => b.score - a.score || a.d.title.length - b.d.title.length);

  return SEARCH_GROUPS.map((g) => {
    const all = scored.filter((s) => s.d.group === g.key);
    return { ...g, total: all.length, items: all.slice(0, limitPerGroup).map((s) => s.d) };
  }).filter((g) => g.items.length);
}
