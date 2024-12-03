"use client";

import i18n from "@/i18n";
import { ThemeProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" {...props}>
      <I18nextProvider i18n={i18n}>{children} </I18nextProvider>
    </ThemeProvider>
  );
}
