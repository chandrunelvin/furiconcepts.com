import { useEffect, useMemo, useState } from 'react';
import BrandIcon from '../components/BrandIcons.jsx';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { getBrand } from '../data/brands.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

/** The grid is five across, so ten products fill the two rows shown before
    the "view all" button expands the rest. */
const PREVIEW_COUNT = 10;

/** Splits the newline-separated headings in the brand data into <br/>-joined lines. */
const lines = (text) =>
  text.split('\n').map((line, i) => (
    <span key={line + i} className="line">{line}</span>
  ));

/** A brand showcase page — hero, story, product explorer, applications and FAQ. */
export default function Brand({ slug }) {
  const brand = getBrand(slug);

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const products = brand?.products;

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
          <img src={brand.heroImage} alt="" />
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
          <img src={brand.why.image} alt="" loading="lazy" />
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

          <div className="brand-tabs" role="tablist" aria-label="Product categories">
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

          <div className="brand-filters">
            <div className="brand-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
            <label className="brand-sort">
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
                <article className="brand-card" key={p.id}>
                  <Link to={products.viewAll.href} className="brand-card-media">
                    <img src={p.image} alt={`${p.name} — ${p.type}`} loading="lazy" />
                  </Link>
                  <div className="brand-card-body">
                    <div className="brand-card-type">{p.type}</div>
                    <h3>{p.name}</h3>
                    <Link to={products.viewAll.href} className="link-arrow">View Details <Arrow size={13} /></Link>
                  </div>
                </article>
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
          <img src={brand.faq.image} alt="" loading="lazy" />
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

      <SiteFooter />
    </div>
  );
}
