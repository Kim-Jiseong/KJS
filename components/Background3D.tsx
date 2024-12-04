"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useTheme } from "next-themes";

export default function Background3D() {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  const getColorBasedOnMode = () => {
    return theme === "dark" ? "#fff" : "#000";
  };

  const getEmissiveIntensityOnMode = () => {
    return theme === "dark" ? 1 : 0;
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });
  // console.log(getColorBasedOnMode());
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
      />
      {/* <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} /> */}

      <mesh ref={meshRef}>
        <torusKnotGeometry args={[10, 3, 100, 16]} />
        <meshStandardMaterial
          // color={getColorBasedOnMode()}
          emissive={getColorBasedOnMode()}
          emissiveIntensity={getEmissiveIntensityOnMode()}
          wireframe
        />
      </mesh>
    </>
  );
}
