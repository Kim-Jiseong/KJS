"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">{t("contact.title")}</h2>
      <p className="text-xl mb-8">{t("contact.message")}</p>
      <motion.a
        href="mailto:your.email@example.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        {t("contact.cta")}
      </motion.a>
    </motion.section>
  );
}
