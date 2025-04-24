'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const TechIcons = () => {
  const groupRef = useRef<THREE.Group>(null);
  const icons = [
    { text: 'React', position: [0, 0, 0], color: '#61DAFB' },
    { text: 'TypeScript', position: [3, 1, -2], color: '#3178C6' },
    { text: 'Next.js', position: [-3, -1, 2], color: '#000000' },
    { text: 'Node.js', position: [2, -3, 0], color: '#339933' },
    { text: 'Python', position: [-2, 3, -1], color: '#3776AB' },
  ];

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <Center key={index} position={icon.position as [number, number, number]}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.6}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {icon.text}
            <meshStandardMaterial 
              color={icon.color}
              metalness={0.5}
              roughness={0.2}
              emissive={icon.color}
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Center>
      ))}
    </group>
  );
};

export default TechIcons; 