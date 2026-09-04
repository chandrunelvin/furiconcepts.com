/**
 * Site content, sourced from furniconcepts.com.
 * Category and sector photography is placeholder stock — swap `src` values for
 * Furniconcepts' own product shots when they are available.
 */
const img = (id, w) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

/** Photography from Cavaletti, the partner brand Furniconcepts represents. */
const cav = (name) => `/images/cavaletti/${name}.jpg`;

export const BRAND = {
  name: 'Furniconcepts',
  tagline: 'One stop solutions to all your furniture needs',
  promise: 'Furniture Designed With Style',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#story' },
  { label: 'Categories', href: '#categories' },
  { label: 'Brands', href: '#brands' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Projects', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES = [
  { src: '/images/common/hero1.webp', alt: 'Furniconcepts interior with contemporary seating' },
  { src: cav('project-lounge'), alt: 'Branch lounge furnished with modular Cavaletti seating' },
  { src: cav('project-branch'), alt: 'Green branch interior with Cavaletti task seating' },
  { src: img('1489599849927-2ee91cede3ba', 1800), alt: 'Rows of auditorium seating' },
  { src: img('1497366754035-f200968a6e72', 1800), alt: 'Office corridor with glass partitions' },
];

/** The twelve categories Furniconcepts supplies. */
export const CATEGORIES = [
  { num: '01', group: 'Workplace', title: 'Office Furniture', src: cav('task-chair'), alt: 'Cavaletti mesh task chair', fit: 'contain' },
  { num: '02', group: 'Acoustics', title: 'Acoustic Pods', src: cav('showroom-chairs'), alt: 'Showroom display of seating ranges' },
  { num: '03', group: 'Acoustics', title: 'Acoustic Solutions', src: img('1497366754035-f200968a6e72', 700), alt: 'Glass-partitioned office corridor' },
  { num: '04', group: 'Soft Seating', title: 'Lounge Seating', src: cav('lounge-chair'), alt: 'Cavaletti lounge chair and ottoman', fit: 'contain' },
  { num: '05', group: 'Venues', title: 'Auditorium', src: cav('auditorium'), alt: 'Auditorium seated with Cavaletti fixed seating' },
  { num: '06', group: 'Transport', title: 'Airport Seating', src: cav('beam-seating'), alt: 'Cavaletti modular beam seating', fit: 'contain' },
  { num: '07', group: 'Venues', title: 'Telescopic Seating', src: cav('beam-seating-dark'), alt: 'Cavaletti beam seating row', fit: 'contain' },
  { num: '08', group: 'Venues', title: 'Stadium', src: img('1540575467063-178a50c2df87', 700), alt: 'Tiered stadium seating with audience' },
  { num: '09', group: 'Healthcare', title: 'Hospital', src: img('1519494026892-80bbd2d6fd0d', 700), alt: 'Healthcare reception desk' },
  { num: '10', group: 'Hospitality', title: 'Hotel Furniture', src: cav('executive-chairs'), alt: 'Cavaletti leather lounge chairs', fit: 'contain' },
  { num: '11', group: 'Education', title: 'School', src: cav('stacking-chairs'), alt: 'Cavaletti stacking chairs', fit: 'contain' },
  { num: '12', group: 'Outdoor', title: 'Indoor & Outdoor Umbrellas', src: img('1532323544230-7191fd51bc1b', 700), alt: 'Poolside seating under umbrellas' },
];

/** Partner brands represented by Furniconcepts. */
export const PARTNER_BRANDS = [
  'Cavaletti', 'Gebb Work', 'Leadcom', 'OMT', 'Nitrocare', 'Forma5',
  'Broad Power', 'Musepod', 'Zumbooth', 'Parin', 'Libero Italy',
  'Jwesys', 'Audia Italia', 'Scab Italy', 'Markant', 'Worklyffe',
];

export const STATS = [
  { n: '12', l: 'Furniture Categories' },
  { n: '16+', l: 'Global Partner Brands' },
  { n: '3', l: 'Offices Worldwide' },
];

export const SECTORS = [
  { name: 'Workplace', src: cav('project-branch'), alt: 'Workplace furnished by Furniconcepts' },
  { name: 'Hospitality', src: cav('project-lounge'), alt: 'Lounge seating in a branch interior' },
  { name: 'Healthcare', src: img('1519494026892-80bbd2d6fd0d', 600), alt: 'Healthcare reception' },
  { name: 'Public Venues', src: cav('auditorium'), alt: 'Auditorium seating installation' },
  { name: 'Education', src: img('1580582932707-520aed937b7b', 600), alt: 'Classroom with desks and chairs' },
  { name: 'Aviation', src: img('1517400508447-f8dd518b86db', 600), alt: 'Airport terminal departures hall' },
  { name: 'Sports & Stadium', src: img('1540575467063-178a50c2df87', 600), alt: 'Tiered stadium seating' },
  { name: 'Outdoor', src: img('1532323544230-7191fd51bc1b', 600), alt: 'Outdoor terrace seating under umbrellas' },
];

export const ARTICLES = [
  {
    date: 'Completed Project',
    title: 'Branch fit-out with Cavaletti task seating',
    src: cav('project-branch'),
    alt: 'Branch fit-out with Cavaletti task chairs',
  },
  {
    date: 'Completed Project',
    title: 'Modular lounge seating for a customer-facing floor',
    src: cav('project-lounge'),
    alt: 'Modular lounge seating in a branch',
  },
  {
    date: 'Completed Project',
    title: 'Telescopic and auditorium seating for public venues',
    src: img('1489599849927-2ee91cede3ba', 700),
    alt: 'Auditorium seating installation',
  },
];

/** Offices, in the order listed on furniconcepts.com. */
export const OFFICES = [
  {
    country: 'United Arab Emirates',
    phones: [
      { label: '+971 50 378 2215', href: 'tel:+971503782215' },
      { label: '+971 4 257 9447', href: 'tel:+97142579447' },
    ],
    address: 'Studio 3A, Street 6A, Al Quoz 1, Dubai',
  },
  {
    country: 'India',
    phones: [{ label: '+91 93636 07900', href: 'tel:+919363607900' }],
    address: 'George Town, Chennai',
  },
  {
    country: 'Singapore',
    phones: [
      { label: '+65 8235 2565', href: 'tel:+6582352565' },
      { label: '+65 8093 3197', href: 'tel:+6580933197' },
    ],
    address: '450 Yishun Ring Road, Floor 6, Unit 112',
  },
];

export const CONTACT = {
  email: 'letstalk@furniconcepts.com',
  phone: OFFICES[0].phones[0].label,
  phoneHref: OFFICES[0].phones[0].href,
};

export const FOOTER_COLUMNS = [
  {
    heading: 'CATEGORIES',
    links: ['Office Furniture', 'Acoustic Pods', 'Lounge Seating', 'Auditorium', 'Hotel Furniture', 'Hospital'],
  },
  { heading: 'COMPANY', links: ['About Us', 'Download Profiles', 'Brands', 'Shops', 'Completed Projects', 'Clients'] },
  { heading: 'SUPPORT', links: ['Contact Us', 'Request a Quote', 'Delivery & Installation', 'Warranty'] },
  { heading: 'LEGAL', links: ['Privacy Policy', 'Terms & Conditions'] },
];

export const STORY_IMAGE = {
  src: cav('showroom'),
  alt: 'Cavaletti showroom with the seating ranges Furniconcepts supplies',
};
