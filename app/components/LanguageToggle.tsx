'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-semibold z-50"
    >
      {i18n.language === 'ko' ? 'EN' : '한국어'}
    </motion.button>
  )
}

