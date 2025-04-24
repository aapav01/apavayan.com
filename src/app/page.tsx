'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  );
}
