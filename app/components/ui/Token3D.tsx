'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useEffect, useRef } from 'react';

export default function Token3D() {
  return (
    <Canvas
      style={{ width: '100%', height: '200px', }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      shadows
    >
      {/* 💡 Lighting */}
      <ambientLight intensity={8} />
      <directionalLight position={[2, 2, 2]} intensity={2} castShadow />

      {/* 🌀 Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

function Model() {
  const { scene } = useGLTF('/3d/sunvila-token.glb');
  const ref = useRef<THREE.Group>(null);

  // Center and scale model
  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = new THREE.Vector3();
      box.getSize(size);

      const center = new THREE.Vector3();
      box.getCenter(center);

      // Shift model to center
      ref.current.position.sub(center);

      // Uniform scale
      const maxAxis = Math.max(size.x, size.y, size.z);
      const scaleFactor = 5 / maxAxis; // scale to fit height of 5 units
      ref.current.scale.setScalar(scaleFactor);
    }
  }, []);

  return <group ref={ref}><primitive object={scene} /></group>;
}


