import { useEffect, useRef } from 'react';
import { Arrow } from './Home2Chrome.jsx';
import { ARTICLES, BLOG_CATEGORIES, BLOG_FEATURED } from '../data/blog.js';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';

/**
 * Pieces shared by the blog index (/blog) and the article page (/blog/:slug):
 * icons, date formatting and the sidebar.
 */

/** Drifts a full-bleed banner against the scroll, as the other pages do. */
export function useParallax(speed) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    const apply = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      el.style.transform = `translateY(${((rect.top - window.innerHeight / 2) * speed * 0.35).toFixed(2)}px)`;
    };
    apply();
    return onScrollFrame(apply);
  }, [speed]);
  return ref;
}

export const Icon = ({ name }) => {
  const paths = {
    grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
    lamp: <><path d="M9 3.5l7 3.5-3.4 5.6L6 9.2z" /><path d="M12.6 12.6l1.6 2.4-5 3.2M5 20.5h9" /><circle cx="8.7" cy="18.4" r="1.2" /></>,
    heart: <><path d="M12 20s-8-4.8-8-11a4.6 4.6 0 018-3.1A4.6 4.6 0 0120 9c0 6.2-8 11-8 11z" /><path d="M6.5 11.5h3l1.3-2.4 2 4.6 1.4-2.2h3.3" /></>,
    chair: <><rect x="8" y="3" width="8" height="9" rx="3" /><path d="M6 12.5h12M12 14.5v3.5M7.5 21l4.5-3 4.5 3M6 10v4M18 10v4" /></>,
    leaf: <><path d="M5 19C5 10 10.5 4.5 20 4c-.4 9.5-6 15-15 15z" /><path d="M5 19l8-8" /></>,
    doc: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
    building: <><path d="M4 21V8l6-3v16M10 21V3h8v18M3 21h18" /><path d="M13 7h2M13 11h2M13 15h2M6.5 11h1M6.5 15h1" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    chevron: <path d="M9 6l6 6-6 6" />,
    back: <path d="M19 12H5M11 18l-6-6 6-6" />,
    calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.4 2" /></>,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    link: <><path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1.2 1.2" /><path d="M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1.2-1.2" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const dateFmt = new Intl.DateTimeFormat('en-US', {
  month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC',
});
export const formatDate = (iso) => dateFmt.format(new Date(iso));

export const categoryLabel = (id) => BLOG_CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const articlePath = (a) => `/blog/${a.slug}`;

const COUNTS = ARTICLES.reduce(
  (c, a) => ({ ...c, [a.category]: (c[a.category] ?? 0) + 1 }),
  { all: ARTICLES.length }
);

/**
 * Search, category list, a short article list and the featured card.
 * The index page filters in place; the article page passes handlers that
 * send the reader back to the index with the filter applied.
 */
export function BlogSidebar({ category, onCategory, query, onQuery, onSearch, listTitle, list }) {
  return (
    <aside className="blog-side">
      <form
        className="blog-search"
        role="search"
        onSubmit={(e) => { e.preventDefault(); onSearch?.(query); }}
      >
        <input
          type="search"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          aria-label="Search articles"
        />
        <button type="submit" aria-label="Search"><Icon name="search" /></button>
      </form>

      <div className="blog-side-card">
        <h3>Categories</h3>
        <ul className="blog-side-cats">
          {BLOG_CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                className={category === c.id ? 'active' : undefined}
                onClick={() => onCategory(c.id)}
              >
                <span>{c.label} ({COUNTS[c.id] ?? 0})</span>
                <Icon name="chevron" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-popular">
        <h3>{listTitle}</h3>
        <ul>
          {list.map((a) => (
            <li key={a.slug}>
              <Link to={articlePath(a)}>
                <span className="blog-popular-thumb"><img src={a.image} alt="" loading="lazy" /></span>
                <span className="blog-popular-text">
                  <span className="blog-popular-title">{a.title}</span>
                  <time dateTime={a.date}>{formatDate(a.date)}</time>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-featured">
        <img src={BLOG_FEATURED.image} alt="" loading="lazy" />
        <div className="blog-featured-body">
          <div className="eyebrow">{BLOG_FEATURED.eyebrow}</div>
          <h3>{BLOG_FEATURED.title}</h3>
          <p>{BLOG_FEATURED.text}</p>
          <Link to={BLOG_FEATURED.cta.path} className="btn-primary">
            {BLOG_FEATURED.cta.label} <Arrow size={14} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
