import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#0f0f10",
        color: "#ededec",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#ff6969" }}>
        {site.url.replace("https://", "")}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 12, fontSize: 40, color: "#a3a29c" }}>
          {`${site.role} at Giddaa`}
        </div>
      </div>
    </div>,
    size,
  );
}
