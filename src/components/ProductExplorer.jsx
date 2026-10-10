import { useEffect, useMemo, useRef, useState } from 'react';
import BrandIcon from './BrandIcons.jsx';
import { Arrow } from './Home2Chrome.jsx';
import { Link } from '../router.jsx';

/** The grid is five across, so ten products fill the two rows shown before
    the "view all" button expands the rest. */
const PREVIEW_COUNT = 10;

/** The enquiry hand-off the live site uses: product name, caption and a link
    back to the product, pre-filled into a WhatsApp message. */
const whatsappLink = (p, phone) =>
  `https://api.whatsapp.com/send?phone=${phone}&text=` +
  encodeURIComponent(` I want to enquire about this product: ${p.name} - ${p.caption}\n`) +
  encodeURIComponent(`${window.location.origin}${window.location.pathname}#${p.id}`);

/**
 * The product explorer shared by the brand and category pages: category tabs,
 * search, sort, a two-row preview grid and a WhatsApp enquiry dialog.
 *
 * `products` is { eyebrow, title, intro, download, whatsapp, enquiryNote,
 * viewAll, categories, items }. Items may carry their own `brand` and `origin`
 * (a category page mixes brands); otherwise the `brand` prop supplies them.
 * Pass `category`/`onCategory` to drive the tabs from outside.
 */
export default function ProductExplorer({ products, brand, category: outerCategory, onCategory }) {
  const [innerCategory, setInnerCategory] = useState('all');
  const category = outerCategory ?? innerCategory;
  const setCategory = onCategory ?? setInnerCategory;
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [showAll, setShowAll] = useState(false);
  const [enquiry, setEnquiry] = useState(null);
  const urlSynced = useRef(false);
  const [narrow, setNarrow] = useState(false);
  const tabsRef = useRef(null);
  const [tabScroll, setTabScroll] = useState({ prev: false, next: false });

  // the filter row is tight on a phone, so the search takes a shorter prompt
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 560px)');
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // the category rail scrolls on narrow screens, where only a couple of tabs
  // fit — the arrows only appear on the side there is more to reveal
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return undefined;
    const sync = () => {
      const scrollable = el.scrollWidth - el.clientWidth > 4;
      setTabScroll({
        prev: scrollable && el.scrollLeft > 4,
        next: scrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
      });
    };
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [products]);

  const scrollTabs = (dir) => {
    const el = tabsRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.items.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) ||
          (p.brand ?? '').toLowerCase().includes(q))
    );
    if (sort === 'name') return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'type') return [...list].sort((a, b) => a.type.localeCompare(b.type));
    return list;
  }, [products, category, query, sort]);

  // a narrower filter can drop the count below the preview size, so collapse
  // back to two rows whenever the selection changes
  useEffect(() => { setShowAll(false); }, [category, query, sort]);

  // the WhatsApp enquiry carries a <page>#<id> link back, so the page has to
  // honour that hash on arrival — and again on back/forward
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const match = products.items.find((p) => p.id === id);
      if (match) setEnquiry(match);
    };
    open();
    window.addEventListener('hashchange', open);
    return () => window.removeEventListener('hashchange', open);
  }, [products]);

  // keep the address bar on the open product so the link stays shareable;
  // replaceState rather than a hash assignment, which would jump the page.
  // The first run is skipped: it would strip the incoming hash before the
  // effect above has had a chance to act on it.
  useEffect(() => {
    if (!urlSynced.current) { urlSynced.current = true; return; }
    const base = window.location.pathname + window.location.search;
    window.history.replaceState({}, '', enquiry ? `${base}#${enquiry.id}` : base);
  }, [enquiry]);

  useEffect(() => {
    if (!enquiry) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setEnquiry(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [enquiry]);

  const shown = showAll ? visible : visible.slice(0, PREVIEW_COUNT);
  const brandOf = (p) => p.brand ?? brand?.name;
  const originOf = (p) => p.origin ?? brand?.origin;

  return (
    <>
      <section className="section brand-products" id="products">
        <div className="wrap">
          <div className="eyebrow">{products.eyebrow}</div>
          <div className="brand-products-head">
            <div>
              <h2>{products.title}</h2>
              <p>{products.intro}</p>
            </div>
            {products.download && (
              <Link to={products.download.href} className="btn-primary brand-download">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5" />
                </svg>
                {products.download.label} <Arrow size={14} />
              </Link>
            )}
          </div>

          <div className="brand-tabs-rail">
            <button
              type="button"
              className="tab-nav prev"
              aria-label="Scroll categories left"
              hidden={!tabScroll.prev}
              onClick={() => scrollTabs(-1)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="brand-tabs" role="tablist" aria-label="Product categories" ref={tabsRef}>
              {products.categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  role="tab"
                  aria-selected={category === c.key}
                  className={`brand-tab ${category === c.key ? 'active' : ''}`.trim()}
                  onClick={() => setCategory(c.key)}
                >
                  <BrandIcon name={c.icon} size={17} width={1.7} />
                  {c.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="tab-nav next"
              aria-label="Scroll categories right"
              hidden={!tabScroll.next}
              onClick={() => scrollTabs(1)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="brand-filters">
            <div className="brand-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                   strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder={narrow ? 'Search…' : 'Search products…'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
            <label className="brand-sort">
              <svg className="sort-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h11M4 12h7M4 17h4M16 15l3 3 3-3M19 18V8" />
              </svg>
              <span>Sort by:</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
                <option value="featured">Featured</option>
                <option value="name">Name (A–Z)</option>
                <option value="type">Type</option>
              </select>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </label>
          </div>

          {visible.length ? (
            <div className="brand-grid">
              {shown.map((p) => (
                <button type="button" className="brand-card" key={p.id} onClick={() => setEnquiry(p)}>
                  <span className="brand-card-media">
                    <img src={p.image} alt={`${p.name} — ${p.type}`} loading="lazy" />
                  </span>
                  <span className="brand-card-label">
                    <span className="brand-card-text">
                      <span className="brand-card-name">{p.name}</span>
                      <span className="brand-card-type">{p.brand ? `${p.brand} · ${p.type}` : p.type}</span>
                    </span>
                    <Arrow size={13} />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="brand-empty">
              Nothing in this category yet — tell us what you need and we&apos;ll source it.{' '}
              <Link to="/contact">Get in touch</Link>.
            </p>
          )}

          {visible.length > PREVIEW_COUNT && (
            <div className="brand-grid-foot">
              <button type="button" className="btn-ghost" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Fewer Products' : `${products.viewAll.label} (${visible.length})`}
                <Arrow size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {enquiry && (
        <div className="brand-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
          <div className="brand-modal-backdrop" onClick={() => setEnquiry(null)} />
          <div className="brand-modal-panel">
            <button type="button" className="brand-modal-close" aria-label="Close" onClick={() => setEnquiry(null)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="brand-modal-media">
              <img src={enquiry.image} alt={`${enquiry.name} — ${enquiry.type}`} />
              <span className="brand-modal-tag">{brandOf(enquiry)}</span>
            </div>

            <div className="brand-modal-copy">
              <div className="eyebrow">Product Enquiry</div>
              <h2 id="enquiry-title">{enquiry.name}</h2>
              <div className="brand-modal-caption">{enquiry.caption}</div>
              <p className="brand-modal-desc">{enquiry.description}</p>

              <dl className="brand-modal-spec">
                <div><dt>Type</dt><dd>{enquiry.type}</dd></div>
                <div><dt>Brand</dt><dd>{brandOf(enquiry)}</dd></div>
                {originOf(enquiry) && <div><dt>Origin</dt><dd>{originOf(enquiry)}</dd></div>}
              </dl>

              <p className="brand-modal-note">{products.enquiryNote}</p>
              <div className="brand-modal-actions">
                <a className="btn-primary" href={whatsappLink(enquiry, products.whatsapp)} target="_blank" rel="noreferrer">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.2-.4.2-.4.6-1.2a.5.5 0 000-.5c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 00-.7.3A3 3 0 006 8.9a5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4 8.6 8.6 0 001.5.5 3.6 3.6 0 001.7.1 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.2-.2-.4-.3z" />
                  </svg>
                  Enquire on WhatsApp
                </a>
                <a className="btn-ghost" href="/#contact" onClick={() => setEnquiry(null)}>
                  Contact Us <Arrow size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
