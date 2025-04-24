import { motion } from 'framer-motion';
import Typewriter from "@/components/typewriter";
import Scene from './3d/Scene';
import Button3D from './ui/button-3d';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient-500"
          >
            <Typewriter words={["Apavayan Sinha"]} />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            <Typewriter
              cursor={true}
              loop={true}
              cursorStyle="|"
              words={[
                "Full-Stack Web Developer",
                "Software Engineer",
                "Backend Developer",
                "MERN Stack Developer",
                "JavaScript Developer",
                "Python Developer",
              ]}
              delaySpeed={3500}
            />
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button3D
              variant="black"
              size="lg"
              as="a"
              href="/resume/CV___Apavayan_Sinha.pdf"
              target="_blank"
              download
            >
              Download Résumé
            </Button3D>
            <Button3D
              variant="white"
              size="lg"
              as="a"
              href="#contact"
            >
              Get in Touch
            </Button3D>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 