import { SECTORS } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Spaces() {
  return (
    <section id="sectors">
      <Reveal className="spaces-grid stagger">
        <div className="spaces-card">
          <div className="eyebrow">Sectors we serve</div>
          <h2>Furniture for Every Sector</h2>
          <p>
            Workplace, hospitality, healthcare or public venue — we specify, supply and install furniture
            that performs as hard as the space it sits in.
          </p>
          <a href="#" className="pill pill-outline" style={{ width: 'fit-content' }}>
            Talk to us
            <span style={{ width: 14, height: 14, display: 'flex' }}><ArrowRight /></span>
          </a>
        </div>
        {SECTORS.map((space) => (
          <div className="space-item" key={space.name}>
            <div className="img-wrap">
              <img src={space.src} alt={space.alt} loading="lazy" />
            </div>
            <div className="row">
              <span>{space.name}</span>
              <span className="circle-btn"><ArrowRight /></span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
