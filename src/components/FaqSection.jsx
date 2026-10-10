import { useState } from 'react';
import { useParallax } from '../lib/parallax.js';

/**
 * The FAQ band shared by the brand and category pages: copy on the left over a
 * drifting photo, questions on the right that open one at a time.
 * `items` are {q, a}; an answer may be a string or rich content.
 */
export default function FaqSection({
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  intro,
  image = '/images/cavaletti/faq-bg.webp',
  items,
}) {
  const [open, setOpen] = useState(null);
  const layer = useParallax(0.2);

  return (
    <section className="brand-faq">
      {image && (
        <div className="brand-faq-media" aria-hidden="true">
          <div className="img-parallax" ref={layer}>
            <img src={image} alt="" loading="lazy" />
          </div>
        </div>
      )}
      <div className="wrap brand-faq-inner">
        <div className="brand-faq-copy">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="brand-faq-list">
          {items.map((item, i) => (
            <div className={`brand-faq-item ${open === i ? 'open' : ''}`.trim()} key={item.q}>
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" className="plus-bar" />
                </svg>
              </button>
              {open === i && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
