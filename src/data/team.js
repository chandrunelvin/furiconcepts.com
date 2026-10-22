/**
 * The Furniconcepts team, in the order shown on furniconcepts.com/team.php.
 * Photography is downloaded from that page and resized into /images/team.
 * Bios and LinkedIn links are the ones in that page's profile popups.
 */
const photo = (name) => `/images/team/${name}.jpg`;
const linkedin = (handle) => `https://www.linkedin.com/in/${handle}/`;

export const LEADERSHIP = [
  { name: 'T Chakra', role: 'Managing Director', src: photo('t-chakra') },
  {
    name: 'Subramanian Narayanan',
    role: 'Sales Director — GCC, India & Singapore',
    src: photo('narayanan'),
    linkedin: linkedin('narayan-subramaniam'),
    bio: [
      'Director of Sales for Cavaletti, Gebbwork and Bravo. A management professional with over two decades of experience in spearheading initiatives of business development, key account management, and business expansion with a specific focus on agency relations and business growth.',
      'Involved with leading international brands across the UAE, Oman & Africa region. Possessing exemplary networks with consultants and contractors in the domain of commercial interiors and furniture. These connections enable achievement of competitive advantages in sourcing, pricing, and ensuring profitability.',
    ],
  },
  {
    name: 'Somasundar',
    role: 'Director / Partner, India',
    src: photo('somasundar'),
    linkedin: linkedin('s-r-somasundar-14a30b61'),
    bio: [
      'Somasundar brings extensive managerial and executive-level experience from Hindustan Lever and other organizations to his current role as Furniconcepts Director for the Mumbai, India region.',
      'Co-Founder at WareLogis.',
    ],
  },
  {
    name: 'Deepak Dinesh Prabakaran',
    role: 'Director',
    src: photo('deepak'),
    linkedin: linkedin('deepak-dinesh-prabakaran'),
    bio: [
      "Deepak Dinesh Prabakaran joins Furniconcepts as Director cum Partner, bringing over two decades of expertise in architecture, design engineering, and development management. As the founder of ADDP Architects, Deepak has led complex real estate and design-build ventures across the UAE and India. His strategic insight and multidisciplinary approach will play a vital role in optimizing asset development, enhancing project execution, and expanding Furniconcepts' integrated design-to-delivery capabilities.",
    ],
  },
];

export const TEAM = [
  {
    name: 'Yazan',
    role: 'Sales Consultant, Olympic Swimmer & Winner',
    src: photo('yazan'),
    bio: [
      'Yazan is an Olympic swimmer and aerospace engineer with a strong technical background. He excels as a sales consultant, combining analytical skills and creativity. His expertise in the furniture manufacturing industry helps drive company growth. Yazan’s discipline and strategic thinking make him a valuable asset to any business.',
    ],
  },
  {
    name: 'Dharshan DC',
    role: 'Sales Manager — GCC, India & Singapore',
    src: photo('dharshan'),
    linkedin: linkedin('dharshan-dc-masters-in-internationalbusiness-cips-ciccm-cppm-19614326'),
    bio: [
      'Dharshan DC is a seasoned Sales Manager at Furniconcepts, with a wealth of experience spanning various industries and multinational corporations. Specializing in international sales, Dharshan brings hands-on technical expertise to the furniture industry, alongside a deep understanding of IT technology.',
    ],
  },
  {
    name: 'Jeff Anand',
    role: 'CMO',
    src: photo('jeff'),
    linkedin: linkedin('jeff-anand-052287216'),
    bio: [
      'Jeff Anand began his professional journey as an Instructional Designer at Sify, where he honed his skills in creating engaging and effective learning experiences. His work with prestigious global clients, including General Electric and Ford International, laid a solid foundation for his future endeavors.',
      'Currently, he is the founder and Director of Mamybear, a thriving e-commerce apparel company that blends innovative design with customer-centric service.',
      "In addition to his role at Mamybear, Jeff serves as an advisor to Hubbleweb, an IT company with a robust presence in Singapore, Dubai, and India. His strategic insights and guidance have been instrumental in the company's growth and success in these competitive markets.",
    ],
  },
  {
    name: 'Sunny',
    role: 'Finance Manager / Auditor',
    src: photo('sunny'),
    bio: [
      'As a Finance Manager and Auditor, I oversee financial operations, ensuring accuracy, compliance, and strategic fiscal management. My focus is on maintaining robust financial health and providing insightful analysis to support organizational growth.',
    ],
  },
  {
    name: 'Sneha',
    role: 'Admin / Accountant',
    src: photo('sneha'),
    linkedin: linkedin('sneha-nair-93ba112b2'),
    bio: [
      'Sneha, a detail-oriented and results-driven Accountant with a robust background in Accounting, Financial reporting and financial management. Specializing in managing financial records, ensuring compliance with industry standards, and delivering accurate financial insights, & committed to supporting businesses in achieving financial stability and growth.',
    ],
  },
  {
    name: 'Balu Rajendrakumar',
    role: 'Sales Manager, UAE',
    src: photo('balu'),
    linkedin: linkedin('balu-rajendrakumar-2242ba185'),
    bio: [
      'I help offices go from “meh” to “wow” with the right furniture and carpets. Whether it’s sleek workstations, comfy chairs, or stylish carpets that tie the whole room together—I’ve got it covered. I believe great furniture and flooring make a lasting first impression (and help prevent coffee spill disasters too). With a strong focus on teamwork and customer service, I make sure every project runs smoothly—from the first call to the final call.',
    ],
  },
  {
    name: 'Arjun Rajendran',
    role: 'Flooring Division & Power Modules',
    src: photo('arjun'),
    linkedin: linkedin('arjun-369-rajendran'),
    bio: [
      'Arjun Rajendran specializes in flooring solutions and smart power module systems, bringing practical expertise in delivering efficient, modern, and seamless workspace solutions with a focus on functionality, quality, and design integration.',
    ],
  },
  {
    name: 'Pradeep',
    role: 'Sales Manager, India',
    src: photo('pradeep'),
    linkedin: linkedin('pradeep-backiyaraj-457225a5'),
    bio: [
      'Myself Pradeep, an Engineering graduate having a decade of sales experience in various industries including healthcare and Renewable energy. I have always been passionate about sales and I am fulfilling my customers’ needs.',
    ],
  },
  {
    name: 'Rajesh Kumar',
    role: 'Sales Officer, Coimbatore',
    src: photo('rajesh'),
    linkedin: linkedin('nrajeshkumar88'),
    bio: [
      'Rajesh is a dedicated professional with over 8+ years of experience in sales, marketing, business development, and customer relationship management. Holding a B.Sc. in Computer Science, he is known for his strong communication skills, customer-focused approach, and commitment to achieving business goals.',
      'Passionate about continuous learning and professional growth, Rajesh looks forward to contributing his experience and expertise while embracing new opportunities and challenges.',
    ],
  },
  {
    name: 'Kiruthika Ananthanarayanasamy',
    role: 'Sales Coordinator',
    src: photo('kiruthika'),
    linkedin: linkedin('kiruthika-ananthanarayanasamy-a8b59635a'),
    bio: [
      'I am Kiruthika Ananthanarayanasamy with a degree in corporate secretaryship. My full potential will be explored and where I will get ample scope for company success. Being passionate in facing challenging tasks and good listener too.',
    ],
  },
  {
    name: 'Abisha',
    role: 'Designer / Estimator',
    src: photo('abisha'),
    linkedin: linkedin('abisha-jenifer-969169222'),
    bio: [
      'Abisha, Furniture Designer. A Graduate architect with good experience in designing and curating the essential elements that bring spaces to life. Specializing in the selection and integration of furniture, fixtures, and equipment, having passion and expertise in creating environments that are not only functional but also aesthetically harmonious.',
    ],
  },
  {
    name: 'Kyle Garciano',
    role: 'Designer',
    src: photo('kyle'),
    linkedin: linkedin('kyle-marie-garciano-72ab3123b'),
    bio: [
      'Kyle Garciano with expertise in drafting technology and a flair for design, she brings spaces to life with custom furniture crafted with precision, passion, and a touch of story to tell. Blending modern aesthetics, comfort, and top-quality craftsmanship to create distinctive pieces that add character to homes and various spaces.',
    ],
  },
  {
    name: 'Aliana Samin',
    role: 'Designer / Estimator',
    src: photo('aliana'),
    linkedin: linkedin('alianasamin'),
    bio: [
      'Aliana is a passionate and detail-oriented Designer and Estimator at Furniconcepts with a background in Engineering, where she combines creativity with precision to deliver functional and thoughtfully designed furniture solutions.',
    ],
  },
  {
    name: 'Suresh',
    role: 'IT Head',
    src: photo('suresh'),
    linkedin: linkedin('suresh-shankar-8768bb217'),
    bio: [
      'I am an IT manager with a degree in Corporate Secretaryship. I excel in customer support and project management, leveraging my diverse skill set to effectively manage projects and ensure exceptional customer experiences.',
    ],
  },
  {
    name: 'Chandru Kumar',
    role: 'Web Developer',
    src: photo('chandru'),
    linkedin: linkedin('chandrukumar23032001'),
    bio: [
      'I am Chandru Kumar S, a Web Developer with experience in building responsive, user-friendly, and high-performance web applications. I specialize in React.js, JavaScript, HTML, CSS, and WordPress, and I enjoy creating clean UI designs and smooth user experiences. I have worked on various projects across website development, e-commerce, SEO, and UI/UX enhancements. I am passionate about learning new technologies, solving real-world problems, and delivering high-quality work with attention to detail.',
    ],
  },
  {
    name: 'Joel',
    role: 'Social Media Designer',
    src: photo('joel'),
    linkedin: linkedin('joel-chandrasekaram-ja12'),
    bio: [
      'Joel is a highly skilled Visual Designer with a deep understanding of both digital and physical design. He creates compelling visuals for websites, branding, and digital media, ensuring a seamless user experience across all platforms. Combining technical expertise with artistic creativity, Joel transforms concepts into stunning visual designs that engage and communicate effectively. His work is centered around delivering functional, aesthetically pleasing designs that resonate with clients and users alike.',
    ],
  },
  {
    name: 'Sundhara Valli',
    role: 'Lead Generation Analyst',
    src: photo('sundhara'),
    linkedin: linkedin('sundhara-valli-m-758b513b6'),
    bio: [
      'I am a Lead Generation Analyst with experience in optimizing websites for higher rankings and driving organic traffic. I specialize in keyword research, content optimization, backlink building, and conversion rate optimization to generate high-quality leads. Using tools like Google Analytics, SEMrush, and HubSpot, I analyze performance data to refine strategies and improve lead conversions.',
    ],
  },
  {
    name: 'Mohanbabu J',
    role: 'SEO',
    src: photo('mohanbabu'),
    bio: [
      'I am an SEO Specialist with experience in improving website visibility and increasing organic traffic. I specialize in keyword research, on-page SEO, technical SEO, and link building to help websites rank higher on search engines. Using tools like Google Analytics, Google Search Console, and SEMrush, I analyze website performance, identify growth opportunities, and implement strategies that improve search rankings and drive targeted traffic.',
    ],
  },
  {
    name: 'Raveena G',
    role: 'UI/UX & Graphic Designer',
    src: photo('raveena'),
    linkedin: linkedin('raveena-g-479931223'),
    bio: [
      'Raveena G is a creative and detail-oriented UI/UX and Graphic Designer at Furniconcepts, passionate about crafting intuitive digital experiences and striking visual designs. Combining user-centered design thinking with a strong aesthetic sense, she transforms ideas into engaging interfaces and brand visuals that communicate clearly and leave a lasting impression.',
    ],
  },
  {
    name: 'Afzal',
    role: 'Projects & Sales Head, Saudi Arabia',
    src: photo('afzal'),
    bio: [
      'Heading Projects and Sales in Saudi Arabia, I manage large-scale furniture contracts and drive business development in the region. I specialize in project planning, client coordination, and delivering comprehensive furniture solutions for commercial spaces.',
    ],
  },
  {
    name: 'Veerappan',
    role: 'Sr Technician & Installer',
    src: photo('veerappan'),
    bio: [
      'As a Senior Technician and Installer, I ensure precision and quality in every furniture installation. My role involves technical expertise, troubleshooting, and delivering seamless on-site assembly to meet the highest standards of client satisfaction.',
    ],
  },
  {
    name: 'Selva Kumar',
    role: 'Technical Supervisor',
    src: photo('selva'),
    bio: [
      'As Technical Supervisor, I oversee technical workflows, ensuring that all furniture products and installations meet our rigorous quality standards. I lead technical teams to provide expert support and maintain operational excellence.',
    ],
  },
];
