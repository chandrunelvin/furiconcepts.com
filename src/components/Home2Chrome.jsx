import { useEffect, useState } from 'react';
import { Link } from '../router.jsx';

/**
 * Header, slide-out menu and footer shared by the Home2 page and the brand
 * catalogue pages. Everything here relies on the .home2 stylesheet, so any
 * page using it must render inside an element with the `home2` class.
 */

/**
 * The brand list carried over from the old site's Brands dropdown
 * (furniconcepts.com/brands-view.php), in the same order, plus Bestuhl and
 * Merryfair. Each one opens its brand page (/brands/<slug>).
 * Logos are the ones furniconcepts.sg uses for the same brands.
 */
const logo = (file) => `/images/brand-logo/${file}`;

export const BRAND_MENU = [
  { label: 'Cavaletti', path: '/brands/cavaletti', logo: logo('cavaletti-cadeiras-profissionais-seeklogo.png') },
  { label: 'Gebbwork', path: '/brands/gebbwork', logo: logo('gebbwork-logo.png') },
  { label: 'Leadcom', path: '/brands/leadcom', logo: logo('leadcom-logo.png') },
  { label: 'Forma5', path: '/brands/forma5', logo: logo('forma5-logo.png') },
  { label: 'Broad Power', path: '/brands/broad-power', logo: logo('broad-power-logo.png') },
  { label: 'Musepod', path: '/brands/musepod', logo: logo('musepod-logo.jpeg') },
  { label: 'Zumbooth', path: '/brands/zumbooth', logo: logo('zumbooth-logo.png') },
  { label: 'Libero Italy', path: '/brands/libero-italy', logo: logo('libero-logo.png') },
  { label: 'Nitrocare', path: '/brands/nitrocare', logo: logo('nitrocare-logo.jpeg') },
  { label: 'Jwesys', path: '/brands/jwesys', logo: logo('jwesys-logo.png') },
  { label: 'Audia Italia', path: '/brands/audia-italia', logo: logo('audia-logo.png') },
  { label: 'Scab Italy', path: '/brands/scab-italy', logo: logo('scab-logo.webp') },
  { label: 'Markant', path: '/brands/markant', logo: logo('markant-logo.webp') },
  { label: 'Worklyffe', path: '/brands/worklyffe', logo: logo('worklyffe-logo.png') },
  { label: 'Parin', path: '/brands/parin', logo: logo('PARIN_LOGO.png') },
  { label: 'Bestuhl', path: '/brands/bestuhl', logo: logo('bestuhl-logo.webp') },
  { label: 'Merryfair', path: '/brands/merryfair', logo: logo('merryfair_logo.png') },
  { label: 'Safe Lockers', path: '/brands/safe-lockers', logo: logo('vssafebox-safe-lockers-logo.png') },
];

/** A brand's logo by name; spacing and case are ignored ("Gebb Work" = "Gebbwork"). */
const brandKey = (name) => name.toLowerCase().replace(/\s+/g, '');
export const brandLogo = (name) =>
  BRAND_MENU.find((b) => brandKey(b.label) === brandKey(name))?.logo;

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about', path: '/about' },
  { label: 'Brands', path: '/brands/cavaletti', children: BRAND_MENU },
  { label: 'Categories', href: '#collections' },
  { label: 'Catalogs', href: '#catalogs' },
  { label: 'Projects', href: '#journal' },
  { label: 'Blog', path: '/blog' },
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
  // the Pinterest "P" is a filled mark, scaled down to sit level with the outlined icons
  { label: 'Pinterest', path: <path transform="translate(1.8 1.8) scale(.85)" fill="currentColor" stroke="none" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /> },
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
  const [openGroup, setOpenGroup] = useState(null);

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
                <li key={item.label} className={item.children ? 'has-sub' : undefined}>
                  <NavLink item={item} onHome={onHome} className={item.label === active ? 'active' : undefined}>
                    {item.label}
                    {item.children && (
                      <svg className="sub-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </NavLink>
                  {item.children && (
                    <ul className="sub-menu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavLink item={child} onHome={onHome} className={child.logo ? 'sub-logo' : undefined}>
                            {child.logo ? <img src={child.logo} alt={child.label} loading="lazy" /> : child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right">
            <svg className="icon-btn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <Link to="/contact" className="cta">Get in Touch <Arrow size={14} /></Link>
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
          {NAV.map((item) =>
            item.children ? (
              <div className={`menu-group ${openGroup === item.label ? 'open' : ''}`.trim()} key={item.label}>
                <button
                  type="button"
                  className="menu-group-toggle"
                  aria-expanded={openGroup === item.label}
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openGroup === item.label && (
                  <div className={`menu-group-links ${item.children.some((c) => c.logo) ? 'logos' : ''}`.trim()}>
                    {item.children.map((child) => (
                      <NavLink key={child.label} item={child} onHome={onHome} onClick={() => setMenuOpen(false)}>
                        {child.logo
                          ? <img src={child.logo} alt={child.label} loading="lazy" />
                          : <>{child.label} <Arrow size={13} /></>}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} item={item} onHome={onHome} onClick={() => setMenuOpen(false)}>
                {item.label} <Arrow size={14} />
              </NavLink>
            )
          )}
        </nav>
        <div className="menu-foot">
          <Link to="/contact" className="cta" onClick={() => setMenuOpen(false)}>Get in Touch <Arrow size={14} /></Link>
          <div className="menu-tagline">One stop solutions to all your furniture needs.</div>
          <SocialRow />
        </div>
      </aside>
    </>
  );
}

const FOOTER_COLUMNS = [
  { heading: 'Collections', links: ['Sofas', 'Dining', 'Bedroom', 'Office', 'Outdoor'] },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      'Our Story',
      'Careers',
      { label: 'Download Profiles', path: '/download-profiles' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  { heading: 'Support', links: ['FAQs', 'Shipping & Delivery', 'Returns', 'Warranty'] },
  { heading: 'Legal', links: ['Privacy Policy', 'Terms & Conditions'] },
];

/**
 * The newsletter band sits directly above the footer, so it ships with it and
 * appears on every page rather than only on the home page.
 */
const NEWSLETTER_COPY = {
  eyebrow: "Let's Stay Connected",
  title: 'Get Inspired, Every Month',
  text: 'Subscribe to our newsletter for the latest collections, ideas and exclusive offers.',
};

/** `copy` swaps the band's wording per page; a `note` adds a line under the form. */
export function Newsletter({ copy = NEWSLETTER_COPY }) {
  const [email, setEmail] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    setEmail('Subscribed!');
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-media" aria-hidden="true">
        <img src="/images/common/cornerimage-footer.webp" alt="" loading="lazy" />
      </div>
      <div className="newsletter-body">
        <div>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2>{copy.title}</h2>
          <p>{copy.text}</p>
        </div>
        <div className="sub-form-wrap">
          <form className="sub-form" onSubmit={subscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe <Arrow size={14} /></button>
          </form>
          {copy.note && <p className="sub-note">{copy.note}</p>}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ newsletter }) {
  return (
    <>
    <Newsletter copy={newsletter} />
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
                {col.links.map((link) =>
                  typeof link === 'string'
                    ? <li key={link}><a href="#">{link}</a></li>
                    : <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Furniconcepts. All rights reserved.</span>
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
    </>
  );
}
