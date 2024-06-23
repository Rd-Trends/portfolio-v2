import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141e46",
          color: "#fff5e0",
        }}>
        <h1 style={{ fontSize: 88 }}>Daniel Ikoyo</h1>
        <p
          style={{
            marginTop: 10,
            fontSize: 32,
            backgroundColor: "rgb(255 105 105 / 0.2)",
            color: "#ff6969",
            padding: 50,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: "100",
          }}>
          Full Stack Developer
        </p>
      </div>
    )
  );
}
