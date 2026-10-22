import { useEffect } from 'react';
import { prefersReducedMotion } from './scroll.js';

/**
 * Reveals blocks the first time they scroll into view.
 *
 * One observer walks a list of selectors rather than wrapping every block in a
 * component, so the markup stays flat. The stylesheet picks the motion from
 * what the block is — text rises and fades in, headings follow a beat later,
 * photos fade in from a slight zoom, cards lift — and siblings in a group cascade off the
 * `.reveal:nth-child()` delays. Stat figures count up as they arrive.
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

    const show = (el) => {
      if (el.classList.contains('is-in')) return;
      el.classList.add('is-in');
      countUp(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));

    // the last blocks on a page (the footer strip) can sit inside the bottom
    // margin the observer ignores, so reaching the end shows whatever is left
    const atEnd = () => {
      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight < doc.scrollHeight - 4) return;
      targets.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) show(el); });
    };
    window.addEventListener('scroll', atEnd, { passive: true });

    // failsafe: nothing already scrolled past may stay invisible — but blocks
    // still below the fold keep waiting, so they animate when reached
    const t = setTimeout(() => {
      targets.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) show(el); });
    }, 2500);
    return () => { io.disconnect(); clearTimeout(t); window.removeEventListener('scroll', atEnd); };
  }, [groups, rootSelector]);
}

/** Runs each "30+" / "350+" / "5" figure inside `el` up from zero. */
function countUp(el) {
  const figures = el.matches('.num, .num-value') ? [el] : el.querySelectorAll('.num, .num-value');
  figures.forEach((fig) => {
    // update the text node React rendered rather than replacing it
    const node = [...fig.childNodes].find((n) => n.nodeType === 3);
    const match = node?.nodeValue.match(/^(\d+)(\D*)$/);
    if (!match) return;
    const end = Number(match[1]);
    const suffix = match[2];
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      node.nodeValue = `${Math.round(end * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    node.nodeValue = `0${suffix}`;
    requestAnimationFrame(tick);
  });
}
