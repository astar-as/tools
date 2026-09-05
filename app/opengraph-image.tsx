import { ImageResponse } from "next/og";
import { tools } from "@/content/tools";

const toolCount: number = tools.length;

export const alt = "Astar Tools — Tools for building AI that works";
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
          justifyContent: "space-between",
          background: "#f3f2ed",
          color: "#20211d",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid rgba(32,33,29,.2)",
            paddingBottom: "28px",
            fontSize: 25,
          }}
        >
          <span>astar / tools</span>
          <span style={{ color: "#d74600" }}>
            Open directory · {toolCount} {toolCount === 1 ? "tool" : "tools"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ maxWidth: 990, fontSize: 96, fontWeight: 600, letterSpacing: "-5px", lineHeight: 1 }}>
            Tools for building AI that works.
          </span>
          <span style={{ marginTop: 36, fontSize: 29, color: "rgba(32,33,29,.62)" }}>
            Curated for useful, inspectable systems.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
