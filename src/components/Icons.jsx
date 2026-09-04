const stroke = { fill: 'none', strokeWidth: 1.6, viewBox: '0 0 24 24' };

export const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowLeftSm = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M15 6l-6 6 6 6" /></svg>
);
export const ArrowRightSm = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M9 6l6 6-6 6" /></svg>
);
export const ArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const Search = () => (
  <svg {...stroke}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
);
export const Heart = () => (
  <svg {...stroke}><path d="M12 20s-7-4.4-9.3-8.7C1.4 8 3 4.8 6.2 4.3 8.3 4 10.4 5 12 7c1.6-2 3.7-3 5.8-2.7 3.2.5 4.8 3.7 3.5 7C19 15.6 12 20 12 20z" /></svg>
);
export const Cart = () => (
  <svg {...stroke}><path d="M6 8h12l-1 11H7L6 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg>
);
export const Menu = () => (
  <svg {...stroke}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = () => (
  <svg {...stroke}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Play = () => (
  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" /></svg>
);
export const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M6 3h4l2 5-2.5 1.5a11 11 0 005 5L16 12l5 2v4a2 2 0 01-2 2C10.5 20 4 13.5 4 5a2 2 0 012-2z" /></svg>
);
export const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const Instagram = () => (
  <svg {...stroke}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>
);
export const Pinterest = () => (
  <svg {...stroke}><circle cx="12" cy="12" r="9" /><path d="M9 17c1-3 1.5-6 2-9m2 0c2 0 4 1.4 4 4 0 3-2 5-4.5 5-.8 0-1.5-.3-2-.8" /></svg>
);
export const LinkedIn = () => (
  <svg {...stroke}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10v6M7.5 7.5v.01M11.5 16v-3.5c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.3V16" /></svg>
);
export const Facebook = () => (
  <svg {...stroke}><path d="M15 8h2V5h-2a4 4 0 00-4 4v2H9v3h2v6h3v-6h2.5l.5-3H14V9a1 1 0 011-1z" /></svg>
);

export const SOCIALS = {
  instagram: { label: 'Instagram', Icon: Instagram },
  facebook: { label: 'Facebook', Icon: Facebook },
  pinterest: { label: 'Pinterest', Icon: Pinterest },
  linkedin: { label: 'LinkedIn', Icon: LinkedIn },
};
