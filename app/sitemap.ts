import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kjs.vercel.app",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://kjs.vercel.app/ko",
          en: "https://kjs.vercel.app/en",
        },
      },
    },
  ];
}
