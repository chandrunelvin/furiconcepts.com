/**
 * Certificates shown on the About page, carried over from the old site's
 * furniconcepts.com/certificates.php. Files are copies of the old site's,
 * kept in /public/pdfs/certificates; covers are each document's first page.
 * `group` picks the filter tab; `meta` is the certificate number or date;
 * `cta` relabels the view link for a document that is not a certificate.
 */
const doc = (slug, ext = 'pdf') => ({
  cover: `/images/certificates/${slug}.webp`,
  pdf: `/pdfs/certificates/${slug}.${ext}`,
});

export const CERT_GROUPS = [
  { key: 'all', label: 'All' },
  { key: 'iso', label: 'ISO Certified' },
  { key: 'safety', label: 'Health & Safety' },
  { key: 'trademark', label: 'Trademark' },
  { key: 'compliance', label: 'Compliance' },
];

export const CERTIFICATES = [
  {
    group: 'iso',
    title: 'ISO 9001:2015 – Quality Management System',
    text: 'Furniconcepts Pte. Ltd., Singapore, audited by Hawk Eye Certifications for furniture manufacturing, trading and services, and flooring trading works.',
    meta: 'UAF/INT/2608FT/2491 · Valid to 19.08.2029',
    ...doc('iso-9001-singapore', 'jpg'),
  },
  {
    group: 'iso',
    title: 'ISO 14001:2015 – Environmental Management System',
    text: 'Certifies our commitment to sustainable manufacturing, trading and flooring operations.',
    meta: 'UAF/INT/2608FT/2492 · Valid to 19.08.2029',
    ...doc('iso-14001-singapore', 'jpg'),
  },
  {
    group: 'iso',
    title: 'ISO 45001:2018 – Occupational Health & Safety',
    text: 'Confirms a safe and compliant working environment across our manufacturing, trading and services operations.',
    meta: 'UAF/INT/2608FT/2493 · Valid to 19.08.2029',
    ...doc('iso-45001-singapore', 'jpg'),
  },
  {
    group: 'iso',
    title: 'ISO 9001:2015 – Certificate of Registration',
    text: 'Furniconcepts Middle East Furniture Trading LLC, Dubai, certified by QRO for the manufacture and trade of high-quality furniture.',
    meta: 'Furniconcepts Middle East · UAE',
    ...doc('iso-9001-uae'),
  },
  {
    group: 'safety',
    title: 'HSE Management System Manual',
    text: 'Our group-wide Health, Safety & Environment manual, integrated with ISO 9001, 14001 and 45001, covering risk assessments, safe work procedures and method statements in Singapore, the UAE and India.',
    meta: 'FC-HSE-MAN-001 · Rev. 00 · 26 September 2026',
    cta: 'View Manual',
    ...doc('hse-manual'),
  },
  {
    group: 'safety',
    title: 'HSE Certified Team – Workplace Safety & Health',
    text: 'Eversafe Academy, Singapore. Our installation team works to Singapore WSH control measures on every site.',
    meta: 'WPH-WSH-4075-1.1 · 24–25 September 2026',
    ...doc('hse-team', 'jpg'),
  },
  {
    group: 'safety',
    title: 'WSQ Statement of Attainment – WSH Control Measures',
    text: 'Awarded to Dharshan DC by Eversafe Academy, Singapore, for Workplace Safety and Health Control Measures under the Singapore Workforce Skills Qualifications system.',
    meta: 'Cert No. 9100008272882 · 25 September 2026',
    ...doc('wsh-dharshan'),
    cover: '/images/certificates/wsh-dharshan.jpg',
  },
  {
    group: 'trademark',
    title: 'Registered Trademark Certificate – Furni Concepts',
    text: 'Registered under the Singapore Trade Marks Act 1998, giving exclusive rights and brand protection.',
    meta: 'Intellectual Property Office of Singapore',
    ...doc('trademark-certificate'),
  },
  {
    group: 'trademark',
    title: 'Trade Mark Registration Notice – Furni Concepts',
    text: 'Issued by the Intellectual Property Office of Singapore, with registration details, validity period and compliance guidance.',
    meta: 'IPOS · 17 March 2026',
    ...doc('trademark-notice'),
  },
  {
    group: 'compliance',
    title: 'ICV Certificate 87153',
    text: 'UAE In-Country Value certificate for Furniconcepts Middle East Furniture Trading LLC.',
    meta: 'ICV score 7.32%',
    ...doc('icv-certificate'),
  },
  {
    group: 'compliance',
    title: 'ICV Card 87153',
    text: 'The ICV card for Furniconcepts Middle East Furniture Trading LLC, for tender and procurement records.',
    meta: 'Valid to 15/05/2027',
    ...doc('icv-card'),
  },
  {
    group: 'compliance',
    title: 'NRT Participation Letter',
    text: 'Acknowledges our participation in World Tamil Diaspora Day 2025 from the Commissionerate of Rehabilitation and Welfare of Non-Resident Tamils.',
    meta: 'Government of Tamil Nadu · 22 January 2025',
    ...doc('nrt-letter'),
  },
];
