"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScene } from '@/context/SceneContext';
import { Vector3 } from 'three';
import * as motion from "motion/react-client"
import { Environment, OrbitControls } from '@react-three/drei';
import { FloatingText } from './FloatingText';

const SceneContent = () => {
  const { sceneRef } = useScene();
  const mouse = useRef<Vector3>(new Vector3(0, 0, 0));
  const targetRotation = useRef<Vector3>(new Vector3(0, 0, 0));
  const prevMouse = useRef<Vector3>(new Vector3(0, 0, 0));
  const lerpFactor = 0.05; // Adjust this value to control smoothness (0.01 to 0.1)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update current mouse position
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.set(x, y, 0);

      // Calculate movement direction
      const deltaX = mouse.current.x - prevMouse.current.x;
      const deltaY = mouse.current.y - prevMouse.current.y;

      // Only update target rotation if movement is significant
      if (Math.abs(deltaX) > 0.001 || Math.abs(deltaY) > 0.001) {
        // Calculate new target rotation
        targetRotation.current.x += deltaY * 0.1;
        targetRotation.current.y += deltaX * 0.1;

        // Clamp rotations to prevent extreme angles
        targetRotation.current.x = Math.max(-0.5, Math.min(0.5, targetRotation.current.x));
        targetRotation.current.y = Math.max(-0.5, Math.min(0.5, targetRotation.current.y));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (sceneRef.current) {
      // Smoothly interpolate current rotation to target rotation
      sceneRef.current.rotation.x += (targetRotation.current.x - sceneRef.current.rotation.x) * lerpFactor;
      sceneRef.current.rotation.y += (targetRotation.current.y - sceneRef.current.rotation.y) * lerpFactor;

      // Add slight natural movement
      const time = Date.now() * 0.001;
      sceneRef.current.rotation.x += Math.sin(time) * 0.001;
      sceneRef.current.rotation.y += Math.cos(time) * 0.001;
    }
  });

  return (
    <group ref={sceneRef}>
      <FloatingText />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={false} // Disable OrbitControls rotation since we're handling it
      />
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