/**
 * The Furniconcepts team, mirroring furniconcepts.com/team.php.
 * Photography is downloaded from that page and resized into /images/team.
 */
const photo = (name) => `/images/team/${name}.jpg`;

export const LEADERSHIP = [
  { name: 'T Chakra', role: 'Managing Director', src: photo('t-chakra') },
  { name: 'Subramanian Narayanan', role: 'Sales Director — GCC, India & Singapore', src: photo('narayanan') },
  { name: 'Somasundar', role: 'Director / Partner, India', src: photo('somasundar') },
  { name: 'Deepak Dinesh Prabakaran', role: 'Director', src: photo('deepak') },
];

export const TEAM = [
  { name: 'Jeff Anand', role: 'CMO', src: photo('jeff') },
  { name: 'Afzal', role: 'Projects & Sales Head, Saudi Arabia', src: photo('afzal') },
  { name: 'Balu Rajendrakumar', role: 'Sales Manager, UAE', src: photo('balu') },
  { name: 'Pradeep', role: 'Sales Manager, India', src: photo('pradeep') },
  { name: 'Dharshan DC', role: 'Sales Manager — GCC, India & Singapore', src: photo('dharshan') },
  { name: 'Yazan', role: 'Sales Consultant', src: photo('yazan') },
  { name: 'Rajesh Kumar', role: 'Sales Officer, Coimbatore', src: photo('rajesh') },
  { name: 'Kiruthika Ananthanarayanasamy', role: 'Sales Coordinator', src: photo('kiruthika') },
  { name: 'Arjun Rajendran', role: 'Flooring Division & Power Modules', src: photo('arjun') },
  { name: 'Sunny', role: 'Finance Manager / Auditor', src: photo('sunny') },
  { name: 'Sneha', role: 'Admin / Accountant', src: photo('sneha') },
  { name: 'Joyce', role: 'Furniture Designer & Estimator', src: photo('joyce') },
  { name: 'Abisha', role: 'Designer / Estimator', src: photo('abisha') },
  { name: 'Aliana Samin', role: 'Designer / Estimator', src: photo('aliana') },
  { name: 'Visali Sebastian', role: 'Designer / Estimator', src: photo('vishali') },
  { name: 'Kyle Garciano', role: 'Designer', src: photo('kyle') },
  { name: 'Raveena G', role: 'UI/UX & Graphic Designer', src: photo('raveena') },
  { name: 'Joel', role: 'Social Media Designer', src: photo('joel') },
  { name: 'Suresh', role: 'IT Head', src: photo('suresh') },
  { name: 'Chandru Kumar', role: 'Web Developer', src: photo('chandru') },
  { name: 'Mohanbabu J', role: 'SEO', src: photo('mohanbabu') },
  { name: 'Sundhara Valli', role: 'Lead Generation Analyst', src: photo('sundhara') },
  { name: 'Selva Kumar', role: 'Technical Supervisor', src: photo('selva') },
  { name: 'Veerappan', role: 'Senior Technician & Installer', src: photo('veerappan') },
];
