// Todo o conteúdo extraído de larissa-abujamra/portfolio26 (index.html).
// Fonte única de dados para o novo portfólio — os caminhos de imagem apontam para public/imgs/.
// Formato neutro (JS puro): dá para importar em React/Next/Astro/Vite ou converter em JSON.

export const SITE = {
  name: 'Larissa Oliveira',
  domain: 'larissa-oliveira.com',
  tagline: 'Building at the intersection of technology, design & business',
  email: 'abujamra@usc.edu',
  linkedin: 'https://linkedin.com/in/larissa-oliveira2005',
  linkedinLabel: 'linkedin.com/in/larissa-oliveira2005',
  resume: 'https://docs.google.com/document/d/1OqtY1BjmRVQ5YoIp2_su51cwrpn-C25XSvN81L64VQI/edit?usp=sharing',
  copyright: '© 2026 Larissa Oliveira',
};

// Identidade visual original (para referência — pode mudar na repaginada)
export const THEME = {
  colors: {
    bg: '#f0ebe0',
    ink: '#16120c',
    accent: 'oklch(52% 0.16 240)',
    accent2: 'oklch(52% 0.14 200)',
    muted: 'oklch(48% 0.04 55)',
    surface: '#e6e0d6',
    surface2: '#ddd7cc',
    border: 'rgba(22,18,12,0.1)',
    workProjects: '#8cc7e8',
    workCreative: '#3f86bf',
  },
  fonts: {
    display: "'Clash Display', sans-serif", // api.fontshare.com
    serif: "'Instrument Serif', serif",      // Google Fonts
  },
};

export const HERO = {
  // A parte entre <em> aparece destacada na cor de acento
  welcome: 'I was born and raised in São Paulo and am currently based in Los Angeles. As a junior at USC’s Iovine and Young Academy, I get to explore innovation at the intersection of <em>technology, business and design</em>.',
  tiles: [
    { src: 'imgs/tile-sunflower.png', label: 'Sunflower' },
    { src: 'imgs/tile-city.png', label: 'City' },
    { src: 'imgs/tile-swim.png', label: 'Swimming' },
    { src: 'imgs/tile-track.png', label: 'Running' },
    { src: 'imgs/tile-coffee.png', label: 'Coffee' },
    { src: 'imgs/tile-pencil.png', label: 'Art' },
    { src: 'imgs/tile-brazil.png', label: 'Brazil' },
    { src: 'imgs/tile-code.png', label: 'Code' },
    { src: 'imgs/tile-beach.png', label: 'Beach' },
    { src: 'imgs/tile-books.png', label: 'Books' },
    { src: 'imgs/tile-peace.png', label: 'USC' },
    { src: 'imgs/tile-popcorn.png', label: 'Movies' },
  ],
};

export const TICKER = ['Technology', 'Design', 'Business', 'Innovation', 'Impact', 'USC', 'São Paulo', 'LA', 'Startups', 'Social Impact', 'Health Tech', 'Ed Tech'];

// Tipos de seção dentro de um projeto:
//   text          → heading + body
//   text-images   → heading + body + galeria (images[], opcional imgPositions[], imgRatio, link)
//   side          → heading + body + imagem ao lado (imageRight), opcional news{} e link{}
//   feature       → heading + body + imagem grande
//   site-preview  → iframe do site ao vivo (url)
// category: 'web-dev' separa os projetos de web development dos principais.
export const PROJECTS = [
  {
    id: 'faca-parte', title: 'FAÇA PARTE',
    tags: ['social impact', 'non-profit'],
    cardImg: 'imgs/facalogo.png', cardBg: '#ede5d8', logoMode: true,
    timeline: 'Mar 2022 – Jan 2025', role: 'Co-founder & President',
    sections: [
      { type: 'text', heading: 'The Idea', body: "After seeing my grandmother struggle to navigate the digital world, unable to perform simple tasks on her phone that my generation takes for granted, I decided to take action. Week after week, I found myself fixing her technology issues, but I wasn't truly teaching her how to solve them independently. That's when the idea for Faça Parte was born: an organization dedicated to offering technology workshops for older adults, led by teenage volunteers." },
      { type: 'text-images', heading: 'The Early Stages', body: "I started small, inviting my grandparents and my friends' grandparents to weekend sessions at my house or at school. What began as a few informal gatherings quickly grew. Soon, grandparents of students I didn't even know were expressing interest. It became clear that this wasn't just my grandmother's challenge — it was a widespread generational gap.", images: ['imgs/evento.png', 'imgs/fp.png'] },
      { type: 'text-images', heading: 'Expansion & Growth', body: 'We developed partnerships with external organizations and NGOs to broaden our reach, including Instituto Velho Amigo, a nonprofit dedicated to the well-being of older adults, and Clube Paineiras do Morumby, a country club in São Paulo where we ran workshops for members and the local community.', images: ['imgs/va.png', 'imgs/cpm.png'] },
      { type: 'text-images', heading: 'Corporate Partnerships', body: "We partnered with companies like SAP for their 'Bring Your Parents to Work' day, hosting a dedicated Faça Parte technology workshop at their São Paulo office and reaching new audiences through corporate social responsibility initiatives.", images: ['imgs/corp.png', 'imgs/sap.png'] },
      { type: 'side', heading: 'Finalist, SXSW EDU Student Impact Challenge', body: 'Selected to pitch at one of the biggest stages for technology and impact innovation in the world. We were the only non-American team selected, making the experience even more special.', image: 'imgs/sxsw.png', news: { source: 'ESTADÃO', headline: "Brazilian students are among the finalists at the world's largest innovation event: SXSW EDU!", link: 'https://www.soseducacao.com.br/post/tem-brasil-no-p%C3%B3dio-estudantes-brasileiros-entre-os-finalistas-no-maior-evento-de-inova%C3%A7%C3%A3o-do-mundo' } },
      { type: 'text-images', heading: 'Brazilian Internet Congress', body: "Invited to speak at the 'Technologies for Social Transformation' panel. It was a privilege to learn more about the initiatives of the other panelists, who are using technology to drive solutions for a better and more equitable Brazil.", images: ['imgs/mic.png', 'imgs/congresso.png'], imgPositions: ['center', 'right center'] },
    ],
  },
  {
    id: 'hiro', title: 'HIRO',
    tags: ['full-stack', 'ui/ux', 'health tech'],
    cardImg: 'imgs/hiro1.png', cardBg: '#dde5ed',
    timeline: 'Mar 2026 – Present', role: 'Full-Stack · Product & Customer Discovery',
    externalUrl: 'https://hiro-health.vercel.app/',
    sections: [
      { type: 'text', heading: 'The Problem', body: 'Physicians spend up to 2 hours per day on documentation — time that could go toward their patients. Administrative burden is the #1 driver of burnout in medicine. Hiro gives that time back.' },
      { type: 'text', heading: "What We're Building", body: 'Hiro uses AI to transcribe medical consultations in real time and automatically generate complete SOAP records — in seconds. Physicians focus entirely on the patient while Hiro handles the paperwork. The product integrates with Memed for digital prescriptions and Google Calendar for scheduling, and runs entirely in the browser with no installation required.' },
      { type: 'text', heading: 'Interface', body: 'Dashboard and consultation flows designed for clarity under time pressure — a calm visual language that keeps attention on the patient and the work at hand. The SOAP record is generated with one click, reviewed inline, and exported immediately.' },
      { type: 'site-preview', heading: 'Live Product', url: 'https://hiro-health.vercel.app/' },
      { type: 'text', heading: 'My Role', body: 'I lead full-stack development and product discovery — conducting interviews with physicians in Brazil, shaping the core workflow, and building the product end-to-end. I also drive the go-to-market strategy targeting Brazilian clinics, where the documentation burden is especially acute.' },
    ],
  },
  {
    id: 'gait', title: 'GAIT',
    tags: ['healthtech', 'product design'],
    cardImg: 'imgs/gait.png', cardBg: '#dfe8e4',
    timeline: 'Nov 2025 – Present', role: 'Co-founder · Product & GTM',
    sections: [
      { type: 'side', heading: 'The Idea', body: 'Gait was developed during a one-semester startup incubator at the University of Southern California, where our team won the Audience Choice Award at Demo Day. The idea emerged after discovering research showing strong correlations between changes in gait and early neurocognitive decline.', image: 'imgs/demo2.png', imageRight: true },
      { type: 'text-images', heading: 'The Technology', body: "Gait uses computer vision and machine learning to analyze walking patterns through standard smartphone or camera video. By leveraging pose estimation and time-series modeling, the system tracks metrics such as stride length, variability, and balance, comparing them against an individual's baseline over time.", images: ['imgs/gait.png'] },
      { type: 'side', heading: 'The Impact', body: 'Our long-term vision is to shift healthcare from reactive intervention to proactive monitoring. By detecting subtle deviations in gait earlier, Gait has the potential to provide families, caregivers, and clinicians with meaningful insights before severe symptoms emerge.', image: 'imgs/demo.png', imageRight: true, link: { label: 'View Figma Pitch Deck ↗', url: 'https://www.figma.com/deck/dCYWnFU9JgcxWfUzlHvR40/gait---script-adapted?node-id=266-1563&t=7HcAUB9RcUdtT7eX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' } },
    ],
  },
  {
    id: 'rumo', title: 'RUMO',
    tags: ['edtech', 'product'],
    cardImg: 'imgs/rumo.png', cardBg: '#e8e4df',
    timeline: 'Sep 2025 – Nov 2025', role: 'Co-founder · Product & GTM',
    externalUrl: 'https://findrumo.com',
    sections: [
      { type: 'text', heading: 'The Idea', body: 'As an international student from Brazil, I experienced firsthand how overwhelming and fragmented the U.S. college application process can be. Through customer discovery calls with students and counselors, I learned exactly where the bottlenecks and pain points are. Meet Rumo — an AI-powered platform that consolidates timelines, essays, and college research into one intuitive space.' },
      { type: 'feature', heading: 'Personalized Onboarding', body: "Streamlined, adaptive onboarding flow. Intakes students' interests, goals, and academic background.", image: 'imgs/rumo1.png' },
      { type: 'feature', heading: 'AI-Generated Roadmap', body: 'Leveraging AI to deconstruct complex application cycles into manageable milestones.', image: 'imgs/rumo2.png' },
      { type: 'feature', heading: 'Smart College Search', body: 'Dynamic college and program discovery engine that helps students identify aligned academic pathways.', image: 'imgs/rumo3.png' },
      { type: 'feature', heading: 'Essay Prompts', body: 'Pulls real-time essay prompts, word count and other application requirements through web scraping + Gemini API.', image: 'imgs/rumo4.png' },
    ],
  },
  {
    id: 'northstar', title: 'NORTHSTAR ROBOTICS',
    tags: ['UI/UX', 'web dev', 'robotics'],
    cardImg: 'imgs/northstar.png', cardBg: '#0b1220',
    externalUrl: 'https://www.northstarrobotics.ai/',
    timeline: '2026', role: 'Designer & Developer', category: 'web-dev',
    sections: [
      { type: 'text', heading: 'Overview', body: "Designed and developed the new website for Northstar Robotics — a robotics company building autonomous systems. The site balances a clean, technical visual language with clear product storytelling, communicating the company's mission and capabilities to investors, partners, and prospective hires." },
      { type: 'site-preview', heading: 'Live Site', url: 'https://www.northstarrobotics.ai/' },
    ],
  },
  {
    id: 'brasa', title: 'BRASA USC',
    tags: ['UI/UX', 'web dev'],
    cardImg: 'imgs/brasaweb.png', cardBg: '#e0e4ea',
    externalUrl: 'https://brasausc.com',
    timeline: '2025 – Present', role: 'Web Developer · UI/UX', category: 'web-dev',
    sections: [
      { type: 'text', heading: 'Overview', body: "Designed and coded BRASA USC's webpage using HTML/CSS/JavaScript, improving accessibility and centralizing communication for 100+ members. The project involved full UI design from scratch, with a focus on clarity, mobile responsiveness, and representing the energy of a vibrant Brazilian student community at USC." },
      { type: 'site-preview', heading: 'Live Site', url: 'https://brasausc.com/' },
    ],
  },
  {
    id: 'vanessa-cesconetto', title: 'VANESSA CESCONETTO',
    tags: ['UI/UX', 'web dev', 'beauty'],
    cardImg: 'imgs/vanessa.png', cardBg: '#ece5dd',
    externalUrl: 'https://vanessacesconetto.com',
    timeline: '2026', role: 'Designer & Developer', category: 'web-dev',
    sections: [
      { type: 'text', heading: 'Overview', body: "Designed and developed esthetician Vanessa Cesconetto's website with a premium, minimal visual language aligned with her brand. The webpage was built to communicate services clearly, create trust through elegant presentation, and make consultation booking straightforward on both desktop and mobile." },
      { type: 'site-preview', heading: 'Live Site', url: 'https://vanessacesconetto.com/' },
    ],
  },
  {
    // Estava oculto no site original (hidden: true)
    id: 'habit-tracker', title: 'HABIT TRACKER', hidden: true,
    tags: ['UI/UX', 'web dev', 'productivity'],
    cardImg: 'imgs/splits.png', cardBg: '#131418',
    externalUrl: 'https://larissaoliveira-inner.github.io/splits/',
    timeline: '2026', role: 'Designer & Developer', category: 'web-dev',
    sections: [
      { type: 'text', heading: 'Overview', body: 'Designed and built Splits, a personal habit tracker that treats daily routines like training splits. It tracks seven habits — from sleep and workouts to reading and networking — with live streaks, personal records and a daily score, alongside a tagged task list. Trends, a networking log, milestone-based goals and weekly results turn everyday check-ins into a clear picture of long-term consistency.' },
      { type: 'site-preview', heading: 'Live Site', url: 'https://larissaoliveira-inner.github.io/splits/' },
    ],
  },
  {
    id: 'tommys-cart', title: "TOMMY'S CART",
    tags: ['branding', 'UI/UX', 'web dev'],
    cardImg: 'imgs/tommys-site.png', cardBg: '#E0261B',
    externalUrl: 'https://tommyscart.com',
    timeline: '2026', role: 'Brand Designer & Developer', category: 'web-dev',
    sections: [
      { type: 'text', heading: 'Overview', body: "Built the brand and website for Tommy's Cart, a marketplace where USC students buy and sell with people on campus. Sellers list an item in a minute, classmates send offers at, above or below the asking price, and the seller picks who gets it — not the first or the highest, whoever they want — then they meet on campus." },
      { type: 'text-images', heading: 'Brand Identity', body: 'A loud, friendly identity built around a hand-drawn smiley that doubles as the "o" in the wordmark. Snake fruit red and saffron lead the palette, softened by pastel pink and light blue, with Bricolage Grotesque for headlines and DM Mono for small details. The tagline, "have a nice haul.", carries the tone across the site and social.', link: { label: 'View brand book ↗', url: 'imgs/tommys-brandbook.pdf' }, images: ['imgs/tommys-colors.jpg', 'imgs/tommys-type.jpg', 'imgs/tommys-logo.jpg', 'imgs/tommys-social.jpg'], imgRatio: '16 / 9' },
      { type: 'site-preview', heading: 'Live Site', url: 'https://tommyscart.com/' },
    ],
  },
];

// Trabalhos criativos. ratio = largura / altura real do arquivo (usado no layout justificado original).
// No site original eram organizados em linhas; aqui ficam numa lista plana + o layout original em CREATIVE_LAYOUT.
export const CREATIVE = [
  { id: 'robot-turtle', title: 'Robotic Turtle', desc: 'Made with 3D printer, lego pieces, servo motors and clay', media: 'imgs/robotturtle.mp4', type: 'video', ratio: 1920 / 1080 },
  { id: 'acrylic', title: 'Acrylic Painting', desc: '"State of Mind"', media: 'imgs/paint.png', type: 'img', ratio: 1260 / 946 },
  { id: 'birdhouse', title: 'Bird House', desc: 'Made using grafitte pencils, practicing 2 point perspective', media: 'imgs/birdhouse.jpg', type: 'img', ratio: 1170 / 887 },
  { id: 'charcoal', title: 'Charcoal', desc: 'Self-portrait — upside down', media: 'imgs/me.png', type: 'img', ratio: 670 / 950 },
  { id: 'oil-boy', title: 'Oil Painting', desc: 'Black & white painting inspired by the Barra do Sahy 2024 landslides', media: 'imgs/boy.png', type: 'img', ratio: 1496 / 1066 },
  { id: 'man', title: 'Man', desc: 'Graphite pencil drawing study', media: 'imgs/man.png', type: 'img', ratio: 1308 / 1578 },
  { id: 'man-2', title: 'Man (2)', desc: 'Graphite pencil drawing study', media: 'imgs/man1.png', type: 'img', ratio: 1051 / 1303 },
  { id: 'oil-2', title: 'Oil Painting II', desc: 'Oil painting study', media: 'imgs/oilpainting.jpg', type: 'img', ratio: 970 / 1351 },
  { id: 'lego', title: 'Lego Name', desc: 'Colored pens 3D drawing', media: 'imgs/lego.png', type: 'img', ratio: 1208 / 1128 },
  { id: 'grandpa', title: 'Grandpa', desc: 'Pencil drawing portrait study', media: 'imgs/grandpa.png', type: 'img', ratio: 1094 / 1538 },
];

// Layout original (linhas justificadas; "stack" = linhas empilhadas dentro de uma célula)
export const CREATIVE_LAYOUT = [
  [{ stack: [['robot-turtle'], ['acrylic', 'birdhouse']] }, 'charcoal'],
  ['oil-boy', { stack: [['man', 'man-2'], ['oil-2', 'lego', 'grandpa']] }],
];

export const ABOUT = {
  education: {
    label: 'Education',
    school: 'Iovine and Young Academy',
    paragraphs: [
      'The Iovine and Young Academy is a first-of-its-kind program built on the belief that the biggest problems in the world require people who refuse to work in silos.',
      'Founded by Jimmy Iovine & Dr. Dre, the Academy trains a small, highly selective cohort to operate at the intersection of technology, design, business, and the arts — simultaneously, not sequentially.',
    ],
    link: { label: 'Watch to learn more', url: 'https://www.youtube.com/watch?v=1C3O4SC7AA8' },
  },
  aboutMe: {
    label: 'About me',
    paragraphs: [
      'I like learning by doing, and I’m happiest when I’m building or working toward something that challenges me. I’m naturally ambitious and competitive with myself. I try to approach every aspect of my life with curiosity and intention.',
    ],
  },
};

export const EXPERIENCE = [
  {
    logo: 'imgs/innerai.jpeg', name: 'Inner AI', period: 'May 2026 – Present',
    roles: [
      { role: 'AI Deployment (FDE)', period: 'Aug 2026 – Present · Remote' },
      { role: 'Product & GTM Summer Intern', period: 'May 2026 – Aug 2026 · São Paulo' },
    ],
  },
  { logo: 'imgs/microsoft.png', name: 'Microsoft', role: 'Startup Scout', period: 'Jan 2026 – May 2026' },
  { logo: 'imgs/sparks.png', logoBg: '#a62f2c', name: 'Tina Sharkey', role: 'Research Assistant', period: 'Dec 2025 – Present' },
  { logo: 'imgs/jbs.png', name: 'JBS', role: 'M&A and DCM Summer Intern', period: 'Jun 2025 – Aug 2025' },
];

export const LEADERSHIP = [
  { logo: 'imgs/sep.png', name: 'Sigma Eta Pi at USC', role: 'Active Member', period: 'Aug 2025 – Present' },
  { logo: 'imgs/gero.png', name: 'GeroTech SC', role: 'President', period: 'Nov 2024 – Present' },
  { logo: 'imgs/brasa.png', name: 'BRASA USC', role: 'Marketing Director', period: 'Aug 2025 – Present' },
];

export const SPORTS = {
  photos: [
    { src: 'imgs/swim.png', alt: 'Swimming' },
    { src: 'imgs/medal.png', alt: 'Medal' },
    { src: 'imgs/run.png', alt: 'Running' },
    { src: 'imgs/half.png', alt: 'Half marathon' },
  ],
  bullets: [
    'Competitive swimmer for 10+ years',
    'Started running after retiring from swimming',
    'Represented the largest sport club in LATAM',
    'Ran 6 half marathons in the past 1.5 years',
    'Multi national and state medalist',
    'Currently training for a sub 2-hour half',
  ],
};

export const BOOKS = [
  'imgs/gone.png', 'imgs/murakami.png', 'imgs/atomic.png', 'imgs/wisdom.png', 'imgs/littlebook.png',
  'imgs/silent.png', 'imgs/carrie.png', 'imgs/thehate.png', 'imgs/start.png', 'imgs/mebefore.png',
  'imgs/mindset.png', 'imgs/middle.jpg', 'imgs/outliers.jpg', 'imgs/crawdads.png', 'imgs/daisy.jpg',
  'imgs/np.png', 'imgs/turt.jpg', 'imgs/evelyn.jpg', 'imgs/happy.jpg', 'imgs/fraud.jpg',
  'imgs/malibu.jpg', 'imgs/onetrue.jpg',
];

export const CONTACT = {
  heading: "let's connect",
  links: [
    { label: 'Email', value: 'abujamra@usc.edu', href: 'mailto:abujamra@usc.edu' },
    { label: 'LinkedIn', value: 'linkedin.com/in/larissa-oliveira2005', href: 'https://linkedin.com/in/larissa-oliveira2005' },
  ],
};
