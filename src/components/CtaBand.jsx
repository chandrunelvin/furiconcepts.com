import { CONTACT, OFFICES } from '../data/content.js';
import { ArrowRight, Mail } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function CtaBand() {
  return (
    <section id="contact">
      <Reveal className="cta-band">
        <div className="cta-top">
          <div>
            <div className="eyebrow">Let&apos;s talk</div>
            <h2>Ready to Furnish Your Space?</h2>
            <p>Tell us about the project and our team will come back with a specification and quote.</p>
          </div>
          <div className="cta-actions">
            <a href={`mailto:${CONTACT.email}`} className="pill pill-dark">
              Get in touch
              <span style={{ width: 14, height: 14, display: 'flex' }}><ArrowRight /></span>
            </a>
            <div className="cta-contact">
              <a href={`mailto:${CONTACT.email}`}><Mail /> {CONTACT.email}</a>
            </div>
          </div>
        </div>

        <div className="offices stagger">
          {OFFICES.map((office) => (
            <div className="office" key={office.country}>
              <h4>{office.country}</h4>
              {office.phones.map((phone) => (
                <a href={phone.href} key={phone.href}>{phone.label}</a>
              ))}
              <p className="addr">{office.address}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
