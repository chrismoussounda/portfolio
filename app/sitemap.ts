import type { MetadataRoute } from "next";
import { locales, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`]));
  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    changeFrequency: "monthly",
    priority: lang === "fr" ? 1 : 0.9,
    alternates: { languages },
  }));
}
