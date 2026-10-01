import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BlogSidebar, Icon, articlePath, categoryLabel, formatDate, useParallax,
} from '../components/BlogParts.jsx';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import {
  ARTICLES, BLOG_CATEGORIES, BLOG_HERO, BLOG_NEWSLETTER,
} from '../data/blog.js';
import { useReveal } from '../lib/reveal.js';
import { prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const PER_PAGE = 9;

/* Blocks that fade up as they scroll into view, in document order. Siblings
   inside one selector cascade off the .reveal:nth-child delays. */
const REVEAL_GROUPS = [
  '.blog-cat',
  '.blog-list-head > *',
  '.blog-card',
  '.blog-side > *',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/**
 * Whether a horizontal scroller has more content to either side, so the
 * category strip only shows the arrows (and edge fades) that lead somewhere.
 */
function useScrollEdges(ref) {
  const [edges, setEdges] = useState({ prev: false, next: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const prev = el.scrollLeft > 4;
      const next = el.scrollLeft < max - 4;
      setEdges((e) => (e.prev === prev && e.next === next ? e : { prev, next }));
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ref]);
  return edges;
}

/** 1 2 3 4 … 8 — keeps the current page in view and always shows the ends. */
function pageItems(current, total) {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, 4, '…', total];
  if (current >= total - 2) return [1, '…', total - 3, total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
}

export default function Blog() {
  useReveal(REVEAL_GROUPS);
  const heroLayer = useParallax(0.25);
  const listRef = useRef(null);
  const catsRef = useRef(null);
  const edges = useScrollEdges(catsRef);

  const scrollCats = (dir) => {
    const el = catsRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  // the article page links back here with ?category= or ?q= already set
  const [category, setCategory] = useState(() => {
    const id = new URLSearchParams(window.location.search).get('category');
    return BLOG_CATEGORIES.some((c) => c.id === id) ? id : 'all';
  });
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get('q') ?? '');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) =>
      (category === 'all' || a.category === category) &&
      (!q || `${a.title} ${a.excerpt} ${categoryLabel(a.category)}`.toLowerCase().includes(q))
    );
  }, [category, query]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const popular = ARTICLES.filter((a) => a.popular);

  const pickCategory = (id) => { setCategory(id); setPage(1); };

  const goTo = (n) => {
    setPage(n);
    const top = listRef.current?.getBoundingClientRect().top;
    if (top !== undefined) {
      window.scrollTo({ top: window.scrollY + top - 110, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="home2 blog-page">
      <SiteHeader onHome={false} active="Blog" />

      {/* ---- hero ---- */}
      <section className="blog-hero">
        <div className="blog-hero-media" aria-hidden="true">
          <div className="img-parallax" ref={heroLayer}>
            <img src={BLOG_HERO.image} alt="" />
          </div>
        </div>
        <div className="wrap blog-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevron" />
            <span aria-current="page">Blog</span>
          </nav>
          <h1>{BLOG_HERO.title}</h1>
          <p>{BLOG_HERO.text}</p>
        </div>
      </section>

      {/* ---- category strip ---- */}
      <section className="blog-cats">
        <div className={`wrap blog-cats-bar ${edges.prev ? 'can-prev' : ''} ${edges.next ? 'can-next' : ''}`.trim()}>
          <button type="button" className="blog-cats-arrow prev" aria-label="Previous categories"
                  tabIndex={-1} onClick={() => scrollCats(-1)}>
            <Icon name="back" />
          </button>
          <div className="blog-cats-inner" ref={catsRef} role="tablist" aria-label="Article categories">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                className={`blog-cat ${category === c.id ? 'active' : ''}`.trim()}
                onClick={(e) => {
                  pickCategory(c.id);
                  e.currentTarget.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
                }}
              >
                <Icon name={c.icon} />
                <span>{c.label}</span>
              </button>
            ))}
          </div>
          <button type="button" className="blog-cats-arrow next" aria-label="More categories"
                  tabIndex={-1} onClick={() => scrollCats(1)}>
            <Arrow size={15} width={2} />
          </button>
        </div>
      </section>

      {/* ---- articles + sidebar ---- */}
      <section className="blog-main">
        <div className="wrap blog-layout">
          <div className="blog-list" ref={listRef}>
            <div className="blog-list-head">
              <div className="eyebrow">Latest Articles</div>
              <h2>Insights for Better Workspaces</h2>
            </div>

            {visible.length ? (
              <div className="blog-grid">
                {visible.map((a) => (
                  <article className="blog-card" key={a.slug}>
                    <Link to={articlePath(a)} className="blog-card-media" tabIndex={-1} aria-hidden="true">
                      <img src={a.image} alt="" loading="lazy" />
                    </Link>
                    <div className="blog-card-body">
                      <span className="blog-tag">{categoryLabel(a.category)}</span>
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                      <h3><Link to={articlePath(a)}>{a.title}</Link></h3>
                      <p>{a.excerpt}</p>
                      <Link to={articlePath(a)} className="link-arrow" aria-label={`Read more: ${a.title}`}>
                        Read More <Arrow size={13} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="blog-empty" role="status">
                <p>No articles match &ldquo;{query}&rdquo;.</p>
                <button type="button" className="link-arrow" onClick={() => { setQuery(''); pickCategory('all'); }}>
                  Show all articles <Arrow size={13} />
                </button>
              </div>
            )}

            {pages > 1 && (
              <nav className="blog-pager" aria-label="Pagination">
                <button type="button" aria-label="Previous page" disabled={current === 1} onClick={() => goTo(current - 1)}>
                  <Icon name="back" />
                </button>
                {pageItems(current, pages).map((n, i) =>
                  n === '…' ? (
                    <span key={`gap${i}`} className="blog-pager-gap">…</span>
                  ) : (
                    <button
                      key={n}
                      type="button"
                      className={n === current ? 'active' : undefined}
                      aria-current={n === current ? 'page' : undefined}
                      onClick={() => goTo(n)}
                    >
                      {n}
                    </button>
                  )
                )}
                <button type="button" aria-label="Next page" disabled={current === pages} onClick={() => goTo(current + 1)}>
                  <Arrow size={14} width={2} />
                </button>
              </nav>
            )}
          </div>

          <BlogSidebar
            category={category}
            onCategory={pickCategory}
            query={query}
            onQuery={(q) => { setQuery(q); setPage(1); }}
            listTitle="Popular Articles"
            list={popular}
          />
        </div>
      </section>

      <SiteFooter newsletter={BLOG_NEWSLETTER} />
    </div>
  );
}
