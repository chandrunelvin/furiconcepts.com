/**
 * The "Download Profiles" list carried over from the old site's menu, in the
 * same order. Each `path` opens that brand's PDFs (fcProfiles.js for
 * Furniconcepts, brandProfiles.js for the rest); Safe Lockers has no PDFs on
 * the old site, so it opens the brand page instead.
 * Titles follow CATALOGS where the brand has one; covers are the brand banners
 * where they exist, and site photography for brands without one.
 * `card` is the image the home page's catalogue row shows: the brand's best
 * catalogue cover where it is a strong one, otherwise brand photography.
 */
const page = (slug) => `/download-profiles/${slug}`;

export const PROFILES = [
  { name: 'Furniconcepts', title: 'Company Profile & Catalogues', cover: '/images/common/hero1.webp', path: page('furniconcepts'), card: '/images/common/hero1.webp' },
  { name: 'Cavaletti', title: 'Office & Task Seating', cover: '/images/cavaletti/task-chair.jpg', path: page('cavaletti'), card: '/images/profiles/covers/cavaletti/1653585765catalogo-yon-2022-en-web.webp' },
  { name: 'Gebbwork', title: 'Desking & Workplace Systems', cover: '/images/brands/gebbwork.jpg', path: page('gebbwork'), card: '/images/profiles/covers/gebbwork/64ded6f76b649.webp' },
  { name: 'Leadcom', title: 'Auditorium & Venue Seating', cover: '/images/brands/leadcom.jpg', path: page('leadcom'), card: '/images/brands/leadcom.jpg' },
  { name: 'Nitrocare', title: 'Healthcare & Hospital Furniture', cover: '/images/brands/nitrocare.jpg', path: page('nitrocare'), card: '/images/brands/nitrocare.jpg' },
  { name: 'Jwesys', title: 'Telescopic & Retractable Seating', cover: '/images/brands/jwesys.jpg', path: page('jwesys'), card: '/images/profiles/covers/jwesys/retractable-seating-stadium-2025-edition-compressed.webp' },
  { name: 'Audia Italia', title: 'Acoustic Solutions', cover: '/images/brands/audia-italia.jpg', path: page('audia-italia'), card: '/images/brands/audia-italia.jpg' },
  { name: 'Markant', title: 'Meeting & Conference Tables', cover: '/images/brands/markant.jpg', path: page('markant'), card: '/images/profiles/covers/markant/markant-workways-range-brochure-nl-v1.webp' },
  { name: 'Worklyffe', title: 'Workplace Accessories', cover: '/images/brands/worklyffe.jpg', path: page('worklyffe'), card: '/images/brands/worklyffe.jpg' },
  { name: 'Scab', title: 'Dining & Outdoor Seating', cover: '/images/brands/scab-italy.jpg', path: page('scab'), card: '/images/brands/scab-italy.jpg' },
  { name: 'Versalink', title: 'Sovica & General Catalogues', cover: '/images/common/crafted-precision.jpg', path: page('versalink'), card: '/images/profiles/covers/versalink/general-catalogue-v4.webp' },
  { name: 'Phoenix', title: 'Household, Storage & Seating', cover: '/images/about-us/about-hero-bg.webp', path: page('phoenix'), card: '/images/profiles/covers/phoenix/phoenix-storageorganization2026-webversion-cvpmgpu.webp' },
  { name: 'Parin', title: 'Office Seating & Storage', cover: '/images/brand-product-images/parin/edu1.webp', path: page('parin'), card: '/images/profiles/covers/parin/09-parin-latest-catalogue-june-2025.webp' },
  { name: 'Doğuş', title: 'School, Kindergarten & Lab Furniture', cover: '/images/common/quality-detail.jpg', path: page('dogus'), card: '/images/projects/philiphines/banner.webp' },
  { name: 'Safe Lockers', title: 'Safes & Lockers', cover: '/images/brand-product-images/safe-lockers/product-014.webp', path: '/brands/safe-lockers', card: '/images/brand-product-images/safe-lockers/product-014.webp' },
];
