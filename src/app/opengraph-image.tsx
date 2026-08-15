import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";

export const alt = `${site.name} — Good Coffee. Good Mood.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #2B1A0C 0%, #6F4423 100%)",
          fontFamily: "Georgia, serif",
          color: "#FBF6EF",
          padding: "60px",
        }}
      >
        <div style={{ fontSize: "26px", letterSpacing: "8px", color: "#DCBE9B", marginBottom: "24px" }}>
          {`${site.shortName} COFFEE & EATERY`}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          <div>Good Coffee.</div>
          <div style={{ color: "#DCBE9B", fontStyle: "italic" }}>Good Mood.</div>
          <div>Good Moments.</div>
        </div>
        <div style={{ fontSize: "20px", color: "#DCBE9B", marginTop: "32px", letterSpacing: "4px" }}>
          {`SINCE ${site.established}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
