import { useCallback, useEffect, useRef } from 'react';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { CLIENTS } from '../data/clients.js';
import { LEADERSHIP, TEAM } from '../data/team.js';
import { prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const cav = (name) => `/images/cavaletti/${name}.jpg`;

const NUMBERS = [
  {
    num: '12',
    label: 'Furniture Categories',
    icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  },
  {
    num: '16+',
    label: 'Global Partner Brands',
    icon: <><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" /></>,
  },
  {
    num: '15+',
    label: 'Years of Experience',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  },
  {
    num: '3',
    label: 'Offices Worldwide',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
  },
];

/** Leadership first, then the rest of the team — one continuous row. */
const PEOPLE = [...LEADERSHIP, ...TEAM];

/** Company page, built to the About Us comp: story, numbers, vision, team, brands. */
export default function About() {
  return (
    <div className="home2 about-page">
      <SiteHeader onHome={false} active="About Us" />

      {/* ---- hero: full-bleed photography with the header floating over it ---- */}
      <section className="about-hero">
        <div className="about-hero-media">
          <img src="/images/common/more-then-furniture-bg.webp" alt="" />
        </div>
        <div className="overlay" />
        <div className="wrap about-hero-inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="current">About Us</span>
          </nav>
          <div className="eyebrow">About Furniconcepts</div>
          <h1>More Than a<br />Furniture <span className="accent">Brand.</span></h1>
          <p>We represent sixteen international manufacturers and deliver complete furniture packages across the UAE, India and Singapore — specified, supplied and installed by one team.</p>
        </div>
      </section>

      {/* ---- our story ---- */}
      <section className="section about-story" id="story">
        <div className="wrap about-story-inner">
          <div className="about-story-copy">
            <div className="eyebrow">About Us</div>
            <h2>Designing<br />Better Living<br />Since Day One</h2>
            <p>Furniconcepts is a contract furniture specialist committed to functional, elegant and durable solutions for workplaces, hospitality, healthcare and public venues. We represent sixteen international manufacturers and blend timeless design with modern craftsmanship to bring comfort, style and purpose into everyday spaces.</p>
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
          <img src={cav('material-wall')} alt="" aria-hidden="true" />
          <div className="vision-body">
            <svg className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="2.6" />
            </svg>
            <h3>Our Vision</h3>
            <p>To be the region&apos;s most trusted furniture partner, known for spaces that work harder, last longer and feel better to be in.</p>
          </div>
        </div>
        <div className="mission-panel">
          <img src={cav('showroom-lounge')} alt="" aria-hidden="true" />
          <div className="vision-body">
            <svg className="vision-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" />
            </svg>
            <h3>Our Mission</h3>
            <p>To deliver high-quality, functional and sustainable furniture packages — specified, supplied and installed by one team, on programme and without surprises.</p>
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
          <div className="client-wall">
            {CLIENTS.map((client) => (
              <div className="client-tile" key={client.src}>
                <img src={client.src} alt={client.name} title={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- closing cta ---- */}
      <section className="about-cta" id="offices">
        <div className="about-cta-media">
          <img src="/images/common/more-then-furniture-bg.webp" alt="" aria-hidden="true" />
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
