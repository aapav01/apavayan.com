'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';
import AWOKEINDIALOGO from '@/company/logos/awokeindia.png';
import GWLLOGO from '@/company/logos/gwl.png';

const experiences = [
  {
    company: "AWOKE India Consultant Pvt. Ltd.",
    role: "Software Engineer",
    period: "Sep 2023 - Present",
    logo: AWOKEINDIALOGO,
    achievements: [
      "Collaborated with the Project Manager to document user requirements for the Internal Management Platform, improving project delivery timelines by 25%.",
      "Increased application performance by 36% through modern system design and architecture.",
      "Automated reporting features that enhanced regulatory compliance audits.",
      "Deployed Redis as a caching solution, achieving a 20% reduction in database load.",
      "Automated more than 50% of H.R. Process by implementing and customization of HRMS.",
    ],
    technologies: ["Python", "React.js", "Node.js", "Express.js", "MySQL/MariaDB", "MongoDB", "Next.js", "AWS", "Git"]
  },
  {
    company: "Global Webs Link",
    role: "Software Developer",
    period: "Sep 2019 - Jul 2021",
    logo: GWLLOGO,
    achievements: [
      "Developed cross-platform mobile apps for news aggregation on Android and iOS.",
      "Created a web application for managing Virtual Marathon events, supporting 1,500+ participants.",
      "Developed an Internal Job Reference System for the Alumni Portal.",
      "Integrated an innovative Gallery feature utilizing REST APIs within a React.js application.",
    ],
    technologies: ["React.js", "PHP", "Laravel", "Python", "Django", "Wordpress", "MySQL/MariaDB", "Git"]
  }
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          style={{ opacity, y }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-500">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <a
                        href={exp.company === "AWOKE India Consultant Pvt. Ltd." ? "https://awokeindia.com" : "https://globalwebslink.com/"}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        className="max-h-12 w-auto"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 