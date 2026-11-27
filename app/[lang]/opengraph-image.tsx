import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { dict, hasLocale, site, type Locale } from "@/lib/content";

// Share card for links (WhatsApp, LinkedIn, X, Slack…): the shop sign.
const size = { width: 1200, height: 630 };
const contentType = "image/png";

export async function generateImageMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Locale = hasLocale(lang) ? lang : "fr";
  return [{ id: "sign", alt: dict[l].meta.ogAlt, size, contentType }];
}

// Read once at module load: with cacheComponents, uncached IO inside the handler fails in production.
const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));
const [slab, narrow, sans] = await Promise.all([
  font("alfaslab.ttf"),
  font("archivonarrow-700.ttf"),
  font("worksans-600.ttf"),
]);

const k = "#141414";
const cream = "#fff7e6";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Locale = hasLocale(lang) ? lang : "fr";
  const t = dict[l];
  const shadow = `6px 6px 0 ${k}, -2px -2px 0 ${k}, 2px -2px 0 ${k}, -2px 2px 0 ${k}, 2px 2px 0 ${k}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f4ead5" }}>
        <div style={{ display: "flex", height: 8 }}>
          <div style={{ flex: 4, background: "#00955e" }} />
          <div style={{ flex: 2, background: "#ffd23f" }} />
          <div style={{ flex: 4, background: "#e4312b" }} />
        </div>
        <div style={{ display: "flex", flex: 1, padding: "36px 56px 40px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              background: "#2fa4e7",
              border: `6px solid ${k}`,
              boxShadow: `14px 14px 0 ${k}`,
              padding: "34px 44px",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontFamily: "Narrow",
                  fontSize: 26,
                  textTransform: "uppercase",
                  background: "#e4312b",
                  color: cream,
                  border: `4px solid ${k}`,
                  padding: "6px 16px",
                  transform: "rotate(-2deg)",
                }}
              >
                {t.sign.tag}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontFamily: "Slab", fontSize: 112, lineHeight: 1, textShadow: shadow }}>
              <span style={{ color: cream }}>{t.sign.title[0]}</span>
              <span style={{ color: "#ffd23f" }}>{t.sign.title[1]}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
              <span style={{ fontFamily: "Sans", fontSize: 34, color: k }}>{site.name}</span>
              <span
                style={{
                  fontFamily: "Narrow",
                  fontSize: 24,
                  textTransform: "uppercase",
                  background: cream,
                  color: k,
                  border: `4px solid ${k}`,
                  padding: "6px 14px",
                }}
              >
                {site.url.replace("https://", "")}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Slab", data: slab, weight: 400, style: "normal" },
        { name: "Narrow", data: narrow, weight: 700, style: "normal" },
        { name: "Sans", data: sans, weight: 600, style: "normal" },
      ],
    },
  );
}
