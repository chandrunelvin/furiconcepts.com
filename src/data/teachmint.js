// Product names and photographs follow Teachmint's shop (cart.teachmint.com).
const panel = (id, name, category, description) => ({
  id, name, category, description,
  image: `/images/brand-product-images/teachmint/${id}.webp`,
  caption: name,
  type: category === 'camera' ? 'Panel with camera' : 'Interactive flat panel',
});

const consultation = { label: 'Request a Teachmint Consultation', href: '/contact' };

export const TEACHMINT = {
  slug: 'teachmint',
  name: 'Teachmint',
  tagline: 'Teachmint X interactive flat panels for schools and colleges',
  heading: 'Teachmint X Interactive Flat Panels for Schools and Colleges',
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Brands', href: '/#collections' }, { label: 'Teachmint' }],
  heroImage: '/images/brands/teachmint.webp',
  heroCta: consultation,
  heroText: 'Run lessons directly on the board with Teachmint X and its built-in computer. Planning a classroom in Dubai or India? Furniconcepts can review the display, desks, chairs and storage together.',
  features: [
    { icon: 'gear', label: 'Built-in CPU' },
    { icon: 'grid', label: '4K multi-touch display' },
    { icon: 'sparkle', label: 'EduAI teaching assistant' },
    { icon: 'people', label: 'Wireless screen sharing' },
  ],
  products: {
    eyebrow: 'Teachmint X',
    title: 'Explore the classroom panels',
    intro: 'Compare 65-inch, 75-inch and 86-inch displays. Choose a panel with a camera if teachers also need to reach students joining remotely.',
    whatsapp: '971503782215',
    enquiryNote: 'Tell us your classroom location so we can check model availability.',
    categories: [
      { key: 'all', label: 'All panels', icon: 'grid' },
      { key: 'standard', label: 'Standard panels', icon: 'grid' },
      { key: 'camera', label: 'With camera', icon: 'people' },
    ],
    items: [
      panel('star-65', 'Teachmint X2 Star 65″', 'standard', 'A 65-inch 4K board with an Android whiteboard for writing and annotating diagrams during class.'),
      panel('neo-65', 'Teachmint X2 Neo 65″', 'camera', 'A 65-inch interactive board with an integrated camera and microphones for teaching students in the room and online.'),
      panel('star-75', 'Teachmint X2 Star 75″', 'standard', 'A 75-inch multi-touch screen gives teachers more space for maps, timelines and handwritten examples.'),
      panel('neo-75', 'Teachmint X2 Neo 75″', 'camera', 'The 75-inch Neo combines a 4K writing surface with a camera and microphone array for hybrid lessons.'),
      panel('max-75', 'Teachmint X Max 75″', 'camera', 'A 75-inch panel with a 48 MP camera and wireless casting from up to four devices for group presentations.'),
      panel('x2-86', 'Teachmint X2 86″', 'standard', 'An 86-inch 4K board for rooms with longer sightlines. Check text size from the last row before choosing a mounting position.'),
    ],
  },
  planning: [
    { title: 'What Teachmint X offers', text: 'The standard Neo and Star specifications list an octa-core CPU, 8 GB of RAM, 128 GB of storage and Google EDLA-certified Android 16. Teachers can write on the screen, share work wirelessly or use EduAI to prepare a quiz. Teachmint reports that its panels are tested at NABL-accredited laboratories.' },
    { title: 'Choosing a panel size', text: 'Measure from the board wall to the last row. Try a typical slide or maths problem at that distance. Send us the room depth, seat positions and sample lesson so we can help you choose a screen students can read.' },
    { title: 'Pairing with classroom furniture', text: 'Angle desks so students at the edges can see the board. Leave a clear route to the screen for students who come up to write, and keep power cables outside the aisles.', link: { label: 'Explore School Furniture', href: '/school-furniture.php' } },
    { title: 'Why plan with Furniconcepts?', text: 'Send one brief for the panel and the furniture. Our team can review your layout before you order, check which models can be quoted for your school and handle follow-up questions through one contact.' },
  ],
  faq: {
    limit: 6,
    eyebrow: 'FAQ', title: 'Frequently Asked Questions',
    intro: 'Plan the display around your lessons and the students who need to see it.',
    image: '/images/cavaletti/faq-bg.webp',
    items: [
      { q: 'What is Teachmint X?', a: 'It is an interactive classroom display with a built-in computer, digital whiteboard and EduAI teaching tools.' },
      { q: 'Do I need a separate computer?', a: 'The built-in Android system runs lessons directly on the panel. If your school uses Windows-only software, ask us to check compatible Windows OPS plug-in computers for the model you choose.' },
      { q: 'Which sizes are available?', a: 'Teachmint lists 65-inch, 75-inch and 86-inch panels. Share your preferred size and location so we can check the options for your school.' },
      { q: 'Can students take part from their seats?', a: 'Yes. With the Click X student response system, students can answer a quiz or vote in a poll from their desks.' },
      { q: 'Can I request furniture with the panels?', a: 'Yes. Send your room plan and the number of student places. We can review desks, chairs and storage alongside the display for one quote.' },
      { q: 'How do I get a quote?', a: 'Email letstalk@furniconcepts.com with your school name, location, number of classrooms and preferred screen size.' },
    ],
  },
  quoteCta: {
    eyebrow: 'Classroom consultation', title: 'Plan your Teachmint classroom',
    text: 'Share the distance to your last row, the subjects you teach and how many rooms you are fitting out.',
    cta: consultation, image: '/images/contact-us/reaquest-qoute-image.webp',
  },
  contacts: [
    { label: 'UAE +971 50 378 2215', href: 'tel:+971503782215' },
    { label: 'India +91 93636 07900', href: 'tel:+919363607900' },
    { label: 'letstalk@furniconcepts.com', href: 'mailto:letstalk@furniconcepts.com' },
  ],
};
