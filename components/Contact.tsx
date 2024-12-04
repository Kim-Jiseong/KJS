"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact({ content }: { content: any }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative z-10 py-20 text-center bg-foreground/90 text-background px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold mb-8"
      >
        {content.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl mb-8"
      >
        {content.message}
      </motion.p>

      <motion.a
        href="mailto:jiseong0173@gmail.com"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        {content.cta}
      </motion.a>
    </section>
  );
}
