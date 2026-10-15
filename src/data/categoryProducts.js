/**
 * Products shown on each category page, drawn from the brand catalogues in
 * brands.js. Each category lists [brand slug, product group keys, name filter?,
 * tab names?] entries; a group key is a brand's product category (e.g.
 * 'auditorium-seating'), and the optional filter keeps only matching product
 * names when a group mixes in things that don't belong (Markant's privacy
 * group also holds screens). Tab names rename a group for this page only, so
 * Leadcom's auditorium seats can read as stand seating on the stadium page.
 * Only products that truly belong to the category are listed.
 * Groups that share a name across brands merge into one tab.
 */
import { BRANDS } from './brands.js';

const SOURCES = {
  '/acoustic-pods.php': [
    ['musepod', ['pods-and-booths']],
    ['zumbooth', ['booths']],
    ['leadcom', ['acoustic-pods-and-cabins']],
    ['markant', ['focus-and-privacy'], /pod|calma|skyhub/i],
  ],
  '/acoustic-solutions.php': [
    ['musepod', ['pods-and-booths']],
    ['zumbooth', ['booths']],
    ['leadcom', ['acoustic-pods-and-cabins']],
    ['markant', ['focus-and-privacy'], /pod|calma|skyhub/i],
  ],
  '/airport-seating.php': [
    ['leadcom', ['public-and-waiting-seating']],
    ['merryfair', ['row-and-beam-seating']],
    ['parin', ['public-seating']],
  ],
  '/auditorium-seating.php': [
    ['leadcom', ['auditorium-seating']],
    ['audia-italia', ['auditorium-seating']],
  ],
  '/hotel-furniture-manufacturers.php': [
    ['libero-italy', ['armchairs', 'sofas', 'stools', 'poufs-and-benches', 'lounge-and-storage']],
    ['scab-italy', ['chairs-and-armchairs', 'barstools', 'sofas-and-lounge', 'tables-and-bases', 'coffee-tables-and-accessories']],
    ['safe-lockers', ['hotel-and-home-safes'], /hotel/i],
  ],
  '/hospital-furniture.php': [
    ['nitrocare', ['hospital-furniture', 'attendant-and-care-seating', 'carts-and-mobility']],
    ['parin', ['healthcare-furniture']],
  ],
  '/lounge-seating.php': [
    ['cavaletti', ['lounge']],
    ['libero-italy', ['armchairs', 'sofas', 'poufs-and-benches']],
    ['scab-italy', ['sofas-and-lounge']],
    ['markant', ['lounge-and-soft-seating']],
    ['worklyffe', ['lounge-seating']],
    ['merryfair', ['lounge-seating']],
  ],
  '/office-furniture.php': [
    ['cavaletti', ['office', 'task', 'executive', 'visitor', 'collaborative']],
    ['merryfair', ['task-chairs', 'executive-chairs', 'signature-chairs', 'contemporary-chairs', 'system-furniture', 'desking-elements']],
    ['gebbwork', ['executive-desks']],
    ['forma5', ['desks-and-workspace', 'seating']],
    ['markant', ['chairs', 'tables', 'desks', 'storage-and-accessories']],
    ['leadcom', ['workstations-and-tables']],
    ['worklyffe', ['conference-tables']],
    ['broad-power', ['power-and-data-modules', 'monitor-arms-and-accessories']],
  ],
  '/stadium-seating.php': [
    ['merryfair', ['arena-and-stadium-seating']],
    ['leadcom', ['auditorium-seating', 'vip-cinema-recliners', 'public-and-waiting-seating'], null, {
      'auditorium-seating': 'Fixed & VIP Stand Seating',
      'vip-cinema-recliners': 'VIP Box & Lounge Recliners',
      'public-and-waiting-seating': 'Concourse & Beam Seating',
    }],
    ['merryfair', ['row-and-beam-seating'], null, { 'row-and-beam-seating': 'Concourse & Beam Seating' }],
    ['parin', ['public-seating'], null, { 'public-seating': 'Concourse & Beam Seating' }],
  ],
  '/school-furniture.php': [
    ['leadcom', ['education-and-lecture']],
    ['merryfair', ['education-seating']],
    ['worklyffe', ['training-tables', 'student-tables']],
    ['parin', ['educational-furniture']],
  ],
  '/telescopic-cinema-seating-manufacturer-dubai.php': [
    ['leadcom', ['auditorium-seating', 'vip-cinema-recliners']],
    ['audia-italia', ['auditorium-seating']],
  ],
};

const slugify = (text) =>
  text.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** The product explorer data for a category page, or null if it has none. */
export function categoryProducts(path, name) {
  const sources = SOURCES[path];
  if (!sources) return null;

  const tabs = new Map();
  const items = [];
  for (const [slug, groups, only, names = {}] of sources) {
    const brand = BRANDS[slug];
    if (!brand) continue;
    const { categories, items: all } = brand.products;
    for (const key of groups) {
      const group = categories.find((c) => c.key === key);
      if (!group) continue;
      const label = names[key] ?? group.label;
      const tab = slugify(label);
      if (!tabs.has(tab)) tabs.set(tab, { key: tab, label, icon: group.icon });
      for (const p of all.filter((x) => x.category === key && (!only || only.test(x.name)))) {
        items.push({
          ...p,
          id: `${slug}-${p.id}`,
          category: tab,
          type: label,
          brand: brand.name,
          origin: brand.origin,
        });
      }
    }
  }
  if (!items.length) return null;

  return {
    eyebrow: `${name} Products`,
    title: `Explore Our ${name} Range`,
    intro: `Products from the partner brands Furniconcepts supplies for ${name.toLowerCase()} projects across Dubai, India and Singapore. Tap any product to enquire.`,
    download: { label: 'Request Catalogue', href: '/download-profiles' },
    whatsapp: '971503782215',
    enquiryNote: 'Send us an enquiry now, we will get back to you asap.',
    viewAll: { label: `View All ${name} Products` },
    categories: [{ key: 'all', label: 'All Products', icon: 'grid' }, ...tabs.values()],
    items,
  };
}
