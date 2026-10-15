import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

/**
 * Minimal history router — the project has no router dependency and npm has no
 * network here, so this covers the two routes we need.
 */
export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/+$/, '') || '/');
    window.addEventListener('popstate', onPop);
    window.addEventListener('app:navigate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('app:navigate', onPop);
    };
  }, []);

  return path;
}

/**
 * Resolves once the images in the first screenful have loaded, or after
 * `maxWait` ms, so the new page is not shown with blank image boxes. The cap
 * is short: past it, waiting on the old page feels like a slow load.
 */
function aboveFoldImagesReady(maxWait = 150) {
  const imgs = [...document.images].filter((img) => {
    if (img.complete) return false;
    const r = img.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  });
  if (!imgs.length) return Promise.resolve();
  const loaded = Promise.all(
    imgs.map((img) => new Promise((done) => {
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    }))
  );
  return Promise.race([loaded, new Promise((done) => setTimeout(done, maxWait))]);
}

/**
 * Swaps the page inside a view transition: the old page stays on screen until
 * the new one has rendered and its visible images are in, then they crossfade.
 */
function transition(update, after) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // flushSync renders the new page before `after` runs, so it can find the
  // new page's sections
  if (!document.startViewTransition || reduced) {
    flushSync(update);
    after();
    return;
  }
  document.startViewTransition(() => {
    flushSync(update);
    after();
    return aboveFoldImagesReady();
  });
}

const USER_SCROLL = ['wheel', 'touchstart', 'keydown', 'mousedown'];

/**
 * Brings a `#section` of the page into view, or the top when there is none.
 * Images above a section load after the jump and push it down, so for a
 * moment the section is held in place as the page grows — until the reader
 * scrolls for themselves.
 */
function scrollToHash(hash) {
  const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  // 'instant', not the stylesheet's smooth scrolling: a smooth scroll from
  // deep in a page is cut short by the page change and strands the reader
  // halfway down the new page
  if (!target) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }
  const align = () => target.scrollIntoView({ block: 'start', behavior: 'instant' });
  align();
  const grow = new ResizeObserver(align);
  grow.observe(document.body);
  const stop = () => {
    grow.disconnect();
    USER_SCROLL.forEach((type) => window.removeEventListener(type, stop));
  };
  USER_SCROLL.forEach((type) => window.addEventListener(type, stop, { passive: true }));
  setTimeout(stop, 2000);
}

/**
 * Client-side page change. `to` may carry a section, e.g. '/#catalogs': on
 * the page already open that just scrolls there, otherwise the new page is
 * shown and then scrolled to it.
 */
export function navigate(to) {
  const url = new URL(to, window.location.href);
  const samePage = url.pathname === window.location.pathname && url.search === window.location.search;
  if (samePage && url.hash === window.location.hash && !url.hash) return;
  window.history.pushState({}, '', url.pathname + url.search + url.hash);
  if (samePage) {
    scrollToHash(url.hash);
    return;
  }
  transition(
    () => window.dispatchEvent(new Event('app:navigate')),
    () => scrollToHash(url.hash),
  );
}

/**
 * A client-side link. A caller's own onClick (closing a menu, say) runs
 * first; it can call preventDefault to keep the page from changing.
 */
export function Link({ to, children, onClick, ...rest }) {
  const handleClick = useCallback(
    (e) => {
      onClick?.(e);
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
    },
    [to, onClick]
  );
  return (
    <a href={to} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
