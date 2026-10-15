import { useEffect, useMemo, useRef, useState } from 'react';
import { navigate } from '../router.jsx';
import { Arrow } from './Home2Chrome.jsx';

/**
 * The header's search: a panel over the page that searches every page,
 * brand, product, project, article and document as you type. The index is
 * loaded the first time the panel opens. Arrow keys move through the results,
 * Enter opens one, Escape closes.
 */
const loadIndex = () => import('../lib/searchIndex.js');

const SearchIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
  </svg>
);

const KeyArrow = ({ down }) => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d={down ? 'M12 5v14M6 13l6 6 6-6' : 'M12 19V5M6 11l6-6 6 6'} />
  </svg>
);

/** Follows a result; a product on the page already open just reopens via its hash. */
function go(href) {
  const [path, hash] = href.split('#');
  if (hash && path === window.location.pathname) {
    window.location.hash = hash;
    return;
  }
  navigate(href);
}

export default function SiteSearch({ open, onClose }) {
  const [mod, setMod] = useState(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef(null);
  const list = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    loadIndex().then(setMod);
    input.current?.focus();
    input.current?.select();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const groups = useMemo(() => (mod ? mod.runSearch(query) : []), [mod, query]);
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  useEffect(() => { setActive(0); }, [query]);

  // keep the highlighted result in view while arrowing through a long list
  useEffect(() => {
    list.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const choose = (item) => {
    onClose();
    go(item.href);
  };

  const onKey = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, flat.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && flat[active]) { e.preventDefault(); choose(flat[active]); }
  };

  if (!open) return null;

  const trimmed = query.trim();
  let index = -1;

  return (
    <div className="site-search" role="dialog" aria-modal="true" aria-label="Search Furniconcepts" onKeyDown={onKey}>
      <div className="site-search-backdrop" onClick={onClose} />
      <div className="site-search-panel">
        <div className="site-search-bar">
          <SearchIcon />
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories, projects…"
            aria-label="Search"
            aria-controls="site-search-results"
            aria-activedescendant={flat[active] ? `ss-${active}` : undefined}
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" className="site-search-close" onClick={onClose} aria-label="Close search">
            <span className="site-search-esc">Esc</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="site-search-body" id="site-search-results" ref={list} role="listbox">
          {!trimmed && (
            <div className="site-search-empty">
              <div className="eyebrow">Popular Searches</div>
              <div className="site-search-chips">
                {(mod?.SEARCH_SUGGESTIONS ?? []).map((s) => (
                  <button type="button" key={s} onClick={() => setQuery(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {trimmed && mod && !groups.length && (
            <div className="site-search-none">
              <p>No results for “{trimmed}”.</p>
              <p>Try a product type, brand or city, or <button type="button" onClick={() => choose({ href: '/contact' })}>ask our team</button>.</p>
            </div>
          )}

          {groups.map((g) => (
            <section className="site-search-group" key={g.key} aria-label={g.label}>
              <h3>
                {g.label}
                <span>{g.total > g.items.length ? `${g.items.length} of ${g.total}` : g.total}</span>
              </h3>
              <ul>
                {g.items.map((item) => {
                  index += 1;
                  const i = index;
                  return (
                    <li key={`${g.key}-${item.href}-${item.title}`}>
                      <a
                        href={item.href}
                        id={`ss-${i}`}
                        role="option"
                        aria-selected={i === active}
                        data-active={i === active}
                        className="site-search-hit"
                        onMouseMove={() => setActive(i)}
                        onClick={(e) => {
                          if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                          e.preventDefault();
                          choose(item);
                        }}
                      >
                        <span className={`site-search-thumb ${item.image ? '' : 'is-icon'} ${item.logo ? 'is-logo' : ''}`.trim()}>
                          {item.image ? <img src={item.image} alt="" loading="lazy" /> : <SearchIcon size={16} />}
                        </span>
                        <span className="site-search-text">
                          <span className="site-search-title">{item.title}</span>
                          {item.sub && <span className="site-search-sub">{item.sub}</span>}
                        </span>
                        <Arrow size={14} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <div className="site-search-foot" aria-hidden="true">
          <span><kbd><KeyArrow /></kbd><kbd><KeyArrow down /></kbd> to move</span>
          <span><kbd>Enter</kbd> to open</span>
          <span><kbd>Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
