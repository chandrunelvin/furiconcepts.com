// Selected configurations from Konektra's SYSTEM 01 furniture and home-office collections.
const product = (id, name, type, category, finish, description) => ({
  id, name, type, category, description,
  caption: finish,
  image: `/images/brand-product-images/konektra/${id}.webp`,
});

const consultation = { label: 'Request a Konektra Consultation', href: '/contact' };

export const KONEKTRA = {
  slug: 'konektra',
  name: 'Konektra',
  origin: 'Germany',
  tagline: 'SYSTEM 01 modular storage, room dividers and office furniture',
  heading: 'Konektra Modular Furniture Systems',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Brands', href: '/#collections' }, { label: 'Konektra' }],
  heroImage: '/images/brands/konektra.webp',
  heroCta: consultation,
  heroText: 'Turn a shelf into a sideboard, or use a bank of open shelves to divide a room. For projects in Dubai and India, Furniconcepts helps architects and fit-out teams plan Konektra furniture around the way people work.',
  features: [
    { icon: 'grid', label: 'Modular storage' },
    { icon: 'gear', label: 'Reconfigurable frames' },
    { icon: 'box', label: 'CAD models' },
    { icon: 'globe', label: 'Nuremberg, Germany' },
  ],
  products: {
    eyebrow: 'Konektra products',
    title: 'Explore SYSTEM 01 and KENO',
    intro: 'Compare open shelves, closed storage and tables from the SYSTEM 01 range. The KENO chair pairs an adjustable seat with a mesh back for desk work.',
    whatsapp: '971503782215',
    enquiryNote: 'Share your preferred finish, quantities and project location to check the options.',
    categories: [
      { key: 'all', label: 'All products', icon: 'grid' },
      { key: 'classic', label: 'SYSTEM 01 Classic', icon: 'box' },
      { key: 'urban', label: 'SYSTEM 01 Urban', icon: 'grid' },
      { key: 'keno', label: 'KENO seating', icon: 'chair' },
    ],
    items: [
      product('urban-room-divider', 'SYSTEM 01 Urban Room Divider', 'Room divider', 'urban', 'Olive · LINE 1802',
        'This 144 cm-high divider doubles as shelving between two work areas. Olive metal panels fit into a chrome tube frame with closed corner connectors.'),
      product('classic-lowboard', 'SYSTEM 01 Classic Lowboard', 'Low cabinet', 'classic', 'Ruby Red · RAL 3003',
        'Two flap doors keep cables and meeting-room equipment out of sight. The cabinet measures 103 cm wide, 39 cm high and 38 cm deep.'),
      product('classic-bookshelf', 'SYSTEM 01 Classic Small Bookshelf', 'Bookshelf', 'classic', 'Steel Blue · RAL 5011',
        'Steel-blue shelves sit inside a chrome frame with exposed ball connectors. Use the small unit beside a desk for books and material samples.'),
      product('urban-sideboard', 'SYSTEM 01 Urban Sideboard with Drop-down Doors', 'Sideboard', 'urban', 'Golden Yellow · RAL 1004',
        'The golden-yellow door fronts fold down for access to the compartments. The top offers display space alongside concealed storage in a meeting room.'),
      product('urban-coffee-table', 'SYSTEM 01 Urban Coffee Table', 'Coffee table', 'urban', 'Steel Blue · RAL 5011',
        'A stepped arrangement of blue metal shelves gives a lounge space for cups on one level and reading material on another.'),
      product('keno-office-chair', 'KENO Office Chair', 'Task chair', 'keno', 'Black mesh',
        'Adjust the seat height and backrest angle to suit the desk. The padded armrests also move up, down and sideways, and pivot to support the forearms.'),
    ],
  },
  planningHead: { eyebrow: 'Planning with Konektra', title: 'Modular Storage That Moves With Your Team', intro: 'How SYSTEM 01 fits an office, and how we help you plan it.' },
  planning: [
    { title: 'About Konektra', icon: 'globe', text: 'Based in Nuremberg, Konektra has worked with architects and designers for more than a decade. Its SYSTEM 01 furniture uses tubes, connectors and metal panels. Classic uses exposed ball joints. Urban closes the corners for a different finish.' },
    { title: 'Where modular furniture helps', icon: 'box', text: 'An open divider can mark the edge of a breakout area while keeping sightlines across the office. A low cabinet keeps shared equipment within reach. When teams move, the modules can be rebuilt to suit a new arrangement.', link: { label: 'Explore Office Furniture', href: '/office-furniture.php' } },
    { title: 'Plan with CAD models', icon: 'grid', text: 'Place a Konektra model in your floor plan to check shelf heights, door clearance and the aisle beside a desk. Architects and designers can find drawing and modelling files in pCon.catalog.', link: { label: 'Open Konektra in pCon.catalog', href: 'https://catalogs.pcon-solutions.com/welcome/o-3daadb5c002f408a9a6a67776c174c49?lang=en' } },
    { title: 'Why plan with Furniconcepts?', icon: 'people', text: 'Send one drawing for the storage, workstations and seating. Our UAE and India contacts can review the layout, check supply for your location and prepare a combined quote. The same team handles questions as the drawings change.' },
  ],
  faq: {
    eyebrow: 'FAQ', title: 'Frequently Asked Questions',
    intro: 'Details for architects, designers and workplace teams specifying Konektra.',
    items: [
      { q: 'Where is Konektra based?', a: 'Konektra is based in Nuremberg, Germany.' },
      { q: 'What does Konektra make?', a: 'Its SYSTEM 01 range includes modular shelving, cabinets, tables and room dividers for homes and offices. Konektra also makes KENO desk chairs.' },
      { q: 'Are CAD files available?', a: 'Yes. The Konektra entry in pCon.catalog provides models for 2D drawings and 3D room plans.' },
      { q: 'Can I combine Konektra with other furniture?', a: 'Yes. Include the desks and seating you need in your brief so Furniconcepts can quote them alongside your Konektra configuration.' },
      { q: 'How do I request a quote?', a: 'Send your floor plan, preferred pieces and project location to letstalk@furniconcepts.com.' },
    ],
  },
  quoteCta: {
    eyebrow: 'Project enquiries', title: 'Plan your Konektra layout',
    text: 'Share your floor plan and tell us what needs to stay on display, what needs a door and where your team needs room to move.',
    cta: consultation, image: '/images/contact-us/reaquest-qoute-image.webp',
  },
  contacts: [
    { label: 'UAE +971 50 378 2215', href: 'tel:+971503782215' },
    { label: 'India +91 93636 07900', href: 'tel:+919363607900' },
    { label: 'letstalk@furniconcepts.com', href: 'mailto:letstalk@furniconcepts.com' },
  ],
};
