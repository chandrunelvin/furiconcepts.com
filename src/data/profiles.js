/**
 * The "Download Profiles" list carried over from the old site's menu, in the
 * same order. Each `path` opens that brand's PDFs (fcProfiles.js for
 * Furniconcepts, brandProfiles.js for the rest); Safe Lockers has no PDFs on
 * the old site, so it opens the brand page instead.
 * Titles follow CATALOGS where the brand has one; covers are the brand banners
 * where they exist, and site photography for brands without one.
 */
const page = (slug) => `/download-profiles/${slug}`;

export const PROFILES = [
  { name: 'Furniconcepts', title: 'Company Profile & Catalogues', cover: '/images/common/hero1.webp', path: page('furniconcepts') },
  { name: 'Cavaletti', title: 'Office & Task Seating', cover: '/images/cavaletti/task-chair.jpg', path: page('cavaletti') },
  { name: 'Gebbwork', title: 'Desking & Workplace Systems', cover: '/images/brands/gebbwork.jpg', path: page('gebbwork') },
  { name: 'Leadcom', title: 'Auditorium & Venue Seating', cover: '/images/brands/leadcom.jpg', path: page('leadcom') },
  { name: 'Nitrocare', title: 'Healthcare & Hospital Furniture', cover: '/images/brands/nitrocare.jpg', path: page('nitrocare') },
  { name: 'Jwesys', title: 'Telescopic & Retractable Seating', cover: '/images/brands/jwesys.jpg', path: page('jwesys') },
  { name: 'Audia Italia', title: 'Acoustic Solutions', cover: '/images/brands/audia-italia.jpg', path: page('audia-italia') },
  { name: 'Markant', title: 'Meeting & Conference Tables', cover: '/images/brands/markant.jpg', path: page('markant') },
  { name: 'Worklyffe', title: 'Workplace Accessories', cover: '/images/brands/worklyffe.jpg', path: page('worklyffe') },
  { name: 'Scab', title: 'Dining & Outdoor Seating', cover: '/images/brands/scab-italy.jpg', path: page('scab') },
  { name: 'Versalink', title: 'Sovica & General Catalogues', cover: '/images/common/crafted-precision.jpg', path: page('versalink') },
  { name: 'Phoenix', title: 'Household, Storage & Seating', cover: '/images/about-us/about-hero-bg.webp', path: page('phoenix') },
  { name: 'Parin', title: 'Office Seating & Storage', cover: '/images/brand-product-images/parin/edu1.webp', path: page('parin') },
  { name: 'Doğuş', title: 'School, Kindergarten & Lab Furniture', cover: '/images/common/quality-detail.jpg', path: page('dogus') },
  { name: 'Safe Lockers', title: 'Safes & Lockers', cover: '/images/brand-product-images/safe-lockers/product-014.webp', path: '/brands/safe-lockers' },
];
