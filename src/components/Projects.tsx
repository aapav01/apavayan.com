'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Edtech - PrameyShala",
    description: "Project PrameyShala is a revolutionary Edtech platform designed to assist school students who are preparing for JEE Main and NEET examinations. This platform is equipped with advanced features that help students to focus and study their streams of subject with ease. With Project PrameyShala, students can access a vast range of study materials, practice tests, and mock exams. The platform is designed to provide a personalized learning experience to each student, helping them to achieve their goals and excel in their studies.",
    technologies: ["React", "Next.js", "Python", "Django", "JavaScript", "MySQL", "AWS"],
    link: "https://github.com/aapav01/prameyshala.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Xenium - Website & Fest Management System",
    description: "The Web App was Designed to Showcase the Content and events and get Participation Information specific to the event they want to participate in. It had features like generating participation Certificates and generating entry tickets and also to scan and verify the ticket. Generate a Report specific to the event and also have filter options.",
    technologies: ["PHP", "Laravel", "MySQL", "IIS"],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: (title: string | null) => void;
}

function ProjectCard({ project, index, isHovered, onHover }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="transition-all duration-300 ease-out"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      onMouseEnter={() => onHover(project.title)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className="h-full group hover:border-primary/50 bg-background/90 backdrop-blur">
        <CardHeader>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="relative">
            <p 
              className={`text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 ${
                isHovered ? 'line-clamp-none' : 'line-clamp-3'
              }`}
            >
              {project.description}
            </p>
            {!isHovered && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
          {project.link && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group-hover:border-primary/50"
            >
              <Button
                variant="outline"
                className="w-full group-hover:border-primary/50 group-hover:text-primary transition-colors duration-300"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isHovered={hoveredProject === project.title}
                onHover={setHoveredProject}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects; 