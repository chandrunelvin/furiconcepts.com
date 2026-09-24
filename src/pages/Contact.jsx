import { useEffect, useRef, useState } from 'react';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import {
  CONTACT_CTA, CONTACT_FEATURES, CONTACT_HERO, CONTACT_METHODS,
  COUNTRIES, MAP_PANEL, OFFICES, OFFICES_INTRO, SUBJECTS,
} from '../data/contact.js';
import { useReveal } from '../lib/reveal.js';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const REVEAL_GROUPS = [
  '.contact-hero .eyebrow, .contact-hero h1, .contact-hero p',
  '.contact-panel',
  '.contact-feature',
  '.offices-intro > *',
  '.offices-gallery',
  '.office-card',
  '.map-panel-body > *',
  '.contact-cta-copy > *',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/** Drifts a full-bleed banner against the scroll, as the other pages do. */
function useParallax(speed) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    const apply = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      el.style.transform = `translateY(${((rect.top - window.innerHeight / 2) * speed * 0.35).toFixed(2)}px)`;
    };
    apply();
    return onScrollFrame(apply);
  }, [speed]);
  return ref;
}

const lines = (text) =>
  text.split('\n').map((line, i) => <span key={line + i} className="line">{line}</span>);

const Icon = ({ name }) => {
  const paths = {
    phone: <path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 005.5 5.5l1.4-2 4 1.5v3A2.6 2.6 0 0117.3 19 14.4 14.4 0 015 6.7 2.6 2.6 0 016.6 3z" />,
    mail: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></>,
    pin: <><path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></>,
    doc: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
    whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 01-12.6 7.5L3.5 20.5l1.3-4.3a8.5 8.5 0 1115.7-4.4z" /><path d="M9 9.4c.3 2.7 2.9 5.3 5.6 5.6.6.1 1.2-.3 1.4-.9l-2-.9-.8 1a6.6 6.6 0 01-2.8-2.8l1-.8-.9-2c-.6.2-1 .8-.9 1.4z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.4 2" /></>,
    people: <><circle cx="9" cy="8.5" r="3" /><circle cx="17" cy="9.5" r="2.3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16.2 14.4c2.3.3 4.3 2.1 4.3 4.6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 3.9 5.7 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.7-3.9-9S9.4 5.6 12 3z" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

export default function Contact() {
  useReveal(REVEAL_GROUPS);
  const heroLayer = useParallax(0.25);
  const ctaLayer = useParallax(0.18);

  const [sent, setSent] = useState(false);
  const [active, setActive] = useState(OFFICES[0].id);
  const galleryRef = useRef(null);

  const office = OFFICES.find((o) => o.id === active) ?? OFFICES[0];

  const scrollGallery = (dir) => {
    const el = galleryRef.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: 'smooth' });
  };

  return (
    <div className="home2 contact-page">
      <SiteHeader onHome={false} active="Contact" />

      {/* ---- hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero-media" aria-hidden="true">
          <div className="img-parallax" ref={heroLayer}>
            <img src={CONTACT_HERO.image} alt="" />
          </div>
        </div>
        <div className="wrap contact-hero-inner">
          <div className="eyebrow">{CONTACT_HERO.eyebrow}</div>
          <h1>
            {lines(CONTACT_HERO.title)}
            <span className="accent">{CONTACT_HERO.accent}</span>
          </h1>
          <p>{CONTACT_HERO.text}</p>
        </div>
      </section>

      {/* ---- form + contact information ---- */}
      <section className="contact-main" id="get-in-touch">
        <div className="wrap">
          <div className="contact-panel">
            <div className="contact-form-side">
              <div className="eyebrow eyebrow-rule">Send Us a Message</div>
              <h2>Get in Touch</h2>
              <p className="contact-form-intro">Fill out the form and our team will get back to you soon.</p>

              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="field-row">
                  <input type="text" name="name" placeholder="Your Name *" required aria-label="Your name" />
                  <input type="email" name="email" placeholder="Email Address *" required aria-label="Email address" />
                </div>
                <div className="field-row">
                  <select name="country" required defaultValue="" aria-label="Select country">
                    <option value="" disabled>Select Country *</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input type="tel" name="phone" placeholder="Phone Number *" required aria-label="Phone number" />
                </div>
                <input type="text" name="company" placeholder="Company Name" aria-label="Company name" />
                <select name="subject" required defaultValue="" aria-label="Subject">
                  <option value="" disabled>Subject *</option>
                  {SUBJECTS.map((sub) => <option key={sub} value={sub}>{sub}</option>)}
                </select>
                <textarea name="message" rows="5" placeholder="Your Message *" required aria-label="Your message" />
                <button type="submit" className="btn-primary">
                  {sent ? 'Message Sent' : 'Send Message'} <Arrow size={14} />
                </button>
                {sent && (
                  <p className="contact-sent" role="status">
                    Thank you — your message has been sent. We will get back to you shortly.
                  </p>
                )}
              </form>
            </div>

            <aside className="contact-info-side">
              <div className="eyebrow">Contact Information</div>
              <h2>We&apos;re Here to Help</h2>
              <p>Get in touch with our offices across UAE, India, Singapore and Oman.</p>
              <ul className="contact-methods">
                {CONTACT_METHODS.map((m) => (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      <span className="method-icon"><Icon name={m.icon} /></span>
                      <span className="method-text">
                        <span className="method-label">{m.label}</span>
                        <span className="method-note">{m.note}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ---- reassurance strip ---- */}
      <section className="contact-features">
        <div className="wrap contact-features-inner">
          {CONTACT_FEATURES.map((f) => (
            <div className="contact-feature" key={f.title}>
              <Icon name={f.icon} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- offices ---- */}
      <section className="section offices" id="offices">
        <div className="wrap">
          <div className="offices-head">
            <div className="offices-intro">
              <div className="eyebrow">{OFFICES_INTRO.eyebrow}</div>
              <h2>{lines(OFFICES_INTRO.title)}</h2>
              <p>{OFFICES_INTRO.text}</p>
            </div>
            <div className="offices-gallery">
              <div className="offices-rail" ref={galleryRef}>
                {OFFICES_INTRO.gallery.map((src, i) => (
                  <div className="offices-shot" key={src + i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="offices-nav">
                <button type="button" aria-label="Previous" onClick={() => scrollGallery(-1)}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
                </button>
                <button type="button" aria-label="Next" onClick={() => scrollGallery(1)}>
                  <Arrow size={15} />
                </button>
              </div>
            </div>
          </div>

          <div className="office-grid">
            {OFFICES.map((o) => (
              <article className={`office-card ${o.id === active ? 'active' : ''}`.trim()} key={o.id}>
                <div className="office-media">
                  {/* the heading names the city directly below, so the photo is
                      decorative; an alt here would just read the city twice */}
                  <img
                    src={o.image}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.dataset.fellBack) return;
                      e.currentTarget.dataset.fellBack = '1';
                      e.currentTarget.src = o.imageFallback;
                    }}
                  />
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
                  <p className="office-line">
                    <Icon name="phone" />
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`}>{o.phone}</a>
                  </p>
                  <button type="button" className="link-arrow" onClick={() => {
                    setActive(o.id);
                    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}>
                    Get Directions <Arrow size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- map ---- */}
      <section className="locations" id="locations">
        <div className="wrap locations-inner">
          <div className="map-panel">
            <div className="map-panel-media" aria-hidden="true">
              <img src={MAP_PANEL.image} alt="" loading="lazy" />
            </div>
            <div className="map-panel-body">
            <div className="eyebrow">{MAP_PANEL.eyebrow}</div>
            <h2>{lines(MAP_PANEL.title)}</h2>
            <p>{MAP_PANEL.text}</p>
            <div className="map-office-chips">
              {OFFICES.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  className={o.id === active ? 'active' : undefined}
                  onClick={() => setActive(o.id)}
                >
                  {o.city}
                </button>
              ))}
            </div>
            <a
              className="btn-light"
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.coords)}`}
              target="_blank"
              rel="noreferrer"
            >
              {MAP_PANEL.cta.label} <Arrow size={14} />
            </a>
            <div className="map-stats">
              {MAP_PANEL.stats.map((s) => (
                <div key={s.label}>
                  <div className="map-stat-num">{s.num}</div>
                  <div className="map-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title={`Map of the ${office.city} office`}
              src={office.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ---- quotation cta ---- */}
      <section className="contact-cta">
        <div className="contact-cta-media" aria-hidden="true">
          <div className="img-parallax" ref={ctaLayer}>
            <img src={CONTACT_CTA.image} alt="" loading="lazy" />
          </div>
        </div>
        <div className="wrap contact-cta-inner">
          <div className="contact-cta-copy">
            <div className="eyebrow">{CONTACT_CTA.eyebrow}</div>
            <h2>{lines(CONTACT_CTA.title)}</h2>
            <p>{CONTACT_CTA.text}</p>
            <a href={CONTACT_CTA.cta.href} className="btn-primary">
              {CONTACT_CTA.cta.label} <Arrow size={14} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
