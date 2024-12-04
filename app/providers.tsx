"use client";

import { ThemeProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" {...props}>
      {children}
    </ThemeProvider>
  );
}
