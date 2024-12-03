"use client";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PortfolioCard } from "./PortfolioCard";
import { useState } from "react";
import AnimatedCard from "./PortfolioAnimatedCard";
import PortfolioAnimatedCard from "./PortfolioAnimatedCard";

export default function Portfolio() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = t("portfolio.projects", { returnObjects: true }) as any[];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const prevCard = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextCard = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    // <AnimatedCard />
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
          <PortfolioAnimatedCard project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
