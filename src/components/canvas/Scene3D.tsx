"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function QuantumCore() {
  const groupRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const crystalShellRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const cyanRingRef = useRef<THREE.Mesh>(null);
  const goldRingRef = useRef<THREE.Mesh>(null);

  // Global mouse and scroll state (bypasses pointer-events-none)
  const pointer = useRef({ x: 0, y: 0 });
  const scrollRatio = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      scrollRatio.current = window.scrollY / maxScroll;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    const pX = pointer.current.x;
    const pY = pointer.current.y;
    const s = scrollRatio.current;

    // Frame-rate independent continuous rotations
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x += dt * 0.45;
      innerCoreRef.current.rotation.y += dt * 0.6;
    }
    if (crystalShellRef.current) {
      crystalShellRef.current.rotation.x -= dt * 0.25;
      crystalShellRef.current.rotation.z += dt * 0.3;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x -= dt * 0.15;
      outerWireRef.current.rotation.y -= dt * 0.22;
    }
    if (cyanRingRef.current) {
      cyanRingRef.current.rotation.z += dt * 0.45;
    }
    if (goldRingRef.current) {
      goldRingRef.current.rotation.z -= dt * 0.35;
    }

    // Silky frame-rate independent damping for mouse parallax + scroll orbit
    if (groupRef.current) {
      const targetX = 1.85 + pX * 0.75 + Math.sin(s * Math.PI * 2) * 0.85;
      const targetY = 0.05 + pY * 0.55 - s * 0.6;
      const targetRotX = -pY * 0.35 + s * 0.8;
      const targetRotY = pX * 0.45 + s * Math.PI * 1.2;

      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 4.5, dt);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 4.5, dt);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4.5, dt);
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4.5, dt);
    }
  });

  return (
    <group ref={groupRef} position={[1.85, 0.05, 0]}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.85}>
        {/* Inner Radiating Glowing Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00f5d4"
            emissiveIntensity={3.2}
            roughness={0.05}
          />
        </mesh>

        <pointLight position={[0, 0, 0]} intensity={3.5} color="#00f5d4" distance={3.5} />

        {/* Hyper-Luminous Liquid Glass Quantum Knot */}
        <mesh ref={innerCoreRef} scale={0.95}>
          <torusKnotGeometry args={[0.9, 0.26, 96, 24]} />
          <meshPhysicalMaterial
            color="#00f5d4"
            emissive="#0d9488"
            emissiveIntensity={1.8}
            roughness={0.08}
            metalness={0.92}
            clearcoat={1}
            clearcoatRoughness={0.08}
            transmission={0.3}
            thickness={1.0}
            ior={1.6}
          />
        </mesh>

        {/* Mid Faceted Crystalline Octahedron */}
        <mesh ref={crystalShellRef} scale={1.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00f5d4"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Outer Geodesic Containment Cage */}
        <mesh ref={outerWireRef} scale={2.1}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.45}
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>

        {/* Gyroscopic Ring 1: Bioluminescent Cyan */}
        <mesh ref={cyanRingRef} rotation={[Math.PI / 3, Math.PI / 6, 0]} scale={2.45}>
          <torusGeometry args={[1, 0.012, 12, 90]} />
          <meshBasicMaterial color="#00f5d4" transparent opacity={0.7} />
        </mesh>

        {/* Gyroscopic Ring 2: WorldQuant Gold */}
        <mesh ref={goldRingRef} rotation={[-Math.PI / 4, -Math.PI / 5, 0]} scale={2.75}>
          <torusGeometry args={[1, 0.012, 12, 90]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.65} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2.4} color="#00f5d4" />
        <directionalLight position={[-5, -3, -2]} intensity={2.0} color="#f59e0b" />
        <pointLight position={[0, 2, 3]} intensity={1.6} color="#6366f1" />

        <QuantumCore />

        {/* Single Lightweight Particle Field */}
        <Sparkles
          count={90}
          scale={11}
          size={1.6}
          speed={0.25}
          opacity={0.45}
          color="#00f5d4"
        />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#050508_92%)]" />
    </div>
  );
}