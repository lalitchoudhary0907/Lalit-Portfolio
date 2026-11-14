"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Pure deterministic pseudo-random generator complying with React 19 render purity
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// Fine topological dot-matrix wave plane
function DotMatrixWave() {
  const pointsRef = useRef<THREE.Points>(null);
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

  // Generate 52x52 grid coordinates for the topological wave
  const { positions, colors } = useMemo(() => {
    const cols = 52;
    const rows = 52;
    const count = cols * rows;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const spacing = 0.38;
    const offsetX = (cols * spacing) / 2;
    const offsetZ = (rows * spacing) / 2;

    const orangeColor = new THREE.Color("#FF5722");
    const whiteColor = new THREE.Color("#E4E4E7");
    const dimColor = new THREE.Color("#27272A");

    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing - offsetX;
        const z = j * spacing - offsetZ;
        const y = 0;

        pos[idx * 3] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;

        // Radial distance from center determines particle color accent
        const dist = Math.sqrt(x * x + z * z);
        const rVal = seededRandom(idx + 1);
        let pickedColor = dimColor;

        if (dist < 4.5 && rVal > 0.65) {
          pickedColor = orangeColor;
        } else if (dist < 7.5 && rVal > 0.8) {
          pickedColor = whiteColor;
        }

        col[idx * 3] = pickedColor.r;
        col[idx * 3 + 1] = pickedColor.g;
        col[idx * 3 + 2] = pickedColor.b;

        idx++;
      }
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.1);
    const t = state.clock.getElapsedTime();

    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      const posAttr = geo.attributes.position;
      const arr = posAttr.array as Float32Array;

      const pX = pointer.current.x;
      const pY = pointer.current.y;
      const s = scrollRatio.current;

      // Animate fine topological wave
      for (let i = 0; i < arr.length / 3; i++) {
        const x = arr[i * 3];
        const z = arr[i * 3 + 2];
        arr[i * 3 + 1] =
          Math.sin(x * 0.45 + t * 0.85) * 0.22 +
          Math.cos(z * 0.4 + t * 0.7) * 0.2 +
          Math.sin((x + z) * 0.25 + t * 0.5) * 0.15;
      }
      posAttr.needsUpdate = true;

      // Smooth cursor parallax and scroll damping
      const targetRotX = 1.05 - pY * 0.15 + s * 0.3;
      const targetRotY = pX * 0.18;
      const targetY = -0.8 + pY * 0.2 - s * 1.2;

      pointsRef.current.rotation.x = THREE.MathUtils.damp(
        pointsRef.current.rotation.x,
        targetRotX,
        3.5,
        dt
      );
      pointsRef.current.rotation.y = THREE.MathUtils.damp(
        pointsRef.current.rotation.y,
        targetRotY,
        3.5,
        dt
      );
      pointsRef.current.position.y = THREE.MathUtils.damp(
        pointsRef.current.position.y,
        targetY,
        3.5,
        dt
      );
    }
  });

  return (
    <points ref={pointsRef} position={[0, -0.8, -1]} rotation={[1.05, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.28}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Ambient floating ember dust particles
function EmberDustField() {
  const dustRef = useRef<THREE.Points>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const count = 380;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const orange = new THREE.Color("#FF5722");
    const white = new THREE.Color("#FFFFFF");
    const warmAmber = new THREE.Color("#F59E0B");

    for (let i = 0; i < count; i++) {
      const r1 = seededRandom(i * 3 + 1);
      const r2 = seededRandom(i * 3 + 2);
      const r3 = seededRandom(i * 3 + 3);

      pos[i * 3] = (r1 - 0.5) * 16;
      pos[i * 3 + 1] = (r2 - 0.5) * 10;
      pos[i * 3 + 2] = (r3 - 0.5) * 8;

      const rand = seededRandom(i * 5 + 7);
      const picked = rand > 0.65 ? orange : rand > 0.35 ? warmAmber : white;

      col[i * 3] = picked.r;
      col[i * 3 + 1] = picked.g;
      col[i * 3 + 2] = picked.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.1);
    const t = state.clock.getElapsedTime();

    if (dustRef.current) {
      dustRef.current.rotation.y = t * 0.02 + pointer.current.x * 0.08;
      dustRef.current.rotation.x = t * 0.015 - pointer.current.y * 0.06;

      const targetX = pointer.current.x * 0.4;
      const targetY = pointer.current.y * 0.25;

      dustRef.current.position.x = THREE.MathUtils.damp(
        dustRef.current.position.x,
        targetX,
        2.5,
        dt
      );
      dustRef.current.position.y = THREE.MathUtils.damp(
        dustRef.current.position.y,
        targetY,
        2.5,
        dt
      );
    }
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
      >
        <DotMatrixWave />
        <EmberDustField />
      </Canvas>

      {/* Global Vignette Radial Falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#050508_95%)]" />
    </div>
  );
}
