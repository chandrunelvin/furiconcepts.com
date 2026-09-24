/**
 * Line icons used by the brand showcase page. They share one 24-box and
 * inherit stroke colour, so a single set covers the feature strip, the
 * category tabs and the "why choose" list.
 */
const paths = {
  gear: <><circle cx="12" cy="12" r="3.2" /><path d="M12 2.8v2.4M12 18.8v2.4M4.5 4.5l1.7 1.7M17.8 17.8l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.5 19.5l1.7-1.7M17.8 6.2l1.7-1.7" /></>,
  trophy: <><path d="M7 4h10v5a5 5 0 01-10 0V4z" /><path d="M7 6H4.5v1.5A3.5 3.5 0 008 11M17 6h2.5v1.5A3.5 3.5 0 0116 11" /><path d="M12 14v3M8.5 20h7M9.5 20l.5-3h4l.5 3" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 3.9 5.7 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.7-3.9-9S9.4 5.6 12 3z" /></>,
  leaf: <><path d="M20 4c0 9-5.2 13.6-12 13.6C8 10.8 12.6 5.6 20 4z" /><path d="M4 20c1.6-4 4.4-6.8 8.4-8.8" /></>,
  gem: <><path d="M12 3l8 6.2L12 21 4 9.2 12 3z" /><path d="M4 9.2h16M12 3L8.6 9.2 12 21l3.4-11.8L12 3z" /></>,
  people: <><circle cx="9" cy="8.5" r="3" /><circle cx="17" cy="9.5" r="2.3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16.2 14.4c2.3.3 4.3 2.1 4.3 4.6" /></>,
  posture: <><circle cx="12" cy="4.6" r="2.1" /><path d="M12 6.7v6.1l-3.4 2.5M12 12.8l3.2 2.4" /><path d="M8.6 15.3L7.4 20M15.2 15.2L16.6 20" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.4 2" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 20v-5M12.5 20v-9M17 20v-13" /></>,
  sparkle: <><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.4" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.4" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.4" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.4" /></>,
  chair: <><path d="M7 4h10v8H7V4z" /><path d="M5.5 12h13M8 15v5M16 15v5M8 15h8" /></>,
  crown: <><path d="M4 18h16M4 18l-1-9 5 3.5L12 5l4 7.5L21 9l-1 9" /></>,
  person: <><circle cx="12" cy="8" r="3.3" /><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" /></>,
  sofa: <><path d="M4 11V8.5A2.5 2.5 0 016.5 6h11A2.5 2.5 0 0120 8.5V11" /><path d="M3 12.5A1.5 1.5 0 014.5 11h15a1.5 1.5 0 011.5 1.5V17H3v-4.5z" /><path d="M6 17v2.5M18 17v2.5M7 11V9h10v2" /></>,
  audience: <><circle cx="6.5" cy="7.5" r="2.2" /><circle cx="12" cy="6.5" r="2.4" /><circle cx="17.5" cy="7.5" r="2.2" /><path d="M2.5 16c0-2.3 1.8-4 4-4s4 1.7 4 4M13.5 16c0-2.3 1.8-4 4-4s4 1.7 4 4" /><path d="M8 19h8" /></>,
  stool: <><path d="M6 8h12M5 8l1.5 12M19 8l-1.5 12M7 14h10" /><path d="M6 8V6.5A1.5 1.5 0 017.5 5h9A1.5 1.5 0 0118 6.5V8" /></>,
  box: <><path d="M12 3l8 4.3v9.4L12 21l-8-4.3V7.3L12 3z" /><path d="M4 7.3l8 4.3 8-4.3M12 11.6V21" /></>,
};

export default function BrandIcon({ name, size = 26, width = 1.5 }) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
