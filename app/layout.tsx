import "./globals.css";
import { Inter } from "next/font/google";
import LanguageToggle from "./components/LanguageToggle";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kim Jiseong's Website",
  description: "프론트엔드 개발자의 이력서와 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LanguageToggle />

          {children}
        </Providers>
      </body>
    </html>
  );
}
