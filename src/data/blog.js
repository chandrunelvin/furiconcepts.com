/**
 * Blog page content (/blog).
 *
 * Articles are listed newest first; the page pages through them nine at a
 * time and derives every category count from this list, so adding an entry
 * here is all a new post needs.
 */
const cav = (name) => `/images/cavaletti/${name}`;
const common = (name) => `/images/common/${name}`;
const about = (name) => `/images/about-us/${name}`;

export const BLOG_HERO = {
  title: 'Our Blog',
  text: 'Insights, ideas and inspiration for modern workspaces.',
  image: cav('calvatti-banner-image.webp'),
};

/** `icon` keys map to the line icons drawn in Blog.jsx. */
export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Articles', icon: 'grid' },
  { id: 'workspace-design', label: 'Workspace Design', icon: 'lamp' },
  { id: 'ergonomic-health', label: 'Ergonomic Health', icon: 'heart' },
  { id: 'office-furniture', label: 'Office Furniture', icon: 'chair' },
  { id: 'sustainability', label: 'Sustainability', icon: 'leaf' },
  { id: 'industry-insights', label: 'Industry Insights', icon: 'doc' },
  { id: 'project-stories', label: 'Project Stories', icon: 'building' },
];

export const BLOG_FEATURED = {
  eyebrow: 'Featured',
  title: 'Transform Your Workspace Today',
  text: 'Discover our complete Cavaletti collection and create inspiring workspaces.',
  cta: { label: 'Explore Products', path: '/brands/cavaletti' },
  image: cav('faq-bg.webp'),
};

export const BLOG_NEWSLETTER = {
  eyebrow: 'Stay Updated',
  title: 'Get the Latest Insights',
  text: 'Subscribe to our blog and get the latest articles, trends and workplace inspiration delivered to your inbox.',
  note: 'We respect your privacy. Unsubscribe at any time.',
};

/** Byline shown on every article until posts carry their own authors. */
export const BLOG_AUTHOR = {
  name: 'Furniconcepts',
  initials: 'FC',
  bio: 'Creating inspiring workspaces with world-class furniture solutions.',
};

/**
 * Optional fields an article can add for its own page:
 *   hero  — banner image (falls back to `image`)
 *   tags  — chips under the article (falls back to its category)
 *   body  — { intro, sections: [{ title, text, image, benefits? }], conclusion }
 * Without a body the page shows the first article's body as demo content.
 */
export const ARTICLES = [
  {
    slug: 'modern-office-design-trends-2026',
    category: 'workspace-design',
    date: '2026-09-20',
    title: 'Modern Office Design Trends for 2026',
    excerpt: 'Explore the latest office design trends that are shaping productive and inspiring workspaces.',
    image: cav('cavaletti-about-image.webp'),
    hero: cav('calvatti-banner-image.webp'),
    popular: true,
    tags: ['Workspace Design', 'Office Furniture', 'Ergonomics', 'Sustainability'],
    body: {
      intro:
        'The way we work is evolving, and so are the spaces we work in. Modern office design is no longer just about aesthetics — it’s about creating environments that enhance productivity, well-being and collaboration. As we move into 2026, businesses are focusing on flexible, sustainable and technology-driven office spaces that support a healthier and more inspiring work culture.',
      sections: [
        {
          title: 'Biophilic Design Brings Nature Indoors',
          text: 'Natural elements like plants, natural light and organic materials are transforming modern offices. Biophilic design helps reduce stress, improve air quality and boost overall productivity.',
          image: about('about-hero-bg.webp'),
          benefits: ['Improved well-being', 'Higher productivity', 'Stronger connection with nature'],
        },
        {
          title: 'Flexible and Hybrid Workspaces',
          text: 'With hybrid work becoming the norm, offices are being designed for flexibility. Modular furniture, movable partitions and multi-purpose spaces allow businesses to adapt easily to changing needs.',
          image: cav('project-branch.jpg'),
        },
        {
          title: 'Ergonomic Furniture for Healthier Teams',
          text: 'Ergonomic chairs, sit-stand desks and wellness-focused furniture are essential for employee health. Investing in ergonomic solutions reduces discomfort, prevents long-term health issues and improves focus.',
          image: cav('faq-bg.webp'),
        },
        {
          title: 'Sustainable and Eco-Friendly Solutions',
          text: 'Sustainability continues to be a top priority in 2026. From using recycled materials to energy-efficient lighting, businesses are choosing eco-friendly office solutions to reduce their environmental impact.',
          image: common('more-then-furniture-bg.webp'),
        },
        {
          title: 'Technology-Integrated Workspaces',
          text: 'Smart lighting, IoT-enabled meeting rooms and seamless connectivity are making offices more efficient and user-friendly. Technology integration enhances collaboration and creates a smoother work experience.',
          image: cav('boardroom.jpg'),
        },
      ],
      conclusion:
        'Modern office design in 2026 is all about people, flexibility and sustainability. By incorporating biophilic elements, ergonomic furniture and smart technology, businesses can create workspaces that inspire creativity, improve well-being and drive success.',
    },
  },
  {
    slug: 'choose-the-right-ergonomic-chair',
    category: 'office-furniture',
    date: '2026-09-15',
    title: 'How to Choose the Right Ergonomic Chair',
    excerpt: 'A complete guide to finding the perfect ergonomic chair for your workspace.',
    image: cav('office-green.jpg'),
    popular: true,
  },
  {
    slug: 'sustainable-office-furniture',
    category: 'sustainability',
    date: '2026-09-10',
    title: 'Sustainable Office Furniture for a Greener Future',
    excerpt: 'Discover how eco-friendly furniture can create a healthier planet and happier workspaces.',
    image: common('more-then-furniture-bg.webp'),
    popular: true,
  },
  {
    slug: 'transforming-corporate-spaces-with-cavaletti',
    category: 'project-stories',
    date: '2026-09-05',
    title: 'Transforming Corporate Spaces with Cavaletti',
    excerpt: 'See how Cavaletti furniture solutions are redefining modern offices across industries.',
    image: cav('boardroom.jpg'),
  },
  {
    slug: 'comfortable-collaborative-spaces',
    category: 'workspace-design',
    date: '2026-08-28',
    title: 'Creating Comfortable Collaborative Spaces',
    excerpt: 'Learn how to design collaborative areas that boost creativity and teamwork.',
    image: cav('project-lounge.jpg'),
  },
  {
    slug: 'why-ergonomics-matters',
    category: 'industry-insights',
    date: '2026-08-20',
    title: 'Why Ergonomics Matters in the Workplace',
    excerpt: 'Understand the real impact of ergonomic furniture on employee health and productivity.',
    image: cav('task-chair.jpg'),
  },
  {
    slug: 'biophilic-design-nature-into-offices',
    category: 'sustainability',
    date: '2026-08-12',
    title: 'Biophilic Design: Bringing Nature into Offices',
    excerpt: 'Discover how natural elements can improve well-being and productivity.',
    image: about('about-hero-bg.webp'),
  },
  {
    slug: 'top-10-office-chairs',
    category: 'office-furniture',
    date: '2026-08-05',
    title: 'Top 10 Office Chairs for Modern Workspaces',
    excerpt: 'A curated list of the best office chairs designed for comfort, style and performance.',
    image: cav('chair-family.jpg'),
  },
  {
    slug: 'future-of-hybrid-workspaces',
    category: 'industry-insights',
    date: '2026-07-28',
    title: 'The Future of Hybrid Workspaces',
    excerpt: 'How office spaces are evolving to support flexible and hybrid work models.',
    image: cav('project-branch.jpg'),
  },
  {
    slug: 'designing-a-boardroom-that-works',
    category: 'workspace-design',
    date: '2026-07-21',
    title: 'Designing a Boardroom That Works',
    excerpt: 'Seating, lighting and acoustics that keep long meetings focused and comfortable.',
    image: cav('showroom-chairs.jpg'),
  },
  {
    slug: 'posture-and-productivity',
    category: 'ergonomic-health',
    date: '2026-07-14',
    title: 'Posture and Productivity: The Hidden Link',
    excerpt: 'Small adjustments to how people sit can make a measurable difference across a working day.',
    image: cav('executive-chairs.jpg'),
  },
  {
    slug: 'acoustic-comfort-open-plan',
    category: 'ergonomic-health',
    date: '2026-07-07',
    title: 'Acoustic Comfort in Open-Plan Offices',
    excerpt: 'Practical ways to reduce noise and distraction without losing an open, connected feel.',
    image: cav('showroom-lounge.jpg'),
  },
  {
    slug: 'material-choices-that-last',
    category: 'sustainability',
    date: '2026-06-30',
    title: 'Material Choices That Last',
    excerpt: 'Why durable fabrics and finishes are the most sustainable choice a workplace can make.',
    image: cav('material-wall.jpg'),
  },
  {
    slug: 'a-showroom-built-for-discovery',
    category: 'project-stories',
    date: '2026-06-22',
    title: 'A Showroom Built for Discovery',
    excerpt: 'Inside a space designed to let clients sit, compare and choose with confidence.',
    image: cav('showroom.jpg'),
  },
  {
    slug: 'lounge-seating-for-modern-offices',
    category: 'office-furniture',
    date: '2026-06-15',
    title: 'Lounge Seating for Modern Offices',
    excerpt: 'How soft seating creates informal zones for focus, conversation and recharge.',
    image: common('crafted-precision.jpg'),
  },
  {
    slug: 'healthy-habits-at-your-desk',
    category: 'ergonomic-health',
    date: '2026-06-08',
    title: 'Healthy Habits at Your Desk',
    excerpt: 'Simple routines and furniture settings that help teams stay well through the week.',
    image: common('hero1.webp'),
  },
  {
    slug: 'designing-staff-canteens',
    category: 'workspace-design',
    date: '2026-05-30',
    title: 'Designing Staff Canteens People Enjoy',
    excerpt: 'Breakout and dining areas that bring teams together beyond the desk.',
    image: cav('canteen.jpg'),
  },
  {
    slug: 'auditorium-seating-project',
    category: 'project-stories',
    date: '2026-05-22',
    title: 'Auditorium Seating, Delivered at Scale',
    excerpt: 'How a large venue seating project moved from specification to installation on time.',
    image: cav('auditorium.jpg'),
  },
  {
    slug: 'workplace-trends-gcc',
    category: 'industry-insights',
    date: '2026-05-14',
    title: 'Workplace Trends Across the GCC',
    excerpt: 'What organisations in the region are asking for as they plan their next offices.',
    image: cav('calvatti-banner-image.webp'),
  },
  {
    slug: 'stacking-chairs-flexible-spaces',
    category: 'office-furniture',
    date: '2026-05-06',
    title: 'Stacking Chairs for Flexible Spaces',
    excerpt: 'Lightweight seating that lets one room serve training, events and everyday work.',
    image: cav('stacking-chairs.jpg'),
  },
  {
    slug: 'colour-in-the-workplace',
    category: 'workspace-design',
    date: '2026-04-28',
    title: 'Using Colour in the Workplace',
    excerpt: 'How a considered palette can shape mood, wayfinding and brand identity.',
    image: cav('showroom-samples.jpg'),
  },
  {
    slug: 'sit-stand-working',
    category: 'ergonomic-health',
    date: '2026-04-20',
    title: 'Getting Sit-Stand Working Right',
    excerpt: 'The settings and habits that make height-adjustable desks worth the investment.',
    image: common('quality-detail.jpg'),
  },
  {
    slug: 'a-greener-fit-out',
    category: 'project-stories',
    date: '2026-04-12',
    title: 'A Greener Fit-Out from Day One',
    excerpt: 'How one client planned furniture, materials and layout around sustainability goals.',
    image: common('sustainable.jpg'),
  },
  {
    slug: 'designing-for-wellbeing',
    category: 'workspace-design',
    date: '2026-04-04',
    title: 'Designing for Wellbeing',
    excerpt: 'Light, air, greenery and comfort — the elements behind workspaces people love.',
    image: about('bg-create.webp'),
  },
];
