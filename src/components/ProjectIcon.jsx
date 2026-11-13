/**
 * A small line icon for a project, picked from its name and description
 * (office, car showroom, hotel, school, auditorium, clinic, ...). Used in the
 * projects slider's side list in place of plain numbers.
 */
const PATHS = {
  office: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
  car: <><path d="M5 16l1.5-5.2A2 2 0 0 1 8.4 9.3h7.2a2 2 0 0 1 1.9 1.5L19 16" /><rect x="3" y="16" width="18" height="3.5" rx="1.2" /><circle cx="7.5" cy="19.5" r="1.3" /><circle cx="16.5" cy="19.5" r="1.3" /></>,
  store: <><path d="M4 9l1.5-5h13L20 9" /><path d="M4 9h16v2a2.7 2.7 0 0 1-5.3 0 2.7 2.7 0 0 1-5.4 0A2.7 2.7 0 0 1 4 11z" /><path d="M5 12.5V20h14v-7.5M10 20v-4h4v4" /></>,
  hotel: <><path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-7v8M3 14h18" /><circle cx="7" cy="10.5" r="1.8" /></>,
  school: <><path d="M2.5 9L12 4.5 21.5 9 12 13.5z" /><path d="M6.5 11v4.5c1.7 1.6 3.5 2.3 5.5 2.3s3.8-.7 5.5-2.3V11M21.5 9v5" /></>,
  auditorium: <><path d="M4 11h16M4 15h16M4 19h16" /><path d="M6 11v-1.5a1.5 1.5 0 0 1 3 0V11M10.5 11v-1.5a1.5 1.5 0 0 1 3 0V11M15 11v-1.5a1.5 1.5 0 0 1 3 0V11" /><path d="M5 4h14" /></>,
  cinema: <><rect x="3" y="6" width="18" height="13" rx="1.5" /><path d="M3 10h18M7 6l2 4M12 6l2 4M17 6l2 4" /></>,
  clinic: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M12 8v8M8 12h8" /></>,
  booth: <><rect x="6" y="3" width="12" height="18" rx="1.5" /><path d="M10 7.5c0 2.8 1.7 5.2 4 6.3l1-1.4-1.6-1-.8.8a4.3 4.3 0 0 1-1.6-2.3l.8-.7-.8-1.7z" /></>,
  warehouse: <><path d="M3 9l9-5 9 5v11H3z" /><path d="M7 20v-7h10v7M7 16h10" /></>,
  government: <><path d="M3 9l9-5 9 5" /><path d="M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18" /></>,
  ship: <><path d="M3 15h18l-2.5 4.5h-13z" /><path d="M6 15V9h12v6M12 4v5" /></>,
  plane: <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />,
  finance: <><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" /></>,
  training: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20l4-4 4 4M7 9h6M7 12h10" /></>,
  food: <><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10" /><path d="M16 21V3c-2 1.5-3 4-3 7h3" /></>,
  energy: <path d="M12 3c3 4 6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 3-7 6-11z" />,
  lab: <><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7 15h10" /></>,
};

/* first match wins, so the more specific words come first */
const RULES = [
  [/phone booth/i, 'booth'],
  [/clinic|health/i, 'clinic'],
  [/cinema/i, 'cinema'],
  [/auditorium|telescopic/i, 'auditorium'],
  [/school/i, 'school'],
  [/lab showroom/i, 'lab'],
  [/toyota|volvo|volkswagen|chevrolet|\bmg\b|famco|automobile/i, 'car'],
  [/showroom/i, 'store'],
  [/sheraton|grosvenor|ritz|meridian|hotel|resort/i, 'hotel'],
  [/training/i, 'training'],
  [/exchange|cash/i, 'finance'],
  [/warehouse/i, 'warehouse'],
  [/consulate|archive|authority/i, 'government'],
  [/shipping/i, 'ship'],
  [/air arabia|airline|airport/i, 'plane'],
  [/food/i, 'food'],
  [/oil|gas/i, 'energy'],
];

export const projectIconKey = (p) => {
  const text = `${p.title} ${p.subtitle ?? ''}`;
  return RULES.find(([re]) => re.test(text))?.[1] ?? 'office';
};

export default function ProjectIcon({ project, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[projectIconKey(project)]}
    </svg>
  );
}
