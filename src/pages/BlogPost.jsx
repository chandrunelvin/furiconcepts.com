import { useState } from 'react';
import {
  BlogSidebar, Icon, articlePath, categoryLabel, formatDate, useParallax,
} from '../components/BlogParts.jsx';
import { Arrow, SiteFooter, SiteHeader } from '../components/Home2Chrome.jsx';
import { ARTICLES, BLOG_AUTHOR, BLOG_NEWSLETTER } from '../data/blog.js';
import { useReveal } from '../lib/reveal.js';
import { Link, navigate } from '../router.jsx';
import '../styles/home2.css';

/* Blocks that fade up as they scroll into view, in document order. */
const REVEAL_GROUPS = [
  '.post-lead',
  '.post-intro',
  '.post-section',
  '.post-conclusion',
  '.post-meta-row',
  '.post-author',
  '.post-related-head, .post-related-card',
  '.blog-side > *',
  '.newsletter-media, .newsletter-body',
  'footer .footer-brand, footer .footer-col, footer .footer-bottom',
];

/**
 * Demo content: articles without their own body borrow the first article's
 * (the one written out in the mockup) until real copy is supplied.
 */
const DEMO = ARTICLES.find((a) => a.body);

/** Rough reading time at 200 words a minute, never under a minute. */
function readMinutes(a, body) {
  const { intro = '', sections = [], conclusion = '' } = body ?? {};
  const text = [a.excerpt, intro, conclusion, ...sections.flatMap((s) => [s.title, s.text, ...(s.benefits ?? [])])].join(' ');
  return Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200));
}

/** Same category first, then the newest of the rest. */
function relatedTo(a, count = 3) {
  const others = ARTICLES.filter((x) => x.slug !== a.slug);
  return [
    ...others.filter((x) => x.category === a.category),
    ...others.filter((x) => x.category !== a.category),
  ].slice(0, count);
}

const SHARE = [
  { label: 'Facebook', href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    path: <path d="M15 8h2V5h-2a4 4 0 00-4 4v2H9v3h2v6h3v-6h2.5l.5-3H14V9a1 1 0 011-1z" /> },
  { label: 'LinkedIn', href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    path: <><path d="M7.5 10v7M7.5 7v.01" /><path d="M11.5 17v-4c0-1.6 1.1-2.6 2.5-2.6s2.5 1 2.5 2.6v4M11.5 10v7" /></> },
  { label: 'X', href: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    path: <path d="M5 5l14 14M19 5L5 19" /> },
];

export default function BlogPost({ slug }) {
  const article = ARTICLES.find((a) => a.slug === slug);
  useReveal(REVEAL_GROUPS);
  const heroLayer = useParallax(0.25);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <div className="home2 blog-page post-page">
        <SiteHeader onHome={false} active="Blog" />
        <section className="post-missing">
          <div className="wrap">
            <h1>Article not found</h1>
            <p>This article may have moved or is no longer available.</p>
            <Link to="/blog" className="btn-primary">Back to the blog <Arrow size={14} /></Link>
          </div>
        </section>
        <SiteFooter newsletter={BLOG_NEWSLETTER} />
      </div>
    );
  }

  const body = article.body ?? DEMO?.body;
  // the lead photo sits under the hero, so it must differ from the banner
  const lead = article.hero ? article.image : DEMO?.image;
  const tags = article.tags ?? [categoryLabel(article.category)];
  const recent = ARTICLES.slice(0, 5);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the address bar still has the link */
    }
  };

  return (
    <div className="home2 blog-page post-page">
      <SiteHeader onHome={false} active="Blog" />

      {/* ---- hero ---- */}
      <section className="blog-hero post-hero">
        <div className="blog-hero-media" aria-hidden="true">
          <div className="img-parallax" ref={heroLayer}>
            <img src={article.hero ?? article.image} alt="" />
          </div>
        </div>
        <div className="wrap blog-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevron" />
            <Link to="/blog">Blog</Link>
            <Icon name="chevron" />
            <Link to={`/blog?category=${article.category}`} aria-current="page">{categoryLabel(article.category)}</Link>
          </nav>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <ul className="post-meta">
            <li><Icon name="calendar" /><time dateTime={article.date}>{formatDate(article.date)}</time></li>
            <li><Icon name="user" />By {BLOG_AUTHOR.name}</li>
            <li><Icon name="clock" />{readMinutes(article, body)} min read</li>
          </ul>
        </div>
      </section>

      {/* ---- article + sidebar ---- */}
      <section className="blog-main">
        <div className="wrap blog-layout">
          <article className="post">
            {lead && lead !== (article.hero ?? article.image) && (
              <div className="post-lead"><img src={lead} alt="" /></div>
            )}

            <p className="post-intro">{body?.intro ?? article.excerpt}</p>

            {body?.sections.map((s, i) => (
              <section className="post-section" key={s.title}>
                <h2>{i + 1}. {s.title}</h2>
                <div className="post-section-grid">
                  <div className="post-section-text">
                    <p>{s.text}</p>
                    {s.benefits && (
                      <div className="post-benefits">
                        <h4>Key Benefits:</h4>
                        <ul>
                          {s.benefits.map((b) => <li key={b}><Icon name="check" />{b}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="post-section-media"><img src={s.image} alt="" loading="lazy" /></div>
                </div>
              </section>
            ))}

            {body?.conclusion && (
              <section className="post-conclusion">
                <h2>Conclusion</h2>
                <p>{body.conclusion}</p>
              </section>
            )}

            <div className="post-meta-row">
              <div className="post-tags">
                <span>Tags:</span>
                {tags.map((t) => <span className="blog-tag" key={t}>{t}</span>)}
              </div>
              <div className="post-share">
                <span>Share:</span>
                {SHARE.map((s) => (
                  <a
                    key={s.label}
                    href={s.href(encodeURIComponent(url), encodeURIComponent(article.title))}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Share on ${s.label}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.path}</svg>
                  </a>
                ))}
                <button type="button" onClick={copyLink} aria-label="Copy link" title={copied ? 'Link copied' : 'Copy link'}
                        className={copied ? 'copied' : undefined}>
                  <Icon name={copied ? 'check' : 'link'} />
                </button>
              </div>
            </div>

            <div className="post-author">
              <span className="post-author-mark" aria-hidden="true">{BLOG_AUTHOR.initials}</span>
              <div>
                <span className="post-author-label">Written by</span>
                <strong>{BLOG_AUTHOR.name}</strong>
                <p>{BLOG_AUTHOR.bio}</p>
              </div>
            </div>

            <section className="post-related">
              <h2 className="post-related-head">Related Articles</h2>
              <div className="post-related-grid">
                {relatedTo(article).map((r) => (
                  <Link to={articlePath(r)} className="post-related-card" key={r.slug}>
                    <span className="post-related-thumb"><img src={r.image} alt="" loading="lazy" /></span>
                    <span className="post-related-text">
                      <span className="post-related-title">{r.title}</span>
                      <span className="post-related-date">
                        <time dateTime={r.date}>{formatDate(r.date)}</time>
                        <Arrow size={13} />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <BlogSidebar
            category="all"
            onCategory={(id) => navigate(id === 'all' ? '/blog' : `/blog?category=${id}`)}
            query={query}
            onQuery={setQuery}
            onSearch={(q) => navigate(q.trim() ? `/blog?q=${encodeURIComponent(q.trim())}` : '/blog')}
            listTitle="Recent Articles"
            list={recent}
          />
        </div>
      </section>

      <SiteFooter newsletter={BLOG_NEWSLETTER} />
    </div>
  );
}
