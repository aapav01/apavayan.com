'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
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
            className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            About Me
          </motion.h2>
          
          <motion.div
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
            className="transition-all duration-300 ease-out"
          >
            <Card className="bg-background/90 backdrop-blur group hover:border-primary/50">
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="prose prose-invert max-w-none"
                >
                  <motion.p 
                    className="text-lg mb-6 group-hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    I am currently a Software Engineer, where I collaborate with a
                    talented team to build impactful solutions for business platforms.
                  </motion.p>
                  <motion.p 
                    className="text-lg mb-6 group-hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    As a full-stack developer, I love connecting the dots between
                    complex backend logic and user-friendly frontend design, combining
                    technical expertise with a user-centred approach. My focus is
                    always on creating scalable, robust applications that not only
                    perform well but also deliver a seamless and engaging user
                    experience.
                  </motion.p>
                  <motion.p 
                    className="text-lg mb-6 group-hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    When I&apos;m not coding, I&apos;m exploring tech trends,
                    capturing stunning photos, or pursuing my personal goals—
                  </motion.p>
                  <motion.blockquote 
                    className="text-xl italic border-l-4 border-primary pl-4 my-8 group-hover:border-primary/80 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    &ldquo;Embark on an adventure, one line of code at a time.&rdquo;
                  </motion.blockquote>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-4 mt-8"
                >
                  <motion.span 
                    className="text-2xl font-black font-sans group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Based In India 🇮🇳
                  </motion.span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 