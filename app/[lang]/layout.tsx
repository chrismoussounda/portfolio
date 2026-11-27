import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Alfa_Slab_One, Archivo_Narrow, Work_Sans } from "next/font/google";
import { dict, hasLocale, locales, site } from "@/lib/content";
import "../globals.css";

const slab = Alfa_Slab_One({ variable: "--font-slab", weight: "400", subsets: ["latin"] });
const narrow = Archivo_Narrow({ variable: "--font-narrow", weight: ["500", "700"], subsets: ["latin"] });
const sans = Work_Sans({ variable: "--font-sans", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = dict[lang].meta;
  return {
    metadataBase: new URL(site.url),
    title: t.title,
    description: t.description,
    applicationName: site.short,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    keywords: t.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "profile",
      url: `/${lang}`,
      siteName: site.name,
      title: t.title,
      description: t.description,
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: lang === "fr" ? ["en_GB"] : ["fr_FR"],
      firstName: "Christoffert",
      lastName: "Moussounda",
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4ead5" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

// Runs before first paint so a saved theme never flashes.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html
      lang={lang}
      className={`${slab.variable} ${narrow.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
