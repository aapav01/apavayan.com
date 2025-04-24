'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import Button3D from './ui/button-3d';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import dynamic from 'next/dynamic';

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color="#ffffff" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <ContactBackground />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-500">
            Get in Touch
          </h2>

          <Card className="bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Your message"
                  />
                </div>

                <Button3D
                  variant="black"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  Send Message
                </Button3D>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Contact), {
  ssr: false,
}); 