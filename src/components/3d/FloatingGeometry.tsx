
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, shape, color, speed }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.015;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.01;
    }
  });

  const ShapeComponent = shape;
  
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <ShapeComponent
        ref={meshRef}
        position={position}
        args={shape === Sphere ? [0.5] : shape === Box ? [1, 1, 1] : shape === Torus ? [0.6, 0.2, 8, 16] : [0.8]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </ShapeComponent>
    </Float>
  );
};

const FloatingGeometry = () => {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2], shape: Sphere, color: "#3b82f6", speed: 1.2 },
    { position: [4, -1, -1], shape: Box, color: "#8b5cf6", speed: 0.8 },
    { position: [-2, -3, -3], shape: Octahedron, color: "#ec4899", speed: 1.5 },
    { position: [3, 3, -2], shape: Torus, color: "#06b6d4", speed: 1.0 },
    { position: [-5, -1, -4], shape: Sphere, color: "#f59e0b", speed: 0.9 },
    { position: [2, -2, -1], shape: Box, color: "#10b981", speed: 1.3 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {shapes.map((shapeProps, index) => (
        <FloatingShape key={index} {...shapeProps} />
      ))}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </>
  );
};

export default FloatingGeometry;
