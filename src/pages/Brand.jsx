import { useEffect, useMemo, useRef, useState } from 'react';
import BrandIcon from '../components/BrandIcons.jsx';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { getBrand } from '../data/brands.js';
import { useReveal } from '../lib/reveal.js';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

/** The grid is five across, so ten products fill the two rows shown before
    the "view all" button expands the rest. */
const PREVIEW_COUNT = 10;

/** Drifts a full-bleed banner against the scroll, as the home page banners do. */
function useParallax(speed) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    const apply = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * speed * 0.35;
      el.style.transform = `translateY(${offset.toFixed(2)}px)`;
    };
    apply();
    return onScrollFrame(apply);
  }, [speed]);
  return ref;
}

/* Blocks that fade up as they scroll into view, in document order. Children
   inside one selector cascade off the .reveal:nth-child delays. */
const REVEAL_GROUPS = [
  '.brand-hero .eyebrow, .brand-hero h1, .brand-hero-tagline, .brand-hero p, .brand-hero .btn-primary',
  '.brand-feature',
  '.brand-about-copy > *',
  '.brand-about-media',
  '.brand-why-copy > *',
  '.brand-why-points li',
  '.brand-products > .wrap > .eyebrow, .brand-products-head, .brand-tabs, .brand-filters',
  '.brand-card',
  '.brand-grid-foot',
  '.brand-apps > .wrap > .eyebrow, .brand-apps h2',
  '.brand-app',
  '.brand-faq-copy > *',
  '.brand-faq-item',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/** The enquiry hand-off the live site uses: product name, caption and a link
    back to the product, pre-filled into a WhatsApp message. */
const whatsappLink = (p, phone, slug) =>
  `https://api.whatsapp.com/send?phone=${phone}&text=` +
  encodeURIComponent(` I want to enquire about this product: ${p.name} - ${p.caption}\n`) +
  encodeURIComponent(`${window.location.origin}/brands/${slug}#${p.id}`);

/** Splits the newline-separated headings in the brand data into <br/>-joined lines. */
const lines = (text) =>
  text.split('\n').map((line, i) => (
    <span key={line + i} className="line">{line}</span>
  ));

/** A brand showcase page — hero, story, product explorer, applications and FAQ. */
export default function Brand({ slug }) {
  const brand = getBrand(slug);
  const products = brand?.products;

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [openFaq, setOpenFaq] = useState(null);
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

  useReveal(REVEAL_GROUPS);
  const heroLayer = useParallax(0.25);
  const whyLayer = useParallax(0.2);
  const faqLayer = useParallax(0.2);

  const visible = useMemo(() => {
    if (!products) return [];
    const q = query.trim().toLowerCase();
    const list = products.items.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q))
    );
    if (sort === 'name') return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'type') return [...list].sort((a, b) => a.type.localeCompare(b.type));
    return list;
  }, [products, category, query, sort]);

  // a narrower filter can drop the count below the preview size, so collapse
  // back to two rows whenever the selection changes
  useEffect(() => { setShowAll(false); }, [category, query, sort]);

  // the WhatsApp enquiry carries a /brands/<slug>#<id> link back, so the page
  // has to honour that hash on arrival — and again on back/forward
  useEffect(() => {
    if (!products) return undefined;
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

  if (!brand) {
    return (
      <div className="home2 catalog-page">
        <SiteHeader onHome={false} active="Catalogs" />
        <section className="catalog-missing">
          <div className="wrap">
            <div className="eyebrow">Not Found</div>
            <h1>That brand isn&apos;t here</h1>
            <p>The brand you followed may have been renamed. Browse the full set of catalogues instead.</p>
            <Link to="/#catalogs" className="btn-primary">All Catalogues <Arrow /></Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="home2 brand-page">
      <SiteHeader onHome={false} active="Catalogs" />

      {/* ---- hero ---- */}
      <section className="brand-hero">
        <div className="brand-hero-media" aria-hidden="true">
          <div className="img-parallax" ref={heroLayer}>
            <img src={brand.heroImage} alt="" />
          </div>
        </div>
        <div className="wrap brand-hero-inner">
          <div className="eyebrow">{brand.eyebrow}</div>
          <h1>{brand.name}</h1>
          <div className="brand-hero-tagline">{lines(brand.tagline)}</div>
          <p>{brand.heroText}</p>
          <a href={brand.heroCta.href} className="btn-primary">
            {brand.heroCta.label} <Arrow />
          </a>
        </div>
        <a href={brand.video.href} className="brand-video">
          <span className="brand-video-play">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 6.5v11l9-5.5-9-5.5z" /></svg>
          </span>
          <span className="brand-video-label">{lines(brand.video.label)}</span>
        </a>
      </section>

      {/* ---- feature strip ---- */}
      <section className="brand-features">
        <div className="wrap brand-features-inner">
          {brand.features.map((f) => (
            <div className="brand-feature" key={f.label}>
              <BrandIcon name={f.icon} />
              <div className="brand-feature-label">{lines(f.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- about ---- */}
      <section className="section brand-about">
        <div className="wrap brand-about-inner">
          <div className="brand-about-copy">
            <div className="eyebrow">{brand.about.eyebrow}</div>
            <h2>{lines(brand.about.title)}</h2>
            <p>{brand.about.body}</p>
            <ul className="brand-about-points">
              {brand.about.points.map((point) => (
                <li key={point}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <blockquote className="brand-about-quote">{brand.about.quote}</blockquote>
            <a href={brand.about.cta.href} className="btn-primary">
              {brand.about.cta.label} <Arrow />
            </a>
          </div>
          <div className="brand-about-media">
            <img src={brand.about.image} alt={`${brand.name} seating in a meeting room`} loading="lazy" />
          </div>
        </div>
      </section>

      {/* ---- why choose ---- */}
      <section className="brand-why">
        <div className="brand-why-media" aria-hidden="true">
          <div className="img-parallax" ref={whyLayer}>
            <img src={brand.why.image} alt="" loading="lazy" />
          </div>
        </div>
        <div className="wrap brand-why-inner">
          <div className="brand-why-copy">
            <div className="eyebrow">{brand.why.eyebrow}</div>
            <h2>{lines(brand.why.title)}</h2>
            <p>{brand.why.body}</p>
          </div>
          <ul className="brand-why-points">
            {brand.why.points.map((p) => (
              <li key={p.label}>
                <BrandIcon name={p.icon} size={22} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- product explorer ---- */}
      <section className="section brand-products" id="products">
        <div className="wrap">
          <div className="eyebrow">{products.eyebrow}</div>
          <div className="brand-products-head">
            <div>
              <h2>{products.title}</h2>
              <p>{products.intro}</p>
            </div>
            <Link to={products.download.href} className="btn-primary brand-download">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5" />
              </svg>
              {products.download.label} <Arrow size={14} />
            </Link>
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
                placeholder={narrow ? 'Search\u2026' : 'Search products\u2026'}
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
                      <span className="brand-card-type">{p.type}</span>
                    </span>
                    <Arrow size={13} />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="brand-empty">
              Nothing in this category yet — tell us what you need and we&apos;ll source it.{' '}
              <a href="/#contact">Get in touch</a>.
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

      {/* ---- applications ---- */}
      <section className="section brand-apps">
        <div className="wrap">
          <div className="eyebrow">{brand.applications.eyebrow}</div>
          <h2>{brand.applications.title}</h2>
          <div className="brand-apps-grid">
            {brand.applications.items.map((a) => (
              <article className="brand-app" key={a.title}>
                <div className="brand-app-media">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
                <h3>{a.title}</h3>
                <div className="brand-app-row">
                  <p>{a.text}</p>
                  <Arrow size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- faq ---- */}
      <section className="brand-faq">
        <div className="brand-faq-media" aria-hidden="true">
          <div className="img-parallax" ref={faqLayer}>
            <img src={brand.faq.image} alt="" loading="lazy" />
          </div>
        </div>
        <div className="wrap brand-faq-inner">
          <div className="brand-faq-copy">
            <div className="eyebrow">{brand.faq.eyebrow}</div>
            <h2>{brand.faq.title}</h2>
            <p>{brand.faq.intro}</p>
          </div>
          <div className="brand-faq-list">
            {brand.faq.items.map((item, i) => (
              <div className={`brand-faq-item ${openFaq === i ? 'open' : ''}`.trim()} key={item.q}>
                <button
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v8M8 12h8" className="plus-bar" />
                  </svg>
                </button>
                {openFaq === i && <p>{item.a}</p>}
              </div>
            ))}
          </div>
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
              <span className="brand-modal-tag">{brand.name}</span>
            </div>

            <div className="brand-modal-copy">
              <div className="eyebrow">Product Enquiry</div>
              <h2 id="enquiry-title">{enquiry.name}</h2>
              <div className="brand-modal-caption">{enquiry.caption}</div>
              <p className="brand-modal-desc">{enquiry.description}</p>

              <dl className="brand-modal-spec">
                <div><dt>Type</dt><dd>{enquiry.type}</dd></div>
                <div><dt>Brand</dt><dd>{brand.name}</dd></div>
                <div><dt>Origin</dt><dd>Brazil</dd></div>
              </dl>

              <p className="brand-modal-note">{products.enquiryNote}</p>
              <div className="brand-modal-actions">
                <a className="btn-primary" href={whatsappLink(enquiry, products.whatsapp, brand.slug)} target="_blank" rel="noreferrer">
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

      <SiteFooter />
    </div>
  );
}
