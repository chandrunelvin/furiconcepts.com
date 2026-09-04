import { Children, cloneElement, useEffect, useRef } from 'react';
import { onScrollFrame, prefersReducedMotion } from '../lib/scroll.js';

/**
 * Continuous horizontal scroller, driven by the shared scroll loop rather than
 * a CSS keyframe so the page scroll can push it along. The children are
 * rendered twice and the offset wraps at half the track width, which makes the
 * loop seamless. Hovering stops the idle drift but still lets scrolling move
 * it; reduced-motion users get a plain swipeable row.
 *
 * `duration` is how long one full pass takes when the page is still.
 * `scrollBoost` is how many pixels the track moves per pixel scrolled.
 */
export default function Marquee({
  duration = 60,
  reverse = false,
  scrollBoost = 0.6,
  className = '',
  children,
}) {
  const items = Children.toArray(children);
  const trackRef = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return undefined;

    const direction = reverse ? 1 : -1;
    let half = track.scrollWidth / 2;
    let offset = reverse ? -half : 0;

    const measure = () => {
      half = track.scrollWidth / 2;
    };
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    const off = onScrollFrame(({ delta, dt }) => {
      if (!half) measure();
      const drift = paused.current ? 0 : (half / duration) * (dt / 1000);
      offset += direction * drift + delta * scrollBoost * direction;

      // wrap into [-half, 0] so the duplicated half always covers the gap
      if (offset <= -half) offset += half;
      else if (offset > 0) offset -= half;

      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
    });

    return () => {
      off();
      observer.disconnect();
    };
  }, [duration, reverse, scrollBoost]);

  return (
    <div
      className={`marquee ${className}`.trim()}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onFocusCapture={() => { paused.current = true; }}
      onBlurCapture={() => { paused.current = false; }}
    >
      <div className="marquee-track" ref={trackRef}>
        {items}
        <div className="marquee-clone" aria-hidden="true" style={{ display: 'contents' }}>
          {items.map((child, i) => cloneElement(child, { key: `clone-${i}` }))}
        </div>
      </div>
    </div>
  );
}
