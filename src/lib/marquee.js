import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './scroll.js';

/**
 * Turns a duplicated-content row into a self-scrolling rail the visitor can
 * also drive by hand.
 *
 * The row scrolls itself at `speed` px/second and wraps at the halfway point,
 * which is seamless because the list is rendered twice. Unlike a CSS marquee
 * it is a real scroller, so hovering pauses it and the reader can then wheel,
 * swipe or drag back to a card that has already gone past.
 */
export function useMarquee({ speed = 42 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const half = () => el.scrollWidth / 2;

    /** Keep the position inside the first copy of the list. */
    const wrap = () => {
      const h = half();
      if (h <= 0) return;
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft < 0) el.scrollLeft += h;
    };

    let paused = false;
    let idleTimer = 0;

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    /** A wheel or touch scroll holds the animation off for a moment after it ends. */
    const holdOff = () => {
      paused = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { paused = false; }, 1600);
    };

    // --- drag to scroll -----------------------------------------------------
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let moved = 0;

    const onPointerDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      pause();
      el.classList.add('is-dragging');
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.abs(dx);
      if (moved > 4 && e.pointerType === 'mouse') el.setPointerCapture?.(e.pointerId);
      el.scrollLeft = startLeft - dx;
      wrap();
    };
    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('is-dragging');
      el.releasePointerCapture?.(e.pointerId);
      // a drag must not fire the link underneath it
      if (moved > 4) {
        const swallow = (clickEvent) => { clickEvent.preventDefault(); clickEvent.stopPropagation(); };
        el.addEventListener('click', swallow, { capture: true, once: true });
        setTimeout(() => el.removeEventListener('click', swallow, { capture: true }), 0);
      }
      holdOff();
    };

    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    el.addEventListener('wheel', holdOff, { passive: true });
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', holdOff, { passive: true });
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointercancel', endDrag);

    let raf = 0;
    let last = 0;
    const still = prefersReducedMotion();

    const frame = (now) => {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      if (!paused && !still && !dragging) {
        el.scrollLeft += (speed * dt) / 1000;
        wrap();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
      el.removeEventListener('wheel', holdOff);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', holdOff);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', endDrag);
      el.removeEventListener('pointercancel', endDrag);
    };
  }, [speed]);

  return ref;
}
