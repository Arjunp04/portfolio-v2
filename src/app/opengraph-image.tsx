// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Arjun Prajapati - Frontend Developer";

// Cached across warm invocations of the same serverless instance, so the
// network fetch to Google Fonts only happens once per cold start instead
// of on every single crawl/share. Dropped down to a single weight (700)
// since the design only needs bold + a lighter color for hierarchy —
// one less network round trip than fetching multiple font weights.
let fontDataCache: ArrayBuffer | null = null;

async function getInterBold(): Promise<ArrayBuffer | null> {
  if (fontDataCache) return fontDataCache;

  try {
    const css = await (
      await fetch("https://fonts.googleapis.com/css2?family=Inter:wght@700")
    ).text();
    const match = css.match(
      /src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!match) return null;

    const res = await fetch(match[1]);
    if (!res.ok) return null;

    fontDataCache = await res.arrayBuffer();
    return fontDataCache;
  } catch {
    // If the font fetch fails or times out, fall back to Satori's
    // default sans-serif rather than breaking the whole image.
    return null;
  }
}

export default async function OpengraphImage() {
  const interBold = await getInterBold();

  const imageBuffer = readFileSync(
    join(process.cwd(), "src/app/assets/profile.png"),
  );
  const profileImageSrc = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  const skills = ["React", "Next.js", "TypeScript", "Tailwind"];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        background: "#1a1a1a",
        fontFamily: interBold ? "Inter" : "sans-serif",
        position: "relative",
      }}
    >
      {/* Single decorative accent — kept minimal on purpose */}
      <div
        style={{
          position: "absolute",
          top: -110,
          right: -110,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "#d96a2b",
          opacity: 0.12,
          display: "flex",
        }}
      />

      {/* Main content: photo + name/title/skills, centered as a group */}
      <div style={{ display: "flex", alignItems: "center", gap: "52px" }}>
        <img
          src={profileImageSrc}
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #d96a2b",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Arjun&nbsp;<span style={{ color: "#d96a2b" }}>Prajapati.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#a1a1a1",
              marginTop: 10,
            }}
          >
            Frontend Developer
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: 20 }}>
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  padding: "7px 18px",
                  borderRadius: 24,
                  border: "1px solid #3a3a3a",
                  color: "#d96a2b",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio URL, part of the same centered group */}
      <div style={{ display: "flex", fontSize: 22, color: "#a1a1a1" }}>
        arjunprajapati.vercel.app
      </div>
    </div>,
    {
      ...size,
      fonts: interBold
        ? [{ name: "Inter", data: interBold, weight: 700, style: "normal" }]
        : [],
    },
  );
}
