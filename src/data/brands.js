/**
 * Content for the brand showcase pages (/brands/:slug).
 *
 * Cavaletti's copy, product list and FAQ are taken from the live page at
 * furniconcepts.com/cavaletti.php so the revamp carries the same wording.
 */
const img = (name) => `/images/cavaletti/${name}.jpg`;
/** Product shots pulled from the live Cavaletti page (furniconcepts.com/cavaletti.php). */
const product = (name) => `/images/cavaletti/products/${name}.jpg`;

export const BRANDS = {
  cavaletti: {
    slug: 'cavaletti',
    name: 'Cavaletti',
    eyebrow: 'Our Brands',
    tagline: 'Office Chairs & Ergonomic Seating\nin Dubai, India, Singapore & Oman',
    heroText:
      'FurniConcepts brings world-class ergonomic seating from Cavaletti, a globally recognized manufacturer of professional office chairs and collaborative seating systems. With a legacy since 1974, Cavaletti combines design excellence, ergonomics and durability.',
    heroImage: '/images/cavaletti/calvatti-banner-image.webp',
    heroCta: { label: 'Explore Cavaletti', href: '#products' },
    video: { label: 'Watch\nBrand Video', href: '#' },

    features: [
      { icon: 'gear', label: 'Advanced\nErgonomics' },
      { icon: 'trophy', label: 'Award-Winning\nDesign' },
      { icon: 'globe', label: 'Global\nPresence' },
      { icon: 'leaf', label: 'Sustainable\nManufacturing' },
      { icon: 'gem', label: 'Quality &\nDurability' },
      { icon: 'people', label: 'Versatile\nApplications' },
    ],

    about: {
      eyebrow: 'About Cavaletti',
      title: 'A Global Leader\nin Ergonomic Seating',
      body:
        'Cavaletti is one of the leading seating manufacturers, known for its continuous investment in design, research and advanced manufacturing technologies. Today, businesses across Dubai, India, Singapore and Oman rely on FurniConcepts as a trusted supplier of Cavaletti office furniture for corporate offices, coworking spaces, educational institutions and healthcare environments.',
      points: [
        'Improve posture and reduce fatigue',
        'Enhance workplace productivity',
        'Support long working hours',
        'Adapt to different workspace environments',
      ],
      quote:
        'With a strong global presence, Cavaletti products are used in corporate offices, auditoriums, collaborative spaces and healthcare facilities.',
      cta: { label: 'Learn More', href: '#products' },
      image: img('boardroom'),
    },

    why: {
      eyebrow: 'Why Choose Cavaletti?',
      title: 'Designed for People.\nBuilt for Performance.',
      body:
        'Cavaletti chairs are designed to support the human body through extended sitting — lumbar support, adjustable arms, tilt mechanisms and breathable mesh backs. Models like Idea and Aura give full back support and reduce strain across a long shift.',
      image: img('task-chair'),
      points: [
        { icon: 'posture', label: 'Advanced Ergonomics' },
        { icon: 'sparkle', label: 'Award-Winning Design' },
        { icon: 'people', label: 'Versatile Seating' },
        { icon: 'gem', label: 'Quality & Durability' },
        { icon: 'leaf', label: 'Sustainable Manufacturing' },
      ],
    },

    products: {
      eyebrow: 'Cavaletti Products',
      title: 'Explore the Complete Cavaletti Collection',
      intro:
        'Ergonomic task chairs, executive chairs, lounge seating, training chairs and collaborative seating systems.',
      download: { label: 'Download Catalogue', href: '/catalogs/cavaletti' },
      viewAll: { label: 'View All Cavaletti Products', href: '/catalogs/cavaletti' },
      categories: [
        { key: 'all', label: 'All Products', icon: 'grid' },
        { key: 'office', label: 'Office Chairs', icon: 'chair' },
        { key: 'task', label: 'Task Chairs', icon: 'gear' },
        { key: 'executive', label: 'Executive Chairs', icon: 'crown' },
        { key: 'visitor', label: 'Visitor Chairs', icon: 'person' },
        { key: 'collaborative', label: 'Collaborative Seats', icon: 'people' },
        { key: 'lounge', label: 'Lounge Seating', icon: 'sofa' },
      ],
      items: [
        { id: 'idea', name: 'Cavaletti Idea', type: 'Ergonomic Office Chair', category: 'office', image: product('idea') },
        { id: 'air', name: 'Cavaletti Air', type: 'Mesh Office Chair', category: 'office', image: product('air') },
        { id: 'slim', name: 'Cavaletti Slim', type: 'Ergonomic Office Chair', category: 'office', image: product('slim') },
        { id: 'pro', name: 'Cavaletti Pro', type: 'Ergonomic Office Chair', category: 'office', image: product('pro') },
        { id: 'start', name: 'Cavaletti Start', type: 'Ergonomic Office Chair', category: 'office', image: product('start') },
        { id: 'newnet-soft', name: 'Cavaletti NewNet Soft', type: 'Ergonomic Office Chair', category: 'office', image: product('newnet-soft') },
        { id: 'more', name: 'Cavaletti More', type: 'Ergonomic Office Chair', category: 'office', image: product('more') },
        { id: 'startplus', name: 'Cavaletti StartPlus', type: 'Ergonomic Office Chair', category: 'office', image: product('startplus') },
        { id: 'stay', name: 'Cavaletti Stay', type: 'Task Chair', category: 'task', image: product('stay') },
        { id: 'alive', name: 'Cavaletti Alive', type: 'Task Chair', category: 'task', image: product('alive') },
        { id: 'float', name: 'Cavaletti Float', type: 'Task Chair', category: 'task', image: product('float') },
        { id: 'match', name: 'Cavaletti Match', type: 'Task Chair', category: 'task', image: product('match') },
        { id: 'joy', name: 'Cavaletti Joy', type: 'Task Chair', category: 'task', image: product('joy') },
        { id: 'fun', name: 'Cavaletti Fun', type: 'Task Chair', category: 'task', image: product('fun') },
        { id: 'moov', name: 'Cavaletti Moov', type: 'Task Chair', category: 'task', image: product('moov') },
        { id: 'style', name: 'Cavaletti Style', type: 'Task Chair', category: 'task', image: product('style') },
        { id: 'aura', name: 'Cavaletti Aura', type: 'Executive Chair', category: 'executive', image: product('aura') },
        { id: 'leef', name: 'Cavaletti Leef', type: 'Executive Chair', category: 'executive', image: product('leef') },
        { id: 'c3', name: 'Cavaletti C3', type: 'Executive Chair', category: 'executive', image: product('c3') },
        { id: 'prime-master', name: 'Cavaletti Prime & Master', type: 'Executive Chairs', category: 'executive', image: product('prime-master') },
        { id: 'way', name: 'Cavaletti Way', type: 'Executive Chair', category: 'executive', image: product('way') },
        { id: 'essence', name: 'Cavaletti Essence', type: 'Executive Chair', category: 'executive', image: product('essence') },
        { id: 'spot', name: 'Cavaletti Spot', type: 'Visitor Chair', category: 'visitor', image: product('spot') },
        { id: 'go', name: 'Cavaletti Go', type: 'Multi-Use Chair', category: 'visitor', image: product('go') },
        { id: 'flip', name: 'Cavaletti Flip', type: 'Folding Meeting Chair', category: 'visitor', image: product('flip') },
        { id: 'raya', name: 'Cavaletti Raya', type: 'Designer Chair', category: 'collaborative', image: product('raya') },
        { id: 'stretch', name: 'Cavaletti Stretch', type: 'Flexible Seating', category: 'collaborative', image: product('stretch') },
        { id: 'talk', name: 'Cavaletti Talk', type: 'Collaborative Seating', category: 'collaborative', image: product('talk') },
        { id: 'spin', name: 'Cavaletti Spin', type: 'Collaborative Seating', category: 'collaborative', image: product('spin') },
        { id: 'connect', name: 'Cavaletti Connect', type: 'Modular Seating', category: 'collaborative', image: product('connect') },
        { id: 'box', name: 'Cavaletti Box', type: 'Booth Seating', category: 'collaborative', image: product('box') },
        { id: 'duo', name: 'Cavaletti Duo', type: 'Two-Seat Unit', category: 'collaborative', image: product('duo') },
        { id: 'collective', name: 'Cavaletti Collective', type: 'Modular Seating', category: 'collaborative', image: product('collective') },
        { id: 'velo', name: 'Cavaletti Vélo', type: 'Collaborative Seating', category: 'collaborative', image: product('velo') },
        { id: 'boldy', name: 'Cavaletti Boldy', type: 'Lounge Chair', category: 'lounge', image: product('boldy') },
        { id: 'bee', name: 'Cavaletti Bee', type: 'Lounge Chair', category: 'lounge', image: product('bee') },
        { id: 'ground', name: 'Cavaletti Ground', type: 'Lounge Seating', category: 'lounge', image: product('ground') },      ],
    },

    applications: {
      eyebrow: 'Applications',
      title: 'Applications of Cavaletti Seating',
      items: [
        { title: 'Corporate Offices', text: 'Enhance productivity with ergonomic seating designed for long working hours.', image: img('boardroom') },
        { title: 'Coworking Spaces', text: 'Flexible seating solutions that adapt to dynamic work environments.', image: img('canteen') },
        { title: 'Educational Institutions', text: 'Durable and comfortable seating for classrooms and training rooms.', image: img('showroom') },
        { title: 'Healthcare Facilities', text: 'Specialized seating solutions designed for comfort and support.', image: img('project-lounge') },
        { title: 'Hospitality & Public Spaces', text: 'Stylish and functional seating for reception areas and lounges.', image: img('showroom-lounge') },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      intro: 'Find answers to common questions about Cavaletti products, customization, supply and services.',
      image: '/images/cavaletti/faq-bg.webp',
      items: [
        {
          q: 'Where can I buy Cavaletti office chairs in Dubai, India, Singapore, and Oman?',
          a: 'You can purchase genuine Cavaletti office chairs through FurniConcepts, a trusted supplier delivering across Dubai, India, Singapore, and Oman with full project support.',
        },
        {
          q: 'What are the benefits of Cavaletti ergonomic chairs?',
          a: 'Cavaletti chairs are designed with advanced ergonomic features such as lumbar support, adjustable height, and tilt mechanisms. These help improve posture, reduce back pain, and increase productivity.',
        },
        {
          q: 'Are Cavaletti chairs suitable for corporate offices?',
          a: 'Yes, Cavaletti chairs are ideal for corporate offices, coworking spaces, conference rooms, and executive environments due to their durability and modern design.',
        },
        {
          q: 'Does FurniConcepts provide bulk orders for office furniture?',
          a: 'Yes, FurniConcepts specializes in bulk supply of Cavaletti furniture for corporate offices, educational institutions, and commercial projects.',
        },
        {
          q: 'Can I customize Cavaletti chairs?',
          a: 'Yes, Cavaletti chairs can be customized with different upholstery materials, colors, and configurations based on your workspace requirements.',
        },
        {
          q: 'What types of Cavaletti seating solutions are available?',
          a: 'Cavaletti offers ergonomic task chairs, executive chairs, lounge seating, training chairs, and collaborative seating systems.',
        },
        {
          q: 'Do you provide installation services?',
          a: 'Yes, FurniConcepts provides end-to-end services including space planning, delivery, installation, and after-sales support.',
        },
        {
          q: 'Why choose FurniConcepts for Cavaletti furniture?',
          a: 'FurniConcepts is a trusted multi-brand supplier offering genuine products, expert consultation, competitive pricing, and reliable service across multiple countries.',
        },
      ],
    },
  },
};

export const getBrand = (slug) => BRANDS[slug];
