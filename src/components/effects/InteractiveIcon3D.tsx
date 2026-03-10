'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Icon3DProps {
  type: 'icosahedron' | 'torus' | 'box' | 'sphere' | 'octahedron' | 'dodecahedron';
  color: string;
}

const MeshShape: React.FC<Icon3DProps> = ({ type, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 0.8 : 0.2);
      meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.3);
      if (hovered) {
         meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
         meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {type === 'icosahedron' && <icosahedronGeometry args={[1.2, 0]} />}
      {type === 'torus' && <torusGeometry args={[0.9, 0.3, 16, 32]} />}
      {type === 'box' && <boxGeometry args={[1.4, 1.4, 1.4]} />}
      {type === 'sphere' && <sphereGeometry args={[1.1, 32, 32]} />}
      {type === 'octahedron' && <octahedronGeometry args={[1.2, 0]} />}
      {type === 'dodecahedron' && <dodecahedronGeometry args={[1.1, 0]} />}

      <MeshDistortMaterial
        color={color}
        envMapIntensity={hovered ? 1.5 : 0.8}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        metalness={0.7}
        roughness={0.2}
        distort={hovered ? 0.4 : 0.1}
        speed={hovered ? 3 : 1}
      />
    </mesh>
  );
};

export const InteractiveIcon3D: React.FC<Icon3DProps> = ({ type, color }) => {
  return (
    <div className="w-20 h-20 -ml-4 -mt-4 mb-2 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <MeshShape type={type} color={color} />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
