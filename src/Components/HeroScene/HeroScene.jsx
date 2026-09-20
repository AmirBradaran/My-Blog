import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";

function TorusField() {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh scale={1.35} position={[0.2, 0.1, 0]}>
        <torusKnotGeometry args={[0.85, 0.28, 180, 28]} />
        <MeshDistortMaterial
          color="#2dd4bf"
          attach="material"
          distort={0.35}
          speed={2.2}
          roughness={0.25}
          metalness={0.7}
          emissive="#0f766e"
          emissiveIntensity={0.45}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, speed = 1, color = "#38bdf8" }) {
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh rotation={[Math.PI / 2.6, 0.3, 0.2]}>
        <torusGeometry args={[radius, 0.012, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#070b10"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 2]} intensity={1.2} color="#e0f7ff" />
      <pointLight position={[-4, -2, -2]} intensity={1.4} color="#2dd4bf" />
      <pointLight position={[3, 1, 4]} intensity={0.9} color="#38bdf8" />
      <Stars radius={60} depth={40} count={1200} factor={3.2} saturation={0} fade speed={0.6} />
      <TorusField />
      <OrbitRing radius={1.55} speed={0.8} />
      <OrbitRing radius={1.95} speed={1.1} color="#2dd4bf" />
      <mesh position={[-2.4, -1.2, -1]} scale={0.35}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.45} />
      </mesh>
      <mesh position={[2.2, 1.4, -1.5]} scale={0.28}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#2dd4bf" wireframe transparent opacity={0.5} />
      </mesh>
    </>
  );
}

function HeroSceneInner() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}

const LazyScene = lazy(() =>
  Promise.resolve({ default: HeroSceneInner })
);

export default function HeroScene() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  if (reduceMotion || !ready) {
    return <div className="hero-scene hero-scene--fallback" aria-hidden />;
  }

  return (
    <div className={`hero-scene ${isMobile ? "hero-scene--mobile" : ""}`} aria-hidden>
      <Suspense fallback={<div className="hero-scene hero-scene--fallback" />}>
        <LazyScene />
      </Suspense>
    </div>
  );
}
