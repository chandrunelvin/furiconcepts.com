/**
 * Contact page content.
 *
 * Office addresses and phone numbers are the ones published in the live site's
 * footer. The Muscat entry has no published address yet, so it carries the
 * regional enquiry line until Furniconcepts supplies one.
 */
const cav = (name) => `/images/cavaletti/${name}.jpg`;
/**
 * Office card photography — a shot of each city or of the office itself.
 * Drop the files in as /public/images/offices/<id>.webp and they appear;
 * until a file exists the card falls back to the project photo beside it.
 */
const place = (id) => `/images/offices/${id}.webp`;

export const CONTACT_HERO = {
  eyebrow: 'Contact Us',
  title: "Let's Build\nBetter Workspaces",
  accent: 'Together',
  text:
    'Have a question, project in mind or need expert advice? Our team is here to help. Reach out to us and we’ll get back to you as soon as possible.',
  image: '/images/contact-us/contact-us-hero-image.webp',
};

export const CONTACT_METHODS = [
  {
    icon: 'phone',
    label: '+971 4 257 9447',
    note: 'Sun – Fri, 9:00 AM – 6:00 PM (GST)',
    href: 'tel:+97142579447',
  },
  {
    icon: 'mail',
    label: 'letstalk@furniconcepts.com',
    note: 'We typically reply within 24 hours',
    href: 'mailto:letstalk@furniconcepts.com',
  },
  {
    icon: 'pin',
    label: 'Furniconcepts Global',
    note: 'UAE  |  India  |  Singapore  |  Oman',
    href: '#offices',
  },
  {
    icon: 'doc',
    label: 'Download Catalogue',
    note: 'Explore our latest collections',
    href: '/#catalogs',
  },
  {
    icon: 'whatsapp',
    label: 'Chat on WhatsApp',
    note: 'Get quick support from our team',
    href: 'https://api.whatsapp.com/send?phone=971503782215',
    external: true,
  },
];

export const CONTACT_FEATURES = [
  { icon: 'clock', title: 'Quick Response', text: 'We reply within 24 hours' },
  { icon: 'people', title: 'Expert Support', text: 'Get advice from our specialists' },
  { icon: 'doc', title: 'Project Consultation', text: 'From planning to execution' },
  { icon: 'globe', title: 'Global Presence', text: 'Serving across UAE, India, Singapore & Oman' },
];

export const OFFICES_INTRO = {
  eyebrow: 'Our Offices',
  title: 'Global Presence,\nLocal Support',
  text:
    'Furniconcepts is proudly present across UAE, India, Singapore and Oman, bringing world-class furniture solutions to businesses of all sizes.',
  gallery: [cav('boardroom'), cav('office-green'), cav('showroom-lounge'), cav('project-lounge')],
};

export const OFFICES = [
  {
    id: 'dubai',
    city: 'UAE – Dubai',
    tag: 'Head Office',
    company: 'Furniconcepts Middle East Furniture Trading LLC',
    address: 'Studio 3A, Street 6A, Al Quoz 1, P.O. Box 10237, Dubai, U.A.E.',
    phone: '+971 4 257 9447',
    image: place('dubai'),
    imageFallback: cav('project-branch'),
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8573578183396!2d55.22276720000001!3d25.1405129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f139eb4f9c08b%3A0xb282251ec57518de!2sFurniconcepts%20Middle%20East%20Furniture%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1790234608778!5m2!1sen!2sae',
    coords: '25.1405129,55.2227672',
  },
  {
    id: 'chennai',
    city: 'India – Chennai',
    company: 'ZtoA Furniconcepts India Private Limited',
    address:
      'The Southern India Chamber of Commerce and Industry, Esplanade Rd, George Town, Chennai, Tamil Nadu 600104, India',
    phone: '+91 93636 07900',
    image: place('chennai'),
    imageFallback: cav('canteen'),
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.203653595101!2d80.28188997524728!3d13.086275887239706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35932b2c5f8a43b%3A0xccd80a6ead89fdc!2sZTOA%20FURNICONCEPTS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1771926550069!5m2!1sen!2sin',
    coords: '13.086275887239706,80.28188997524728',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    company: 'Furniconcepts PTE Limited',
    address: '450 Yishun Ring Road, Floor 6, Unit 112, Singapore 760450',
    phone: '+65 8235 2565',
    image: place('singapore'),
    imageFallback: cav('showroom'),
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.832692900309!2d103.8441005!3d1.4220879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1513a3c61c53%3A0xc531a37504eacf19!2sFURNICONCEPTS%20PTE.%20LTD.!5e0!3m2!1sen!2sin!4v1716712744696!5m2!1sen!2sin',
    coords: '1.4220879,103.8441005',
  },
  {
    id: 'muscat',
    city: 'Oman – Muscat',
    company: 'Furniconcepts Oman',
    address: 'PC 112, P.O. Box 543, Muscat, Sultanate of Oman',
    phone: '+971 50 378 2215',
    image: place('muscat'),
    imageFallback: cav('showroom-lounge'),
    /* the address is a PO box, so the pin covers the postal district */
    embed: 'https://maps.google.com/maps?q=Muscat%20PC%20112%2C%20Oman&z=12&output=embed',
    coords: 'Muscat PC 112, Oman',
  },
];

export const ITALSEAT = {
  id: 'italseat',
  city: 'UAE \u2013 Jebel Ali',
  tag: 'Factory',
  company: 'Italseat Furniture Factory',
  address: 'Mina Jebel Ali, Jabal Ali Industrial First, Dubai, United Arab Emirates',
  phone: '+971 4 257 9447',
  embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8246921739546!2d55.1219251!3d25.0060722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13ebdb496077%3A0x75efff34aaddee6!2sITALSEAT%20FURNITURE%20FACTORY!5e0!3m2!1sen!2sin!4v1743504544652!5m2!1sen!2sin',
  coords: '25.0060722,55.1219251',
};

export const MAP_PANEL = {
  eyebrow: 'Our Locations',
  image: '/images/contact-us/bg-for-contactusmap.webp',
  title: 'Find Us\nAround the World',
  text: 'Explore our global locations. Select an office to see its address and get directions.',
  cta: { label: 'View All Locations', href: '#offices' },
  stats: [
    { num: '4', label: 'Countries' },
    { num: '4', label: 'Offices' },
    { num: 'Global', label: 'Support' },
  ],
};

export const CONTACT_CTA = {
  eyebrow: "Let's Create Your Ideal Workspace",
  title: 'Need a Custom\nWorkspace Solution?',
  text:
    'Our team will help you choose the right products, create a tailored workspace plan, and provide the best quotation for your requirements.',
  cta: { label: 'Request a Quotation', href: '#get-in-touch' },
  image: cav('boardroom'),
};

export const COUNTRIES = ['United Arab Emirates', 'India', 'Singapore', 'Oman', 'Saudi Arabia', 'Qatar', 'Other'];

export const SUBJECTS = [
  'Product Enquiry',
  'Request a Quotation',
  'Project Consultation',
  'Partnership',
  'After-Sales Support',
  'Careers',
  'Other',
];
