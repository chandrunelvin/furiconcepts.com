import { useState } from 'react';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { OFFICES } from '../data/contact.js';
import { useSeo } from '../lib/head.js';
import { useReveal } from '../lib/reveal.js';
import { Icon, useParallax } from './Contact.jsx';
import '../styles/home2.css';

/**
 * The careers page (/career.php, the old site's URL), built from the Contact
 * page's parts. The site has no server to receive files, so sending the form
 * opens the applicant's email app addressed to the team with their details
 * filled in, and asks them to attach the CV they picked.
 */
const CAREERS_EMAIL = 'letstalk@furniconcepts.com';

const REVEAL_GROUPS = [
  '.contact-hero .eyebrow, .contact-hero h1, .contact-hero p',
  '.contact-panel',
  '.contact-feature',
  '.offices-intro > *',
  '.office-card',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

const SEO = {
  title: 'Careers | Furniconcepts',
  meta: [{
    name: 'description',
    content: 'Join Furniconcepts. Send us your CV to work with our team across Dubai, India and Singapore in furniture design, projects, sales and installation.',
  }],
  canonical: 'https://furniconcepts.com/career.php',
};

/** The old page's three points, with a line each. */
const PERKS = [
  { icon: 'clock', title: 'Comfortable Work Experience', text: 'A supportive workplace where good ideas are heard and good work is noticed.' },
  { icon: 'doc', title: 'Be a Part', text: 'Work on real projects for offices, hotels, cinemas, schools and hospitals.' },
  { icon: 'people', title: 'Large Team', text: 'Learn alongside designers, project managers and installers across three countries.' },
];

const FEATURES = [...PERKS, { icon: 'globe', title: 'Three Countries' }];

const MAX_CV_MB = 5;

function ApplyForm() {
  const [cvName, setCvName] = useState('');
  const [error, setError] = useState('');
  const [opened, setOpened] = useState(false);

  const pickCv = (e) => {
    const file = e.target.files[0];
    setError('');
    if (file && file.size > MAX_CV_MB * 1024 * 1024) {
      setError(`Please choose a CV under ${MAX_CV_MB} MB.`);
      e.target.value = '';
      setCvName('');
      return;
    }
    setCvName(file?.name ?? '');
  };

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Job application: ${f.get('subject')} – ${f.get('name')}`;
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      `Applying for: ${f.get('subject')}`,
      '',
      f.get('message'),
      '',
      `CV attached: ${cvName}`,
    ].join('\n');
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <input type="text" name="name" placeholder="Your Name *" required aria-label="Your name" />
        <input type="email" name="email" placeholder="Email Address *" required aria-label="Email address" />
      </div>
      <div className="field-row">
        <input type="tel" name="phone" placeholder="Phone Number *" required aria-label="Phone number" />
        <input type="text" name="subject" placeholder="Position You're Applying For *" required aria-label="Position you're applying for" />
      </div>
      <label className={`career-cv ${cvName ? 'has-file' : ''}`.trim()}>
        <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={pickCv} />
        <span className="method-icon"><Icon name="doc" /></span>
        <span className="method-text">
          <span className="method-label">{cvName || 'Upload CV *'}</span>
          <span className="method-note">{cvName ? 'Tap to choose a different file' : `PDF or Word document, up to ${MAX_CV_MB} MB`}</span>
        </span>
      </label>
      {error && <p className="career-error" role="alert">{error}</p>}
      <textarea name="message" rows="5" placeholder="Tell us about yourself *" required aria-label="Tell us about yourself" />
      <button type="submit" className="btn-primary">
        Send Application <Arrow size={14} />
      </button>
      {opened && (
        <p className="contact-sent" role="status">
          Your email app has opened with your application. Attach your CV ({cvName}) and press send.
          No email app? Send your CV to <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}

export default function Career() {
  useReveal(REVEAL_GROUPS);
  useSeo(SEO);
  const heroLayer = useParallax(0.25);

  return (
    <div className="home2 contact-page career-page">
      <SiteHeader onHome={false} active="About Us" />

      {/* ---- hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero-media" aria-hidden="true">
          <div className="img-parallax" ref={heroLayer}>
            <img src="/images/projects/furniconcept-lab-showroom/07.webp" alt="" />
          </div>
        </div>
        <div className="wrap contact-hero-inner">
          <div className="eyebrow">Careers</div>
          <h1>
            <span className="line">Build Spaces</span>
            <span className="line">With Us</span>
            <span className="accent">We Are Hiring</span>
          </h1>
          <p>
            Furniconcepts designs, supplies and installs furniture for workplaces, hotels, cinemas,
            schools and hospitals across UAE, India and Singapore. Bring your skills to our team.
          </p>
        </div>
      </section>

      {/* ---- application form + why join ---- */}
      <section className="contact-main" id="apply">
        <div className="wrap">
          <div className="contact-panel">
            <div className="contact-form-side">
              <div className="eyebrow eyebrow-rule">We Are Hiring</div>
              <h2>Apply to Furniconcepts</h2>
              <p className="contact-form-intro">Share a few details and your CV, and our team will be in touch.</p>
              <ApplyForm />
            </div>

            <aside className="contact-info-side">
              <div className="eyebrow">Why Join Us</div>
              <h2>Grow With Our Team</h2>
              <p>Join a team that turns plans into finished spaces, from the first drawing to the final install.</p>
              <ul className="contact-methods career-perks">
                {PERKS.map((p) => (
                  <li key={p.title}>
                    <span className="method-icon"><Icon name={p.icon} /></span>
                    <span className="method-text">
                      <span className="method-label">{p.title}</span>
                      <span className="method-note">{p.text}</span>
                    </span>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Job application')}`}>
                    <span className="method-icon"><Icon name="mail" /></span>
                    <span className="method-text">
                      <span className="method-label">{CAREERS_EMAIL}</span>
                      <span className="method-note">Prefer email? Send your CV here</span>
                    </span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ---- strengths strip ---- */}
      <section className="contact-features">
        <div className="wrap contact-features-inner">
          {FEATURES.map((f) => (
            <div className="contact-feature" key={f.title}>
              <Icon name={f.icon} />
              <h3>{f.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ---- where you could work ---- */}
      <section className="section offices" id="offices">
        <div className="wrap">
          <div className="offices-head">
            <div className="offices-intro">
              <div className="eyebrow">Where You Could Work</div>
              <h2><span className="line">Our Offices</span><span className="line">Across Three Countries</span></h2>
              <p>Roles open up across our offices and our own factory in Dubai.</p>
            </div>
          </div>
          <div className="office-grid">
            {OFFICES.map((o) => (
              <article className="office-card" key={o.id}>
                <div className="office-media">
                  <img src={o.image} alt="" loading="lazy" />
                </div>
                <div className="office-body">
                  <h3>
                    {o.city}
                    {o.tag && <span className="office-tag">{o.tag}</span>}
                  </h3>
                  <p className="office-line">
                    <Icon name="pin" />
                    <span>{o.address}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
