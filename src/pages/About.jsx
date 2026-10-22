import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { CERTIFICATES, CERT_GROUPS } from '../data/certificates.js';
import { CLIENTS } from '../data/clients.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { LEADERSHIP, TEAM } from '../data/team.js';
import { useMarquee } from '../lib/marquee.js';
import { useReveal } from '../lib/reveal.js';
import { prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import { DownloadIcon, PdfViewer } from './ProfileLibrary.jsx';
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
  '.about-certs .team-head > *, .about-certs .brand-tabs',
  '.about-certs .profile-card',
  '.testimonials-side, .quote-stage',
  '.about-cta-copy > *',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/** Company page, built to the About Us comp: story, numbers, vision, team, brands. */
export default function About({ section }) {
  useReveal(REVEAL_GROUPS);
  // opened at a section's old URL (e.g. /certificates.php): jump straight to it,
  // and again once images above it have loaded and pushed it down
  useEffect(() => {
    if (!section) return undefined;
    const go = () => document.getElementById(section)?.scrollIntoView({ block: 'start', behavior: 'instant' });
    go();
    window.addEventListener('load', go, { once: true });
    return () => window.removeEventListener('load', go);
  }, [section]);
  const clientRail = useMarquee({ speed: 46 });

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
            <Link to="/#catalogs" className="btn-primary">Learn More <Arrow /></Link>
          </div>
          <div className="about-story-media">
            <img src="/images/common/crafted-precision.jpg" alt="Lounge seating in a daylit interior" loading="lazy" />
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
            <span className="vision-icon" aria-hidden="true">
              {/* an eye: looking ahead */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
                <circle cx="12" cy="12" r="3.4" />
                <circle cx="13.2" cy="10.8" r=".9" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <h3>Our Vision</h3>
            <p>To be the trusted furniture solutions partner for enterprises across every sector.</p>
          </div>
        </div>
        <div className="mission-panel">
          <img src="/images/about-us/bg-mission-image.webp" alt="" aria-hidden="true" />
          <div className="vision-body">
            <span className="vision-icon" aria-hidden="true">
              {/* a target with an arrow in it: the goal, hit on time and on budget */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="13" r="8" />
                <circle cx="11" cy="13" r="4.4" />
                <circle cx="11" cy="13" r=".9" fill="currentColor" stroke="none" />
                <path d="M11 13l8.5-8.5" />
                <path d="M17 4.5l2.5-.5-.5 2.5M19.5 4h1.5M20 4v-1.5" />
              </svg>
            </span>
            <h3>Our Mission</h3>
            <p>RELIABLE, DURABLE, SUSTAINABLE furniture, delivered on time and on budget.</p>
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
            </div>
            <div className="team-head-aside">
              <p>Sales, design, estimation, IT and installation — across the UAE, Saudi Arabia, India and Singapore, all working towards one goal: better spaces.</p>
              <Link to="/career.php" className="link-arrow">Explore Careers <Arrow /></Link>
            </div>
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
            </div>
            <div className="team-head-aside">
              <p>Airlines, universities, hospitals, hotels, automotive groups and government departments — furnished, fitted out and supported by Furniconcepts.</p>
              <Link to="/#catalogs" className="link-arrow">View Our Brands <Arrow /></Link>
            </div>
          </div>
          <div className="client-viewport" ref={clientRail}>
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

      {/* ---- certificates ---- */}
      <Certificates />

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
            <Link to="/contact" className="btn-primary">Get in Touch <Arrow /></Link>
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
/**
 * ISO, safety, trademark and compliance documents, filtered by tab. On wide
 * screens a document opens in the Download Profiles viewer; phones follow the
 * link to the file instead.
 */
function Certificates() {
  const [group, setGroup] = useState('all');
  const [open, setOpen] = useState(null);
  const shown = CERTIFICATES.filter((c) => group === 'all' || c.group === group);
  const close = useCallback(() => setOpen(null), []);

  const view = (e, cert) => {
    if (window.matchMedia('(max-width: 760px)').matches) return;
    e.preventDefault();
    setOpen(cert);
  };

  return (
    <section className="section about-certs" id="certificates">
      <div className="wrap">
        <div className="team-head">
          <div>
            <div className="eyebrow">Certificates</div>
            <h2>Certified Quality,<br />Trusted Compliance</h2>
          </div>
          <div className="team-head-aside">
            <p>ISO-certified for quality, environment and safety, with a registered trademark and UAE In-Country Value certification. View or download any document for your records.</p>
          </div>
        </div>
        <div className="brand-tabs about-cert-tabs" role="tablist" aria-label="Certificate type">
          {CERT_GROUPS.map((g) => (
            <button
              type="button"
              role="tab"
              aria-selected={g.key === group}
              className={`brand-tab ${g.key === group ? 'active' : ''}`.trim()}
              onClick={() => setGroup(g.key)}
              key={g.key}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="profiles-grid" key={group}>
          {shown.map((c) => (
            <article className="blog-card profile-card" key={c.pdf}>
              <a href={c.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, c)}
                 className="blog-card-media profile-media doc-media" tabIndex={-1} aria-hidden="true">
                <img src={c.cover} alt="" loading="lazy" />
                <span className="profile-badge">{CERT_GROUPS.find((g) => g.key === c.group).label.toUpperCase()}</span>
              </a>
              <div className="blog-card-body">
                <span className="blog-tag">{c.meta}</span>
                <h3><a href={c.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, c)}>{c.title}</a></h3>
                <p>{c.text}</p>
                <div className="profile-actions">
                  <a href={c.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, c)} className="link-arrow">
                    {c.cta ?? 'View Certificate'} <Arrow size={13} />
                  </a>
                  <a href={c.pdf} download className="profile-download" aria-label={`Download ${c.title}`}>
                    <DownloadIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {open && <PdfViewer file={open} onClose={close} />}
    </section>
  );
}

function TeamRow({ people }) {
  const railRef = useRef(null);
  const [open, setOpen] = useState(null);
  const openRef = useRef(null);
  openRef.current = open;
  const close = useCallback(() => setOpen(null), []);
  const browse = useCallback(
    (dir) => setOpen((i) => (i + dir + people.length) % people.length),
    [people.length],
  );

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

    const timer = setInterval(() => { if (!paused && openRef.current === null) step(1); }, 3200);
    return () => {
      clearInterval(timer);
      ['pointerenter', 'focusin', 'touchstart'].forEach((e) => rail.removeEventListener(e, pause));
      ['pointerleave', 'focusout', 'touchend'].forEach((e) => rail.removeEventListener(e, resume));
    };
  }, [step]);

  return (
    <div className="team-row">
      <div className="team-rail" ref={railRef}>
        {people.map((person, i) => (
          <TeamCard person={person} onOpen={() => setOpen(i)} key={person.name} />
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
      {open !== null && (
        <TeamModal
          people={people}
          index={open}
          onStep={browse}
          onClose={close}
        />
      )}
    </div>
  );
}

/**
 * A team member's profile, in the same cream panel as the product enquiry
 * popup: portrait on the left, bio and LinkedIn on the right, with arrows to
 * walk through the rest of the team without closing.
 */
function TeamModal({ people, index, onStep, onClose }) {
  const person = people[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onStep]);

  // mounted at the page root: the team row carries a reveal transform, which
  // would otherwise pin this fixed overlay to the row instead of the screen
  return createPortal(
    <div className="brand-modal team-modal" role="dialog" aria-modal="true" aria-labelledby="team-modal-name">
      <div className="brand-modal-backdrop" onClick={onClose} />
      <div className="brand-modal-panel" key={person.name}>
        <button type="button" className="brand-modal-close" aria-label="Close" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="brand-modal-media team-modal-media">
          <img src={person.src} alt={person.name} />
        </div>
        <div className="brand-modal-copy">
          <div className="eyebrow">Our Team</div>
          <h2 id="team-modal-name">{person.name}</h2>
          <div className="brand-modal-caption">{person.role}</div>
          <div className="brand-modal-desc team-modal-bio">
            {(person.bio ?? [`${person.name} is part of the Furniconcepts team as ${person.role}.`]).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="team-modal-foot">
            {person.linkedin ? (
              <a href={person.linkedin} target="_blank" rel="noopener" className="link-arrow">
                <LinkedInIcon /> View LinkedIn <Arrow size={13} />
              </a>
            ) : <span />}
            <div className="team-nav team-modal-nav">
              <span className="team-modal-count">
                {String(index + 1).padStart(2, '0')} / {String(people.length).padStart(2, '0')}
              </span>
              <button type="button" aria-label="Previous team member" onClick={() => onStep(-1)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M11 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" aria-label="Next team member" onClick={() => onStep(1)}>
                <Arrow size={15} width={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.about-page') ?? document.body,
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V21h-4V9.75z" />
    </svg>
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

function TeamCard({ person, onOpen }) {
  return (
    <button type="button" className="team-card" onClick={onOpen} aria-label={`View profile: ${person.name}, ${person.role}`}>
      <div className="team-photo"><img src={person.src} alt="" loading="lazy" /></div>
      <span className="team-bar">
        <span className="team-text">
          <span className="team-name">{person.name}</span>
          <span className="team-role">{person.role}</span>
        </span>
        <span className="team-arrow"><Arrow size={13} /></span>
      </span>
    </button>
  );
}
