import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../components/BlogParts.jsx';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { PROJECTS, getProject } from '../data/projects.js';
import { prefersReducedMotion } from '../lib/scroll.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

const ROOT = '/projects';
const pad = (n) => String(n).padStart(2, '0');
const banner = (p) => p.media[0];
const isVideo = (m) => typeof m === 'object';

/* ======================================================================
   /projects — one full-screen project at a time, as on the old site.
   Wheel, arrow keys, swipe and the numbered rail all step one project.
   ====================================================================== */
function ProjectsSlider() {
  const [index, setIndex] = useState(0);
  const [seen, setSeen] = useState(() => new Set([0, 1]));
  const lock = useRef(false);
  const rail = useRef(null);
  const count = PROJECTS.length;

  const go = useCallback((next) => {
    const i = Math.max(0, Math.min(count - 1, next));
    setIndex(i);
    // load the banner shown and its neighbours, keep the ones already seen
    setSeen((s) => new Set([...s, i - 1, i, i + 1]));
  }, [count]);

  const step = useCallback((dir) => {
    if (lock.current) return;
    lock.current = true;
    setTimeout(() => { lock.current = false; }, prefersReducedMotion() ? 250 : 900);
    setIndex((i) => {
      const next = Math.max(0, Math.min(count - 1, i + dir));
      setSeen((s) => new Set([...s, next - 1, next, next + 1]));
      return next;
    });
  }, [count]);

  // the slider owns the viewport, so the page itself never scrolls
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => { html.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (e.target.closest?.('.menu-panel, .proj-rail')) return;
      e.preventDefault();
      if (Math.abs(e.deltaY) < 8) return;
      step(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e) => {
      if (['ArrowDown', 'PageDown', 'ArrowRight', ' '].includes(e.key)) { e.preventDefault(); step(1); }
      if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); step(-1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(count - 1);
    };
    let startY = null;
    const onTouchStart = (e) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      if (startY === null) return;
      const dy = startY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) step(dy > 0 ? 1 : -1);
      startY = null;
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [step, go, count]);

  // keep the active number centred in the rail
  useEffect(() => {
    const el = rail.current?.querySelector('.is-active');
    if (!el) return;
    const box = rail.current;
    box.scrollTo({
      top: el.offsetTop - box.clientHeight / 2 + el.clientHeight / 2,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [index]);

  const current = PROJECTS[index];

  return (
    <div className="home2 projects-page">
      <SiteHeader onHome={false} active="Projects" />
      <h1 className="sr-only">Completed Projects</h1>

      <div className="proj-stage" aria-roledescription="carousel" aria-label="Completed projects">
        {PROJECTS.map((p, i) => (
          <section
            className={`proj-slide ${i === index ? 'is-active' : ''} ${i < index ? 'is-past' : ''}`.trim()}
            key={p.slug}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${p.title}`}
          >
            <div className="proj-media">
              {seen.has(i) && <img src={banner(p)} alt="" />}
            </div>
            <div className="wrap proj-copy">
              <div className="proj-num">{pad(i + 1)} <span>/ {pad(count)}</span></div>
              <h2 className="proj-title">
                <Link to={`${ROOT}/${p.slug}`} tabIndex={i === index ? 0 : -1}>{p.title}</Link>
              </h2>
              <div className="proj-sub">{p.subtitle}</div>
              <Link to={`${ROOT}/${p.slug}`} className="proj-view" tabIndex={i === index ? 0 : -1}>
                View Project <Arrow size={14} />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <nav className="proj-rail-wrap" aria-label="Projects">
        <div className="proj-rail" ref={rail}>
          {PROJECTS.map((p, i) => (
            <button
              type="button"
              key={p.slug}
              className={i === index ? 'is-active' : undefined}
              aria-current={i === index ? 'true' : undefined}
              aria-label={`${pad(i + 1)} ${p.title}`}
              onClick={() => go(i)}
            >
              {pad(i + 1)}
            </button>
          ))}
        </div>
        <div className="proj-progress" aria-hidden="true">
          <span style={{ height: `${((index + 1) / count) * 100}%` }} />
        </div>
      </nav>

      <div className="proj-controls">
        <button type="button" aria-label="Previous project" disabled={index === 0} onClick={() => step(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </button>
        <button type="button" aria-label="Next project" disabled={index === count - 1} onClick={() => step(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </button>
      </div>
      <div className="proj-hint" aria-hidden="true">Scroll to explore · {current.title}</div>
    </div>
  );
}

/* ======================================================================
   /projects/<slug> — the project's banner, then its full gallery.
   ====================================================================== */
function Lightbox({ items, start, title, onClose }) {
  const [i, setI] = useState(start);
  const n = items.length;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI((v) => (v + 1) % n);
      if (e.key === 'ArrowLeft') setI((v) => (v - 1 + n) % n);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [n, onClose]);
  const m = items[i];
  return (
    <div className="proj-lightbox" role="dialog" aria-modal="true" aria-label={`${title} — photo ${i + 1} of ${n}`}>
      <div className="proj-lightbox-backdrop" onClick={onClose} />
      <div className="proj-lightbox-bar">
        <span>{pad(i + 1)} / {pad(n)}</span>
        <button type="button" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <figure className="proj-lightbox-media">
        {isVideo(m)
          ? <video src={m.video} poster={m.poster} controls autoPlay playsInline key={m.video} />
          : <img src={m} alt={`${title} — photo ${i + 1}`} key={m} />}
      </figure>
      <button type="button" className="proj-lightbox-nav prev" aria-label="Previous photo" onClick={() => setI((v) => (v - 1 + n) % n)}>
        <Icon name="back" />
      </button>
      <button type="button" className="proj-lightbox-nav next" aria-label="Next photo" onClick={() => setI((v) => (v + 1) % n)}>
        <Arrow size={20} width={2} />
      </button>
    </div>
  );
}

function ProjectDetail({ project }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  useReveal(['.proj-gallery-item', '.proj-next', 'footer .footer-brand, footer .footer-col, footer .footer-bottom']);

  const i = PROJECTS.indexOf(project);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const photos = project.media.filter((m) => !isVideo(m)).length;
  const videos = project.media.length - photos;

  return (
    <div className="home2 profiles-page project-page">
      <SiteHeader onHome={false} active="Projects" />

      <section className="blog-hero profiles-hero">
        <div className="blog-hero-media" aria-hidden="true"><img src={banner(project)} alt="" /></div>
        <div className="wrap blog-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span className="crumb"><Link to="/">Home</Link><Icon name="chevron" /></span>
            <span className="crumb"><Link to={ROOT}>Projects</Link><Icon name="chevron" /></span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </div>
      </section>

      <section className="brand-features">
        <div className="wrap brand-features-inner" style={{ '--n': videos ? 4 : 3 }}>
          <div className="brand-feature"><span className="profiles-feature-icon"><Icon name="building" /></span><span className="brand-feature-label">{project.subtitle}</span></div>
          <div className="brand-feature"><span className="profiles-feature-icon"><Icon name="grid" /></span><span className="brand-feature-label">{photos} Photos</span></div>
          {videos > 0 && <div className="brand-feature"><span className="profiles-feature-icon"><Icon name="clock" /></span><span className="brand-feature-label">{videos} Video{videos > 1 ? 's' : ''}</span></div>}
          <div className="brand-feature"><span className="profiles-feature-icon"><Icon name="check" /></span><span className="brand-feature-label">Completed by Furniconcepts</span></div>
        </div>
      </section>

      <section className="blog-main proj-gallery-section">
        <div className="wrap">
          <div className="blog-list-head profiles-head">
            <div>
              <div className="eyebrow">Project Gallery</div>
              <h2>{project.title}</h2>
            </div>
            <Link to={ROOT} className="link-arrow">All Projects <Arrow size={14} /></Link>
          </div>
          <div className="proj-gallery">
            {project.media.map((m, k) => (
              <button type="button" className={`proj-gallery-item ${isVideo(m) ? 'is-video' : ''}`.trim()} key={isVideo(m) ? m.video : m} onClick={() => setOpen(k)} aria-label={`Open ${isVideo(m) ? 'video' : 'photo'} ${k + 1}`}>
                {isVideo(m)
                  ? <><img src={m.poster} alt="" loading="lazy" /><span className="proj-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span></>
                  : <img src={m} alt="" loading="lazy" />}
              </button>
            ))}
          </div>

          <div className="proj-next">
            <Link to={`${ROOT}/${prev.slug}`} className="proj-next-link prev">
              <span className="proj-next-thumb"><img src={banner(prev)} alt="" loading="lazy" /></span>
              <span><span className="proj-next-label">Previous Project</span><span className="proj-next-title">{prev.title}</span></span>
            </Link>
            <Link to={`${ROOT}/${next.slug}`} className="proj-next-link next">
              <span><span className="proj-next-label">Next Project</span><span className="proj-next-title">{next.title}</span></span>
              <span className="proj-next-thumb"><img src={banner(next)} alt="" loading="lazy" /></span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      {open !== null && <Lightbox items={project.media} start={open} title={project.title} onClose={close} />}
    </div>
  );
}

function Missing() {
  return (
    <div className="home2 catalog-page">
      <SiteHeader onHome={false} active="Projects" />
      <section className="catalog-missing">
        <div className="wrap">
          <div className="eyebrow">Not Found</div>
          <h1>That project isn&apos;t here</h1>
          <p>It may have been renamed. Browse every completed project instead.</p>
          <Link to={ROOT} className="btn-primary">All Projects <Arrow /></Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export default function Projects({ slug }) {
  if (!slug) return <ProjectsSlider />;
  const project = getProject(slug);
  return project ? <ProjectDetail project={project} /> : <Missing />;
}
