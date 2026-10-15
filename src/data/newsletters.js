/**
 * Furnijournal, the monthly Furniconcepts newsletter, carried over from the
 * old site (furniconcepts.com/newsletter.php). The PDFs are copies of the old
 * site's, kept in /public/pdfs/newsletter; covers are their front pages.
 * Newest first. `story` is the issue's cover headline; `project` links it to
 * that project's page where the site has one.
 */
const issue = (year, month, name, vol, story, project) => ({
  id: `${year}-${month}`,
  year,
  month: name,
  vol,
  title: `Furnijournal – ${name} ${year}`,
  story,
  project: project && `/projects/${project}`,
  cover: `/images/newsletter/furnijournal-${year}-${month}.webp`,
  pdf: `/pdfs/newsletter/furnijournal-${year}-${month}.pdf`,
});

export const NEWSLETTERS = [
  issue('2026', '08', 'August', 11, 'A workspace that moves with you'),
  issue('2026', '07', 'July', 10, 'Furnishing a Toyota showroom in Abu Dhabi', 'abu-dhabi-toyota'),
  issue('2026', '06', 'June', 9, 'Three Volkswagen showrooms transformed across the UAE'),
  issue('2026', '05', 'May', 8, 'The Furniconcepts Furniture Lab opens in Chennai', 'furniconcept-lab-showroom'),
  issue('2026', '04', 'April', 7, 'Furniconcepts achieves its registered trademark'),
  issue('2026', '03', 'March', 6, 'Transforming Arcadia School, Al Furjan, Dubai', 'arcadia'),
  issue('2026', '02', 'February', 5, 'Italian elegance at the Etisalat headquarters, UAE', 'etisalat-hq'),
  issue('2026', '01', 'January', 4, 'Another screen at Star Cinema, Abu Dhabi', 'star-cinemas'),
  issue('2025', '12', 'December', 3, 'Elevating the spaces of Toyota, Abu Dhabi', 'abu-dhabi-toyota'),
  issue('2025', '11', 'November', 2, 'Furniconcepts in The New Indian Express'),
  issue('2025', '10', 'October', 1, 'Lights, comfort, action: creating Star Cinema, Abu Dhabi', 'star-cinemas'),
];

export const NEWSLETTER_YEARS = [...new Set(NEWSLETTERS.map((n) => n.year))];
