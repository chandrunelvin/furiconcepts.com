import { useMemo } from 'react';
import { Icon } from '../components/BlogParts.jsx';
import BrandIcon from '../components/BrandIcons.jsx';
import FaqSection from '../components/FaqSection.jsx';
import ProductExplorer from '../components/ProductExplorer.jsx';
import { Arrow, SiteFooter, SiteHeader, brandLogo } from '../components/Home2Chrome.jsx';
import { categoryProducts } from '../data/categoryProducts.js';
import { getProject } from '../data/projects.js';
import { useReveal } from '../lib/reveal.js';
import { Link } from '../router.jsx';
import '../styles/home2.css';

/** Blocks that fade up as they arrive; siblings in a group cascade. */
const REVEAL_GROUPS = [
  '.cat-stats .cat-stat',
  '.cat-intro > *',
  '.cat-head',
  '.cat-type',
  '.cat-table-wrap, .cat-box, .cat-checklist',
  '.cat-project-copy > *, .cat-project-thumb',
  '.brand-faq-copy > *',
  '.brand-faq-item',
  '.cat-tile, .cat-badges li',
  '.brand-products > .wrap > .eyebrow, .brand-products-head, .brand-tabs, .brand-filters',
  '.brand-card',
  '.cat-guide-band .vision-body > *',
  '.cat-feature, .cat-pillar, .cat-pillars-head > *',
  '.cat-delivery-apps > *, .cat-steps li',
  '.about-cta-copy > *',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/** Close the page with this when the old page had no call to action of its own. */
const DEFAULT_CTA = {
  title: 'Not sure what fits your space?',
  body: ['Tell us about your project and our team will recommend the right products and brands.'],
  buttons: [{ label: 'Get in Touch', href: '/contact' }],
};

const pad = (n) => String(n).padStart(2, '0');

/** Internal paths route client-side; anything absolute opens in a new tab. */
function SmartLink({ href, children, ...rest }) {
  if (/^https?:/.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <Link to={href} {...rest}>{children}</Link>;
}

/** Rich text: a string, or a list of strings and {label, href} links. */
const Rich = ({ text }) =>
  typeof text === 'string'
    ? text
    : text.map((p, i) => (typeof p === 'string' ? p : <SmartLink key={i} href={p.href}>{p.label}</SmartLink>));

const Paras = ({ items }) => (items || []).map((t, i) => <p key={i}><Rich text={t} /></p>);

function Checklist({ items, small }) {
  return (
    <ul className={`cat-checklist ${small ? 'small' : ''}`.trim()}>
      {items.map((line) => <li key={line}><Icon name="check" />{line}</li>)}
    </ul>
  );
}

/**
 * Card grids. `style` (set in the data) picks a treatment:
 *  default  – numbered cards
 *  brands   – partner cards led by a large logo
 *  media    – photo-topped cards
 *  features – an icon strip, as on the brand pages
 */
function Cards({ items, style }) {
  if (style === 'features') {
    return (
      <div className="cat-feature-strip" style={{ '--n': items.length }}>
        {items.map((card) => (
          <div className="cat-feature" key={card.title}>
            <span className="cat-feature-icon"><BrandIcon name={card.icon ?? 'sparkle'} size={24} /></span>
            <h3>{card.title}</h3>
            <Paras items={card.body} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`cat-type-grid n${Math.min(items.length, 4)} ${style ? `is-${style}` : ''}`.trim()}>
      {items.map((card, i) => {
        const logo = card.title && brandLogo(card.title.replace(/ Seating$/, ''));
        return (
          <article className="cat-type" key={card.title || i}>
            {style === 'media' && card.image && (
              <div className="cat-type-media"><img src={card.image} alt="" loading="lazy" /></div>
            )}
            {style === 'brands' && logo ? (
              <div className="cat-type-brand"><img src={logo} alt={`${card.title} logo`} loading="lazy" /></div>
            ) : (
              <div className="cat-type-top">
                <span className="cat-type-num">{pad(i + 1)}</span>
                {logo && <img src={logo} alt="" className="cat-type-logo" loading="lazy" />}
              </div>
            )}
            {card.title && <h3>{card.title}</h3>}
            <div className="cat-type-body">
              <Paras items={card.body} />
              {card.list && <Checklist items={card.list} small />}
            </div>
            {card.link && (
              <SmartLink href={card.link.href} className="link-arrow">{card.link.label} <Arrow size={14} /></SmartLink>
            )}
          </article>
        );
      })}
    </div>
  );
}

function Table({ columns, rows }) {
  return (
    <div className="cat-table-wrap">
      <table className="cat-table">
        {columns.length > 0 && (
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th scope="col" key={i}>{col || <span className="sr-only">Feature</span>}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map(([label, ...cells], r) => (
            <tr key={r}>
              <th scope="row">{label}</th>
              {cells.map((cell, i) => <td key={i}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Link tiles: brand logos when every link is a partner brand, text tiles otherwise. */
function Tiles({ items }) {
  const logos = items.map((l) => brandLogo(l.label));
  const asLogos = logos.every(Boolean);
  return (
    <div className={`cat-tiles ${asLogos ? 'logos' : ''}`.trim()}>
      {items.map((l, i) => (
        <SmartLink href={l.href} className="cat-tile" key={l.href + l.label} aria-label={asLogos ? l.label : undefined}>
          {asLogos ? <img src={logos[i]} alt="" loading="lazy" /> : <>{l.label} <Arrow size={14} /></>}
        </SmartLink>
      ))}
    </div>
  );
}

function Stats({ items, className = '' }) {
  return (
    <div className={`cat-stats-grid ${className}`.trim()}>
      {items.map((s) => (
        <div className="cat-stat" key={s.value + s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/** One content block from data/categories.js. */
function Block({ block: b }) {
  switch (b.type) {
    case 'heading':
      return (
        <div className="cat-head">
          <h2>{b.title}</h2>
          <Paras items={b.body} />
        </div>
      );
    case 'hook': return <p className="cat-hook">{b.text}</p>;
    case 'intro':
    case 'text': return <p className="cat-text"><Rich text={b.text} /></p>;
    case 'cards': return <Cards items={b.items} style={b.style} />;
    case 'table': return <Table columns={b.columns} rows={b.rows} />;
    case 'checklist': return <Checklist items={b.items} />;
    case 'panel': return <div className="cat-box">{b.blocks.map((x, i) => <Block block={x} key={i} />)}</div>;
    case 'tags':
      return (
        <ol className="cat-tags">
          {b.items.map((t, i) => <li key={t}><span>{pad(i + 1)}</span>{t}</li>)}
        </ol>
      );
    case 'links': return <Tiles items={b.items} />;
    case 'badges':
      return (
        <ul className="cat-badges">
          {b.items.map((t) => <li key={t}><Icon name="check" />{t}</li>)}
        </ul>
      );
    case 'stats': return <Stats items={b.stats || b.items} className="light" />;
    case 'buttons':
      return (
        <div className="cat-actions">
          {b.items.map((btn) => (
            <SmartLink href={btn.href} className="link-arrow" key={btn.href}>{btn.label} <Arrow size={14} /></SmartLink>
          ))}
        </div>
      );
    case 'columns':
      return (
        <div className="cat-columns">
          {b.columns.map((col, i) => {
            const dark = col.some((x) => x.type === 'tags' || x.type === 'stats');
            const boxed = !dark && col.some((x) => x.type === 'panel');
            // a boxed column draws its own frame, so the panel inside loses its own
            const blocks = boxed ? col.flatMap((x) => (x.type === 'panel' ? x.blocks : [x])) : col;
            return (
              <div className={`cat-col ${dark ? 'is-dark' : ''} ${boxed ? 'is-box' : ''}`.trim()} key={i}>
                {blocks.map((x, j) => <Block block={x} key={j} />)}
              </div>
            );
          })}
        </div>
      );
    default: return null;
  }
}

/** "How to Choose" + "Built For": a checklist column beside a tags column. */
const guideOf = (blocks) => {
  if (blocks.length !== 1 || blocks[0].type !== 'columns') return null;
  const cols = blocks[0].columns;
  const choose = cols.find((c) => c.some((b) => b.type === 'panel'));
  const built = cols.find((c) => c.some((b) => b.type === 'tags'));
  if (!choose || !built) return null;
  return {
    chooseTitle: choose.find((b) => b.type === 'heading')?.title,
    chooseEyebrow: choose.find((b) => b.type === 'heading')?.eyebrow ?? 'Buying Guide',
    choose: choose.find((b) => b.type === 'panel').blocks.find((b) => b.type === 'checklist')?.items ?? [],
    builtTitle: built.find((b) => b.type === 'heading')?.title,
    builtEyebrow: built.find((b) => b.type === 'heading')?.eyebrow ?? 'Ideal Spaces',
    built: built.find((b) => b.type === 'tags').items,
  };
};

/** "Mostly solo calls? A focus pod." → question and answer; plain lines stay whole. */
const splitTip = (line) => {
  const at = line.indexOf('?');
  return at > 0 && at < line.length - 1
    ? [line.slice(0, at + 1), line.slice(at + 1).trim()]
    : [line, null];
};

/** The buying guide, drawn as the About page's vision / mission band. */
function GuideBand({ guide }) {
  return (
    <section className="vision-band cat-guide-band">
      <div className="mission-panel">
        <img src="/images/about-us/bg-mission-image.webp" alt="" aria-hidden="true" />
        <div className="vision-body">
          <span className="vision-icon" aria-hidden="true">
            {/* a compass: finding the right fit */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M15.5 8.5l-2 5-5 2 2-5z" />
            </svg>
          </span>
          <div className="eyebrow">{guide.chooseEyebrow}</div>
          <h3>{guide.chooseTitle}</h3>
          <ul className="cat-tips">
            {guide.choose.map((line) => {
              const [q, a] = splitTip(line);
              return (
                <li key={line}>
                  <span className="cat-tip-q">{!a && <Icon name="check" />}{q}</span>
                  {a && <span className="cat-tip-a"><Arrow size={13} />{a}</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="vision-panel">
        <img src="/images/about-us/bg-vision-image.webp" alt="" aria-hidden="true" />
        <div className="vision-body">
          <span className="vision-icon" aria-hidden="true">
            {/* a building: the spaces it suits */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 21V5.5L12 3v18M12 8l8 2.5V21M2.5 21h19" />
              <path d="M7 8h2M7 11.5h2M7 15h2M15 13h2M15 16.5h2" />
            </svg>
          </span>
          <div className="eyebrow">{guide.builtEyebrow}</div>
          <h3>{guide.builtTitle}</h3>
          <ol className="cat-built-list">
            {guide.built.map((line, i) => (
              <li key={line}><span>{pad(i + 1)}</span>{line}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Three side-by-side strengths on the dark green of the key-numbers band. */
function PillarBand({ blocks }) {
  const heading = blocks.find((b) => b.type === 'heading');
  const cards = blocks.find((b) => b.type === 'cards').items;
  return (
    <section className="cat-pillars">
      <div className="wrap">
        <div className="cat-pillars-head">
          <div className="eyebrow">Regional Expertise</div>
          <h2>{heading.title}</h2>
          <Paras items={heading.body} />
        </div>
        <div className="cat-pillars-grid">
          {cards.map((card) => (
            <div className="cat-pillar" key={card.title}>
              <span className="vision-icon"><BrandIcon name={card.icon ?? 'globe'} size={26} /></span>
              <h3>{card.title}</h3>
              <Paras items={card.body} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Applications beside a delivery timeline, over a full-bleed photo. */
function DeliveryBand({ columns, image }) {
  const apps = columns.find((c) => !c.some((b) => b.type === 'stats'));
  const delivery = columns.find((c) => c.some((b) => b.type === 'stats'));
  const appsHead = apps.find((b) => b.type === 'heading');
  const appsList = apps.flatMap((b) => (b.type === 'panel' ? b.blocks : [b])).find((b) => b.type === 'checklist');
  const delHead = delivery.find((b) => b.type === 'heading');
  const steps = delivery.find((b) => b.type === 'stats').items;
  return (
    <section className="cat-delivery">
      <div className="proj-media" aria-hidden="true"><img src={image} alt="" loading="lazy" /></div>
      <div className="wrap cat-delivery-inner">
        <div className="cat-delivery-apps">
          <div className="eyebrow">Where It Works</div>
          <h2>{appsHead.title}</h2>
          <Paras items={appsHead.body} />
          <ul className="cat-pills">
            {appsList.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div className="cat-delivery-steps">
          <div className="eyebrow">{delHead.title}</div>
          <Paras items={delHead.body} />
          <ol className="cat-steps">
            {steps.map((st, i) => (
              <li key={st.label}>
                <span className="cat-step-num">{pad(i + 1)}</span>
                <strong>{st.value}</strong>
                <span>{st.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** The featured project, drawn as a slide from the Projects page. */
function ProjectBand({ blocks, hero }) {
  const href = blocks.find((b) => b.type === 'buttons')?.items[0]?.href ?? '/projects';
  const project = getProject(href.split('/').pop());
  const heading = blocks.find((b) => b.type === 'heading');
  const photos = blocks.find((b) => b.type === 'gallery').images;
  const title = project?.title ?? heading.title.replace(/^Featured Project:\s*/, '');
  const count = project?.media.length;
  // skip the photo the page hero already uses
  const backdrop = [...(project?.media ?? []), ...photos].find((m) => typeof m === 'string' && m !== hero) ?? photos[0];

  return (
    <section className="cat-project-band">
      <div className="proj-media" aria-hidden="true">
        <img src={backdrop} alt="" loading="lazy" />
      </div>
      <div className="wrap cat-project-inner">
        <div className="cat-project-copy">
          <div className="proj-num">Featured Project</div>
          <h2 className="proj-title"><Link to={href}>{title}</Link></h2>
          <div className="proj-sub">
            {[project?.subtitle, count && `${count} Photos`].filter(Boolean).join(' · ')}
          </div>
          {heading.body && <p className="cat-project-note"><Rich text={heading.body[0]} /></p>}
          <Link to={href} className="proj-view">View Project <Arrow size={14} /></Link>
        </div>
        <div className="cat-project-thumbs">
          {photos.map((src, i) => (
            <Link to={href} className="cat-project-thumb" key={src} tabIndex={-1} aria-hidden="true">
              <img src={src} alt="" loading="lazy" />
              {i === photos.length - 1 && count > photos.length && (
                <span className="cat-project-more">+{count - photos.length}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Picks a layout from what a section holds; most just stack their blocks. */
function Section({ blocks, alt, eyebrow, name, hero }) {
  const types = blocks.map((b) => b.type);
  const tone = alt ? 'is-alt' : '';

  const guide = guideOf(blocks);
  if (guide) return <GuideBand guide={guide} />;
  if (blocks.some((b) => b.type === 'cards' && b.style === 'pillars')) return <PillarBand blocks={blocks} />;
  const cols = blocks.length === 1 && blocks[0].type === 'columns' ? blocks[0].columns : null;
  if (cols?.some((c) => c.some((b) => b.type === 'stats'))) return <DeliveryBand columns={cols} image={blocks[0].image ?? hero} />;

  if (types.includes('hook')) {
    return (
      <section className={`section cat-sec ${tone}`.trim()}>
        <div className="wrap">
          <div className="cat-intro">
            <div className="eyebrow">{eyebrow}</div>
            {blocks.map((b, i) => <Block block={b} key={i} />)}
          </div>
        </div>
      </section>
    );
  }

  // the FAQ is the same band the brand pages use
  if (types.includes('faq')) {
    const intro = blocks.find((b) => b.type === 'heading')?.body?.[0];
    return (
      <FaqSection
        intro={intro || `Find answers to common questions about ${name.toLowerCase()}, supply and installation.`}
        items={blocks.find((b) => b.type === 'faq').items.map((f) => ({ q: f.q, a: <Rich text={f.a} /> }))}
      />
    );
  }

  if (types.includes('gallery')) return <ProjectBand blocks={blocks} hero={hero} />;

  return (
    <section className={`section cat-sec ${tone}`.trim()}>
      <div className="wrap cat-stack">
        {blocks.map((b, i) => <Block block={b} key={i} />)}
      </div>
    </section>
  );
}

/**
 * Sections hidden for now — the content stays in data/categories.js; delete a
 * rule here to show that section again:
 *  - the intro line and the product-type cards right after it
 *    (e.g. "Pods, Booths & Panels"), which the product range now covers
 *  - the "Brands" link row
 *  - "Choose Your Region" (links to region pages not on this site yet)
 *  - "Nitrocare Awards" on the hospital page
 *  - "Classroom Layouts Supported" on the school page
 */
const isHidden = (blocks, i, opensOnIntro) => {
  const title = blocks[0]?.type === 'heading' ? blocks[0].title : '';
  if (opensOnIntro && (i === 0 || i === 1)) return true;
  if (title === 'Brands' || title === 'Brand') return true;
  if (title === 'Choose Your Region') return true;
  if (title === 'Nitrocare Awards') return true;
  if (title === 'Classroom Layouts Supported') return true;
  return false;
};

/** A category landing page (e.g. /office-furniture.php), built from data/categories.js. */
export default function Category({ category: c }) {
  useReveal(REVEAL_GROUPS);
  const cta = c.cta || DEFAULT_CTA;
  const products = useMemo(() => categoryProducts(c.path, c.name), [c]);
  const opensOnIntro = c.sections[0]?.some((b) => b.type === 'hook');
  const sections = c.sections.filter((sec, i) => !isHidden(sec, i, opensOnIntro));

  return (
    <div className="home2 profiles-page category-page">
      <SiteHeader onHome={false} active="Categories" />

      {/* ---- hero ---- */}
      <section className="blog-hero cat-hero">
        <div className="blog-hero-media" aria-hidden="true"><img src={c.hero} alt="" /></div>
        <div className="wrap blog-hero-inner">
          <h1>{c.title}{c.titleAccent && <> <span className="accent">{c.titleAccent}</span></>}</h1>
          {c.summary && <p className="cat-answer">{c.summary}</p>}
        </div>
      </section>

      {/* ---- key numbers ---- */}
      {c.stats && (
        <section className="cat-stats">
          <div className="wrap"><Stats items={c.stats} /></div>
        </section>
      )}

      {/* the product range opens every page, right after the key numbers */}
      {products && <ProductExplorer products={products} />}
      {sections.map((blocks, i) => (
        <Section blocks={blocks} alt={i % 2 === 1} eyebrow={c.eyebrow} name={c.name} hero={c.hero} key={i} />
      ))}

      {/* ---- closing cta ---- */}
      <section className="about-cta">
        <div className="about-cta-media">
          <img src="/images/about-us/bg-create.webp" alt="" aria-hidden="true" />
        </div>
        <div className="overlay" />
        <div className="wrap about-cta-inner">
          <div className="about-cta-copy">
            <h2>{cta.title}</h2>
            {cta.body.map((p) => <p key={p}>{p}</p>)}
            <div className="cat-cta-actions">
              {cta.buttons.map((btn, i) => (
                <SmartLink href={btn.href} className={i === 0 ? 'btn-primary' : 'btn-ghost'} key={btn.href}>
                  {btn.label} <Arrow />
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
