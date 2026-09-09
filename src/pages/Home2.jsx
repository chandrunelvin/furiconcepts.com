import { useEffect, useRef, useState } from 'react';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Arrow, Diagonal, SiteFooter, SiteHeader, SocialRow } from '../components/Home2Chrome.jsx';
import { CATALOGS } from '../data/catalogs.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const img = (id, w) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${w}&auto=format&fit=crop`;

/** Photography from Cavaletti, the brand Furniconcepts represents. */
const cav = (name) => `/images/cavaletti/${name}.jpg`;
const common = (name) => `/images/common/${name}.jpg`;

/** Hero rotates through real project photography. */
const HERO_SLIDES = [
  { src: '/images/common/hero1.webp', alt: 'Furniconcepts interior with contemporary seating' },
  { src: cav('project-lounge'), alt: 'Branch lounge furnished with modular Cavaletti seating' },
  { src: cav('showroom-lounge'), alt: 'Cavaletti showroom lounge seating' },
  { src: cav('office-green'), alt: 'Open-plan workplace with Cavaletti task seating' },
];

const COLLECTIONS = [
  { name: 'Lounge Seating', src: cav('lounge-chair') },
  { name: 'Dining', src: cav('canteen') },
  { name: 'Meeting', src: cav('boardroom') },
  { name: 'Office', src: cav('task-chair') },
  { name: 'Phone Booth', src: cav('showroom') },
  { name: 'Auditorium', src: cav('auditorium') },
  { name: 'Beam Seating', src: cav('beam-seating-dark') },
  { name: 'Stacking Chairs', src: cav('stacking-chairs') },
  { name: 'Executive', src: cav('executive-chairs') },
  { name: 'Reception', src: cav('project-lounge') },
  { name: 'Materials', src: cav('material-wall') },
];

const SPACES = [
  { name: 'Workplace', src: cav('office-green') },
  { name: 'Hospitality', src: cav('canteen') },
  { name: 'Showroom', src: cav('showroom-chairs') },
  { name: 'Auditorium', src: cav('auditorium') },
  { name: 'Boardroom', src: cav('boardroom') },
  { name: 'Education', src: cav('stacking-chairs') },
  { name: 'Reception', src: cav('project-lounge') },
  { name: 'Executive', src: cav('executive-chairs') },
  { name: 'Co-working', src: cav('beam-seating') },
  { name: 'Healthcare', src: cav('chair-family') },
];

const STATS = [
  { num: '200+', label: 'Curated Collections' },
  { num: '15+', label: 'Years of Experience' },
  { num: '50k+', label: 'Happy Customers' },
];

const ARTICLES = [
  { date: 'May 20, 2024', title: 'How to Choose the Perfect Sofa for Your Space', src: cav('showroom-lounge') },
  { date: 'May 15, 2024', title: 'Outdoor Furniture Trends for 2024', src: cav('boardroom') },
  { date: 'May 10, 2024', title: 'Sustainable Materials in Modern Furniture', src: cav('auditorium') },
];

/** Moves its layer against the scroll, matching the original data-speed script. */
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

/**
 * Blocks fade up the first time they scroll into view. One observer walks a
 * list of selectors instead of wrapping every block, so the markup stays flat;
 * siblings inside a group get a short cascade.
 */
const REVEAL_GROUPS = [
  '.features .feature',
  '#collections .split-intro, #collections .coll-viewport',
  '.lifestyle-copy, .lifestyle .stat',
  '.crafted-band .crafted-media, .crafted-band .detail-card',
  '#spaces .split-intro, #spaces .spaces-viewport',
  '#catalogs .head-row, #catalogs .catalog-note',
  '#catalogs .catalog-viewport',
  '.journal-media, .journal-panel > .eyebrow, .journal-panel > h2, .journal-panel > p, .journal-panel > .link-arrow',
  '.journal-panel .article-card',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

function useReveal() {
  useEffect(() => {
    const root = document.querySelector('.home2');
    if (!root) return undefined;

    const targets = REVEAL_GROUPS.flatMap((group) => [...root.querySelectorAll(group)]);
    if (!targets.length) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    targets.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));

    // failsafe: content must never be left invisible
    const t = setTimeout(() => targets.forEach((el) => el.classList.add('is-in')), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

export default function Home2() {
  const [slide, setSlide] = useState(0);
  useReveal();
  const heroLayer = useParallax(0.25);
  const bannerLayer = useParallax(0.35);
  const journalLayer = useParallax(0.2);
  const craftedLayer = useParallax(0.18);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const t = setInterval(() => setSlide((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [slide]);

  return (
    <div className="home2">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-text">
          <div className="wrap hero-copy">
          <div className="eyebrow">Welcome to Furniconcepts</div>
          <h1>
            One Stop<br /><span className="accent">Solutions</span><br />for Every Space
          </h1>
          <p>Office, acoustic, hospitality, healthcare and venue seating — specified, supplied and installed across the UAE, India and Singapore.</p>
          <a href="#collections" className="btn-primary">Explore Categories <Arrow /></a>
          <div className="slide-dots">
            {HERO_SLIDES.map((slideItem, i) => (
              <button
                key={slideItem.src}
                type="button"
                className={`dot ${i === slide ? 'active' : ''}`.trim()}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setSlide(i)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="img-parallax" ref={heroLayer}>
            {HERO_SLIDES.map((slideItem, i) => (
              <img
                key={slideItem.src}
                className={`hero-slide ${i === slide ? 'active' : ''}`.trim()}
                src={slideItem.src}
                alt={slideItem.alt}
                aria-hidden={i !== slide}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <a href="#" className="watch-story">
            <span className="circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span>Watch<br />Our Story</span>
          </a>
        </div>
      </section>

      <section className="features">
        <div className="wrap">
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" />
            </svg>
            <div>
              <h4>Premium Quality Materials</h4>
              <p>Crafted for durability and everyday living.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 9V6a2 2 0 00-2-2H7a2 2 0 00-2 2v3" /><path d="M3 11v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-4 0v2H7v-2a2 2 0 00-4 0z" /><path d="M5 18v2M19 18v2" />
            </svg>
            <div>
              <h4>Modern &amp; Functional Design</h4>
              <p>Made for the way you live and work today.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <div>
              <h4>Sustainable Approach</h4>
              <p>Thoughtful choices for a better tomorrow.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 14v-3a9 9 0 0118 0v3" /><path d="M3 11h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M21 11h-3a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2z" /><path d="M21 16v1a4 4 0 01-4 4h-5" />
            </svg>
            <div>
              <h4>End-to-End Support</h4>
              <p>From selection to aftercare, we&apos;re with you always.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="wrap">
          <div className="split">
            <div className="split-intro">
              <div className="eyebrow">Featured Collections</div>
              <h2>Modern Living Collections</h2>
              <p>Explore our curated range of furniture crafted for contemporary spaces. From elegant sofas to functional workspaces, find pieces that inspire.</p>
              <a href="#" className="link-arrow">View All Collections <Arrow /></a>
            </div>
            <div className="coll-viewport">
              <div className="coll-track" style={{ '--n': COLLECTIONS.length }}>
                {[...COLLECTIONS, ...COLLECTIONS].map((item, i) => (
                  <div className="coll-card" key={`${item.name}-${i}`} aria-hidden={i >= COLLECTIONS.length}>
                    <div className="coll-thumb"><img src={item.src} alt={item.name} loading="lazy" /></div>
                    <div className="coll-label">{item.name} <Arrow /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifestyle" id="about">
        <div className="bg-parallax" ref={bannerLayer}>
          <img src="/images/common/more-then-furniture-bg.webp" alt="Dining setting in a daylit concrete interior" />
        </div>
        <div className="overlay" />
        <div className="wrap lifestyle-inner">
          <div className="lifestyle-spacer" aria-hidden="true" />
          <div className="lifestyle-copy">
            <h2>
              More Than<br />Furniture.<br />It&apos;s a <span className="accent">Lifestyle.</span>
            </h2>
            <p>
              At Furniconcepts, we believe that great spaces inspire better living. Our collections are
              thoughtfully designed <span className="accent">to bring comfort</span>, style and functionality
              to your everyday life.
            </p>
            <a href="#" className="btn-light">Our Story <Arrow size={14} /></a>
          </div>
          <div className="stats">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="num">{stat.num}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section crafted-band">
          <div className="crafted-media">
            <div className="img-parallax" ref={craftedLayer}>
              <img src={common('crafted-precision')} alt="Green armchair and ottoman in a daylit concrete interior" loading="lazy" />
            </div>
            <div className="overlay" />
            <div className="crafted-text">
              <h3>Crafted<br />With Precision</h3>
              <p>From carefully selected materials to thoughtful design, every detail is made to last. Experience furniture that blends beauty, functionality and sustainability.</p>
              <a href="#" className="btn-outline">Learn More <Arrow size={13} /></a>
            </div>
          </div>
          <div className="crafted-side">
            <div className="detail-card wood">
              <img src={common('quality-detail')} alt="Close-up of a mitred oak joint" loading="lazy" />
              <div className="detail-row">
                <h4>Quality in Every Detail</h4>
                <span className="detail-arrow"><Diagonal /></span>
              </div>
            </div>
            <div className="detail-card fabric">
              <img src={common('sustainable')} alt="Close-up of green upholstery fabric" loading="lazy" />
              <div className="detail-row">
                <h4>Sustainable for a Greener Tomorrow</h4>
                <span className="detail-arrow"><Diagonal /></span>
              </div>
            </div>
          </div>
      </section>

      <section className="section" id="spaces">
        <div className="wrap">
          <div className="split">
            <div className="split-intro">
              <div className="eyebrow">Spaces by Purpose</div>
              <h2>Designed for Every Space</h2>
              <p>Whether it&apos;s your home, office or hospitality space, our furniture creates environments that feel as good as they look.</p>
              <a href="#" className="link-arrow">Explore All Spaces <Arrow /></a>
            </div>
            <div className="spaces-viewport">
              <div className="spaces-track" style={{ '--n': SPACES.length }}>
                {[...SPACES, ...SPACES].map((space, i) => (
                  <div className="space-card" key={`${space.name}-${i}`} aria-hidden={i >= SPACES.length}>
                    <div className="space-thumb"><img src={space.src} alt={space.name} loading="lazy" /></div>
                    <div className="coll-label">{space.name} <Arrow /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section catalogs" id="catalogs">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Brand Catalogues</div>
              <h2>Catalogs From Every Brand We Represent</h2>
            </div>
            <p>Sixteen partner brands, one place. Open a brand to see its ranges and download the current edition.</p>
          </div>
          <div className="catalog-viewport">
            <div className="catalog-track" style={{ '--n': CATALOGS.length }}>
              {[...CATALOGS, ...CATALOGS].map((item, i) => (
                <Link
                  to={`/catalogs/${item.slug}`}
                  className="catalog-card"
                  key={`${item.slug}-${i}`}
                  aria-hidden={i >= CATALOGS.length}
                  tabIndex={i >= CATALOGS.length ? -1 : undefined}
                >
                  <div className="catalog-cover">
                    <img src={item.cover} alt={`${item.brand} ${item.title} catalogue cover`} loading="lazy" />
                    <span className="catalog-badge">PDF</span>
                    <span className="catalog-hover">
                      <span className="catalog-dl">View Catalog <Arrow size={14} /></span>
                    </span>
                  </div>
                  <div className="catalog-body">
                    <div className="catalog-brand">{item.brand}</div>
                    <div className="catalog-title">{item.title}</div>
                    <div className="catalog-meta">
                      <span>{item.origin}</span>
                      <span className="dot" aria-hidden="true" />
                      <span>{item.pages} pages</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="catalog-note">
            <p>Looking for a brand or product not listed here? We will send the current edition straight to your inbox.</p>
            <a href="#contact" className="link-arrow">Request a Catalogue <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="journal" id="journal">
        <div className="journal-grid">
          <div className="journal-media">
            <div className="img-parallax" ref={journalLayer}>
              <img src={cav('project-branch')} alt="Mountain view living room" loading="lazy" />
            </div>
          </div>
          <div className="journal-panel">
            <div className="eyebrow">Journal —</div>
            <h2>Ideas &amp; Inspiration</h2>
            <p>Discover design trends, expert tips and real spaces that inspire a more beautiful way of living.</p>
            <a href="#" className="link-arrow">View All Articles <Arrow /></a>
            <div className="articles">
              {ARTICLES.map((article) => (
                <div className="article-card" key={article.title}>
                  <div
                    className="article-thumb"
                    style={article.src ? undefined : { background: 'linear-gradient(135deg,#3c5c46,#16281d)' }}
                  >
                    {article.src && <img src={article.src} alt={article.title} loading="lazy" />}
                  </div>
                  <div className="article-body">
                    <div className="article-date">{article.date}</div>
                    <div className="article-title">{article.title}</div>
                    <a href="#" className="link-arrow">Read <Arrow size={12} width={2.6} /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
