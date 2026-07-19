export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlight?: string;
  current?: boolean;
}

export const journey: JourneyItem[] = [
  {
    year: '2025',
    title: 'Full Stack Architect',
    subtitle: 'Building AI-Powered Government Infrastructure',
    description: 'Architecting DXVeda — a multi-agent LLM medical triage system with specialized AI agents, achieving 85%+ diagnostic accuracy across 200+ medical conditions. Contributing to DIGIT/UPYOG open-source government platform, building data pipelines processing 15,000+ records with 50% performance improvement.',
    tech: ['Spring Boot', 'Kafka', 'Kubernetes', 'React', 'OpenAI', 'Gemini', 'RAG'],
    current: true,
  },
  {
    year: '2023',
    title: 'Senior Software Engineer',
    subtitle: 'AI Integration & Team Leadership',
    description: 'Stepped into senior role leading teams of developers. Deployed Redis caching achieving 20% reduction in database load.',
    tech: ['Next.js', 'Redis', 'ChatGPT API', 'PostgreSQL', 'Frappe'],
  },
  {
    year: '2021',
    title: 'Master of Computer Application',
    subtitle: 'Advanced Computing & AI/ML',
    description: 'Pursued MCA to deepen expertise in advanced computing, machine learning, and enterprise software architecture. Combined practical work experience with academic rigor in cloud computing and big data systems.',
    tech: ['Python', 'Machine Learning', 'Cloud Computing', 'Big Data'],
  },
  {
    year: '2019',
    title: 'Software Developer',
    subtitle: 'First Professional Role',
    description: 'Started professional career delivering 20+ interactive websites using React.js and Django. Integrated 10+ RESTful APIs ensuring consistent cross-platform experiences. Achieved 20% increase in client engagement through enhanced functionality.',
    tech: ['React.js', 'Django', 'MySQL', 'REST APIs'],
  },
  {
    year: '2016',
    title: 'Bachelor of Computer Application',
    subtitle: 'Formal CS Education',
    description: 'Formalized self-taught programming knowledge with structured computer science education. Deep dive into data structures, algorithms, database systems, and software engineering principles.',
    tech: ['C', 'C++', 'Java', 'MySQL', 'Data Structures'],
  },
  {
    year: '2015',
    title: 'Open Source Contributor',
    subtitle: 'LineageOS / CyanogenMod',
    description: 'Recognized contributor to LineageOS Android distribution. Collaborated with global team of 10+ developers to customize and optimize firmware. Boosted device performance by 10% and enhanced energy efficiency by 5% through kernel optimizations.',
    highlight: 'Recognized as top 1% developer on XDA-Developers for resolving 100+ technical issues.',
    tech: ['Android', 'Linux Kernel', 'C', 'Shell'],
  },
  {
    year: '2014',
    title: 'Tech Blog Era',
    subtitle: 'Android Tutorials & Community',
    description: 'Launched "Apavayan World" — a tech blog covering Android rooting guides, custom ROM installations, and mobile app reviews. Built a community helping thousands of users unlock the full potential of their devices.',
    tech: ['WordPress', 'PHP', 'Android Modding'],
  },
  {
    year: '2013',
    title: 'Portfolio & Photography',
    subtitle: 'Creative Exploration',
    description: 'Evolved my web presence into a portfolio showcasing photography and creative work. Experimented with social features, interactive galleries, and modern web technologies of the time.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
  },
  {
    year: '2007',
    title: 'First Website',
    subtitle: 'Where It All Began',
    description: 'Built my first personal website as a kid — simple HTML pages about hobbies, drawings, and things I loved. The spark that ignited a lifelong passion for building things on the internet.',
    highlight: '"This is designed and developed by ME" — my first proudly written footer.',
    tech: ['HTML', 'Basic CSS'],
  },
];