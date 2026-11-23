/**
 * Content for the brand showcase pages (/brands/:slug).
 *
 * Cavaletti's copy, product list and FAQ are taken from the live page at
 * furniconcepts.com/cavaletti.php so the revamp carries the same wording.
 * Every other brand is built from brand-source.json (the furniconcepts.sg
 * brand data) by buildBrand below, into the same shape Cavaletti uses.
 */
import SOURCE from './brand-source.json';

const img = (name) => `/images/cavaletti/${name}.jpg`;
/** Product shots pulled from the live Cavaletti page (furniconcepts.com/cavaletti.php). */
const product = (name) => `/images/cavaletti/products/${name}.webp`;

export const BRANDS = {
  cavaletti: {
    slug: 'cavaletti',
    name: 'Cavaletti',
    origin: 'Brazil',
    eyebrow: 'Our Brands',
    tagline: 'Office Chairs & Ergonomic Seating\nin Dubai, India, Singapore & Oman',
    heroText:
      'FurniConcepts brings world-class ergonomic seating from Cavaletti, a globally recognized manufacturer of professional office chairs and collaborative seating systems. With a legacy since 1974, Cavaletti combines design excellence, ergonomics and durability.',
    heroImage: '/images/cavaletti/calvatti-banner-image.webp',
    heroCta: { label: 'Explore Cavaletti', href: '#products' },

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
      image: '/images/cavaletti/cavaletti-about-image.webp',
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
        'Ergonomic task chairs, executive chairs, visitor and stacking chairs, stools, lounge chairs, booths and auditorium seating.',
      download: { label: 'Download Catalogue', href: '/download-profiles/cavaletti' },
      /* the enquiry modal's WhatsApp hand-off, matching the live site's number
         and message format */
      whatsapp: '971503782215',
      enquiryNote: 'Send us an enquiry now, we will get back to you asap.',
      viewAll: { label: 'View All Cavaletti Products', href: '/catalogs/cavaletti' },
      categories: [
        { key: 'all', label: 'All Products', icon: 'grid' },
        { key: 'task', label: 'Task Chairs', icon: 'chair' },
        { key: 'executive', label: 'Executive Chairs', icon: 'crown' },
        { key: 'visitor', label: 'Visitor & Stacking Chairs', icon: 'person' },
        { key: 'stool', label: 'Stools', icon: 'stool' },
        { key: 'lounge', label: 'Lounge Chairs', icon: 'sofa' },
        { key: 'booth', label: 'Booths & Sofas', icon: 'box' },
        { key: 'auditorium', label: 'Auditorium Seating', icon: 'audience' },
      ],
      items: [
        { id: 'idea', name: 'Cavaletti Idea', type: 'High-Back Task Chair', category: 'task', image: product('idea'),
          caption: 'Cavaletti Idea Chair – Ergonomic Workstation Seating',
          description: 'The Cavaletti Idea chair is designed for everyday office tasks and offers excellent back support and comfort for long working hours. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'air', name: 'Cavaletti Air', type: 'Mesh Task Chair', category: 'task', image: product('air'),
          caption: 'Cavaletti Air Chair – Breathable Office Seating',
          description: 'The Cavaletti Air chair has a breathable design that improves airflow. This makes it perfect for long working hours in modern offices. FurniConcepts offers it in Dubai, India, Singapore, and Oman.' },
        { id: 'slim', name: 'Cavaletti Slim', type: 'Task Chair', category: 'task', image: product('slim'),
          caption: 'Cavaletti Slim Chair – Minimal Office Seating',
          description: 'The Cavaletti Slim chair offers a sleek and compact design perfect for modern workspaces with limited space. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'pro', name: 'Cavaletti Pro', type: 'High-Back Task Chair', category: 'task', image: product('pro'),
          caption: 'Cavaletti Pro Chair – Professional Office Seating',
          description: 'Cavaletti Pro chairs are built for professional environments and offer durability, comfort, and ergonomic support. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'start', name: 'Cavaletti Start', type: 'Task Chair', category: 'task', image: product('start'),
          caption: 'Cavaletti Start Chair – Entry-Level Office Seating',
          description: 'The Cavaletti Start chair offers a cost-effective solution for offices and delivers essential comfort and durability. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'more', name: 'Cavaletti More', type: 'Task Chair', category: 'task', image: product('more'),
          caption: 'Cavaletti More Chair – Enhanced Ergonomic Excellence',
          description: 'Cavaletti More chairs offer enhanced features and ergonomic excellence for long-term comfort. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'startplus', name: 'Cavaletti StartPlus', type: 'Ergonomic Task Chair', category: 'task', image: product('startplus'),
          caption: 'Cavaletti StartPlus Chair – Upgraded Professional Seating',
          description: 'Cavaletti StartPlus chairs provide upgraded features for entry-level professional seating. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'moov', name: 'Cavaletti Moov', type: 'Mesh Task Chair', category: 'task', image: product('moov'),
          caption: 'Cavaletti Moov Chair – Flexible Task Seating',
          description: 'Cavaletti Moov chairs provide mobility and flexibility. They work well in energetic office environments. FurniConcepts offers them in Dubai, India, Singapore, and Oman.' },
        { id: 'style', name: 'Cavaletti Style', type: 'Task Chair', category: 'task', image: product('style'),
          caption: 'Cavaletti Style Chair – Modern Designer Seating',
          description: 'Cavaletti Style chairs bring elegance and modern aesthetics to office interiors and suit premium workspaces. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'go', name: 'Cavaletti Go', type: 'Armless Task Chair', category: 'task', image: product('go'),
          caption: 'Cavaletti Go Chair, Armless Task Seating',
          description: 'The Cavaletti Go is a light armless swivel chair on castors with a polypropylene back. It suits hot desks, training rooms and touchdown areas. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'flip', name: 'Cavaletti Flip', type: 'Mesh Task Chair', category: 'task', image: product('flip'),
          caption: 'Cavaletti Flip Chair, Mesh Task Seating',
          description: 'The Cavaletti Flip is a mesh-back task chair with adjustable arms and a coloured seat. It brings support and a fresh look to everyday workstations. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'newnet-soft', name: 'Cavaletti NewNet Soft', type: 'Mesh Task Chair', category: 'task', image: product('newnet-soft'),
          caption: 'Cavaletti NewNet/Soft Chair – Breathable Workstation Seating',
          description: 'The Cavaletti NewNet/Soft range offers breathable mesh and cushioned support for ultimate workstation comfort. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'c3', name: 'Cavaletti C3', type: 'Mesh Task Chair', category: 'task', image: product('c3'),
          caption: 'Cavaletti C3 Chair, Mesh Task Seating',
          description: 'The Cavaletti C3 is an ergonomic mesh task chair with an adjustable headrest, lumbar support and adjustable arms. It is built for long working hours at the workstation. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'velo', name: 'Cavaletti Vélo', type: 'Mesh Task Chair', category: 'task', image: product('velo'),
          caption: 'Cavaletti Vélo Chair, Mesh Task Seating',
          description: 'The Cavaletti Vélo is a high-back mesh chair with an adjustable headrest, lumbar support and adjustable arms. It suits workstations and long working hours. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'aura', name: 'Cavaletti Aura', type: 'Executive Chair', category: 'executive', image: product('aura'),
          caption: 'Cavaletti Aura Chair – Executive Office Seating',
          description: 'The Cavaletti Aura chair offers premium comfort with advanced ergonomic features, which makes it perfect for executive offices and conference rooms. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'leef', name: 'Cavaletti Leef', type: 'Executive Chair', category: 'executive', image: product('leef'),
          caption: 'Cavaletti Leef Chair – Executive Management Seating',
          description: 'The Cavaletti Leef chair offers a sophisticated design and advanced ergonomic features, making it ideal for executive and management offices. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'prime-master', name: 'Cavaletti Prime & Master', type: 'Leather Executive Chair', category: 'executive', image: product('prime-master'),
          caption: 'Cavaletti Prime and Master Chairs – Leadership Seating',
          description: 'The Cavaletti Prime and Master series provides high-performance seating solutions for leadership roles. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'way', name: 'Cavaletti Way', type: 'Executive Chair', category: 'executive', image: product('way'),
          caption: 'Cavaletti Way Chair – Active Workspace Seating',
          description: 'Cavaletti Way chairs are designed for maximum efficiency and comfort in active workspaces. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'essence', name: 'Cavaletti Essence', type: 'Executive Chair', category: 'executive', image: product('essence'),
          caption: 'Cavaletti Essence Chair – Elegant Corporate Seating',
          description: 'The Cavaletti Essence chair brings elegant design and ergonomic support to any corporate setting. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'stay', name: 'Cavaletti Stay', type: 'Shell Visitor Chair', category: 'visitor', image: product('stay'),
          caption: 'Cavaletti Stay Chair, Shell Visitor Seating',
          description: 'The Cavaletti Stay has a moulded shell on a slim four-leg frame. It suits cafeterias, meeting rooms and visitor areas. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'alive', name: 'Cavaletti Alive', type: 'Stacking Chair', category: 'visitor', image: product('alive'),
          caption: 'Cavaletti Alive Chair, Stacking Seating',
          description: 'The Cavaletti Alive is a perforated polypropylene chair on a chrome frame that stacks for storage. It suits training rooms, canteens and events. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'match', name: 'Cavaletti Match', type: 'Visitor Armchair', category: 'visitor', image: product('match'),
          caption: 'Cavaletti Match Chair, Visitor Armchair',
          description: 'The Cavaletti Match is an upholstered visitor chair with armrests on a sled frame. It suits meeting rooms, reception areas and the visitor side of a desk. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'joy', name: 'Cavaletti Joy', type: 'Stacking Chair', category: 'visitor', image: product('joy'),
          caption: 'Cavaletti Joy Chair, Stacking Seating',
          description: 'The Cavaletti Joy is a simple four-leg chair with a moulded seat and back. It suits cafeterias, classrooms and multipurpose rooms. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'spot', name: 'Cavaletti Spot', type: 'Swivel Visitor Chair', category: 'visitor', image: product('spot'),
          caption: 'Cavaletti Spot Chair, Swivel Visitor Seating',
          description: 'The Cavaletti Spot has a shaped shell with a wooden outer back on a four-star swivel base. It suits receptions, meeting rooms and executive offices. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'duo', name: 'Cavaletti Duo', type: 'Swivel Meeting Chair', category: 'visitor', image: product('duo'),
          caption: 'Cavaletti Duo Chair, Swivel Meeting Seating',
          description: 'The Cavaletti Duo is an upholstered tub chair on a swivel base with castors. It brings comfort to meeting rooms and conference tables. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'fun', name: 'Cavaletti Fun', type: 'Bar Stool', category: 'stool', image: product('fun'),
          caption: 'Cavaletti Fun Stool, Bar Height Seating',
          description: 'The Cavaletti Fun stool has a padded round seat, a metal frame with footrest and a slatted backrest. It suits cafeterias, pantries, bar counters and high tables. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'raya', name: 'Cavaletti Raya', type: 'Lounge Chair', category: 'lounge', image: product('raya'),
          caption: 'Cavaletti Raya Designer Chair – Singapore Offices',
          description: 'The Cavaletti Raya chair brings together ergonomic comfort and a sleek contemporary design. Its breathable backrest and soft seating make it a great fit for collaborative spaces executive lounges, and creative offices. A perfect choice for premium workplaces in Singapore. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'stretch', name: 'Cavaletti Stretch', type: 'Lounge Chair', category: 'lounge', image: product('stretch'),
          caption: 'Cavaletti Stretch Chair, Lounge Seating',
          description: 'The Cavaletti Stretch is a lounge chair with a buttoned leather seat and back on an open metal frame. It suits lounges, receptions and breakout zones. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'connect', name: 'Cavaletti Connect', type: 'Lounge Armchair', category: 'lounge', image: product('connect'),
          caption: 'Cavaletti Connect Armchair, Lounge Seating',
          description: 'The Cavaletti Connect is a square upholstered armchair on a slim metal frame. It works on its own or in groups for receptions and lounges. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'box', name: 'Cavaletti Box', type: 'Club Armchair', category: 'lounge', image: product('box'),
          caption: 'Cavaletti Box Armchair, Club Lounge Seating',
          description: 'The Cavaletti Box is a fully upholstered club armchair on metal sled runners. It suits receptions, executive offices and waiting areas. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'boldy', name: 'Cavaletti Boldy', type: 'Lounge Armchair', category: 'lounge', image: product('boldy'),
          caption: 'Cavaletti Boldy Lounge Chair – Dubai Office Spaces',
          description: 'The Cavaletti Boldy lounge chair has a strong metal frame and soft upholstered seating that gives maximum comfort. Its modern and minimal design makes it perfect for corporate offices, reception areas, and breakout zones. Businesses in Dubai and the Middle East seeking stylish and long-lasting seating solutions will find it suitable. FurniConcepts offers availability in Dubai, India, Singapore, and Oman.' },
        { id: 'bee', name: 'Cavaletti Bee', type: 'Lounge Chair', category: 'lounge', image: product('bee'),
          caption: 'Cavaletti Bee Lounge Chair – India Workspaces',
          description: 'The Cavaletti Bee chair features a compact and refined design with curved back support and strong legs. It is perfect for reception areas, lounges, and informal meeting spaces. Great for offices in India that want modern, space-saving seating solutions. Available in Dubai, India, Singapore, and Oman through FurniConcepts.' },
        { id: 'ground', name: 'Cavaletti Ground', type: 'High-Back Lounge Chair', category: 'lounge', image: product('ground'),
          caption: 'Cavaletti Ground Lounge Seating – Modern Office Interiors',
          description: 'The Cavaletti Ground seating solution provides low-profile comfort with a modern aesthetic. It is designed for relaxation zones and casual meeting areas to enhance workplace comfort while maintaining a sleek look. It proves perfect for contemporary office environments. FurniConcepts offers it in Dubai, India, Singapore and Oman.' },
        { id: 'float', name: 'Cavaletti Float', type: 'Privacy Booth Sofa', category: 'booth', image: product('float'),
          caption: 'Cavaletti Float Booth, Private Sofa for Open Offices',
          description: 'The Cavaletti Float is a high-backed upholstered booth sofa with a side table and lamp. It gives a quiet corner for calls, reading or short one-to-one talks in open-plan offices. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'talk', name: 'Cavaletti Talk', type: 'Meeting Booth', category: 'booth', image: product('talk'),
          caption: 'Cavaletti Talk Booth, Meeting Seating with Table',
          description: 'Cavaletti Talk is a high-walled booth with facing sofas and a centre table. It turns a corner of the office into a semi-private meeting space for small teams. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'spin', name: 'Cavaletti Spin', type: 'Round Meeting Booth', category: 'booth', image: product('spin'),
          caption: 'Cavaletti Spin Booth, Round Meeting Sofa',
          description: 'The Cavaletti Spin is a curved, high-backed sofa that wraps around a round table. It suits breakout areas, cafes and informal team meetings. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
        { id: 'collective', name: 'Cavaletti Collective', type: 'Auditorium Seating', category: 'auditorium', image: product('collective'),
          caption: 'Cavaletti Collective, Auditorium Seating',
          description: 'Cavaletti Collective is fixed row seating with fold-up seats and armrests. It is built for auditoriums, lecture halls, training rooms and event spaces. Available in Dubai, India, Singapore and Oman through FurniConcepts.' },
      ],
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

/** Banner photos from the old furniconcepts.com brand pages. Parin, Safe
    Lockers, Bestuhl and Merryfair have none usable yet, so their hero falls
    back to the plain green band. */
const HERO = new Set([
  'audia-italia', 'bestuhl', 'broad-power', 'forma5', 'gebbwork', 'jwesys', 'leadcom', 'libero-italy',
  'markant', 'merryfair', 'musepod', 'nitrocare', 'parin', 'penworkers', 'safe-lockers', 'scab-italy', 'versalink',
  'worklyffe', 'zumbooth',
]);

/**
 * Where each brand's "Download Catalogue" button leads: its Download Profiles
 * page, or the Furniconcepts collection that carries its PDFs. Brands with no
 * PDFs offer "Request Catalogue", which opens the full Download Profiles page.
 */
const DOWNLOADS = {
  gebbwork: 'gebbwork',
  leadcom: 'leadcom',
  nitrocare: 'nitrocare',
  jwesys: 'jwesys',
  'audia-italia': 'audia-italia',
  'scab-italy': 'scab',
  markant: 'markant',
  worklyffe: 'worklyffe',
  parin: 'parin',
  versalink: 'versalink',
  'broad-power': 'furniconcepts/power-modules',
  musepod: 'furniconcepts/phone-booth',
  zumbooth: 'furniconcepts/phone-booth',
};

/** Some source URLs arrive already percent-encoded; decode first so they aren't encoded twice. */
const imageUrl = (url) => encodeURI(decodeURI(url));

const slugify = (text) =>
  text.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** First matching keyword wins; anything unmatched cycles through the fallbacks. */
const pickIcon = (text, rules, fallback, i) =>
  rules.find(([re]) => re.test(text))?.[1] ?? fallback[i % fallback.length];

const CATEGORY_ICONS = [
  [/auditorium|cinema|theat|arena|stadium|row|beam|public|waiting/i, 'audience'],
  [/stool|barstool/i, 'stool'],
  [/sofa|lounge|armchair|pouf|soft/i, 'sofa'],
  [/executive|director|vip|luxury|signature/i, 'crown'],
  [/pod|booth|cabin|focus|privacy|safe|vault|locker|storage/i, 'box'],
  [/desk|table|workstation|system|power|module|monitor|accessor/i, 'grid'],
  [/education|student|training|lecture|school/i, 'person'],
  [/chair|seating|task/i, 'chair'],
];
const FEATURE_ICONS = [
  [/ergonom|posture|comfort/i, 'posture'],
  [/award|design|aesthetic|finish/i, 'trophy'],
  [/global|international|export|countr/i, 'globe'],
  [/sustain|eco|green|recycl|emission/i, 'leaf'],
  [/quality|durab|certif|warrant|tested|fire/i, 'gem'],
  [/team|people|collab|care|patient/i, 'people'],
  [/acoustic|sound|quiet|privacy/i, 'box'],
  [/modular|flexib|smart|custom/i, 'gear'],
];

/** Maps one furniconcepts.sg brand record onto the Cavaletti page shape. */
function buildBrand(src) {
  const ed = src.editorial ?? {};
  const heroImage = HERO.has(src.slug) ? `/images/brands/${src.slug}.webp` : null;
  const downloads = DOWNLOADS[src.slug];

  const seen = new Map();
  const items = src.groups.flatMap((g) =>
    g.items.map((item) => {
      const base = slugify(item.name) || 'product';
      const n = (seen.get(base) ?? 0) + 1;
      seen.set(base, n);
      return {
        id: n > 1 ? `${base}-${n}` : base,
        name: item.name,
        type: g.title,
        category: slugify(g.title),
        image: imageUrl(item.img),
        caption: item.caption ?? `${item.name} – ${src.name} ${g.title}`,
        description:
          item.description ??
          `The ${item.name} is part of the ${src.name} ${g.title} range. Available in Dubai, India, Singapore and Oman through FurniConcepts.`,
      };
    })
  );

  const points = ed.atAGlance?.length
    ? ed.atAGlance.map((a) => `${a.label}: ${a.value}`)
    : src.highlights.map((h) => h.text);

  return {
    slug: src.slug,
    name: src.name,
    origin: src.origin,
    eyebrow: 'Our Brands',
    tagline: src.tagline,
    heroText: src.description[0],
    heroImage,
    heroCta: { label: `Explore ${src.name}`, href: '#products' },

    features: src.highlights.map((h, i) => ({
      icon: pickIcon(`${h.title} ${h.text}`, FEATURE_ICONS, ['gear', 'trophy', 'globe', 'gem'], i),
      label: h.title,
    })),

    about: {
      eyebrow: `About ${src.name}`,
      title: (ed.heading ?? src.tagline).replace(/^[^:]*:\s*/, ''),
      body: ed.opening ?? src.summary ?? src.description[1],
      points,
      quote: ed.background ?? src.description[1],
      cta: { label: 'View Products', href: '#products' },
      // without a banner the about panel shows the lead product, uncropped
      image: heroImage ?? items[0]?.image,
      contain: !heroImage,
    },

    why: {
      eyebrow: `Why Choose ${src.name}?`,
      title: ed.cta?.heading ?? `Why ${src.name}?`,
      body: ed.whyWeRecommend ?? src.description[1],
      image: null,
      points: src.highlights.map((h, i) => ({
        icon: pickIcon(`${h.title} ${h.text}`, FEATURE_ICONS, ['sparkle', 'gem', 'people', 'globe'], i),
        label: h.title,
      })),
    },

    products: {
      eyebrow: `${src.name} Products`,
      title: `Explore the Complete ${src.name} Collection`,
      intro: src.summary ?? src.tagline,
      download: downloads
        ? { label: 'Download Catalogue', href: `/download-profiles/${downloads}` }
        : { label: 'Request Catalogue', href: '/download-profiles' },
      whatsapp: '971503782215',
      enquiryNote: 'Send us an enquiry now, we will get back to you asap.',
      viewAll: { label: `View All ${src.name} Products`, href: '#products' },
      categories: [
        { key: 'all', label: 'All Products', icon: 'grid' },
        ...src.groups.map((g, i) => ({
          key: slugify(g.title),
          label: g.title,
          icon: pickIcon(g.title, CATEGORY_ICONS, ['chair', 'grid', 'box'], i),
        })),
      ],
      items,
    },

    applications: null,

    faq: ed.faq?.length ? {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      intro: `Find answers to common questions about ${src.name} products, supply and installation.`,
      image: '/images/cavaletti/faq-bg.webp',
      items: ed.faq,
    } : null,
  };
}

for (const src of SOURCE) BRANDS[src.slug] = buildBrand(src);

export const getBrand = (slug) => BRANDS[slug];

/**
 * The quotation band closing every brand page (it used to close the contact
 * page), worded for the brand.
 */
export const quoteCta = (brand) => ({
  eyebrow: "Let's Create Your Ideal Workspace",
  title: `Need a Custom\n${brand.name} Solution?`,
  text: `Our team will help you pick the right ${brand.name} products and send you a quotation for your project.`,
  cta: { label: 'Request a Quotation', href: '/contact' },
  secondary: null,
  image: '/images/contact-us/reaquest-qoute-image.webp',
});
