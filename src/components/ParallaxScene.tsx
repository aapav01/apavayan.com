"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScene } from '@/context/SceneContext';
import { Vector3 } from 'three';
import { motion } from 'framer-motion';
import { Environment, OrbitControls } from '@react-three/drei';
import { FloatingText } from './FloatingText';

const SceneContent = () => {
  const { sceneRef } = useScene();
  const mouse = useRef<Vector3>(new Vector3(0, 0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.set(x, y, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x = mouse.current.y * 0.1;
      sceneRef.current.rotation.y = mouse.current.x * 0.1;
    }
  });

  return (
    <group ref={sceneRef}>
      <FloatingText />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="city" />
    </group>
  );
};

export const ParallaxScene = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 w-full h-full pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SceneContent />
      </Canvas>
    </motion.div>
  );
}; 