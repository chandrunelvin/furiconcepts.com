import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { CATALOGS, getCatalog } from '../data/catalogs.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

/** One brand's catalogue page, reached from the Catalogs section on the home page. */
export default function Catalog({ slug }) {
  const item = getCatalog(slug);

  if (!item) {
    return (
      <div className="home2 catalog-page">
        <SiteHeader onHome={false} active="Catalogs" />
        <section className="catalog-missing">
          <div className="wrap">
            <div className="eyebrow">Not Found</div>
            <h1>That catalogue isn&apos;t here</h1>
            <p>The brand you followed may have been renamed. Browse the full set of catalogues instead.</p>
            <Link to="/#catalogs" className="btn-primary">All Catalogues <Arrow /></Link>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const others = CATALOGS.filter((c) => c.slug !== item.slug);
  const index = CATALOGS.findIndex((c) => c.slug === item.slug);
  const next = CATALOGS[(index + 1) % CATALOGS.length];

  return (
    <div className="home2 catalog-page">
      <SiteHeader onHome={false} active="Catalogs" />

      <section className="catalog-hero">
        <div className="wrap catalog-hero-inner">
          <div className="catalog-hero-copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <a href="/#catalogs">Catalogs</a>
              <span aria-hidden="true">/</span>
              <span className="current">{item.brand}</span>
            </nav>
            <div className="eyebrow">{item.origin} — Partner Brand</div>
            <h1>{item.brand}</h1>
            <div className="catalog-hero-sub">{item.title}</div>
            <p>{item.intro}</p>
            <div className="catalog-actions">
              <a href="#" className="btn-primary" download>
                Download PDF
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
                </svg>
              </a>
              <a href="/#contact" className="btn-ghost">Request Pricing <Arrow size={14} /></a>
            </div>
          </div>
          <div className="catalog-hero-cover">
            <img src={item.cover} alt={`${item.brand} ${item.title} catalogue cover`} />
            <span className="catalog-badge">PDF</span>
          </div>
        </div>
      </section>

      <section className="catalog-facts">
        <div className="wrap">
          <div className="fact"><div className="fact-num">{item.year}</div><div className="fact-label">Edition</div></div>
          <div className="fact"><div className="fact-num">{item.pages}</div><div className="fact-label">Pages</div></div>
          <div className="fact"><div className="fact-num">{item.ranges.length}</div><div className="fact-label">Ranges</div></div>
          <div className="fact"><div className="fact-num">{item.origin}</div><div className="fact-label">Made In</div></div>
        </div>
      </section>

      <section className="section catalog-ranges">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Inside the Catalogue</div>
              <h2>{item.focus}</h2>
            </div>
            <p>Full dimensions, finishes and technical drawings for each range are included in the PDF.</p>
          </div>
          <ul className="range-list">
            {item.ranges.map((range, i) => (
              <li key={range}>
                <span className="range-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="range-name">{range}</span>
                <Arrow size={14} />
              </li>
            ))}
          </ul>
          <div className="catalog-gallery">
            {item.gallery.map((src, i) => (
              <div className="gallery-tile" key={src + i}>
                <img src={src} alt={`${item.brand} products in a project setting`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section catalog-more">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">More Catalogues</div>
              <h2>Browse Every Brand</h2>
            </div>
            <Link to={`/catalogs/${next.slug}`} className="link-arrow">Next: {next.brand} <Arrow /></Link>
          </div>
          <div className="brand-chips">
            {others.map((other) => (
              <Link to={`/catalogs/${other.slug}`} className="brand-chip-link" key={other.slug}>
                <span className="chip-thumb"><img src={other.cover} alt="" loading="lazy" /></span>
                <span className="chip-text">
                  <span className="chip-brand">{other.brand}</span>
                  <span className="chip-title">{other.title}</span>
                </span>
                <Arrow size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
