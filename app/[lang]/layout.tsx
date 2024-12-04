import { Inter } from "next/font/google";
import { Providers } from "../providers";

import "../globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}
const locales = ["en", "ko"];
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const isKorean = lang === "ko";

  return {
    metadataBase: new URL("https://kjs.vercel.app"),
    title: {
      default: isKorean
        ? "안녕하세요. 김지성입니다."
        : "Hello, I am Jiseong Kim.",
      template: isKorean ? "%s | 김지성" : "%s | Jiseong Kim",
    },
    description: isKorean
      ? "아이디어를 제품으로, 제품을 가치로"
      : "Turning Ideas into Products, \nProducts into Value",
    keywords: [
      isKorean ? "프론트엔드 개발자" : "Frontend Developer",
      isKorean ? "프로덕트 빌더" : "Product Builder",
      "Next.js",
      "React",
      "TypeScript",
      isKorean ? "포트폴리오" : "Portfolio",
    ],
    openGraph: {
      title: isKorean
        ? "안녕하세요. 김지성입니다."
        : "Hello, I am Jiseong Kim.",
      description: isKorean
        ? "아이디어를 제품으로, 제품을 가치로 만드는 프로덕트 빌더"
        : "Product Builder turning ideas into products, products into value",
      type: "website",
      locale: isKorean ? "ko_KR" : "en_US",
      alternateLocales: ["en_US", "ko_KR"],
      images: [
        {
          url: "/images/profile1.jpg",
          width: 1200,
          height: 630,
          alt: isKorean
            ? "안녕하세요. 김지성입니다."
            : "Hello, I am Jiseong Kim.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isKorean
        ? "안녕하세요. 김지성입니다."
        : "Hello, I am Jiseong Kim.",
      description: isKorean
        ? "아이디어를 제품으로, 제품을 가치로 만드는 프로덕트 빌더"
        : "Product Builder turning ideas into products, products into value",
      images: ["/images/profile1.jpg"],
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "ko-KR": "/ko",
      },
    },
    // robots: {
    //   index: true,
    //   follow: true,
    //   googleBot: {
    //     index: true,
    //     follow: true,
    //     "max-video-preview": -1,
    //     "max-image-preview": "large",
    //     "max-snippet": -1,
    //   },
    // },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
