export interface Project {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: 'One Plan - AI Project Management',
    description:
      'Comprehensive SaaS platform with 12 microservices for AI-powered project management, deployed on Raspberry Pi cluster.',
    technologies: ['Spring Boot 3', 'Spring Cloud', 'Next.js', 'MariaDB', 'MongoDB'],
    highlights: [
      '12 microservices architecture',
      'Spring Cloud Gateway for routing',
      'WebSocket real-time notifications',
      'Event-driven architecture',
    ],
    github: 'https://github.com/TwelveNexus/one-plan',
  },
  {
    name: 'Prameyshala - Learning Management System',
    description:
      'Scalable LMS providing personalized learning experiences for 1,000+ students with video streaming integration.',
    technologies: ['Next.js', 'React', 'Django', 'GraphQL', 'PostgreSQL'],
    highlights: [
      'Server-Side Rendering for 25% faster loads',
      'TUS Upload protocol for large files',
      'Media CDN for video delivery',
    ],
    github: 'https://github.com/aapav01/prameyshala.com',
  },
  {
    name: 'DXVeda - Medical Triage System',
    description:
      'Multi-agent LLM-based medical triage system automating OPD recommendations across 200+ conditions.',
    technologies: ['Spring Boot', 'Kafka', 'React', 'OpenAI', 'Gemini', 'Qdrant'],
    highlights: [
      '4 specialized AI agents',
      '85%+ diagnostic accuracy',
      'RAG with Vector Database',
      '60% reduction in triage time',
    ],
    demo: 'https://triaging-tool.vercel.app',
  },
];
