'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApiData } from "@/hooks/useApiData";
import { Skill } from "@/models/skills";
import { Skeleton } from "@/components/ui/skeleton";

const Skills = () => {
  const { data: skills, isLoading, error } = useApiData<Skill[]>('skills');

  if (error) {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Failed to load skills. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20">
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
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? (
              // Loading skeletons
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                  </div>
                </div>
              ))
            ) : (
              skills?.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                  className="transition-all duration-300 ease-out"
                >
                  <Card className="h-full group hover:border-primary/50 bg-background/90 backdrop-blur">
                    <CardHeader>
                      <motion.h3 
                        className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.category}
                      </motion.h3>
                    </CardHeader>
                    <CardContent>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {skill.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.2 + itemIndex * 0.1,
                              type: "spring",
                              stiffness: 200,
                              damping: 10
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge 
                              variant="secondary"
                              className="group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                            >
                              {item}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 