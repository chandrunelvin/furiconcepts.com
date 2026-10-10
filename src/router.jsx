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
 * `maxWait` ms, so the new page is not shown with blank image boxes.
 */
function aboveFoldImagesReady(maxWait = 400) {
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
function transition(update) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduced) {
    update();
    return;
  }
  document.startViewTransition(() => {
    flushSync(update);
    return aboveFoldImagesReady();
  });
}

export function navigate(to) {
  if (window.location.pathname === to) return;
  window.history.pushState({}, '', to);
  transition(() => {
    window.dispatchEvent(new Event('app:navigate'));
    // 'instant', not the stylesheet's smooth scrolling: a smooth scroll from
    // deep in a page is cut short by the page change and strands the reader
    // halfway down the new page
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

export function Link({ to, children, ...rest }) {
  const onClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
    },
    [to]
  );
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
