
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shapeType }: { position: [number, number, number], color: string, shapeType: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const getGeometry = () => {
    switch (shapeType) {
      case 'box':
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
      case 'sphere':
        return new THREE.SphereGeometry(0.3, 16, 16);
      case 'torus':
        return new THREE.TorusGeometry(0.3, 0.1, 8, 16);
      default:
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      <primitive object={getGeometry()} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

const FloatingGeometry = () => {
  const shapes = [
    { position: [-2, 1, -1] as [number, number, number], color: "#3b82f6", shapeType: "sphere" as const },
    { position: [2, -0.5, -1] as [number, number, number], color: "#8b5cf6", shapeType: "box" as const },
    { position: [-1, -1.5, -2] as [number, number, number], color: "#ec4899", shapeType: "torus" as const },
    { position: [1.5, 1.5, -1] as [number, number, number], color: "#06b6d4", shapeType: "sphere" as const },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      
      {shapes.map((shapeProps, index) => (
        <FloatingShape key={index} {...shapeProps} />
      ))}
    </>
  );
};

export default FloatingGeometry;
