import { useEffect, useState } from 'react';
import { Link } from '../router.jsx';

/**
 * Header, slide-out menu and footer shared by the Home2 page and the brand
 * catalogue pages. Everything here relies on the .home2 stylesheet, so any
 * page using it must render inside an element with the `home2` class.
 */

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about', path: '/about' },
  { label: 'Categories', href: '#collections' },
  { label: 'Sectors', href: '#spaces' },
  { label: 'Catalogs', href: '#catalogs' },
  { label: 'Projects', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const Arrow = ({ size = 15, width = 2.4 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={width}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Diagonal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

/** One source for the social links, shared by the menu drawer and the footer. */
const SOCIALS = [
  { label: 'Instagram', path: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></> },
  { label: 'Pinterest', path: <><circle cx="12" cy="12" r="9" /><path d="M9 17c1-3 1.5-6 2-9m2 0c2 0 4 1.4 4 4 0 3-2 5-4.5 5-.8 0-1.5-.3-2-.8" /></> },
  { label: 'Facebook', path: <path d="M15 8h2V5h-2a4 4 0 00-4 4v2H9v3h2v6h3v-6h2.5l.5-3H14V9a1 1 0 011-1z" /> },
  { label: 'LinkedIn', path: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v6M7.5 7.5v.01M11.5 16v-3.5c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.3V16" /></> },
  { label: 'YouTube', path: <><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M10 9.5v5l5-2.5z" fill="currentColor" stroke="none" /></> },
];

export const SocialRow = () => (
  <div className="socials">
    {SOCIALS.map((s) => (
      <a href="#" key={s.label} aria-label={s.label}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.path}</svg>
      </a>
    ))}
  </div>
);

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Furniconcepts — home">
      <img src="/images/furni-logo.png" alt="Furniconcepts — furniture designed with style" />
    </Link>
  );
}

/**
 * Most nav entries are in-page anchors; away from the home page those sections
 * do not exist, so the links point back at the home page's anchor instead.
 * Entries carrying a `path` are real pages and route client-side.
 */
const navHref = (item, onHome) =>
  item.path ?? (onHome ? item.href : `/${item.href}`);

function NavLink({ item, onHome, className, onClick, children }) {
  if (item.path) {
    return (
      <Link to={item.path} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={navHref(item, onHome)} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function SiteHeader({ onHome = true, active = 'Home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={scrolled ? 'scrolled' : undefined}>
        <div className="wrap nav-inner">
          <Logo />
          <nav className="main-nav">
            <ul>
              {NAV.map((item) => (
                <li key={item.label}>
                  <NavLink item={item} onHome={onHome} className={item.label === active ? 'active' : undefined}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right">
            <svg className="icon-btn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <a href={navHref({ href: '#contact' }, onHome)} className="cta">Get in Touch <Arrow size={14} /></a>
            <button className="menu-toggle" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? 'open' : ''}`.trim()}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className={`menu-panel ${menuOpen ? 'open' : ''}`.trim()} aria-hidden={!menuOpen}>
        <div className="menu-head">
          <Logo />
          <button className="menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="menu-nav">
          {NAV.map((item) => (
            <NavLink key={item.label} item={item} onHome={onHome} onClick={() => setMenuOpen(false)}>
              {item.label} <Arrow size={14} />
            </NavLink>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={navHref({ href: '#contact' }, onHome)} className="cta" onClick={() => setMenuOpen(false)}>Get in Touch <Arrow size={14} /></a>
          <div className="menu-tagline">One stop solutions to all your furniture needs.</div>
          <SocialRow />
        </div>
      </aside>
    </>
  );
}

const FOOTER_COLUMNS = [
  { heading: 'Collections', links: ['Sofas', 'Dining', 'Bedroom', 'Office', 'Outdoor'] },
  { heading: 'Company', links: ['About Us', 'Our Story', 'Careers', 'Contact Us'] },
  { heading: 'Support', links: ['FAQs', 'Shipping & Delivery', 'Returns', 'Warranty'] },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms & Conditions'] },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Crafting furniture that inspires beautiful spaces and better living.</p>
            <SocialRow />
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2024 Furniconcepts. All rights reserved.</span>
          <a
            href="#"
            className="back-top-link"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="back-top">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </span>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
