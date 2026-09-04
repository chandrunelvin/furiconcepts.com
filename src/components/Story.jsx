import { STATS, STORY_IMAGE } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';

export default function Story() {
  return (
    <Reveal as="section" className="story" id="story">
      <div className="story-grid">
        <div className="story-media">
          <Parallax speed={0.08}>
            <img src={STORY_IMAGE.src} alt={STORY_IMAGE.alt} loading="lazy" />
          </Parallax>
        </div>
        <div className="story-copy stagger">
          <div className="eyebrow">Our story</div>
          <h2>More Than a Furniture Brand.</h2>
          <p>
            At Furniconcepts, we&apos;re more than just a furniture brand — we&apos;re creators of captivating
            spaces. We represent leading international manufacturers and deliver complete fit-outs across
            workplace, hospitality, healthcare and public venues.
          </p>
          <a href="#" className="pill pill-dark" style={{ width: 'fit-content' }}>
            About us
            <span style={{ width: 14, height: 14, display: 'flex' }}><ArrowRight /></span>
          </a>
          <div className="stats-row stagger">
            {STATS.map((stat) => (
              <div className="stat" key={stat.l}>
                <div className="n">{stat.n}</div>
                <div className="l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
