import { useCallback, useEffect, useRef, useState } from 'react';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { CLIENTS } from '../data/clients.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { LEADERSHIP, TEAM } from '../data/team.js';
import { useReveal } from '../lib/reveal.js';
import { prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const NUMBERS = [
  {
    num: '12',
    label: 'Furniture Categories',
    icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  },
  {
    num: '16+',
    label: 'Core Partner Brands',
    icon: <><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" /></>,
  },
  {
    num: '15+',
    label: 'Years of Experience',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  },
  {
    num: '3',
    label: 'Cities Worldwide',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
  },
];

/** Leadership first, then the rest of the team — one continuous row. */
const PEOPLE = [...LEADERSHIP, ...TEAM];

/** Blocks that fade up as they arrive; siblings in a group cascade. */
const REVEAL_GROUPS = [
  '.about-hero .crumbs, .about-hero .eyebrow, .about-hero h1, .about-hero p',
  '.about-story-media, .about-story-copy > *',
  '.about-numbers .num-cell',
  '.vision-panel .vision-body, .mission-panel .vision-body',
  '.about-team .team-head, .about-team .team-row',
  '.about-clients .team-head, .about-clients .client-viewport',
  '.testimonials-side, .quote-stage',
  '.about-cta-copy > *',
];

/** Company page, built to the About Us comp: story, numbers, vision, team, brands. */
export default function About() {
  useReveal(REVEAL_GROUPS);

  return (
    <div className="home2 about-page">
      <SiteHeader onHome={false} active="About Us" />

      {/* ---- hero: full-bleed photography with the header floating over it ---- */}
      <section className="about-hero">
        <div className="about-hero-media">
          <img src="/images/about-us/about-hero-bg.webp" alt="" />
        </div>
        <div className="overlay" />
        <ul className="hero-keywords" aria-hidden="true">
          <li>Spaces</li><li>People</li><li>Sustainability</li><li>A Brighter Tomorrow</li>
        </ul>
        <div className="wrap about-hero-inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="current">About Us</span>
          </nav>
          <div className="eyebrow">About Furniconcepts — ISO 9001:2015 Certified</div>
          <h1>More Than a<br />Furniture <span className="accent">Brand.</span></h1>
          <p>We&apos;re more than just a furniture brand — we&apos;re creators of captivating spaces, with a footprint spanning India, Singapore and the Middle East.</p>
        </div>
      </section>

      {/* ---- our story ---- */}
      <section className="section about-story" id="story">
        <div className="wrap about-story-inner">
          <div className="about-story-copy">
            <div className="eyebrow">About Us</div>
            <h2>Crafting Elegance,<br />Inspiring Spaces</h2>
            <p>At Furniconcepts, we&apos;re more than just a furniture brand — we&apos;re creators of captivating spaces. With a footprint spanning India and key Middle Eastern countries such as UAE, Saudi Arabia, Qatar, and beyond, we specialize in curating exquisite furniture solutions that seamlessly blend elegance with functionality. From timeless classics to cutting-edge designs, each piece in our collection is a testament to our commitment to craftsmanship and quality.</p>
            <p>Driven by a passion for design and dedication to sustainability, we&apos;re on a mission to redefine the way you experience furniture. Our team of skilled artisans and design experts work tirelessly to bring your vision to life, offering personalized solutions tailored to your unique style and needs. Step into the world of Furniconcepts and unlock the potential to transform your living and working spaces into extraordinary realms of comfort and beauty.</p>
            <blockquote className="pull-quote">
              Furniconcepts is not a furniture company — it is a multi-country workspace brand with scalable potential.
            </blockquote>
            <a href="/#catalogs" className="btn-primary">Learn More <Arrow /></a>
          </div>
          <div className="about-story-media">
            <img src="/images/common/crafted-precision.jpg" alt="Lounge seating in a daylit interior" loading="lazy" />
            <a href="#" className="watch-story">
              <span className="circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span>Watch<br />Our Story</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---- numbers ---- */}
      <section className="about-numbers">
        <div className="wrap">
          {NUMBERS.map((item) => (
            <div className="num-cell" key={item.label}>
              <svg className="num-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <div>
                <div className="num-value">{item.num}</div>
                <div className="num-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- vision + mission ---- */}
      <section className="vision-band">
        <div className="vision-panel">
          <img src="/images/about-us/bg-vision-image.webp" alt="" aria-hidden="true" />
          <div className="vision-body">
            <svg className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.2" y="8.4" width="6.4" height="11.4" rx="3.2" />
              <rect x="14.4" y="8.4" width="6.4" height="11.4" rx="3.2" />
              <path d="M4.9 8.4V5.7a1.6 1.6 0 011.6-1.6h1a1.6 1.6 0 011.6 1.6v2.7" />
              <path d="M16.1 8.4V5.7a1.6 1.6 0 011.6-1.6h1a1.6 1.6 0 011.6 1.6v2.7" />
              <path d="M9.6 12.2h4.8M9.6 15.6h4.8" />
            </svg>
            <h3>Our Vision</h3>
            <p>At Furniconcepts, our vision is to inspire and elevate lifestyles through exceptional furniture solutions. We envision creating spaces that exude timeless elegance and unparalleled comfort, enriching the lives of our customers and communities alike.</p>
          </div>
        </div>
        <div className="mission-panel">
          <img src="/images/about-us/bg-mission-image.webp" alt="" aria-hidden="true" />
          <div className="vision-body">
            <svg className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z" />
              <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
            </svg>
            <h3>Our Mission</h3>
            <p>Our mission at Furniconcepts is to craft furniture that transcends mere functionality, embodying the perfect fusion of aesthetics and utility. With a focus on innovation, sustainability, and customer satisfaction, we strive to be the foremost choice for individuals and businesses seeking premium quality furniture in India, Singapore and the Middle East. Through our commitment to excellence and passion for design, we aim to transform spaces into showcases of sophistication and style, leaving a lasting impression on every environment we touch.</p>
          </div>
        </div>
      </section>

      {/* ---- team ---- */}
      <section className="section about-team" id="team">
        <div className="wrap">
          <div className="team-head">
            <div>
              <div className="eyebrow">Our Team</div>
              <h2>The People<br />Behind Furniconcepts</h2>
              <p>Sales, design, estimation, IT and installation — across the UAE, Saudi Arabia, India and Singapore, all working towards one goal: better spaces.</p>
            </div>
            <a href="#offices" className="link-arrow">Explore Careers <Arrow /></a>
          </div>
          <TeamRow people={PEOPLE} />
        </div>
      </section>

      {/* ---- clients ---- */}
      <section className="section about-clients" id="clients">
        <div className="wrap">
          <div className="team-head">
            <div>
              <div className="eyebrow">Our Clients</div>
              <h2>Trusted by Teams<br />Across the Region</h2>
              <p>Airlines, universities, hospitals, hotels, automotive groups and government departments — furnished, fitted out and supported by Furniconcepts.</p>
            </div>
            <a href="/#catalogs" className="link-arrow">View Our Brands <Arrow /></a>
          </div>
          <div className="client-viewport">
            <div className="client-track" style={{ '--n': CLIENTS.length }}>
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div className="client-tile" key={`${client.src}-${i}`} aria-hidden={i >= CLIENTS.length}>
                  <img src={client.src} alt={i >= CLIENTS.length ? '' : client.name} title={client.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- testimonials ---- */}
      <Testimonials />

      {/* ---- closing cta ---- */}
      <section className="about-cta" id="offices">
        <div className="about-cta-media">
          <img src="/images/about-us/bg-create.webp" alt="" aria-hidden="true" />
        </div>
        <div className="overlay" />
        <div className="wrap about-cta-inner">
          <div className="about-cta-copy">
            <h2>Let&apos;s Create<br />Better Spaces Together</h2>
            <p>Get in touch with our team to know more about our collections, partner brands or project enquiries.</p>
            <a href="mailto:letstalk@furniconcepts.com" className="btn-primary">Get in Touch <Arrow /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/**
 * The team runs as one row that steps a single card at a time — arrows for
 * deliberate browsing, and a slow auto-advance that pauses on hover or focus.
 */
function TeamRow({ people }) {
  const railRef = useRef(null);

  const step = useCallback((dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('.team-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(rail).columnGap || '0') || 0;
    const distance = card.getBoundingClientRect().width + gap;
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    if (dir > 0 && atEnd) {
      rail.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }
    if (dir < 0 && rail.scrollLeft <= 2) {
      rail.scrollTo({ left: rail.scrollWidth, behavior: 'smooth' });
      return;
    }
    rail.scrollBy({ left: distance * dir, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || prefersReducedMotion()) return undefined;

    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    ['pointerenter', 'focusin', 'touchstart'].forEach((e) => rail.addEventListener(e, pause));
    ['pointerleave', 'focusout', 'touchend'].forEach((e) => rail.addEventListener(e, resume));

    const timer = setInterval(() => { if (!paused) step(1); }, 3200);
    return () => {
      clearInterval(timer);
      ['pointerenter', 'focusin', 'touchstart'].forEach((e) => rail.removeEventListener(e, pause));
      ['pointerleave', 'focusout', 'touchend'].forEach((e) => rail.removeEventListener(e, resume));
    };
  }, [step]);

  return (
    <div className="team-row">
      <div className="team-rail" ref={railRef}>
        {people.map((person) => (
          <TeamCard person={person} key={person.name} />
        ))}
      </div>
      <div className="team-nav">
        <button type="button" aria-label="Previous team member" onClick={() => step(-1)}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" aria-label="Next team member" onClick={() => step(1)}>
          <Arrow size={15} width={2.2} />
        </button>
      </div>
    </div>
  );
}

/**
 * One quote at a time on the dark band, stepped by the arrows or by the
 * numbered marks — the same rhythm as the hero's slide dots.
 */
function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, index]);

  return (
    <section className="testimonials">
      <div className="testimonials-media" aria-hidden="true">
        <img src="/images/about-us/bg-client-testimonial.webp" alt="" loading="lazy" />
      </div>
      <div className="overlay" />
      <div className="wrap testimonials-inner">
        <div className="testimonials-side">
          <div className="eyebrow">Testimonials</div>
          <h2>What Our<br />Clients Say</h2>
          <div className="quote-count">
            <span className="now">{String(index + 1).padStart(2, '0')}</span>
            <span className="of">/ {String(TESTIMONIALS.length).padStart(2, '0')}</span>
          </div>
          <div className="quote-nav">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
              <Arrow size={15} width={2.2} />
            </button>
          </div>
        </div>

        <figure className="quote-stage" aria-live="polite">
          <svg className="quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6v-6.2H8.3c0-2.2.9-3.7 2.7-4.6L9.5 5zm9 0c-3 1.6-4.5 4.2-4.5 7.8V19h6v-6.2h-2.7c0-2.2.9-3.7 2.7-4.6L18.5 5z" />
          </svg>
          <blockquote key={current.company}>{current.quote}</blockquote>
          <figcaption>
            <span className="quote-logo">
              <img src={current.logo} alt={current.company} />
            </span>
            <span className="quote-who">
              <span className="quote-name">{current.name}</span>
              <span className="quote-company">{current.company}</span>
            </span>
          </figcaption>
          <div className="quote-marks">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.company}
                type="button"
                className={`quote-tick ${i === index ? 'active' : ''}`.trim()}
                aria-label={`Show testimonial ${i + 1}: ${item.company}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}

function TeamCard({ person }) {
  return (
    <figure className="team-card">
      <div className="team-photo"><img src={person.src} alt={person.name} loading="lazy" /></div>
      <figcaption className="team-bar">
        <span className="team-text">
          <span className="team-name">{person.name}</span>
          <span className="team-role">{person.role}</span>
        </span>
        <span className="team-arrow"><Arrow size={13} /></span>
      </figcaption>
    </figure>
  );
}
