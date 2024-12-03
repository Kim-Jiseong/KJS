// app/providers.tsx
"use client";

import i18n from "@/i18n";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <I18nextProvider i18n={i18n}>{children} </I18nextProvider>
    </ThemeProvider>
  );
}
