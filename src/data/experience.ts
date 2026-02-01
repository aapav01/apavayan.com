export interface Experience {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'Tattva Foundation',
    companyUrl: 'https://www.tattvafoundation.org/about_page',
    title: 'Full Stack Developer',
    period: 'Jun 2025 - Present',
    location: 'Lucknow, India',
    highlights: [
      'Architected DXVeda, a multi-agent LLM medical triage system with 85%+ diagnostic accuracy',
      'Built high-throughput data pipelines using Java Spring Boot with Kafka, reducing processing time by 50%',
      'Developed React micro-frontend with config-driven UI architecture',
      'Integrated Elasticsearch and Kibana for observability, improving debugging efficiency by 40%',
      'Contributed to DIGIT/UPYOG open-source government platform',
    ],
  },
  {
    company: 'AWOKE India',
    companyUrl: 'https://awokeindia.com/about-us/',
    title: 'Senior Software Engineer',
    period: 'Sep 2023 - Jun 2025',
    location: 'Lucknow, India',
    highlights: [
      'Deployed Redis caching achieving 20% reduction in database load',
      'Designed responsive UIs using React/Next.js, driving 35% increase in mobile traffic',
      'Created AI Proposal Generator with ChatGPT API, saving 30 minutes per email',
      'Led team of 2-3 developers and participated in architectural decision-making',
    ],
  },
  {
    company: 'Global Webs Link',
    companyUrl: 'https://globalwebslink.com',
    title: 'Software Developer',
    period: 'Sep 2019 - Jul 2021',
    location: 'Lucknow, India',
    highlights: [
      'Delivered 20+ interactive websites using React.js, Django, and MySQL',
      'Integrated 10+ RESTful APIs ensuring consistent cross-platform experiences',
    ],
  },
];
