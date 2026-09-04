import { PARTNER_BRANDS } from '../data/content.js';
import Marquee from './Marquee.jsx';
import Reveal from './Reveal.jsx';

export default function Brands() {
  return (
    <section id="brands">
      <Reveal className="brands-band">
        <div className="brands-head">
          <div className="eyebrow">Our partners</div>
          <h2>The brands we represent</h2>
        </div>
        <Marquee duration={48} reverse>
          {PARTNER_BRANDS.map((brand) => (
            <span className="brand-chip" key={brand}>{brand}</span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
