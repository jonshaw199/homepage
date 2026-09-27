import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(255,90,54,0.34), transparent 28%), linear-gradient(135deg, #09090b 0%, #121214 55%, #09090b 100%)",
          color: "#f4f4f5",
          padding: "64px",
          fontFamily: "Space Grotesk, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 32,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Jon Shaw
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.92,
              fontWeight: 700,
              maxWidth: 840,
            }}
          >
            Software engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 28, color: "#d4d4d8", maxWidth: 700 }}>
            Homepage, blog, and links.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ff7a5c",
              border: "1px solid rgba(255,122,92,0.5)",
              padding: "14px 18px",
              borderRadius: 999,
            }}
          >
            jonshaw199.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}