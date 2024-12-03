"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ko" ? "en" : "ko";
    i18n.changeLanguage(newLang);
  };

  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onChange}
        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-semibold"
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] " />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] " />
        )}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-semibold"
      >
        {i18n.language === "ko" ? "EN" : "한국어"}
      </motion.button>
    </div>
  );
}
