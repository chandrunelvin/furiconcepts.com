import { useEffect, useRef } from 'react';
import { onScrollFrame, prefersReducedMotion } from './scroll.js';

/**
 * Drifts a full-bleed banner against the scroll, as the home page banners do.
 *
 * The layer is drawn taller than its frame (e.g. `inset:-10% 0`), and the
 * drift never goes past that spare margin: further, and the frame's edge
 * shows through — the overlay tint then reads as a grey strip above or
 * below the photo.
 */
export function useParallax(speed) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    const apply = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const slack = Math.max(0, (el.offsetHeight - parent.offsetHeight) / 2);
      const drift = (rect.top - window.innerHeight / 2) * speed * 0.35;
      const offset = Math.max(-slack, Math.min(slack, drift));
      el.style.transform = `translateY(${offset.toFixed(2)}px)`;
    };
    apply();
    return onScrollFrame(apply);
  }, [speed]);
  return ref;
}
