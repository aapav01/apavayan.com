'use client';

import * as motion from "motion/react-client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
} as const;

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
} as const;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Message sent successfully! Check your email for confirmation.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

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
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
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
                    onSubmit={handleSubmit}
                  >
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button
                          className="w-full"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
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
