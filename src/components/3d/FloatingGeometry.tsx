
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, shape, color, speed }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.5;
      meshRef.current.rotation.y += delta * speed * 0.3;
    }
  });

  const ShapeComponent = shape;
  
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
      <ShapeComponent
        ref={meshRef}
        position={position}
        args={shape === Sphere ? [0.3] : shape === Box ? [0.6, 0.6, 0.6] : shape === Torus ? [0.4, 0.15, 8, 16] : [0.5]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.2}
          metalness={0.6}
        />
      </ShapeComponent>
    </Float>
  );
};

const FloatingGeometry = () => {
  const shapes = [
    { position: [-2, 1, -1], shape: Sphere, color: "#3b82f6", speed: 1 },
    { position: [2, -0.5, -1], shape: Box, color: "#8b5cf6", speed: 0.8 },
    { position: [-1, -1.5, -2], shape: Octahedron, color: "#ec4899", speed: 1.2 },
    { position: [1.5, 1.5, -1], shape: Torus, color: "#06b6d4", speed: 0.9 },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
      
      {shapes.map((shapeProps, index) => (
        <FloatingShape key={index} {...shapeProps} />
      ))}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
    </>
  );
};

export default FloatingGeometry;
