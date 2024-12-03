"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

export default function Background3D() {
  const meshRef = useRef<Mesh>(null);

  const getColorBasedOnMode = () => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return isDarkMode ? "#fff" : "#000";
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
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[10, 3, 100, 16]} />
        <meshStandardMaterial color={`${getColorBasedOnMode()}`} wireframe />
      </mesh>
    </>
  );
}
