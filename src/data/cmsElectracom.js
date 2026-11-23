// Configurations and photographs from CMS Electracom's Asia product catalogue.
const product = (id, name, type, category, caption, description) => ({
  id, name, type, category, caption, description,
  image: `/images/brand-product-images/cms-electracom/${id}.webp`,
});

const consultation = { label: 'Request a CMS Electracom Consultation', href: '/contact' };

export const CMS_ELECTRACOM = {
  slug: 'cms-electracom',
  name: 'CMS Electracom',
  tagline: 'Modular wiring, desk power and cable management',
  heading: 'CMS Electracom Modular Wiring and Power Solutions',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Brands', href: '/#collections' }, { label: 'CMS Electracom' }],
  heroImage: '/images/brands/cms-electracom.webp',
  heroCta: consultation,
  heroText: 'Where will people plug in a laptop, charge a phone or connect a meeting screen? Furniconcepts helps you plan CMS Electracom power and data points alongside your desks, workstations and meeting tables.',
  features: [
    { icon: 'grid', label: 'Desk power' },
    { icon: 'gear', label: 'Modular wiring' },
    { icon: 'box', label: 'Cable management' },
    { icon: 'people', label: 'Custom configurations' },
  ],
  products: {
    eyebrow: 'CMS Electracom products',
    title: 'From the cable tray to the desktop',
    intro: 'Compare power modules by where they sit on the furniture. Then choose how leads will reach each desk and where spare cable will sit.',
    whatsapp: '971503782215',
    enquiryNote: 'Include the desk type, socket format and project location in your enquiry.',
    categories: [
      { key: 'all', label: 'All products', icon: 'grid' },
      { key: 'desk-power', label: 'Desk power', icon: 'box' },
      { key: 'wiring', label: 'Modular wiring', icon: 'gear' },
      { key: 'cable-management', label: 'Cable management', icon: 'grid' },
    ],
    items: [
      product('athena', 'Athena Power Rail', 'Desktop power rail', 'desk-power', 'Two power outlets and USB-A/C charging',
        'Keep sockets within reach on a workstation. This Athena configuration combines two power modules with USB-A and USB-C charging ports that share 30 W.'),
      product('centra', 'Centra In-Desk Unit', 'Recessed power module', 'desk-power', 'Two power modules and two data positions',
        'Centra fits into a desk or meeting table. The version shown puts two sockets and space for two data connections in one strip.'),
      product('alpha', 'Alpha Below-Desk Unit', 'Under-desk power module', 'desk-power', 'Two power outlets and two data positions',
        'Alpha places connections beneath the worktop to keep the surface clear. This configuration has two power outlets and provision for two data ports.'),
      product('c-series', 'C-Series Interconnecting Cable', 'Modular lead', 'wiring', 'C15 series',
        'This lead links compatible CMS modular wiring components. Include the distances between workstations in your brief so the team can check lead lengths.'),
      product('wire-grid', 'Wire Grid Extra', 'Under-desk cable basket', 'cable-management', '100 mm wide · single tier',
        'The open basket holds cable runs under the worktop. This 100 mm-wide version comes with two mounting brackets.'),
      product('trax', 'Trax Cable Riser', 'Cable tray to workstation', 'cable-management', '1,200 mm · single compartment',
        'Trax guides cables between the tray and a height-adjustable desk. The single-compartment kit shown is 1,200 mm long.'),
    ],
  },
  planningGuide: {
    title: 'Planning power with furniture',
    intro: 'CMS Electracom makes desk sockets, modular leads and cable baskets. We help you choose where each belongs in your furniture plan.',
    topics: [
      { title: 'Desk layout', text: 'Mark seats and screens on your drawing. Include worktop thickness, cut-outs and the travel of any sit-stand desks.' },
      { title: 'Power and data', text: 'List the sockets, USB ports and data connections each seat needs. We can take custom requests to CMS Electracom.' },
      { title: 'Project coordination', text: 'Send Furniconcepts your furniture schedule with the drawing. One team reviews the fit and checks local availability before quoting.' },
    ],
    image: '/images/brands/cms-electracom-centra.webp',
    imageAlt: 'Recessed power strip fitted flush with a white conference table',
    caption: 'Centra in-desk unit',
    link: { label: 'Explore Office Furniture', href: '/office-furniture.php' },
  },
  faq: {
    eyebrow: 'FAQ', title: 'Frequently Asked Questions',
    intro: 'What to include when specifying desk power for a workplace.',
    items: [
      { q: 'What does CMS Electracom supply?', a: 'The range covers modular wiring leads, desk power outlets, charging modules and cable management for commercial interiors.' },
      { q: 'Can products be customised?', a: 'Yes. CMS Electracom considers custom briefs. Share the required outlets, mounting position and quantities so the supplier can assess the configuration.' },
      { q: 'Can power be planned with my furniture?', a: 'Yes. Send your workstation layout and show where people will use power and data. Furniconcepts can coordinate the proposed outlet positions with your furniture plan.' },
      { q: 'What should I send for a quote?', a: 'Send your workstation plan, outlet quantities, preferred socket format and site location to letstalk@furniconcepts.com.' },
    ],
  },
  quoteCta: {
    eyebrow: 'Workplace enquiries', title: 'Plan power for your workspace',
    text: 'Send your desk layout and device list. We can review where connections are needed and which CMS Electracom configurations to enquire about.',
    cta: consultation, image: '/images/contact-us/reaquest-qoute-image.webp',
  },
  contacts: [
    { label: 'UAE +971 50 378 2215', href: 'tel:+971503782215' },
    { label: 'India +91 93636 07900', href: 'tel:+919363607900' },
    { label: 'letstalk@furniconcepts.com', href: 'mailto:letstalk@furniconcepts.com' },
  ],
};
