'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
    </motion.main>
  );
}
