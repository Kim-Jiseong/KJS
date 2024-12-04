import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ko: () => import("@/dictionaries/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
