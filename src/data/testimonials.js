const logo = (file) => `/images/testimonials/${file}`;

/** Client testimonials with their company logos, as published on about.php. */
export const TESTIMONIALS = [
  { name: 'Azar', company: 'SRG Holding', quote: 'Exceeded expectations with exceptional craftsmanship and attention to detail. The furniture complements our office space, creating a professional atmosphere. Top-notch customer service.', logo: logo('srg-holding.png') },
  { name: 'Sunil', company: 'Grosvenor House', quote: 'A fantastic experience. The team understood our needs and delivered high-quality furniture that enhanced the ambiance. We appreciate their dedication and commitment to excellence.', logo: logo('grosvenor-house.png') },
  { name: 'Ayla', company: 'Ansari Exchange', quote: 'Stands out in the industry. Innovative designs and superior quality transformed our workspace. Professional and timely. Highly recommended.', logo: logo('ansari-exchange.png') },
  { name: 'Roshan', company: 'Al Ghurair Auto', quote: 'Extremely satisfied with the furniture. The pieces are aesthetically pleasing, durable and functional. The team’s expertise and support were invaluable. We look forward to future collaboration.', logo: logo('al-ghurair-auto.png') },
  { name: 'HR & Admin', company: 'Al-Futtaim Group', quote: 'Exceptional service from design to delivery. The furniture exceeded our expectations in quality and style, and the team was responsive to every request.', logo: logo('al-futtaim-group.png') },
  { name: 'DIFC', company: 'Index Holding', quote: 'The attention to detail and craftsmanship stands out. They made the entire process smooth and efficient, and delivered on time without compromising quality.', logo: logo('index-holding.png') },
  { name: 'Wahid', company: 'Volvo Qatar', quote: 'Our office revamp was a huge success. The furniture is both elegant and functional, and the installation team worked with precision and professionalism.', logo: logo('volvo-qatar.webp') },
  { name: 'Kali', company: 'Amity University', quote: 'We needed a blend of comfort and durability for our campus spaces, and they delivered perfectly. The team was collaborative and ensured every detail matched our needs.', logo: logo('amity-university.png') },
  { name: 'Ismail', company: 'Klas Homes', quote: 'The process was seamless from concept to completion. Modern designs and solid build added great value to our living spaces.', logo: logo('klas-homes.png') },
  { name: 'Demetris', company: 'MG Auto', quote: 'A game-changer for us. Bespoke furniture solutions significantly improved our showroom appearance. Their dedication to quality and satisfaction is commendable.', logo: logo('mg-auto.png') },
  { name: 'Mahesh', company: 'Redington', quote: 'Nothing short of excellent. Stylish and ergonomic furniture positively impacted our work environment. Their commitment to meeting our needs and timely delivery is appreciated.', logo: logo('redington.png') },
];

/** The four legal entities, as listed in the site footer. */
export const ENTITIES = [
  {
    name: 'Furniconcepts Middle East Furniture Trading LLC',
    place: 'Dubai, UAE',
    address: 'Studio 3A, Street 6A, Al Quoz 1, P.O. Box 10237, Dubai, U.A.E.',
    phones: [
      { label: '+971 50 378 2215', href: 'tel:+971503782215' },
      { label: '+971 4 257 9447', href: 'tel:+97142579447' },
    ],
  },
  {
    name: 'ZtoA Furniconcepts India Private Limited',
    place: 'Chennai, India',
    address: 'The Southern India Chamber of Commerce and Industry, Esplanade Rd, George Town, Chennai 600104, India',
    phones: [{ label: '+91 93636 07900', href: 'tel:+919363607900' }],
  },
  {
    name: 'Furniconcepts PTE Limited',
    place: 'Singapore',
    address: '450 Yishun Ring Road, Floor 6, Unit 112, Singapore 760450',
    phones: [
      { label: '+65 8235 2565', href: 'tel:+6582352565' },
      { label: '+65 8093 3197', href: 'tel:+6580933197' },
    ],
  },
  {
    name: 'Italseat Furniture Factory',
    place: 'Jebel Ali, UAE',
    address: 'Mina Jebel Ali, Jabal Ali Industrial First, Dubai, United Arab Emirates',
    phones: [
      { label: '+971 50 378 2215', href: 'tel:+971503782215' },
      { label: '+971 4 257 9447', href: 'tel:+97142579447' },
    ],
  },
];
