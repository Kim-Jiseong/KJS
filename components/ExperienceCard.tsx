import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function ExperienceCard({ exp }: { exp: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ delay: 0.5 }}
    >
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-6">
            {exp.companyImage && (
              <Image
                className="rounded-lg"
                src={exp.companyImage}
                alt={exp.company}
                width={60}
                height={60}
              />
            )}
            <div>
              <CardTitle>{exp.company}</CardTitle>
              <CardDescription className="font-bold">
                {exp.position}
              </CardDescription>
              <CardDescription>{exp.period}</CardDescription>
            </div>
          </div>
        </CardHeader>
        {exp.achievements.length > 0 && (
          <CardContent>
            <ul className="text-sm list-disc list-inside">
              {exp.achievements.map((achievement: string, i: number) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        )}
        {/* <CardFooter className="flex justify-between"></CardFooter> */}
      </Card>
    </motion.div>
  );
}

export default ExperienceCard;
