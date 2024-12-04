"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LanguageToggle({ lang }: { lang: string }) {
  const router = useRouter();

  const toggleLanguage = () => {
    router.push(lang === "ko" ? "/en" : "/ko");
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
        {lang === "ko" ? "EN" : "한국어"}
      </motion.button>
    </div>
  );
}
