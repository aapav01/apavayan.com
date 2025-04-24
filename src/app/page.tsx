'use client';

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative z-10"
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  );
}
