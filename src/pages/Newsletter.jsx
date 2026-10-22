import { useState } from 'react';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { NEWSLETTERS, NEWSLETTER_YEARS } from '../data/newsletters.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import { DownloadIcon, Features, Hero, PdfViewer } from './ProfileLibrary.jsx';
import '../styles/home2.css';

/**
 * The Furnijournal newsletter archive (/newsletter.php, the old site's URL):
 * every issue by year. Issues open in the Download Profiles PDF viewer;
 * phones get the PDF in a new tab instead.
 */
const REVEAL_GROUPS = [
  '.brand-feature',
  '.blog-list-head > *',
  '.profile-card',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];


/** The band above the footer becomes the sign-up for this page. */
const SIGNUP = {
  eyebrow: 'Never Miss an Issue',
  title: 'Get Furnijournal Every Month',
  text: 'Subscribe for project stories, product launches and exclusive updates from Furniconcepts.',
};

/** Wide screens open the PDF over the page; phones follow the link. */
function useViewer() {
  const [open, setOpen] = useState(null);
  const view = (e, issue) => {
    if (window.matchMedia('(max-width: 760px)').matches) return;
    e.preventDefault();
    setOpen(issue);
  };
  const viewer = open && <PdfViewer file={open} onClose={() => setOpen(null)} />;
  return [view, viewer];
}

function Archive({ view }) {
  const [year, setYear] = useState(NEWSLETTER_YEARS[0]);
  const issues = NEWSLETTERS.filter((n) => n.year === year);

  return (
    <section className="blog-main profiles-main" id="archive">
      <div className="wrap">
        <div className="blog-list-head profiles-head">
          <div>
            <div className="eyebrow">The Archive</div>
            <h2>Every Issue of Furnijournal</h2>
          </div>
          <div className="brand-tabs nl-years" role="tablist" aria-label="Year">
            {NEWSLETTER_YEARS.map((y) => (
              <button
                type="button"
                role="tab"
                aria-selected={y === year}
                className={`brand-tab ${y === year ? 'active' : ''}`.trim()}
                onClick={() => setYear(y)}
                key={y}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
        <div className="profiles-grid" key={year}>
          {issues.map((n) => (
            <article className="blog-card profile-card" key={n.id}>
              <a href={n.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, n)}
                 className="blog-card-media profile-media doc-media" tabIndex={-1} aria-hidden="true">
                <img src={n.cover} alt="" loading="lazy" />
                <span className="profile-badge">VOL. {String(n.vol).padStart(2, '0')}</span>
              </a>
              <div className="blog-card-body">
                <span className="blog-tag">{n.month} {n.year}</span>
                <h3>
                  <a href={n.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, n)}>{n.story}</a>
                </h3>
                {n.project && (
                  <Link to={n.project} className="nl-project">See the project <Arrow size={12} /></Link>
                )}
                <div className="profile-actions">
                  <a href={n.pdf} target="_blank" rel="noopener" onClick={(e) => view(e, n)} className="link-arrow">
                    Read Issue <Arrow size={13} />
                  </a>
                  <a href={n.pdf} download className="profile-download" aria-label={`Download ${n.title}`}>
                    <DownloadIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Newsletter() {
  useReveal(REVEAL_GROUPS);
  const [view, viewer] = useViewer();

  return (
    <div className="home2 profiles-page newsletter-page">
      <SiteHeader onHome={false} active="About Us" />
      <Hero
        image="/images/projects/star-cinemas/banner.webp"
        crumbs={[['Home', '/'], ['About Us', '/about']]}
        title="Furnijournal Newsletter"
        text="Shape of Spaces: project stories, product launches, design trends and company news from Furniconcepts, every month."
      />
      <Features items={[
        ['doc', `${NEWSLETTERS.length} Issues`],
        ['calendar', 'Published Monthly'],
        ['search', 'Read Online'],
        ['check', 'Free PDF Downloads'],
      ]} />
      <Archive view={view} />
      {viewer}
      <SiteFooter newsletter={SIGNUP} />
    </div>
  );
}
