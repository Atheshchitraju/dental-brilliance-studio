import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Tooth() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
    }
  });
  return (
    <group ref={group}>
      {/* Crown */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.95, 64, 64]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.04}
          backside
          color="#e8f4ff"
        />
      </mesh>
      {/* Cusps */}
      {[[-0.45, 0.95, 0.2], [0.45, 0.95, 0.2], [-0.45, 0.95, -0.2], [0.45, 0.95, -0.2]].map(
        (p, i) => (
          <mesh key={i} position={p as [number, number, number]}>
            <sphereGeometry args={[0.32, 32, 32]} />
            <MeshTransmissionMaterial
              thickness={0.4}
              roughness={0.05}
              transmission={1}
              ior={1.5}
              color="#ffffff"
            />
          </mesh>
        )
      )}
      {/* Roots */}
      <mesh position={[-0.3, -0.7, 0]} rotation={[0, 0, 0.15]}>
        <coneGeometry args={[0.28, 1.2, 32]} />
        <meshStandardMaterial color="#f5f8fc" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0.3, -0.7, 0]} rotation={[0, 0, -0.15]}>
        <coneGeometry args={[0.28, 1.2, 32]} />
        <meshStandardMaterial color="#f5f8fc" roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

function FloatingOrb({ position, color, scale = 0.15 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime + position[0]) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
}

export function ToothScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#7ab8ff" />
        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
          <Tooth />
        </Float>
        <FloatingOrb position={[-2, 0.8, -1]} color="#3b82f6" />
        <FloatingOrb position={[2.2, -0.5, -1]} color="#60a5fa" scale={0.18} />
        <FloatingOrb position={[1.6, 1.4, 0]} color="#93c5fd" scale={0.12} />
        <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={6} blur={2.5} far={3} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}