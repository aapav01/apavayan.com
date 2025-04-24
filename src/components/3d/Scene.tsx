'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TechIcons from './TechIcons';

const Scene = () => {
  useEffect(() => {
    return () => {
      // Cleanup function to dispose of WebGL context
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const gl = canvas.getContext('webgl');
        if (gl) {
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight
            position={[-10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.2}
            castShadow
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <TechIcons />
          <OrbitControls
            enableZoom={true}
            minDistance={5}
            maxDistance={15}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Use a named export to prevent multiple instances
const DynamicScene = dynamic(() => Promise.resolve(Scene), {
  ssr: false,
});

export default DynamicScene; 