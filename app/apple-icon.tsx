import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Home-screen icon (iOS): same slab "M" on sign blue.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const slab = await readFile(join(process.cwd(), "assets/fonts/alfaslab.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2fa4e7",
          color: "#fff7e6",
          fontFamily: "Slab",
          textShadow: "3px 3px 0 #141414",
          fontSize: 120,
          lineHeight: 1,
          paddingBottom: 0,
          border: "8px solid #141414",
        }}
      >
        M
      </div>
    ),
    { ...size, fonts: [{ name: "Slab", data: slab, weight: 400, style: "normal" }] },
  );
}
