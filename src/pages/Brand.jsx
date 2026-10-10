import { useState } from 'react';
import BrandIcon from '../components/BrandIcons.jsx';
import FaqSection from '../components/FaqSection.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';
import { Arrow, SiteFooter, SiteHeader, brandLogo } from '../components/Home2Chrome.jsx';
import { getBrand, quoteCta } from '../data/brands.js';
import { useParallax } from '../lib/parallax.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

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
  '.contact-cta-copy > *',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

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

  useReveal(REVEAL_GROUPS);
  const heroLayer = useParallax(0.25);
  const whyLayer = useParallax(0.2);
  const ctaLayer = useParallax(0.18);

  /** A collection card filters the product grid to its range and scrolls to it. */
  const showCategory = (key) => {
    setCategory(key);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!brand) {
    return (
      <div className="home2 catalog-page">
        <SiteHeader onHome={false} active="Brands" />
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
      <SiteHeader onHome={false} active="Brands" />

      {/* ---- hero ---- */}
      <section className="brand-hero">
        {brand.heroImage && (
          <div className="brand-hero-media" aria-hidden="true">
            <div className="img-parallax" ref={heroLayer}>
              <img src={brand.heroImage} alt="" />
            </div>
          </div>
        )}
        <div className="wrap brand-hero-inner">
          <div className="eyebrow">{brand.eyebrow}</div>
          {brandLogo(brand.name) && (
            <div className="hero-brand-logo"><img src={brandLogo(brand.name)} alt={`${brand.name} logo`} /></div>
          )}
          <h1>{brand.name}</h1>
          <div className="brand-hero-tagline">{lines(brand.tagline)}</div>
          <p>{brand.heroText}</p>
          <a href={brand.heroCta.href} className="btn-primary">
            {brand.heroCta.label} <Arrow />
          </a>
        </div>
      </section>

      {/* ---- feature strip ---- */}
      <section className="brand-features">
        <div className="wrap brand-features-inner" style={{ '--n': brand.features.length }}>
          {brand.features.map((f) => (
            <div className="brand-feature" key={f.label}>
              <BrandIcon name={f.icon} />
              <div className="brand-feature-label">{lines(f.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- about ---- hidden for now; remove this comment wrapper to show it again
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
          <div className={`brand-about-media ${brand.about.contain ? 'contain' : ''}`.trim()}>
            <img src={brand.about.image} alt={brand.name} loading="lazy" />
          </div>
        </div>
      </section>
      */}

      {/* ---- why choose ---- hidden for now; remove this comment wrapper to show it again
      <section className="brand-why">
        {brand.why.image && (
          <div className="brand-why-media" aria-hidden="true">
            <div className="img-parallax" ref={whyLayer}>
              <img src={brand.why.image} alt="" loading="lazy" />
            </div>
          </div>
        )}
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
      */}

      {/* ---- product explorer ---- */}
      <ProductExplorer products={products} brand={brand} category={category} onCategory={setCategory} />

      {/* ---- applications ---- */}
      {brand.applications && (
      <section className={`section brand-apps ${brand.applications.contain ? 'contain' : ''}`.trim()}>
        <div className="wrap">
          <div className="eyebrow">{brand.applications.eyebrow}</div>
          <h2>{brand.applications.title}</h2>
          <div className="brand-apps-grid">
            {brand.applications.items.map((a) => (
              <article
                className="brand-app"
                key={a.title}
                {...(a.category ? { role: 'button', tabIndex: 0, onClick: () => showCategory(a.category),
                  onKeyDown: (e) => { if (e.key === 'Enter') showCategory(a.category); } } : {})}
              >
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
      )}

      {/* ---- faq ---- */}
      {brand.faq && (
        <FaqSection
          eyebrow={brand.faq.eyebrow}
          title={brand.faq.title}
          intro={brand.faq.intro}
          image={brand.faq.image}
          items={brand.faq.items}
        />
      )}

      {/* ---- quotation band ---- */}
      {(() => {
        const cta = quoteCta(brand);
        return (
          <section className="contact-cta brand-cta">
            <div className="contact-cta-media" aria-hidden="true">
              <div className="img-parallax" ref={ctaLayer}>
                <img src={cta.image} alt="" loading="lazy" />
              </div>
            </div>
            <div className="wrap contact-cta-inner">
              <div className="contact-cta-copy">
                <div className="eyebrow">{cta.eyebrow}</div>
                <h2>{lines(cta.title)}</h2>
                <p>{cta.text}</p>
                <div className="brand-cta-actions">
                  <Link to={cta.cta.href} className="btn-primary">
                    {cta.cta.label} <Arrow size={14} />
                  </Link>
                  {cta.secondary && (
                    <Link to={cta.secondary.href} className="btn-ghost">
                      {cta.secondary.label} <Arrow size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      <SiteFooter />
    </div>
  );
}
