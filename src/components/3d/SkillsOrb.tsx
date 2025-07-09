
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SkillOrbProps {
  skill: string;
  position: [number, number, number];
  color: string;
  level: number;
}

const SkillOrb = ({ position, color, level }: SkillOrbProps) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.5;
      const scale = hovered ? 1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 : 1;
      orbRef.current.scale.setScalar(scale);
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  const orbSize = 0.15 + (level / 100) * 0.2;

  return (
    <mesh
      ref={orbRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[orbSize, 16, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </mesh>
  );
};

const SkillsOrb = () => {
  const skills = [
    { skill: "React", position: [0, 0, 0] as [number, number, number], color: "#61dafb", level: 92 },
    { skill: "TypeScript", position: [1.2, 0.5, -0.5] as [number, number, number], color: "#3178c6", level: 84 },
    { skill: "JavaScript", position: [-1.2, 0.3, -0.5] as [number, number, number], color: "#f7df1e", level: 90 },
    { skill: "Node.js", position: [0.5, -0.8, 0.5] as [number, number, number], color: "#339933", level: 80 },
    { skill: "Python", position: [-0.5, -0.6, 0.5] as [number, number, number], color: "#3776ab", level: 75 },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.6} />
      
      {skills.map((skillData, index) => (
        <SkillOrb key={index} {...skillData} />
      ))}
    </>
  );
};

export default SkillsOrb;
