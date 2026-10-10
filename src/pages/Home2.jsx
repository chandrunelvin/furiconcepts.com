import { useEffect, useRef, useState } from 'react';
import { useMarquee } from '../lib/marquee.js';
import { useStepRail } from '../lib/stepRail.js';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Arrow, BRAND_MENU, Diagonal, SiteFooter, SiteHeader, SocialRow } from '../components/Home2Chrome.jsx';
import { formatDate } from '../components/BlogParts.jsx';
import { ARTICLES as BLOG_ARTICLES } from '../data/blog.js';
import { getBrand } from '../data/brands.js';
import { CATEGORY_PAGES } from '../data/categories.js';
import { BRAND_FILES } from '../data/brandProfiles.js';
import { FC_COLLECTIONS } from '../data/fcProfiles.js';
import { PROFILES } from '../data/profiles.js';
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

/**
 * The Download Profiles brands, each card led by its chosen image (profiles.js
 * `card`) and opening that brand's downloads page.
 */
const DOWNLOADS = PROFILES.map((p) => {
  const slug = p.path.split('/').pop();
  const files = slug === 'furniconcepts'
    ? FC_COLLECTIONS.flatMap((c) => c.files)
    : BRAND_FILES[slug]?.files ?? [];
  return { name: p.name, title: p.title, path: p.path, cover: p.card ?? files[0]?.cover ?? p.cover, count: files.length };
});

/** The partner brands, in the Brands menu order, each shown by its lead product. */
const BRAND_CARDS = BRAND_MENU.map((m) => {
  const brand = getBrand(m.path.split('/').pop());
  return { name: m.label, path: m.path, logo: trimmedLogo(m.logo), src: brand?.products.items[0]?.image };
});

/** The same logo with its empty margin cropped off (see /images/brand-logo/trim). */
function trimmedLogo(src) {
  if (!src) return src;
  const file = src.split('/').pop().replace(/\.\w+$/, '.png');
  return `/images/brand-logo/trim/${file}`;
}

/**
 * Logos come in every shape, so a fixed height makes wide ones look huge and
 * square ones tiny. Sizing each to the same area evens out their visual weight.
 */
const LOGO_AREA = 2400;
/** Heavy, solid-black wordmarks read larger than their area, so they get a nudge down. */
const LOGO_WEIGHT = { 'libero-logo.png': 0.82 };
const fitLogo = (e) => {
  const img = e.currentTarget;
  const ratio = img.naturalWidth / img.naturalHeight || 1;
  const weight = LOGO_WEIGHT[img.src.split('/').pop()] ?? 1;
  let height = Math.min(34, Math.sqrt(LOGO_AREA / ratio)) * weight;
  if (height * ratio > 120) height = 120 / ratio;
  img.style.height = `${height.toFixed(1)}px`;
};

/** The category pages, in the Categories menu order, each led by its hero photo. */
const SPACES = CATEGORY_PAGES.map((c) => ({ name: c.name, path: c.path, src: c.hero }));

const STATS = [
  { num: '200+', label: 'Curated Collections' },
  { num: '15+', label: 'Years of Experience' },
  { num: '50k+', label: 'Happy Customers' },
];

/** The journal shows the newest posts from the blog. */
/** The latest articles for the journal slider, newest first. */
const JOURNAL = [...BLOG_ARTICLES].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);

/**
 * The journal's article rail: a native scroller (swipe, drag, wheel) that
 * snaps card by card, with arrows that page it and a position counter.
 */
function JournalSlider({ articles }) {
  const rail = useRef(null);
  const [state, setState] = useState({ first: 1, prev: false, next: true });

  useEffect(() => {
    const el = rail.current;
    if (!el) return undefined;
    const sync = () => {
      const card = el.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
      setState({
        first: Math.round(el.scrollLeft / step) + 1,
        prev: el.scrollLeft > 4,
        next: el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
      });
    };
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  const page = (dir) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <>
      <div className="journal-controls">
        <Link to="/blogs.php" className="link-arrow">View All Articles <Arrow /></Link>
        <div className="journal-nav">
          <span className="journal-count">{pad(state.first)} <span>/ {pad(articles.length)}</span></span>
          <button type="button" aria-label="Previous articles" disabled={!state.prev} onClick={() => page(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" aria-label="Next articles" disabled={!state.next} onClick={() => page(1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
      <div className="articles" ref={rail}>
        {articles.map((article) => (
          <Link to={article.path} className="article-card" key={article.slug}>
            <div className="article-thumb">
              <img src={article.image} alt="" loading="lazy" />
            </div>
            <div className="article-body">
              <div className="article-date">{formatDate(article.date)}</div>
              <div className="article-title">{article.title}</div>
              <span className="link-arrow">Read <Arrow size={12} width={2.6} /></span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

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
  const collRail = useMarquee({ speed: 40 });
  const spacesRail = useMarquee({ speed: 40 });
  const catalogRail = useStepRail({ interval: 3500 });

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
              <div className="eyebrow">Our Brands</div>
              <h2>Brands We Represent</h2>
              <p>Furniconcepts is the regional partner for {BRAND_CARDS.length} specialist furniture brands, from ergonomic seating and acoustic pods to auditorium, hospital and hospitality furniture.</p>
              <Link to={BRAND_CARDS[0].path} className="link-arrow">Explore Our Brands <Arrow /></Link>
            </div>
            <div className="coll-viewport" ref={collRail}>
              <div className="coll-track" style={{ '--n': BRAND_CARDS.length }}>
                {[...BRAND_CARDS, ...BRAND_CARDS].map((brand, i) => (
                  <Link
                    to={brand.path}
                    className="coll-card brand-coll-card"
                    key={`${brand.name}-${i}`}
                    aria-hidden={i >= BRAND_CARDS.length}
                    tabIndex={i >= BRAND_CARDS.length ? -1 : undefined}
                  >
                    <div className="coll-thumb">
                      {brand.src && <img src={brand.src} alt={`${brand.name} product`} loading="lazy" />}
                    </div>
                    <div className="coll-label">
                      {brand.logo
                        ? <img className="brand-coll-name" src={brand.logo} alt={brand.name} loading="lazy" onLoad={fitLogo} />
                        : brand.name}
                      <Arrow />
                    </div>
                  </Link>
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
              <div className="eyebrow">Our Categories</div>
              <h2>Furniture for Every Space</h2>
              <p>From offices and acoustic pods to auditoriums, hospitals, hotels and schools — explore the {SPACES.length} categories we supply across the UAE, India and Singapore.</p>
              <Link to={SPACES[0].path} className="link-arrow">Explore Categories <Arrow /></Link>
            </div>
            <div className="spaces-viewport" ref={spacesRail}>
              <div className="spaces-track" style={{ '--n': SPACES.length }}>
                {[...SPACES, ...SPACES].map((space, i) => (
                  <Link
                    to={space.path}
                    className="space-card"
                    key={`${space.name}-${i}`}
                    aria-hidden={i >= SPACES.length}
                    tabIndex={i >= SPACES.length ? -1 : undefined}
                  >
                    <div className="space-thumb"><img src={space.src} alt={space.name} loading="lazy" /></div>
                    <div className="coll-label">{space.name} <Arrow /></div>
                  </Link>
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
            <div className="catalog-head-side">
              <p>{DOWNLOADS.length} brands, one place. Open a brand to browse and download its current catalogues and profiles.</p>
              <div className="rail-nav">
                <button type="button" aria-label="Previous catalogue" onClick={catalogRail.prev}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <button type="button" aria-label="Next catalogue" onClick={catalogRail.next}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="catalog-viewport is-stepped" ref={catalogRail.ref}>
            <div className="catalog-track">
              {DOWNLOADS.map((item) => (
                <Link to={item.path} className="catalog-card" key={item.path}>
                  <div className="catalog-cover">
                    <img src={item.cover} alt={`${item.name} catalogue cover`} loading="lazy" />
                    <span className="catalog-badge">PDF</span>
                    <span className="catalog-hover">
                      <span className="catalog-dl">View Catalogues <Arrow size={14} /></span>
                    </span>
                  </div>
                  <div className="catalog-body">
                    <div className="catalog-brand">{item.name}</div>
                    <div className="catalog-title">{item.title}</div>
                    <div className="catalog-meta">
                      <span>{item.count ? `${item.count} ${item.count === 1 ? 'catalogue' : 'catalogues'}` : 'Brand page'}</span>
                      <span className="dot" aria-hidden="true" />
                      <span>Free download</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="catalog-note">
            <p>Looking for a brand or product not listed here? We will send the current edition straight to your inbox.</p>
            <Link to="/contact" className="link-arrow">Request a Catalogue <Arrow /></Link>
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
            <JournalSlider articles={JOURNAL} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
