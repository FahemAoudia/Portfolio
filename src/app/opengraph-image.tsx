import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #030712 0%, #0f172a 45%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(34,211,238,0.25), transparent 45%), radial-gradient(circle at 20% 80%, rgba(167,139,250,0.2), transparent 40%)",
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
          Fahem Aoudia
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Développeur Full Stack & IA · Montréal
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          React · Next.js · Python · TensorFlow · Docker · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
