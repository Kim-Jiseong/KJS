"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const experiences = content.list;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 ">Work Experience</h2>
      <div className="space-y-8" ref={ref}>
        {experiences.map((exp: any, index: number) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </motion.section>
  );
}
