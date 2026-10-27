import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { TOP_CATEGORIES } from '../data/categories.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import { Hero } from './ProfileLibrary.jsx';
import '../styles/home2.css';

/**
 * Every top-level category on one page (/categories): the target of the
 * home page's "Explore Categories" links and the header's Categories item.
 */
const REVEAL_GROUPS = [
  '.blog-list-head > *',
  '.categories-grid .space-card',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

export default function Categories() {
  useReveal(REVEAL_GROUPS);

  return (
    <div className="home2 profiles-page categories-page">
      <SiteHeader onHome={false} active="Categories" />
      <Hero
        image={TOP_CATEGORIES[0].hero}
        crumbs={[['Home', '/']]}
        title="Our Categories"
        text={`Furniture for every space: the ${TOP_CATEGORIES.length} categories we supply and install across the UAE, India and Singapore.`}
      />
      <section className="blog-main profiles-main">
        <div className="wrap">
          <div className="blog-list-head profiles-head">
            <div>
              <div className="eyebrow">Furniture for Every Space</div>
              <h2>Explore by Category</h2>
            </div>
          </div>
          <div className="categories-grid">
            {TOP_CATEGORIES.map((c) => (
              <Link to={c.path} className="space-card" key={c.path}>
                <div className="space-thumb"><img src={c.card ?? c.hero} alt="" loading="lazy" /></div>
                <div className="coll-label">{c.name} <Arrow /></div>
                {c.summary && <p className="categories-summary">{c.summary}</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
