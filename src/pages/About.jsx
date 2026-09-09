import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { CATALOGS } from '../data/catalogs.js';
import { OFFICES } from '../data/content.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const cav = (name) => `/images/cavaletti/${name}.jpg`;

const NUMBERS = [
  { num: '12', label: 'Furniture Categories' },
  { num: '16+', label: 'Global Partner Brands' },
  { num: '3', label: 'Offices Worldwide' },
  { num: '15+', label: 'Years of Experience' },
];

/** What a Furniconcepts engagement covers, start to finish. */
const SERVICE_STEPS = [
  {
    num: '01',
    title: 'Specify',
    body: 'We read the drawings, the headcount and the acoustics, then put forward ranges that fit the brief and the budget.',
  },
  {
    num: '02',
    title: 'Sample',
    body: 'Finishes, fabrics and full working samples reach your office or showroom before a single order is placed.',
  },
  {
    num: '03',
    title: 'Supply',
    body: 'Consolidated shipping from sixteen factories, tracked against your programme so the floor is never waiting.',
  },
  {
    num: '04',
    title: 'Install & Support',
    body: 'Our own teams install, snag and hand over — then stay reachable for spares, warranty and later phases.',
  },
];

const VALUES = [
  {
    title: 'One partner, every category',
    body: 'Task seating, acoustics, auditorium, healthcare, hospitality and outdoor come from one contact and one delivery schedule.',
  },
  {
    title: 'Specification you can defend',
    body: 'Test reports, warranties and technical drawings are supplied up front, so approvals move without a second round.',
  },
  {
    title: 'Built for contract use',
    body: 'Every brand we represent is chosen for cycle-tested hardware and finishes that survive a public floor.',
  },
  {
    title: 'Three offices, one standard',
    body: 'The UAE, India and Singapore work to the same programme, pricing and aftercare commitments.',
  },
];

const SECTORS = [
  { name: 'Workplace', src: cav('office-green') },
  { name: 'Hospitality', src: cav('canteen') },
  { name: 'Healthcare', src: cav('chair-family') },
  { name: 'Public Venues', src: cav('auditorium') },
  { name: 'Education', src: cav('stacking-chairs') },
  { name: 'Aviation', src: cav('beam-seating') },
];

/** Company page: who Furniconcepts is, how a project runs, where the offices are. */
export default function About() {
  return (
    <div className="home2 about-page">
      <SiteHeader onHome={false} active="About Us" />

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

      <section className="about-numbers">
        <div className="wrap">
          {NUMBERS.map((item) => (
            <div className="fact" key={item.label}>
              <div className="fact-num">{item.num}</div>
              <div className="fact-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-story">
        <div className="wrap about-story-inner">
          <div className="about-story-media">
            <img src={cav('showroom')} alt="Showroom displaying the seating ranges Furniconcepts supplies" loading="lazy" />
          </div>
          <div className="about-story-copy">
            <div className="eyebrow">Our Story</div>
            <h2>Creators of captivating spaces</h2>
            <p>Furniconcepts began as a seating specialist and grew into a single source for everything a space needs to open — desking and task chairs, acoustic pods, auditorium and stadium seating, healthcare and hospitality ranges, outdoor shading.</p>
            <p>That breadth is deliberate. Fit-outs stall when six suppliers each own a slice of the schedule, so we carry the whole package: one specification, one order, one installation team, one point of contact for the life of the furniture.</p>
            <a href="/#catalogs" className="btn-primary">Browse Our Catalogs <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section about-process">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">How We Work</div>
              <h2>From brief to handover</h2>
            </div>
            <p>Four stages, run by the same people from the first drawing to the last snag.</p>
          </div>
          <div className="step-grid">
            {SERVICE_STEPS.map((step) => (
              <div className="step-card" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="wrap about-values-inner">
          <div className="about-values-head">
            <div className="eyebrow">Why Furniconcepts</div>
            <h2>What clients keep coming back for</h2>
          </div>
          <ul className="value-list">
            {VALUES.map((value) => (
              <li key={value.title}>
                <h4>{value.title}</h4>
                <p>{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-sectors">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Sectors</div>
              <h2>Where our furniture lands</h2>
            </div>
            <a href="/#spaces" className="link-arrow">See All Sectors <Arrow /></a>
          </div>
          <div className="sector-grid">
            {SECTORS.map((sector) => (
              <div className="sector-tile" key={sector.name}>
                <img src={sector.src} alt={sector.name} loading="lazy" />
                <span className="sector-name">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-brands">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Our Partners</div>
              <h2>The brands we represent</h2>
            </div>
            <a href="/#catalogs" className="link-arrow">All Catalogues <Arrow /></a>
          </div>
          <div className="brand-chips">
            {CATALOGS.map((item) => (
              <Link to={`/catalogs/${item.slug}`} className="brand-chip-link" key={item.slug}>
                <span className="chip-thumb"><img src={item.cover} alt="" loading="lazy" /></span>
                <span className="chip-text">
                  <span className="chip-brand">{item.brand}</span>
                  <span className="chip-title">{item.title}</span>
                </span>
                <Arrow size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-offices" id="offices">
        <div className="wrap">
          <div className="head-row">
            <div>
              <div className="eyebrow">Find Us</div>
              <h2>Three offices, one standard</h2>
            </div>
            <a href="mailto:letstalk@furniconcepts.com" className="link-arrow">letstalk@furniconcepts.com <Arrow /></a>
          </div>
          <div className="office-grid">
            {OFFICES.map((office) => (
              <div className="office-card" key={office.country}>
                <h3>{office.country}</h3>
                <p className="office-address">{office.address}</p>
                <div className="office-phones">
                  {office.phones.map((phone) => (
                    <a href={phone.href} key={phone.label}>{phone.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
