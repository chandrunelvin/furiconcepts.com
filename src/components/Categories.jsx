import { CATEGORIES } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';
import Marquee from './Marquee.jsx';
import Reveal from './Reveal.jsx';

export default function Categories() {
  return (
    <section id="categories">
      <Reveal className="section-flex">
        <div className="left stagger">
          <div className="eyebrow">What we supply</div>
          <h2>Twelve Categories. One Supplier.</h2>
          <p>
            From acoustic pods and task seating to auditorium, stadium and hospital furniture — every
            category delivered, installed and supported by one team.
          </p>
          <a href="#contact" className="link-arrow">
            EXPLORE ALL CATEGORIES
            <span className="circle-btn"><ArrowRight /></span>
          </a>
        </div>

        <div className="coll-col">
          <Marquee duration={72}>
            {CATEGORIES.map((item) => (
              <a className="coll-card" href="#contact" key={item.num}>
                <div className={`img-wrap ${item.fit === 'contain' ? 'is-product' : ''}`.trim()}>
                  <span className="num">{item.num}</span>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <div className="foot">
                  <div className="room">{item.group}</div>
                  <div className="row">
                    <span>{item.title}</span>
                    <span className="circle-btn"><ArrowRight /></span>
                  </div>
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
