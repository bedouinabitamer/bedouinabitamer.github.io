// Single source of truth for every piece of copy on the site.
// Everything here comes from the CV. Edit this file, not the components.

import portrait from '../assets/portrait.jpg'

export const profile = {
  name: 'Bedouin Abi Tamer',
  initials: 'BA',
  role: 'Full Stack Developer',
  location: 'Jdaideh & Zgharta, Lebanon',
  available: false,
  availableLabel: 'Open to opportunities',
  headline: ['Building web', 'and mobile', 'products'],
  intro:
    'Full stack developer at Digilab Solutions, building React and React Native apps on Node.js and PostgreSQL. I came up through databases and business analysis, so I think about the data model and the user story before the interface.',
  email: 'abitamer.bedouin@gmail.com',
  phone: '+961 70 454 003',
  phoneHref: '+96170454003',
  resumeUrl: '/Bedouin_AbiTamer_resume.pdf',
  avatar: portrait, // set to '' to fall back to the initials block
}

export const stats = [
  { value: '3+', label: 'Years in tech' },
  { value: '3', label: 'Companies worked with' },
  { value: '3', label: 'Languages spoken' },
  { value: '12+', label: 'Technologies used' },
]

export const marquee = [
  'React',
  'React Native',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'PostgreSQL',
  'Oracle',
  'PL/SQL',
  'AWS',
  'Git',
  'Python',
  'C++',
]

export const about = {
  title: 'About me',
  paragraphs: [
    'I started in IT at Institute Saint Antoine, completed my degree in Computer Science and Information Technology at Notre Dame University, and spent my first professional year as a database developer at North Hospital Center (CHN), writing PL/SQL, developing Oracle Forms, and ensuring data integrity.',
    'From there, I sharpened my product acumen through an intensive Agile Business Analyst program at Eurisko Academy, provided front-line technical support at TSI, and landed where I wanted to be: building full-stack web and mobile products at Digilab Solutions, from the schema and APIs all the way to cloud deployment.',
  ],
  highlights: [
    {
      title: 'Database-first thinking',
      body: 'I began on Oracle, PL/SQL and schema design, so performance, integrity and sane data models are habits rather than afterthoughts.',
    },
    {
      title: "An analyst's eye",
      body: 'A business-analysis bootcamp put me through backlogs, sprints, user stories and Kibana dashboards, so I can turn a vague business need into a clear functional spec.',
    },
    {
      title: 'Owning the pipeline',
      body: 'I own the repository and the CI/CD pipeline on my team, and deployed our site to AWS. Shipping is part of the job, not a separate one.',
    },
  ],
}

export const services = [
  {
    id: '01',
    title: 'Full stack web development',
    body: 'Responsive React front ends backed by Node.js and RESTful APIs, built as one coherent product.',
    tags: ['React', 'Node.js', 'REST APIs'],
  },
  {
    id: '02',
    title: 'Cross-platform mobile',
    body: 'React Native applications that share a codebase with the web and still feel native on both platforms.',
    tags: ['React Native', 'JavaScript', 'TypeScript'],
  },
  {
    id: '03',
    title: 'Databases & data modelling',
    body: 'Schema design, query optimisation and data integrity across PostgreSQL, Oracle and PL/SQL.',
    tags: ['PostgreSQL', 'Oracle', 'PL/SQL'],
  },
  {
    id: '04',
    title: 'Cloud, CI/CD & analysis',
    body: 'AWS deployments, GitHub pipelines, and the requirements work that keeps a build aimed at the right target.',
    tags: ['AWS', 'CI/CD', 'Agile / SDLC'],
  },
]

// Case studies drawn from real work. Swap in links and screenshots as they
// become shareable. `link` and `repo` are wired up already.
export const projects = [
  {
    id: 1,
    title: 'Digilab Web Platform',
    category: 'Web & Cloud',
    year: '2026',
    description:
      'Company web platform built front to back: React interface, Node.js REST APIs, PostgreSQL behind it, deployed to AWS with a CI/CD pipeline I own end to end.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #c6f24e 0%, #4ef2b6 100%)',
    featured: true,
  },
  {
    id: 2,
    title: 'Cross-Platform Mobile Apps',
    category: 'Mobile',
    year: '2026',
    description:
      'React Native applications sharing a codebase with the web stack, with AI-assisted features integrated to speed up both the product and the workflow behind it.',
    tags: ['React Native', 'Node.js', 'AI integration'],
    link: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #7c8bff 0%, #c6f24e 100%)',
    featured: true,
  },
  {
    id: 3,
    title: 'Kibana Analytics Dashboards',
    category: 'Bootcamp Project',
    year: '2024',
    description:
      'Real-time dashboards built during a business-analysis bootcamp at Eurisko Academy, exposing performance metrics and surfacing the bottlenecks and trends behind process improvements.',
    tags: ['Kibana', 'Data analysis', 'Agile'],
    link: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #4ecdf2 0%, #7c8bff 100%)',
    featured: false,
  },
  {
    id: 4,
    title: 'Hospital Records System',
    category: 'Database Engineering',
    year: '2023',
    description:
      'Oracle Forms and database layer for North Hospital Center: tables, triggers, sequences and functions in PL/SQL, with queries tuned for daily clinical load.',
    tags: ['Oracle Forms', 'PL/SQL', 'SQL'],
    link: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #ff9f6e 0%, #ff6ea8 100%)',
    featured: false,
  },
]

export const experience = [
  {
    period: 'Feb 2026 to Present',
    role: 'Full Stack Developer (Web & Mobile)',
    company: 'Digilab Solutions',
    body: 'Building and maintaining web and mobile applications in React, React Native and Node.js. Designing PostgreSQL and SQL databases for performance and integrity, shipping responsive interfaces and REST APIs, integrating AI-powered features, deploying to AWS, and owning the GitHub repository and CI/CD pipelines.',
  },
  {
    period: 'Jul 2025 to Jan 2026',
    role: 'Technical Call Support',
    company: 'TSI (IDM, Cablevision, Cyberia)',
    body: 'Troubleshot Cablevision receivers and Smart Box systems, walked customers through modem and Wi-Fi setup, diagnosed slow speeds, DNS failures and dropped connections, and coordinated with field technicians to close cases.',
  },
  {
    period: 'Nov 2024 to Jan 2025',
    role: 'Business Analyst',
    kind: 'Bootcamp',
    company: 'Eurisko Academy, Adma',
    body: 'An intensive business-analysis program: managing product backlogs against Agile sprints, building Kibana dashboards for real-time performance visibility, translating business requirements into functional specifications, and working alongside developers, QA and UI/UX to keep delivery aligned with the user stories.',
  },
  {
    period: 'Feb 2023 to Feb 2024',
    role: 'Database Developer',
    company: 'North Hospital Center (CHN), Zgharta',
    body: 'Designed and developed Oracle Forms and database tables including triggers, sequences and functions. Used SQL and PL/SQL to manage and optimise data workflows, ensuring integrity and tuning queries for performance.',
  },
]

export const education = [
  {
    period: 'Graduated Fall 2024',
    title: 'BSc Computer Science, Information Technology',
    place: 'Notre Dame University (NDU)',
  },
  {
    period: '2018 to 2021',
    title: 'Technical Education, Information Technology',
    place: 'Institute Saint Antoine (ISA), North Lebanon',
  },
]

export const certificates = [
  { year: '2021 to 2024', title: 'Member, Google Developer Student Club (GDSC)', place: 'NDU' },
  { year: '2022', title: 'SQL, Database Schema & Database Design', place: 'Udemy' },
  { year: '2019', title: 'First Aid Certificate', place: 'Lebanese Red Cross' },
]

export const skills = [
  {
    group: 'Web & Mobile',
    items: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    group: 'Backend & Databases',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Oracle', 'Oracle Forms', 'PL/SQL', 'SQL'],
  },
  {
    group: 'Tools & Practice',
    items: ['Git & GitHub', 'CI/CD', 'AWS', 'Kibana', 'Agile / SDLC', 'Python', 'C++'],
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Intermediate' },
]

export const socials = [
  { label: 'GitHub', url: 'https://github.com/boudy15' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bedouin-abitamer-763430260',
  },
  { label: 'Email', url: 'mailto:abitamer.bedouin@gmail.com' },
  { label: 'Phone', url: 'tel:+96170454003' },
]

export const contact = {
  title: ['Have a project', 'in mind?'],
  lead: 'Always open to interesting work and good conversations: web, mobile or anything with a database underneath it. Send me a note and I will get back to you.',
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
