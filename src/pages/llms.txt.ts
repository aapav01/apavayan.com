import { personal } from '../data/personal';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { blogPosts } from '../data/blogPosts';
import { journey } from '../data/journey';

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

const buildContent = () => {
  const lines = [
    '# Apavayan Sinha',
    '',
    'Personal portfolio and archived tech blog: [apavayan.com](https://apavayan.com).',
    'Generated from the live site content.',
    '',
    '## About',
    `${personal.name} is a ${personal.title.toLowerCase()} based in ${personal.location}.`,
    personal.subtitle,
    personal.tagline,
    personal.bio,
    '',
    '## Contact',
    `- Website: [${personal.links.website}](${personal.links.website})`,
    `- GitHub: [${personal.links.github}](${personal.links.github})`,
    `- LinkedIn: [${personal.links.linkedin}](${personal.links.linkedin})`,
    `- Email: [${personal.email}](mailto:${personal.email})`,
    `- Phone: ${personal.phone}`,
    '',
    '## Pages',
    '- [Home](https://apavayan.com/)',
    '- [Journey](https://apavayan.com/journey/)',
    '- [Blog archive](https://apavayan.com/blog/)',
    ...blogPosts.map((post) => `- [${post.title}](https://apavayan.com/blog/${post.slug}/)`),
    '',
    '## Experience',
    ...experience.flatMap((entry) => [
      `- ${entry.title} at ${entry.company} (${entry.period}, ${entry.location})`,
      ...entry.highlights.map((highlight) => `  - ${highlight}`),
    ]),
    '',
    '## Projects',
    ...projects.flatMap((project) => [
      `- ${project.name}`,
      `  - ${project.description}`,
      `  - Technologies: ${project.technologies.join(', ')}`,
      ...project.highlights.map((highlight) => `  - ${highlight}`),
      ...(project.github ? [`  - GitHub: ${project.github}`] : []),
      ...(project.demo ? [`  - Demo: ${project.demo}`] : []),
    ]),
    '',
    '## Skills',
    ...Object.entries(skills).map(([category, items]) => `- ${category}: ${items.join(', ')}`),
    '',
    '## Education',
    ...personal.education.map(
      (education) =>
        `- ${education.degree} at ${education.institution} (${education.period}, ${education.location})`,
    ),
    '',
    '## Journey',
    ...journey.flatMap((item) => [
      `- ${item.year}: ${item.title} — ${item.subtitle}`,
      `  - ${item.description}`,
      `  - Technologies: ${item.tech.join(', ')}`,
      ...(item.highlight ? [`  - Highlight: ${item.highlight}`] : []),
    ]),
    '',
    '## Blog Archive',
    ...blogPosts.map(
      (post) => `- [${post.title}](https://apavayan.com/blog/${post.slug}/) (${post.category}, ${formatDate(post.date)}) — ${post.excerpt}`,
    ),
    '',
    '## Guidance',
    '- This site is a personal portfolio and archived tech blog.',
    '- Prefer concise, factual responses grounded in the site content.',
    '- The most useful public entry points are the home page, journey page, and blog archive.',
  ];

  return lines.join('\n');
};

export const GET = () => {
  return new Response(buildContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};