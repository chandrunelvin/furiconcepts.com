import { lockScroll } from '../lib/scrollLock.js';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { Icon, useParallax } from '../components/BlogParts.jsx';
import { Arrow, SiteFooter, SiteHeader, brandLogo } from '../components/Home2Chrome.jsx';
import { BRAND_FILES } from '../data/brandProfiles.js';
import { COUNTRIES } from '../data/contact.js';
import { FC_COLLECTIONS, getFcCollection } from '../data/fcProfiles.js';
import { PROFILES } from '../data/profiles.js';
import { HONEYPOT, sendForm } from '../lib/forms.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

/**
 * The Download Profiles pages, built from the blog and brand pages' parts:
 *   /download-profiles                          every brand
 *   /download-profiles/<brand>                  one brand's PDFs
 *   /download-profiles/furniconcepts            Furniconcepts' collections
 *   /download-profiles/furniconcepts/<slug>     one collection's PDFs
 */
// the flipbook (pdf.js + page curl) loads only when a catalogue is opened
const FlipBook = lazy(() => import('../components/FlipBook.jsx'));

const ROOT = '/download-profiles';
const FC = `${ROOT}/furniconcepts`;

const REVEAL_GROUPS = [
  '.brand-feature',
  '.blog-list-head > *',
  '.profile-card, .cert-link',
  '.brand-why-copy > *, .brand-why-points li',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

const FC_FILE_COUNT = FC_COLLECTIONS.reduce((n, c) => n + c.files.length, 0);
const fileCount = (slug) => (slug === 'furniconcepts' ? FC_FILE_COUNT : BRAND_FILES[slug]?.files.length ?? 0);
const TOTAL_FILES = Object.keys(BRAND_FILES).reduce((n, s) => n + fileCount(s), FC_FILE_COUNT);

const slugOf = (profile) => profile.path.split('/').pop();
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** Logos come from the brand menu; a couple of profile names differ from it. */
const LOGO_NAMES = { Scab: 'Scab Italy' };
const logoFor = (name) =>
  name === 'Furniconcepts' ? '/images/furni-logo.png' : brandLogo(LOGO_NAMES[name] ?? name);

export const DownloadIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

/* ---------- download form ---------- */

/**
 * A catalogue downloads only after the visitor fills a short form, which is
 * emailed to the team. The form shows for every download; details a visitor
 * gave before are filled in for them, so a repeat download is one click.
 */
const LEAD_KEY = 'fc-download-details';
const readLead = () => {
  try { return JSON.parse(localStorage.getItem(LEAD_KEY)); } catch { return null; }
};
const saveLead = (lead) => {
  try { localStorage.setItem(LEAD_KEY, JSON.stringify(lead)); } catch { /* private mode: ask again next time */ }
};

/** Starts a browser download of a file on this site. */
function startDownload(file) {
  const a = document.createElement('a');
  a.href = file.pdf;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Emails one download to the team; a failed send never blocks the download. */
const reportDownload = (file, brand, lead) =>
  sendForm('download', {
    ...lead,
    catalogue: file.title,
    brand,
    file: new URL(file.pdf, window.location.origin).href,
  }).catch(() => {});

/** `request(file)` opens the download form; render `form` somewhere on the page. */
export function useDownloadGate(brand) {
  const [pending, setPending] = useState(null);
  const request = useCallback((file) => setPending(file), []);
  const close = useCallback(() => setPending(null), []);
  const form = pending && <DownloadForm file={pending} brand={brand} onClose={close} />;
  return { request, form };
}

function DownloadForm({ file, brand, onClose }) {
  const [sending, setSending] = useState(false);
  const saved = readLead() ?? {};
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const unlock = lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlock();
    };
  }, [onClose]);

  const submit = async (e) => {
    e.preventDefault();
    const { botcheck, ...lead } = Object.fromEntries(new FormData(e.currentTarget));
    if (botcheck) { onClose(); return; }
    setSending(true);
    saveLead(lead);
    await reportDownload(file, brand, lead);
    startDownload(file);
    onClose();
  };

  return (
    <div className="pdf-viewer download-gate" role="dialog" aria-modal="true" aria-labelledby="download-gate-title">
      <div className="pdf-viewer-backdrop" onClick={onClose} />
      <div className="download-gate-panel">
        <button type="button" className="pdf-viewer-close download-gate-close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="eyebrow">Download Catalogue</div>
        <h2 id="download-gate-title">{file.title}</h2>
        <p className="download-gate-intro">Fill in your details and the download will start straight away.</p>
        <form className="contact-form" onSubmit={submit}>
          <input {...HONEYPOT} />
          <div className="field-row">
            <input type="text" name="name" placeholder="Your Name *" required aria-label="Your name" autoComplete="name" defaultValue={saved.name} />
            <input type="email" name="email" placeholder="Email Address *" required aria-label="Email address" autoComplete="email" defaultValue={saved.email} />
          </div>
          <div className="field-row">
            <input type="tel" name="phone" placeholder="Phone Number *" required aria-label="Phone number" autoComplete="tel" defaultValue={saved.phone} />
            <select name="country" required defaultValue={saved.country ?? ''} aria-label="Select country">
              <option value="" disabled>Select Country *</option>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <input type="text" name="company" placeholder="Company Name" aria-label="Company name" autoComplete="organization" defaultValue={saved.company} />
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? 'Starting download…' : 'Download'} <DownloadIcon size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------- shared sections ---------- */

/** The blog's photo banner, held still rather than drifting with the scroll. */
export function Hero({ image, crumbs, title, text, logo, logoAlt = '' }) {
  return (
    <section className="blog-hero profiles-hero">
      <div className="blog-hero-media" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="wrap blog-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {crumbs.map(([label, to]) => (
            <span className="crumb" key={label}>
              <Link to={to}>{label}</Link>
              <Icon name="chevron" />
            </span>
          ))}
          <span aria-current="page">{title}</span>
        </nav>
        {logo && <div className="hero-brand-logo profiles-hero-logo"><img src={logo} alt={logoAlt} /></div>}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function Features({ items }) {
  return (
    <section className="brand-features">
      <div className="wrap brand-features-inner" style={{ '--n': items.length }}>
        {items.map(([icon, label]) => (
          <div className="brand-feature" key={label}>
            <span className="profiles-feature-icon"><Icon name={icon} /></span>
            <span className="brand-feature-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="blog-list-head profiles-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function HelpBand() {
  const layer = useParallax(0.4);
  return (
    <section className="brand-why">
      <div className="brand-why-media" aria-hidden="true">
        <div className="img-parallax" ref={layer}>
          <img src="/images/cavaletti/showroom.jpg" alt="" loading="lazy" />
        </div>
      </div>
      <div className="wrap brand-why-inner">
        <div className="brand-why-copy">
          <div className="eyebrow">Need Something Specific?</div>
          <h2>Can&apos;t find the catalogue you need?</h2>
          <p>
            Tell us the brand, range or project you are planning and our team will send the latest
            editions, price lists and finish samples straight to your inbox.
          </p>
          <Link to="/contact" className="btn-primary profiles-band-cta">Get in Touch <Arrow size={14} /></Link>
        </div>
        <ul className="brand-why-points">
          <li><Icon name="doc" /><span>{TOTAL_FILES} catalogues online</span></li>
          <li><Icon name="building" /><span>{PROFILES.length} brands, one supplier</span></li>
          <li><Icon name="user" /><span>Dubai, Chennai &amp; Singapore teams</span></li>
          <li><Icon name="check" /><span>Free to view, quick form to download</span></li>
        </ul>
      </div>
    </section>
  );
}

/**
 * The PDF opens in a viewer over the page, as a flipbook whose pages turn like
 * a printed catalogue, on phones too. `fit` keeps the plain PDF frame showing
 * a whole page at once (single-page certificates); image files are shown
 * whole, scaled to the window. If a PDF can't be drawn as a book, the viewer
 * falls back to the browser's own PDF frame.
 */
export function PdfViewer({ file, onClose, fit = false, onDownload }) {
  const isImage = /\.(jpe?g|png|webp|gif)$/i.test(file.pdf);
  const [plain, setPlain] = useState(fit);
  const toPlain = useCallback(() => setPlain(true), []);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const unlock = lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlock();
    };
  }, [onClose]);

  return (
    <div className="pdf-viewer" role="dialog" aria-modal="true" aria-label={file.title}>
      <div className="pdf-viewer-backdrop" onClick={onClose} />
      <div className="pdf-viewer-panel">
        <div className="pdf-viewer-bar">
          <div className="pdf-viewer-title">{file.title}</div>
          <a href={file.pdf} download className="btn-primary"
             onClick={onDownload && ((e) => { e.preventDefault(); onDownload(file); })}>
            Download <DownloadIcon size={14} />
          </a>
          <button type="button" className="pdf-viewer-close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        {isImage
          ? <div className="pdf-viewer-image"><img src={file.pdf} alt={file.title} /></div>
          : plain
            ? <iframe src={fit ? `${file.pdf}#view=Fit` : file.pdf} title={file.title} />
            : (
              <Suspense fallback={<div className="flipbook"><div className="flipbook-loading" role="status">Opening catalogue…</div></div>}>
                <FlipBook src={file.pdf} title={file.title} onFail={toPlain} />
              </Suspense>
            )}
      </div>
    </div>
  );
}

/** A brand's PDFs as cards, plus any dealership certificates beneath them. */
function FileSection({ brand, files, certs = [], eyebrow, title, back = [ROOT, 'All Brands'] }) {
  const [open, setOpen] = useState(null);
  const close = () => setOpen(null);
  const gate = useDownloadGate(brand);
  const download = (e, file) => {
    e.preventDefault();
    gate.request(file);
  };

  // catalogues open as a flipbook everywhere; a certificate on a phone opens
  // in its own tab, since a phone can't show a plain PDF frame
  const view = (e, file, isCert = false) => {
    if (isCert && window.matchMedia('(max-width: 760px)').matches) return;
    e.preventDefault();
    setOpen(file);
  };

  return (
    <section className="blog-main profiles-main">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title}>
          <Link to={back[0]} className="link-arrow">{back[1]} <Arrow size={14} /></Link>
        </SectionHead>
        <div className="profiles-grid is-files">
          {files.map((file) => (
            <article className="blog-card profile-card" key={file.pdf}>
              <a href={file.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, file)}
                 className="blog-card-media profile-media doc-media" tabIndex={-1} aria-hidden="true">
                <img src={file.cover} alt="" loading="lazy" />
                <span className="profile-badge">PDF</span>
              </a>
              <div className="blog-card-body">
                <span className="blog-tag">{brand}</span>
                <h3>
                  <a href={file.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, file)}>{file.title}</a>
                </h3>
                <div className="profile-actions">
                  <a href={file.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, file)} className="link-arrow">
                    View Catalogue <Arrow size={13} />
                  </a>
                  <a href={file.pdf} download className="profile-download" aria-label={`Download ${file.title}`} onClick={(e) => download(e, file)}>
                    <DownloadIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {certs.length > 0 && (
          <div className="cert-row">
            <h5>Dealership Certificates</h5>
            <div className="cert-links">
              {certs.map((cert) => (
                <a className="cert-link" href={cert.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, cert, true)} key={cert.pdf}>
                  <Icon name="doc" /> {cert.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      {open && <PdfViewer file={open} onClose={close} onDownload={gate.request} fit={certs.includes(open)} />}
      {gate.form}
    </section>
  );
}

/* ---------- pages ---------- */

function AllBrands() {
  return (
    <>
      <Hero
        image="/images/about-us/about-hero-bg.webp"
        crumbs={[['Home', '/']]}
        title="Download Profiles"
        text="Company profiles, catalogues and certificates from Furniconcepts and every partner brand."
      />
      <Features items={[
        ['doc', `${TOTAL_FILES} Catalogues`],
        ['building', `${PROFILES.length} Brands`],
        ['search', 'View Online'],
        ['check', 'Free PDF Downloads'],
      ]} />
      <section className="blog-main profiles-main">
        <div className="wrap">
          <SectionHead eyebrow="Our Brands" title="Browse Catalogues by Brand" />
          <div className="profiles-grid">
            {PROFILES.map((p) => {
              const n = fileCount(slugOf(p));
              const logo = logoFor(p.name);
              return (
                <article className="blog-card profile-card" key={p.name}>
                  <Link to={p.path} className="blog-card-media profile-media" tabIndex={-1} aria-hidden="true">
                    <img src={p.cover} alt="" loading="lazy" />
                    {logo && <span className="profile-logo"><img src={logo} alt="" /></span>}
                  </Link>
                  <div className="blog-card-body">
                    <span className="blog-tag">{n ? plural(n, 'Catalogue') : 'Brand Page'}</span>
                    <h3><Link to={p.path}>{p.name}</Link></h3>
                    <p>{p.title}</p>
                    <Link to={p.path} className="link-arrow" aria-label={`Browse ${p.name} catalogues`}>
                      {n ? 'Browse Catalogues' : 'View Brand'} <Arrow size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <HelpBand />
    </>
  );
}

function FcCollections() {
  return (
    <>
      <Hero
        image="/images/common/hero1.webp"
        crumbs={[['Home', '/'], ['Download Profiles', ROOT]]}
        logo="/images/furni-logo.png"
        logoAlt="Furniconcepts logo"
        title="Furniconcepts Profiles"
        text="Our own company profiles and catalogues, grouped by collection."
      />
      <Features items={[
        ['doc', `${FC_FILE_COUNT} Catalogues`],
        ['grid', `${FC_COLLECTIONS.length} Collections`],
        ['building', 'Dubai, Chennai & Singapore'],
        ['check', 'Free PDF Downloads'],
      ]} />
      <section className="blog-main profiles-main">
        <div className="wrap">
          <SectionHead eyebrow="Furniconcepts" title="Explore Our Collections">
            <Link to={ROOT} className="link-arrow">All Brands <Arrow size={14} /></Link>
          </SectionHead>
          <div className="profiles-grid">
            {FC_COLLECTIONS.map((c) => (
              <article className="blog-card profile-card" key={c.slug}>
                <Link to={`${FC}/${c.slug}`} className="blog-card-media profile-media" tabIndex={-1} aria-hidden="true">
                  <img src={c.cover} alt="" loading="lazy" />
                </Link>
                <div className="blog-card-body">
                  <span className="blog-tag">{plural(c.files.length, 'Catalogue')}</span>
                  <h3><Link to={`${FC}/${c.slug}`}>{c.title}</Link></h3>
                  <p>{c.desc}</p>
                  <Link to={`${FC}/${c.slug}`} className="link-arrow" aria-label={`View ${c.title}`}>
                    View Collection <Arrow size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HelpBand />
    </>
  );
}

function FcCollection({ item }) {
  return (
    <>
      <Hero
        image={item.cover}
        crumbs={[['Home', '/'], ['Download Profiles', ROOT], ['Furniconcepts', FC]]}
        title={item.title}
        text={item.desc}
      />
      <FileSection
        brand="Furniconcepts"
        files={item.files}
        eyebrow={plural(item.files.length, 'Catalogue')}
        title={`${item.title} Catalogues`}
        back={[FC, 'All Collections']}
      />
      <HelpBand />
    </>
  );
}

function BrandProfiles({ profile, data }) {
  return (
    <>
      <Hero
        image={profile.cover}
        crumbs={[['Home', '/'], ['Download Profiles', ROOT]]}
        logo={logoFor(profile.name)}
        logoAlt={`${profile.name} logo`}
        title={`${profile.name} Profiles`}
        text={profile.title}
      />
      <FileSection
        brand={profile.name}
        files={data.files}
        certs={data.certs}
        eyebrow={plural(data.files.length, 'Catalogue')}
        title={`${profile.name} Catalogues & Brochures`}
      />
      <HelpBand />
    </>
  );
}

function Missing() {
  return (
    <>
      <Hero
        image="/images/about-us/about-hero-bg.webp"
        crumbs={[['Home', '/'], ['Download Profiles', ROOT]]}
        title="Not Found"
        text="Those profiles may have been renamed. Browse every brand's catalogues instead."
      />
      <section className="catalog-missing">
        <div className="wrap">
          <Link to={ROOT} className="btn-primary">All Download Profiles <Arrow /></Link>
        </div>
      </section>
    </>
  );
}

function Content({ brand, collection }) {
  if (!brand) return <AllBrands />;
  if (brand === 'furniconcepts') {
    if (!collection) return <FcCollections />;
    const item = getFcCollection(collection);
    return item ? <FcCollection item={item} /> : <Missing />;
  }
  const profile = PROFILES.find((p) => p.path === `${ROOT}/${brand}`);
  const data = BRAND_FILES[brand];
  return profile && data && !collection ? <BrandProfiles profile={profile} data={data} /> : <Missing />;
}

export default function ProfileLibrary({ brand, collection }) {
  useReveal(REVEAL_GROUPS);

  return (
    <div className="home2 profiles-page">
      <SiteHeader onHome={false} active="" />
      <Content brand={brand} collection={collection} />
      <SiteFooter />
    </div>
  );
}
