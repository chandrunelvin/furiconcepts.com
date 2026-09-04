/**
 * One rAF loop shared by every scroll-driven effect on the page.
 * Subscribers get the current scroll position, the delta since the last frame
 * and the frame duration, so nothing has to attach its own scroll listener.
 */
const subscribers = new Set();

let running = false;
let lastY = 0;
let lastT = 0;

function frame(now) {
  if (!running) return;
  const y = window.scrollY || window.pageYOffset || 0;
  const dt = Math.min(now - lastT, 64) || 16;
  const delta = y - lastY;
  lastY = y;
  lastT = now;

  subscribers.forEach((fn) => {
    try {
      fn({ y, delta, dt });
    } catch {
      /* a broken effect must not stop the others */
    }
  });

  requestAnimationFrame(frame);
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export function onScrollFrame(fn) {
  subscribers.add(fn);
  if (!running) {
    running = true;
    lastY = window.scrollY || 0;
    lastT = performance.now();
    requestAnimationFrame(frame);
  }
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0) running = false;
  };
}
