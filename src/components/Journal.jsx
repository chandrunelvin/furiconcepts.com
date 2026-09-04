import { ARTICLES } from '../data/content.js';
import { ArrowRight } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Journal() {
  return (
    <section id="journal">
      <Reveal className="section-flex">
        <div className="left stagger">
          <div className="eyebrow">Completed projects</div>
          <h2>Recent Installations</h2>
          <p>A look at spaces we have specified, supplied and installed for clients across three regions.</p>
          <a href="#" className="link-arrow">
            VIEW ALL PROJECTS
            <span className="circle-btn"><ArrowRight /></span>
          </a>
        </div>
      </Reveal>
      <Reveal className="journal-row stagger">
        {ARTICLES.map((article) => (
          <a className="article-card" href="#" key={article.title}>
            <div className="img-wrap">
              <img src={article.src} alt={article.alt} loading="lazy" />
            </div>
            <div className="date">{article.date}</div>
            <h3>{article.title}</h3>
            <span className="read-more">VIEW PROJECT</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
