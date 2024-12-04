"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PortfolioAnimatedCard from "./PortfolioAnimatedCard";

export default function Portfolio({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = content.projects;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20 perspective-1000"
    >
      <h2 className="text-3xl font-bold mb-8 text-left">Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 relative">
        {projects.map((project: any, index: number) => (
          <PortfolioAnimatedCard
            project={project}
            index={index}
            key={project.title}
          />
        ))}
      </div>
    </motion.section>
  );
}
