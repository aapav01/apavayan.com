'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "AWOKE India",
    role: "Senior Software Developer - Full Stack",
    period: "Sept 2023 - Present",
    description: "Leading the development of enterprise applications using modern web technologies.",
    technologies: ["React", "Next.js",  "Node.js", "Python", "Frappe Framework", "MySQL", "MongoDB", "AWS"],
  },
  {
    company: "Global Webs Link",
    role: "Software Developer",
    period: "Sep 2019 - Jul 2021",
    description: "Developed and maintained multiple web applications for various clients.",
    technologies: ["React", "Python", "Django", "JavaScript", "MySQL", "AWS"],
  },
];

const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  x: 5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                className="transition-all duration-300 ease-out"
              >
                <Card className="h-full group hover:border-primary/50 bg-background/90 backdrop-blur">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <motion.h3 
                          className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      <Badge 
                        variant="outline"
                        className="group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.p 
                      className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {exp.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                        >
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