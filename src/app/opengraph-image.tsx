// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 560 };
export const contentType = "image/png";
export const alt = "Arjun Prajapati - Frontend Developer";

async function loadGoogleFont(font: string, weight: number) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return await res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${font}`);
}

export default async function OpengraphImage() {
  const [interBold, interSemibold, interRegular] = await Promise.all([
    loadGoogleFont("Inter", 700),
    loadGoogleFont("Inter", 600),
    loadGoogleFont("Inter", 400),
  ]);

  const imageBuffer = readFileSync(
    join(process.cwd(), "src/app/assets/profile.png"),
  );
  const profileImageSrc = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  const dotGridPattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23333333'/%3E%3C/svg%3E";

  const skills = ["React", "Next.js", "TypeScript", "Tailwind"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 80px",
          background: "#1a1a1a",
          backgroundImage: `url(${dotGridPattern})`,
          backgroundRepeat: "repeat",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Decorative background accent shapes — behind everything else */}
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
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -90,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#d96a2b",
            opacity: 0.08,
            display: "flex",
          }}
        />

        {/* Main content row */}
        <div style={{ display: "flex", alignItems: "center", gap: "52px" }}>
          <img
            src={profileImageSrc}
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #d96a2b",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Name */}
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

            {/* Role / title — the "who and what" line */}
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 600,
                color: "#a1a1a1",
                marginTop: 10,
              }}
            >
              Frontend Developer
            </div>

            {/* Skill badges */}
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
                    fontWeight: 400,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — URL only */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #333333",
            paddingTop: 20,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#a1a1a1" }}>
            arjun-prajapati.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interSemibold, weight: 600, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      ],
    },
  );
}