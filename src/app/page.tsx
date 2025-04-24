'use client';

import { motion } from "framer-motion";
import { useScene } from "@/context/SceneContext";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { sceneRef } = useScene();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative z-10"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Apavayan Sinha
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer passionate about creating beautiful and functional web applications.
          </p>
          <Button size="lg" className="text-lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}
