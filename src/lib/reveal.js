import { useEffect } from 'react';
import { prefersReducedMotion } from './scroll.js';

/**
 * Fades blocks up the first time they scroll into view.
 *
 * One observer walks a list of selectors rather than wrapping every block in a
 * component, so the markup stays flat; siblings inside a group get a short
 * cascade from the `.reveal:nth-child()` delays in the stylesheet.
 */
export function useReveal(groups, rootSelector = '.home2') {
  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return undefined;

    const targets = groups.flatMap((group) => [...root.querySelectorAll(group)]);
    if (!targets.length) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    targets.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));

    // failsafe: content must never be left invisible
    const t = setTimeout(() => targets.forEach((el) => el.classList.add('is-in')), 2500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [groups, rootSelector]);
}
