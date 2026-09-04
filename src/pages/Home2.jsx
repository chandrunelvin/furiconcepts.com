import { useEffect, useRef, useState } from 'react';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const img = (id, w) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=${w}&auto=format&fit=crop`;

/** Photography from Cavaletti, the brand Furniconcepts represents. */
const cav = (name) => `/images/cavaletti/${name}.jpg`;
const common = (name) => `/images/common/${name}.jpg`;

const NAV = [
  { label: 'Home', href: '#top', active: true },
  { label: 'About Us', href: '#about' },
  { label: 'Categories', href: '#collections' },
  { label: 'Sectors', href: '#spaces' },
  { label: 'Projects', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

/** Hero rotates through real project photography. */
const HERO_SLIDES = [
  { src: cav('project-lounge'), alt: 'Branch lounge furnished with modular Cavaletti seating' },
  { src: cav('showroom-lounge'), alt: 'Cavaletti showroom lounge seating' },
  { src: cav('office-green'), alt: 'Open-plan workplace with Cavaletti task seating' },
];

const COLLECTIONS = [
  { name: 'Lounge Seating', src: cav('lounge-chair') },
  { name: 'Dining', src: cav('canteen') },
  { name: 'Meeting', src: cav('boardroom') },
  { name: 'Office', src: cav('task-chair') },
];

const SPACES = [
  { name: 'Workplace', src: cav('office-green') },
  { name: 'Hospitality', src: cav('canteen') },
  { name: 'Showroom', src: cav('showroom-chairs') },
  { name: 'Auditorium', src: cav('auditorium') },
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

const FOOTER_COLUMNS = [
  { heading: 'Collections', links: ['Sofas', 'Dining', 'Bedroom', 'Office', 'Outdoor'] },
  { heading: 'Company', links: ['About Us', 'Our Story', 'Careers', 'Contact Us'] },
  { heading: 'Support', links: ['FAQs', 'Shipping & Delivery', 'Returns', 'Warranty'] },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms & Conditions'] },
];

const Arrow = ({ size = 15, width = 2.4 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={width}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Diagonal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

function Logo() {
  return (
    <Link to="/home2" className="logo" aria-label="Furniconcepts — home">
      <img src="/images/furni-logo-wordmark.png" alt="Furniconcepts" />
      <span className="sub">Furniture Designed With Style</span>
    </Link>
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

export default function Home2() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState('');
  const heroLayer = useParallax(0.25);
  const bannerLayer = useParallax(0.35);
  const journalLayer = useParallax(0.2);
  const craftedLayer = useParallax(0.18);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const t = setInterval(() => setSlide((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [slide]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const subscribe = (e) => {
    e.preventDefault();
    setEmail('Subscribed!');
  };

  return (
    <div className="home2">
      <header className={scrolled ? 'scrolled' : undefined}>
        <div className="wrap nav-inner">
          <Logo />
          <nav className="main-nav">
            <ul>
              {NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={item.active ? 'active' : undefined}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right">
            <svg className="icon-btn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <svg className="icon-btn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6a3 3 0 016 0v2" />
            </svg>
            <a href="#" className="cta">Get in Touch <Arrow size={14} /></a>
          </div>
        </div>
      </header>

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
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20M12 3l-3 6 3 12 3-12-3-6" />
            </svg>
            <div>
              <h4>Premium Quality Materials</h4>
              <p>Crafted for durability and everyday living.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12V5a2 2 0 012-2h4a2 2 0 012 2v7" /><path d="M5 12h14v6a2 2 0 01-2 2H7a2 2 0 01-2-2z" /><path d="M8 20v2M16 20v2" />
            </svg>
            <div>
              <h4>Modern &amp; Functional Design</h4>
              <p>Made for the way you live and work today.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3C7 3 3 7 3 13c4 0 8-2 9-9z" /><path d="M12 21v-8" />
            </svg>
            <div>
              <h4>Sustainable Approach</h4>
              <p>Thoughtful choices for a better tomorrow.</p>
            </div>
          </div>
          <div className="feature">
            <svg className="ficon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="2" y="14" width="5" height="7" rx="1.5" /><rect x="17" y="14" width="5" height="7" rx="1.5" />
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
            <div className="collections-grid">
            {COLLECTIONS.map((item) => (
              <div className="coll-card" key={item.name}>
                <div className="coll-thumb"><img src={item.src} alt={item.name} loading="lazy" /></div>
                <div className="coll-label">{item.name} <Arrow /></div>
                </div>
              ))}
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
            <div className="spaces-grid">
              {SPACES.map((space) => (
                <div className="space-card" key={space.name}>
                  <div className="space-thumb"><img src={space.src} alt={space.name} loading="lazy" /></div>
                  <div className="coll-label">{space.name} <Arrow /></div>
                </div>
              ))}
            </div>
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

      <section className="newsletter" id="contact">
        <div className="newsletter-media" aria-hidden="true">
          <img src="/images/common/cornerimage-footer.webp" alt="" loading="lazy" />
        </div>
        <div className="newsletter-body">
          <div>
            <div className="eyebrow">Let&apos;s Stay Connected</div>
            <h2>Get Inspired, Every Month</h2>
            <p>Subscribe to our newsletter for the latest collections, ideas and exclusive offers.</p>
          </div>
          <form className="sub-form" onSubmit={subscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe <Arrow size={14} /></button>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo />
              <p>Crafting furniture that inspires beautiful spaces and better living.</p>
              <div className="socials">
                <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg></a>
                <a href="#" aria-label="Pinterest"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M9 17c1-3 1.5-6 2-9m0 0a3 3 0 116 1c0 2-1 4-3 4" /></svg></a>
                <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 9h3V5h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 011-1z" /></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 13v4" /></svg></a>
                <a href="#" aria-label="YouTube"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M10 9.5v5l5-2.5z" fill="currentColor" stroke="none" /></svg></a>
              </div>
            </div>
            {FOOTER_COLUMNS.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h5>{col.heading}</h5>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© 2024 Furniconcepts. All rights reserved.</span>
            <a
              href="#"
              className="back-top-link"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <span className="back-top">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </span>
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
