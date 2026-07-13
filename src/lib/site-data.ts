
export type WorkPalette = {
  
  accent: string;
  
  accentBright: string;
  
  tint: string;
};

export type WorkEntry = {
  id: string;
  index: string;
  org: string;
  project: string;
  description: string;
  tags: string[];
  image: string;
  logo: string;
  href: string;
  emoji: string;
  palette: WorkPalette;
};
export const workPalettes: Record<string, WorkPalette> = {
  telus: { accent: '#79689B', accentBright: '#C9BBD8', tint: 'rgba(180, 163, 197, 0.22)' },
  ips: { accent: '#467A00', accentBright: '#8BD435', tint: 'rgba(102, 204, 0, 0.10)' },
  rbc: { accent: '#0057B0', accentBright: '#5CA1E8', tint: 'rgba(0, 102, 208, 0.09)' },
  tweebaa: { accent: '#B91C1C', accentBright: '#F08080', tint: 'rgba(220, 38, 38, 0.07)' },
};

export function caseAccentVars(id: keyof typeof workPalettes): Record<string, string> {
  const palette = workPalettes[id];
  return {
    '--case-accent': palette.accent,
    '--case-accent-bright': palette.accentBright,
    '--case-tint': palette.tint,
  };
}

export const selectedWork: WorkEntry[] = [
  {
    id: 'telus',
    index: '01',
    org: 'Telus',
    project: 'Ticket Management System',
    description: 'Streamlining operations with a dynamic ticket management system.',
    tags: ['Software Engineering', 'DevOps'],
    image: '/home/telus.png',
    logo: '/home/telus.svg',
    href: '/work/telus',
    emoji: '🗼',
    palette: workPalettes.telus,
  },
  {
    id: 'ips',
    index: '02',
    org: 'Ivey Product Society',
    project: 'Spotify Enhancement',
    description: "Enhancing Spotify's social experience through profile customization.",
    tags: ['Product Management', 'UX Research'],
    image: '/home/ips.png',
    logo: '/home/ips.svg',
    href: '/work/ips',
    emoji: '🎧',
    palette: workPalettes.ips,
  },
  {
    id: 'rbc',
    index: '03',
    org: 'Royal Bank of Canada',
    project: 'Mortgage Application Engine',
    description: 'Redefining mortgage applications with an enhanced evaluation engine.',
    tags: ['Software Engineering', 'Full-stack'],
    image: '/home/rbc.png',
    logo: '/home/rbc.svg',
    href: '/work/rbc',
    emoji: '🏦',
    palette: workPalettes.rbc,
  },
  {
    id: 'tweebaa',
    index: '04',
    org: 'Tweebaa',
    project: 'E-commerce Innovation',
    description: 'Pioneering value-exchanging social commerce from the ground up.',
    tags: ['UX/UI Design', 'Wireframing'],
    image: '/home/tweebaa.png',
    logo: '/home/tweebaa.svg',
    href: '/work/tweebaa',
    emoji: '📱',
    palette: workPalettes.tweebaa,
  },
];

export type TimelineEntry = {
  org: string;
  role: string;
  date: string;
  summary?: string;
  logo?: string;
  
  href?: string;
  current?: boolean;
};

export const workTimeline: TimelineEntry[] = [
  {
    org: 'USC Information Sciences Institute (SPHERE)',
    role: 'Operations Engineer',
    date: 'Jun 2026 – Present',
    summary:
      'Automating Linux provisioning with Ansible, performing rolling Kubernetes upgrades, and setting up ZFS storage with NFS exports across a multi-node research testbed.',
    logo: '/home/sphere.png',
    current: true,
  },
  {
    org: 'Ivey Centre for Building Sustainable Value',
    role: 'Software Engineer',
    date: 'Jul 2025 – Present',
    summary:
      'Building a Flutter mobile app and web platform that helps organic farmers connect and grow their community, on a real-time Supabase backend, alongside faculty advisors.',
    logo: '/home/ivey.png',
    current: true,
  },
  {
    org: 'Telus',
    role: 'Software Engineer Intern',
    date: 'May 2023 – Aug 2023',
    summary:
      'Built an internal ticket management system used by up to 3,000 engineers, assisted Open RAN integration with Rakuten and Samsung, and contributed to 5G Zero-Touch Provisioning.',
    logo: '/home/telus.svg',
    href: '/work/telus',
  },
  {
    org: 'Royal Bank of Canada',
    role: 'Software Engineer Intern',
    date: 'May 2022 – Aug 2022',
    summary:
      'Refined auto-adjudication logic for mortgage applications, integrated low-latency GraphQL endpoints serving 100+ requests per second, and raised coverage with extensive Mockito tests.',
    logo: '/home/rbc.svg',
    href: '/work/rbc',
  },
  {
    org: 'Tweebaa',
    role: 'UX/UI Designer Intern',
    date: 'May 2021 – Aug 2021',
    summary:
      'Created 500+ user-centred designs in Figma — flows, sitemaps, and interactive wireframes — collaborating with an international team through a successful startup launch.',
    logo: '/home/tweebaa.svg',
    href: '/work/tweebaa',
  },
];

export const leadershipTimeline: TimelineEntry[] = [
  {
    org: 'USC InfoLab',
    role: 'Graduate Researcher',
    date: 'Jan 2026 – May 2026',
    summary:
      'Worked on Wearables for Health, an open-source toolkit; built dashboard features and Postgres pipelines so clinical researchers can upload, analyze, and visualize wearable data.',
    logo: '/home/infolab.png',
    href: 'https://infolab.usc.edu/projects/W4H/',
  },
  {
    org: 'Hack Western',
    role: 'Web Team Lead',
    date: 'Mar 2021 – Feb 2024',
    summary:
      "Led eight developers end-to-end for one of Canada's largest hackathons — landing page, live site, and an application portal serving 1,000+ applicants.",
    logo: '/home/hw.svg',
  },
  {
    org: 'Ivey Product Society',
    role: 'Product Management Fellow',
    date: 'Jan 2023 – Apr 2023',
    summary:
      'One of 25 fellows in a 4-month bootcamp; ran 10+ user interviews, wrote a PRD, and pitched a homepage customization feature for Spotify.',
    logo: '/home/ips.svg',
    href: '/work/ips',
  },
  {
    org: 'Ivey Tech Club',
    role: 'VP of Development',
    date: 'Apr 2023 – Mar 2024',
    summary:
      'Organized events like "Acing the PM Interview," partnering with Western Product Society on PM insights and interview prep.',
    logo: '/home/itc.svg',
  },
  {
    org: 'Western Founders Network',
    role: 'VP of Education',
    date: 'Sep 2020 – Apr 2022',
    summary:
      'Mentored five directors through four workshops, secured speakers with a combined 7.2M followers, and hit record 100+ attendance.',
    logo: '/home/wfn.svg',
  },
  {
    org: 'Chinese Students Association',
    role: 'Productions Executive',
    date: 'Sep 2020 – Apr 2021',
    summary:
      "Edited promotional and contestants' music videos for Western Voice, garnering over 5,000 views.",
    logo: '/home/csa.svg',
  },
];

export const education = [
  { school: 'University of Southern California', detail: 'MS Computer Science' },
  { school: 'Tsinghua University', detail: 'Exchange' },
  { school: 'Ivey Business School', detail: 'BA Business Administration' },
  { school: 'Western University', detail: 'BS Computer Science' },
];

export const heroStats = [
  { value: '6+', label: 'Years building', detail: 'School, internships, research, and side projects.' },
  { value: '4', label: 'Internships', detail: 'Engineering roles across product and platform teams.' },
  { value: '2', label: 'Research roles', detail: 'Graduate and undergraduate assistantships.' },
];

export const expertiseAreas = [
  {
    id: '01',
    title: 'Software development',
    description:
      'Java is where I\u2019m deepest for backends and services; Next.js is what I reach for when I want the web experience to feel tight. I ship Flutter when mobile\u2019s in scope, and Postgres/Supabase-style stacks when data and auth need to move fast. I like end-to-end ownership, including the AI-shaped work shipping today when it\u2019s the right fit.',
    stack: ['Java', 'Next.js', 'TypeScript', 'Supabase', 'Flutter'],
  },
  {
    id: '02',
    title: 'Product & UX',
    description:
      'I care how people move through a product: flows, edge cases, and low-fi wireframes before the polished screens. Mocks and handoff-ready detail live in Figma, with design systems so engineering gets states, spacing, and behaviour without playing telephone.',
    stack: ['Figma', 'Design systems', 'Prototyping', 'Wireframing'],
  },
  {
    id: '03',
    title: 'Research & analysis',
    description:
      'Interviews and market reading when we need a grounded view of the problem space. Write-ups and specs turn noisy input into something the group can point at and align on. Quantitative data when it exists, qualitative follow-through when we need the why.',
    stack: ['User interviews', 'Market analysis', 'SQL', 'Strategy'],
  },
  {
    id: '04',
    title: 'Systems & infrastructure',
    description:
      'Containerized services and Kubernetes when deploys and scaling need that level of control. CI/CD, configs that match production, and monitoring so outages shrink to find it, fix it, learn, and move on.',
    stack: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD', 'Monitoring'],
  },
];

export const personalPhotos = [
  { src: '/about/ivey.jpeg', alt: 'At Ivey Business School', caption: 'Ivey Business School' },
  { src: '/about/everest.jpeg', alt: 'Everest Base Camp', caption: 'Everest Base Camp' },
  { src: '/about/van.jpeg', alt: 'Vancouver', caption: 'Vancouver' },
  { src: '/about/snowboard.jpeg', alt: 'Snowboarding at Blue Mountain', caption: 'Blue Mountain' },
  { src: '/about/bloor.jpeg', alt: 'Bloor Street, Toronto', caption: 'Toronto' },
  { src: '/about/klein.jpeg', alt: 'Klein Curaçao', caption: 'Klein Curaçao' },
  { src: '/about/pillows.jpeg', alt: 'Canadian Clay and Glass Gallery', caption: 'Clay & Glass Gallery' },
];

