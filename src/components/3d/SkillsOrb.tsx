
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  skill: string;
  position: [number, number, number];
  color: string;
  level: number;
}

const SkillOrb = ({ skill, position, color, level }: SkillOrbProps) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.01;
      if (hovered) {
        orbRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
      } else {
        orbRef.current.scale.setScalar(1);
      }
    }
  });

  const orbSize = 0.3 + (level / 100) * 0.5;

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <group position={position}>
        <Sphere
          ref={orbRef}
          args={[orbSize]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </Sphere>
        <Text
          position={[0, orbSize + 0.5, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
        <Text
          position={[0, orbSize + 0.3, 0]}
          fontSize={0.15}
          color="#888"
          anchorX="center"
          anchorY="middle"
        >
          {level}%
        </Text>
      </group>
    </Float>
  );
};

const SkillsOrb = () => {
  const skills = [
    { skill: "React", position: [0, 0, 0] as [number, number, number], color: "#61dafb", level: 92 },
    { skill: "TypeScript", position: [2, 1, -1] as [number, number, number], color: "#3178c6", level: 84 },
    { skill: "JavaScript", position: [-2, 0.5, -1] as [number, number, number], color: "#f7df1e", level: 90 },
    { skill: "Node.js", position: [1, -1.5, 1] as [number, number, number], color: "#339933", level: 80 },
    { skill: "Python", position: [-1, -1, 1] as [number, number, number], color: "#3776ab", level: 75 },
    { skill: "CSS", position: [3, -0.5, 0] as [number, number, number], color: "#1572b6", level: 95 },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {skills.map((skillData, index) => (
        <SkillOrb key={index} {...skillData} />
      ))}
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        minDistance={3}
        maxDistance={8}
      />
    </>
  );
};

export default SkillsOrb;
