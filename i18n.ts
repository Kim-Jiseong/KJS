"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import koTranslations from "./locales/ko.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ko: { translation: koTranslations },
  },
  lng: "ko", // 기본 언어를 한국어로 설정
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
