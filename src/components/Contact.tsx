'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Get in Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="group hover:border-primary/50 bg-background/90 backdrop-blur">
                <CardHeader>
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-semibold"
                  >
                    Contact Form
                  </motion.h3>
                </CardHeader>
                <CardContent>
                  <motion.form 
                    variants={containerVariants}
                    className="space-y-4"
                  >
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px]"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button className="w-full">
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="group hover:border-primary/50 bg-background/90 backdrop-blur">
                <CardHeader>
                  <motion.h3 
                    variants={itemVariants}
                    className="text-xl font-semibold"
                  >
                    Connect with Me
                  </motion.h3>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    variants={containerVariants}
                    className="space-y-4"
                  >
                    <motion.p 
                      variants={itemVariants}
                      className="text-muted-foreground"
                    >
                      Feel free to reach out through any of these platforms:
                    </motion.p>
                    <motion.div 
                      variants={containerVariants}
                      className="flex flex-col gap-4"
                    >
                      {[
                        { icon: Mail, text: "aapav01@gmail.com", href: "mailto:aapav01@gmail.com" },
                        { icon: Github, text: "github.com/aapav01", href: "https://github.com/aapav01" },
                        { icon: Linkedin, text: "linkedin.com/in/apavayan", href: "https://www.linkedin.com/in/apavayan/" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.text}
                          variants={itemVariants}
                          custom={index}
                        >
                          <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <Button
                              variant="outline"
                              className="w-full justify-start"
                              onClick={() => window.open(item.href, "_blank")}
                            >
                              <item.icon className="mr-2 h-4 w-4" />
                              {item.text}
                            </Button>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 