
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
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
  
  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.5;
      if (hovered) {
        orbRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
      } else {
        orbRef.current.scale.setScalar(1);
      }
    }
  });

  const orbSize = 0.2 + (level / 100) * 0.3;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
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
            opacity={0.7}
            roughness={0.3}
            metalness={0.7}
            emissive={color}
            emissiveIntensity={hovered ? 0.2 : 0.05}
          />
        </Sphere>
        <Text
          position={[0, orbSize + 0.3, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
        <Text
          position={[0, orbSize + 0.15, 0]}
          fontSize={0.1}
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
    { skill: "TypeScript", position: [1.5, 0.5, -0.5] as [number, number, number], color: "#3178c6", level: 84 },
    { skill: "JavaScript", position: [-1.5, 0.3, -0.5] as [number, number, number], color: "#f7df1e", level: 90 },
    { skill: "Node.js", position: [0.5, -1, 0.5] as [number, number, number], color: "#339933", level: 80 },
    { skill: "Python", position: [-0.5, -0.8, 0.5] as [number, number, number], color: "#3776ab", level: 75 },
    { skill: "CSS", position: [2, -0.3, 0] as [number, number, number], color: "#1572b6", level: 95 },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
      
      {skills.map((skillData, index) => (
        <SkillOrb key={index} {...skillData} />
      ))}
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={2}
        maxDistance={6}
      />
    </>
  );
};

export default SkillsOrb;
