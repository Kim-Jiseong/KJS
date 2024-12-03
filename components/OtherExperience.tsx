"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Label } from "recharts";
import { Input } from "postcss";
import { Button } from "./ui/button";
import ExperienceCard from "./ExperienceCard";

export default function OtherExperience() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const experiences = t("otherExperience.list", {
    returnObjects: true,
  }) as any[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 ">Other Experience</h2>
      <div className="space-y-8" ref={ref}>
        {experiences.map((exp: any, index: number) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </motion.section>
  );
}
