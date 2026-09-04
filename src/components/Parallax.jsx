import { useEffect, useRef } from 'react';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';

/**
 * Drifts its child against the page scroll. The child is oversized in CSS
 * (.parallax > *) so the drift never exposes an edge.
 */
export default function Parallax({ speed = 0.12, className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const apply = () => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      // the frame overhangs its parent; never drift further than that overhang
      const frame = el.parentElement?.offsetHeight ?? rect.height;
      const slack = Math.max(0, (el.offsetHeight - frame) / 2);
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-slack, Math.min(slack, -fromCenter * speed));
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };

    apply();
    return onScrollFrame(apply);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`.trim()}>
      {children}
    </div>
  );
}
