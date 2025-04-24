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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-500">
            About Me
          </h2>
          
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-lg mb-6">
                  I am currently a Software Engineer, where I collaborate with a
                  talented team to build impactful solutions for business platforms.
                </p>
                <p className="text-lg mb-6">
                  As a full-stack developer, I love connecting the dots between
                  complex backend logic and user-friendly frontend design, combining
                  technical expertise with a user-centred approach. My focus is
                  always on creating scalable, robust applications that not only
                  perform well but also deliver a seamless and engaging user
                  experience.
                </p>
                <p className="text-lg mb-6">
                  When I'm not coding, I'm exploring tech trends,
                  capturing stunning photos, or pursuing my personal goals—
                </p>
                <blockquote className="text-xl italic border-l-4 border-primary pl-4 my-8">
                  "Embark on an adventure, one line of code at a time."
                </blockquote>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mt-8"
              >
                <span className="text-2xl font-black font-sans">
                  Based In India 🇮🇳
                </span>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 