"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={ref} scale={1.35}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#22d3ee"
          roughness={0.2}
          metalness={0.85}
          distort={0.35}
          speed={2.2}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <hemisphereLight intensity={0.5} groundColor="#1e1b4b" color="#67e8f9" />
        <directionalLight position={[4, 2, 3]} intensity={1.15} />
        <Suspense fallback={null}>
          <Core />
        </Suspense>
      </Canvas>
    </div>
  );
}
