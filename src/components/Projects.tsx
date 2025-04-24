'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import dynamic from 'next/dynamic';

const ProjectCard = ({ title, description, technologies, model }: {
  title: string;
  description: string;
  technologies: string[];
  model: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="bg-background/50 backdrop-blur-sm h-full">
        <CardHeader>
          <h3 className="text-2xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <div className="aspect-video mb-4">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {model}
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const projects = [
  {
    title: "Internal Management Platform",
    description: "A comprehensive platform for managing business operations, featuring automated reporting and real-time analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    model: <Box args={[1, 1, 1]} /> // Replace with actual 3D model
  },
  {
    title: "Virtual Marathon Platform",
    description: "A web application for managing virtual marathon events with real-time tracking and participant management.",
    technologies: ["React", "Python", "Django", "MySQL"],
    model: <Box args={[1, 1, 1]} /> // Replace with actual 3D model
  },
  {
    title: "Alumni Portal",
    description: "A platform connecting students and alumni for job opportunities and networking.",
    technologies: ["React", "Laravel", "MySQL"],
    model: <Box args={[1, 1, 1]} /> // Replace with actual 3D model
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-500">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Projects), {
  ssr: false,
}); 