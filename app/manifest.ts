import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.short,
    description: "Full-stack developer in Brazzaville. Web, mobile and AI.",
    start_url: "/",
    display: "browser",
    background_color: "#f4ead5",
    theme_color: "#2fa4e7",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
