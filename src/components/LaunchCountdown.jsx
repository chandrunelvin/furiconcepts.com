import { useEffect, useRef, useState } from 'react';

/* The website launch: a 5 to 0 countdown over the home page, a confetti pop,
   then the overlay lifts away. It plays every time the home page opens, until
   the launch is over and this component is removed from Home2.jsx. */

const START = 5;
const TICK = 1000; // ms per number
const POP_HOLD = 1800; // ms the "We're live" pop stays before the overlay lifts
const EXIT = 800; // ms for the overlay to lift away
const COLORS = ['#2f9e6e', '#5ccf9a', '#f5c451', '#ffffff', '#e8f6ef', '#16332a'];


/** Bursts confetti from the centre of the canvas, then lets it fall. */
function burst(canvas) {
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const size = () => {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
  };
  size();
  window.addEventListener('resize', size);

  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const pieces = Array.from({ length: 220 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 6 + Math.random() * 14;
    return {
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.4,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      round: Math.random() < 0.3,
    };
  });

  let frame;
  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let alive = 0;
    for (const p of pieces) {
      p.vx *= 0.985;
      p.vy = p.vy * 0.985 + 0.35;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.spin;
      if (p.y < window.innerHeight + 40) alive += 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.round) {
        ctx.beginPath();
        ctx.arc(0, 0, p.h / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot)));
      }
      ctx.restore();
    }
    if (alive) frame = requestAnimationFrame(draw);
  };
  frame = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', size);
  };
}

export default function LaunchCountdown() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(START);
  const [phase, setPhase] = useState('count'); // count → pop → exit
  const canvas = useRef(null);

  // count down, pop, then lift away
  useEffect(() => {
    if (!show) return undefined;
    const timers = [];
    for (let i = 1; i <= START; i += 1) timers.push(setTimeout(() => setCount(START - i), i * TICK));
    const popAt = START * TICK + 500;
    timers.push(setTimeout(() => setPhase((p) => (p === 'count' ? 'pop' : p)), popAt));
    timers.push(setTimeout(() => setPhase('exit'), popAt + POP_HOLD));
    return () => timers.forEach(clearTimeout);
  }, [show]);

  // once the overlay starts lifting (on time or skipped), remove it
  useEffect(() => {
    if (phase !== 'exit') return undefined;
    const t = setTimeout(() => setShow(false), EXIT);
    return () => clearTimeout(t);
  }, [phase]);

  // confetti on the pop
  useEffect(() => {
    if (phase !== 'pop' || !canvas.current) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    return burst(canvas.current);
  }, [phase]);

  // no page scrolling behind the overlay
  useEffect(() => {
    if (!show) return undefined;
    const before = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = before; };
  }, [show]);

  if (!show) return null;

  const progress = (START - count) / START;

  return (
    <div className={`launch is-${phase}`} role="dialog" aria-label="Website launch countdown">
      <canvas ref={canvas} className="launch-confetti" aria-hidden="true" />
      <div className="launch-inner">
        <img className="launch-logo" src="/images/furni-logo.png" alt="Furniconcepts" />
        {phase === 'count' ? (
          <>
            <div className="launch-eyebrow">Our new website launches in</div>
            <div className="launch-dial">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle className="launch-track" cx="60" cy="60" r="54" />
                <circle className="launch-ring" cx="60" cy="60" r="54" style={{ strokeDashoffset: 339.3 * (1 - progress) }} />
              </svg>
              <span className="launch-number" key={count} aria-live="assertive">{count}</span>
            </div>
          </>
        ) : (
          <div className="launch-live">
            <div className="launch-live-title">We&apos;re Live!</div>
            <p>Welcome to the new Furniconcepts website.</p>
          </div>
        )}
      </div>
      {phase === 'count' && (
        <button type="button" className="launch-skip" onClick={() => setPhase('exit')}>Skip</button>
      )}
    </div>
  );
}
