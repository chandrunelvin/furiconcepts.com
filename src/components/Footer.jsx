import { FOOTER_COLUMNS } from '../data/content.js';
import { Logo, SocialRow } from './Common.jsx';
import { ArrowUp } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <Reveal className="foot-grid stagger">
        <div>
          <Logo tagline={false} />
          <p className="foot-tag">One stop solutions to all your furniture needs — Dubai, Chennai and Singapore.</p>
          <SocialRow networks={['instagram', 'facebook', 'pinterest', 'linkedin']} />
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <h5>{col.heading}</h5>
            <ul>
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Furniconcepts. All rights reserved.</span>
        <a href="#top" onClick={toTop} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          Back to top
          <span className="circle-btn" style={{ width: 30, height: 30 }}><ArrowUp /></span>
        </a>
      </div>
    </footer>
  );
}
