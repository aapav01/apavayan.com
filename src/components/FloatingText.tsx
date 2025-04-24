"use client";

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Vector3 } from 'three';
import { Text3D, Center } from '@react-three/drei';
import { useTheme } from 'next-themes';

const skills = [
  // Frontend
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "three.js",
  // Backend
  "Node.js", "Express", "Python", "Django", "MySQL", "MongoDB", "Java", "SpringBoot",
  // DevOps
  "Docker", "AWS", "Git", "CI/CD", "Linux",
  // Tools
  "VS Code", "GitHub", "Postman", "Swagger", "Jira"
];

const colors = {
  light: {
    primary: "#FFD700", // Gold
    secondary: "#FFE5B4", // Peach
    tertiary: "#FFE4B1", // Moccasin
  },
  dark: {
    primary: "#DAA520", // Goldenrod
    secondary: "#B8860B", // DarkGoldenrod
    tertiary: "#CD853F", // Peru
  }
};

interface SkillRef {
  axis: [number, number, number];
  speed: number;
  orbitRadius: number;
}

export const FloatingText = () => {
  const groupRef = useRef<Group>(null);
  const centerRef = useRef<Group>(null);
  const skillRefs = useRef<{ [key: string]: SkillRef }>({});
  const { theme } = useTheme();
  const currentColor = theme === 'dark' ? colors.dark : colors.light;

  // Initialize random axes, speeds, and orbit radii for each skill
  useEffect(() => {
    const skillRefsObj: { [key: string]: SkillRef } = {};
    skills.forEach(skill => {
      skillRefsObj[skill] = {
        axis: [
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        ],
        speed: 0.3 + Math.random() * 0.3,
        orbitRadius: 2 + Math.random() * 2
      };
    });
    skillRefs.current = skillRefsObj;
  }, []);

  useFrame((state) => {
    if (groupRef.current && skillRefs.current) {
      // Only rotate the orbiting skills, not the central text
      groupRef.current.children.forEach((child, index) => {
        if (index > 0 && index <= skills.length) { // Skip the central text group and check bounds
          const skill = skills[index - 1];
          const skillRef = skillRefs.current[skill];
          
          if (skillRef) {
            // Calculate position on the orbit
            const time = state.clock.elapsedTime;
            const angle = time * skillRef.speed;
            const x = Math.cos(angle) * skillRef.orbitRadius;
            const z = Math.sin(angle) * skillRef.orbitRadius;
            const y = Math.sin(time * 2 + index) * 0.3; // Subtle vertical movement

            child.position.set(x, y, z);
            
            // Add slight rotation to the text itself
            child.rotation.x += skillRef.axis[0] * skillRef.speed * 0.005;
            child.rotation.y += skillRef.axis[1] * skillRef.speed * 0.005;
            child.rotation.z += skillRef.axis[2] * skillRef.speed * 0.005;
          }
        }
      });
    }
  });

  // Calculate text width to help with centering
  const calculateOffset = (text: string, size: number) => {
    return -(text.length * size * 0.3) / 2;
  };

  return (
    <group ref={groupRef}>
      {/* Central Text - Static with Text3D */}
      <group position={[0, 0, -1]} ref={centerRef}>
        <Text3D
          position={[calculateOffset("Full", 0.7), 1.2, 0]}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.7}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          letterSpacing={0.05}
        >
          <meshStandardMaterial color={currentColor.primary} />
          Full
        </Text3D>
        <Text3D
          position={[calculateOffset("Stack", 0.7), 0, 0]}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.7}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          letterSpacing={0.05}
        >
          <meshStandardMaterial color={currentColor.primary} />
          Stack
        </Text3D>
        <Text3D
          position={[calculateOffset("Developer", 0.7), -1.2, 0]}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.7}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          letterSpacing={0.05}
        >
          <meshStandardMaterial color={currentColor.primary} />
          Developer
        </Text3D>
      </group>

      {/* Orbiting Skills */}
      {skills.map((skill, index) => {
        const skillRef = skillRefs.current[skill];
        const orbitRadius = skillRef?.orbitRadius || 3;
        const color = index % 2 === 0 ? currentColor.secondary : currentColor.tertiary;

        return (
          <group key={skill} position={[0, 0, 0]}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.2}
              height={0.05}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.01}
              bevelOffset={0}
              bevelSegments={3}
              letterSpacing={0.02}
            >
              <meshStandardMaterial color={color} />
              {skill}
            </Text3D>
          </group>
        );
      })}
    </group>
  );
}; 