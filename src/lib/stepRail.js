import { useCallback, useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './scroll.js';

/**
 * A row of cards that steps one card at a time.
 *
 * The row is a real scroller (swipe, drag, wheel all work) that snaps card by
 * card. Every `interval` ms it advances one card, wrapping back to the start
 * after the last; hovering, focusing or touching it holds the autoplay off,
 * and reduced-motion visitors get no autoplay at all. `prev`/`next` step it by
 * hand, and `atStart`/`atEnd` say whether there is anything further that way.
 */
export function useStepRail({ interval = 3500 } = {}) {
  const ref = useRef(null);
  /** Autoplay stays off until this time — set by a button press, swipe or wheel. */
  const quietUntil = useRef(0);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  /** One card plus the gap after it. */
  const stepWidth = (el) => {
    const card = el.querySelector(':scope > * > *') ?? el.firstElementChild;
    const gap = parseFloat(getComputedStyle(card.parentElement).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const go = useCallback((dir) => {
    const el = ref.current;
    if (!el) return;
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
    const max = el.scrollWidth - el.clientWidth;
    if (dir > 0 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior });
    else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior });
    else el.scrollBy({ left: dir * stepWidth(el), behavior });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const sync = () => setEdges({
      atStart: el.scrollLeft <= 4,
      atEnd: el.scrollLeft >= el.scrollWidth - el.clientWidth - 4,
    });
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);

    let held = false;
    const hold = () => { held = true; };
    const release = () => { held = false; };
    /** A swipe or wheel keeps autoplay off for a moment after it ends. */
    const holdBriefly = () => { quietUntil.current = Date.now() + 4000; };
    el.addEventListener('mouseenter', hold);
    el.addEventListener('mouseleave', release);
    el.addEventListener('focusin', hold);
    el.addEventListener('focusout', release);
    el.addEventListener('touchstart', holdBriefly, { passive: true });
    el.addEventListener('wheel', holdBriefly, { passive: true });

    const timer = prefersReducedMotion()
      ? 0
      : setInterval(() => {
        if (!held && !document.hidden && Date.now() > quietUntil.current) go(1);
      }, interval);

    return () => {
      clearInterval(timer);
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
      el.removeEventListener('mouseenter', hold);
      el.removeEventListener('mouseleave', release);
      el.removeEventListener('focusin', hold);
      el.removeEventListener('focusout', release);
      el.removeEventListener('touchstart', holdBriefly);
      el.removeEventListener('wheel', holdBriefly);
    };
  }, [go, interval]);

  /** A button press steps the row and gives the reader time to look. */
  const step = (dir) => {
    quietUntil.current = Date.now() + 6000;
    go(dir);
  };

  return { ref, prev: () => step(-1), next: () => step(1), ...edges };
}
