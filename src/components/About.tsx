'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { useApiData } from '@/hooks/useApiData';
import { About as AboutType } from '@/models/about';
import { Skeleton } from './ui/skeleton';

const About = () => {
  const { data: about, isLoading, error } = useApiData<AboutType>('about');

  if (error) {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Failed to load about data. Please try again later.
          </div>
        </div>
      </section>
    );
  }

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
          
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <div className="space-y-4">
                {Array(3).fill(0).map((_, index) => (
                  <Skeleton key={index} className="h-24 w-full" />
                ))}
              </div>
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-12 w-2/3" />
            </div>
          ) : about && (
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
                    className="prose prose-invert max-w-none text-muted-foreground"
                  >
                    {about.details.map((detail, index) => (
                      <motion.p 
                        key={index}
                        className="text-lg mb-6 group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {detail}
                      </motion.p>
                    ))}
                    <motion.blockquote 
                      className="text-xl italic border-l-4 border-primary pl-4 my-8 group-hover:border-primary/80 transition-colors duration-300 text-amber-700 dark:text-amber-400"
                      whileHover={{ scale: 1.02 }}
                    >
                      &ldquo;{about.quote}&rdquo;
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
                      Based In {about.location}
                    </motion.span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 