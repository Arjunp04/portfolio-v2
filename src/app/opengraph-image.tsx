// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        background: "#1a1a1a",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 90,
          height: 90,
          borderRadius: "50%",
          border: "3px solid #d96a2b",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        AP
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        Arjun&nbsp;<span style={{ color: "#d96a2b" }}>Prajapati.</span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#a1a1a1",
          marginTop: 16,
        }}
      >
        Frontend Developer
      </div>
    </div>,
    { ...size },
  );
}
