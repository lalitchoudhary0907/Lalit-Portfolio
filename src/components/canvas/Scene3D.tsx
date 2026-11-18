"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Suppress legacy THREE.Clock deprecation warning emitted by third-party R3F store instantiation
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock: This module has been deprecated")
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

// Shared Three.js color instance for centralized electric acid lime accent
const ACCENT_COLOR = new THREE.Color("#C6FF00");

// Connected node-and-wave lattice network in electric acid lime (#C6FF00) and soft white (#F5F3EF)
function ConnectedLatticeNetwork() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const timerRef = useRef<THREE.Timer | null>(null);

  const pointer = useRef({ x: 0, y: 0 });
  const scrollRatio = useRef(0);

  // Initialize official THREE.Timer instance
  if (!timerRef.current && typeof window !== "undefined") {
    timerRef.current = new THREE.Timer();
    if (typeof document !== "undefined") {
      timerRef.current.connect(document);
    }
  }

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
      timerRef.current?.disconnect();
    };
  }, []);

  // Construct a 36x36 grid of connected vertices and line segments
  const { positions, lineIndices, gridCols, gridRows } = useMemo(() => {
    const cols = 36;
    const rows = 36;
    const totalVertices = cols * rows;
    const pos = new Float32Array(totalVertices * 3);

    const spacing = 0.44;
    const offsetX = (cols * spacing) / 2;
    const offsetZ = (rows * spacing) / 2;

    let vIdx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing - offsetX;
        const z = j * spacing - offsetZ;
        pos[vIdx * 3] = x;
        pos[vIdx * 3 + 1] = 0;
        pos[vIdx * 3 + 2] = z;
        vIdx++;
      }
    }

    // Connect adjacent nodes horizontally and vertically
    const indices: number[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const current = i * rows + j;
        // Horizontal link
        if (i < cols - 1) {
          const right = (i + 1) * rows + j;
          indices.push(current, right);
        }
        // Vertical link
        if (j < rows - 1) {
          const down = i * rows + (j + 1);
          indices.push(current, down);
        }
      }
    }

    return {
      positions: pos,
      lineIndices: new Uint16Array(indices),
      gridCols: cols,
      gridRows: rows,
    };
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);

    // Update and query official THREE.Timer for frame elapsed time
    if (timerRef.current) {
      timerRef.current.update();
    }
    const t = timerRef.current ? timerRef.current.getElapsed() : performance.now() * 0.001;

    const pX = pointer.current.x;
    const pY = pointer.current.y;
    const s = scrollRatio.current;

    // Undulate lattice nodes in a graceful, organic mathematical wave
    if (linesRef.current && pointsRef.current) {
      const linePos = linesRef.current.geometry.attributes.position;
      const pointsPos = pointsRef.current.geometry.attributes.position;
      const arr = linePos.array as Float32Array;

      const totalNodes = gridCols * gridRows;
      for (let idx = 0; idx < totalNodes; idx++) {
        const x = arr[idx * 3];
        const z = arr[idx * 3 + 2];

        // Harmonious, organic wave equation matching the reference flow
        const y =
          Math.sin(x * 0.38 + t * 0.55) * 0.38 +
          Math.cos(z * 0.35 + t * 0.5) * 0.32 +
          Math.sin((x + z) * 0.22 + t * 0.35) * 0.2;

        arr[idx * 3 + 1] = y;
        (pointsPos.array as Float32Array)[idx * 3 + 1] = y;
      }

      linePos.needsUpdate = true;
      pointsPos.needsUpdate = true;
    }

    // Gentle cursor parallax and scroll tipping
    if (groupRef.current) {
      const targetRotX = 0.62 - pY * 0.12 + s * 0.25;
      const targetRotY = pX * 0.15;
      const targetX = pX * 0.35;
      const targetY = 0.15 + pY * 0.18 - s * 0.9;

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        3.5,
        dt
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        3.5,
        dt
      );
      groupRef.current.position.x = THREE.MathUtils.damp(
        groupRef.current.position.x,
        targetX,
        3.5,
        dt
      );
      groupRef.current.position.y = THREE.MathUtils.damp(
        groupRef.current.position.y,
        targetY,
        3.5,
        dt
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.15, -1]} rotation={[0.62, 0, 0]}>
      {/* 1. Connected Lattice Lines (Electric Acid Lime #C6FF00 at ~8% opacity for razor-sharp, non-bloomy contrast) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="index"
            args={[lineIndices, 1]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={ACCENT_COLOR}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </lineSegments>

      {/* 2. Soft White Nodes at Intersections (#F5F3EF at ~25% opacity) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#F5F3EF"
          size={0.042}
          transparent
          opacity={0.25}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
      >
        <ConnectedLatticeNetwork />
      </Canvas>

      {/* Global Warm Charcoal Radial Falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#111010_92%)]" />
    </div>
  );
}
