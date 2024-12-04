"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail } from "lucide-react";
import EducationCard from "../EducationCard";

export default function Profile({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      className="w-full flex flex-col md:flex-row justify-between items-center gap-8 py-20 "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative w-full md:w-[40%] md:max-w-[400px] mx-auto"
      >
        <div className="relative w-full aspect-square pb-[100%]">
          <Image
            src={"/image/profile1.jpg"}
            alt={content.name}
            fill
            className="absolute inset-0 rounded-xl object-cover border-2 border-gray-300"
          />
        </div>
        <EducationCard content={content.education} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full text-center md:text-right "
      >
        <h1 className="text-4xl font-bold mb-4">{content.name}</h1>
        <p className="mb-6 whitespace-pre-line">{content.intro}</p>

        <div className="flex justify-end space-x-4 text-xl text-gray-500">
          <a
            href="https://linkedin.com/in/jiseong-kim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className=" hover:text-blue-500 transition-colors" />
          </a>
          <a href="mailto:jiseong0173@gmail.com">
            <Mail className=" hover:text-red-500 transition-colors" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
