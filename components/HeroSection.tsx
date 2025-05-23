"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Background3D from "./Background3D";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HeroSection({ content }: { content: any }) {
  const title = content.title;
  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState(1);

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      const newOpacity = Math.max(0, 1 - latest / window.innerHeight);
      setOpacity(newOpacity);
    });
  }, [scrollY]);

  return (
    <div className="w-full h-[100vh] sticky top-0 left-0">
      <div
        className="z-10 w-full h-full flex flex-col absolute items-center justify-center md:pointer-events-none"
        style={{ opacity }}
      >
        <div className="text-background flex-wrap flex justify-center items-center overflow-hidden text-center px-4 break-keep">
          {title.split(" ").map((word: string, index: number) => (
            <motion.span
              key={index}
              className="text-5xl font-bold inline-block text-background mr-[0.3em]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.2 + 0.5,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-auto"
          onClick={() => {
            const viewportHeight = window.innerHeight;
            const currentScroll = window.scrollY;
            window.scrollTo({
              top: currentScroll + viewportHeight,
              behavior: "smooth",
            });
          }}
        >
          <motion.div
            className="cursor-pointer text-background "
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: [0, 10, 0],
              opacity: 1,
            }}
            transition={{
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.8,
                delay: 2,
              },
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-background"
            >
              <path
                d="M7 13L12 18L17 13M7 6L12 11L17 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.p
            className="text-background text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll down
          </motion.p>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-foreground/50 to-foreground/20 backdrop-blur-[2px] pointer-events-none"
        style={{ opacity }}
      />
      <Canvas className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroSection;
