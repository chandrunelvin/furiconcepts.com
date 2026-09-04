import { NAV_LINKS } from '../data/content.js';
import { Logo, SocialRow } from './Common.jsx';

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div>
        <Logo />
        <nav className="side-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={active === link.label ? 'active' : undefined}
              onClick={() => onNavigate?.(link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="divider" />
        <div className="tagline">One stop solutions to all your furniture needs.</div>
        <SocialRow />
      </div>
    </aside>
  );
}
