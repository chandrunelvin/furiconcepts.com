import { useCallback, useEffect, useState } from 'react';
import { HERO_SLIDES } from '../data/content.js';
import { ArrowLeftSm, ArrowRightSm, Play } from './Icons.jsx';
import Parallax from './Parallax.jsx';

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [go, index]);

  return (
    <section className="hero" id="top">
      {HERO_SLIDES.map((slide, i) => (
        <div key={slide.src} className={`hero-img ${i === index ? 'active' : ''}`} aria-hidden={i !== index}>
          <Parallax speed={0.1}>
            <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          </Parallax>
        </div>
      ))}

      <div className="hero-copy">
        <div className="eyebrow">Welcome to Furniconcepts</div>
        <h1>
          One Stop Solutions<em>To All Your Furniture Needs.</em>
        </h1>
        <p>Transform your workspace with our functional designs — supplied, installed and supported across the UAE, India and Singapore.</p>
        <div className="watch-row">
          <button className="play-btn" aria-label="See our projects"><Play /></button>
          <span>SEE OUR PROJECTS</span>
        </div>
      </div>

      <div className="hero-slide-ui">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <div className="arrows">
          <button aria-label="Previous slide" onClick={() => go(-1)}><ArrowLeftSm /></button>
          <button aria-label="Next slide" onClick={() => go(1)}><ArrowRightSm /></button>
        </div>
      </div>
    </section>
  );
}
