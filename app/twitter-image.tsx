import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Elena Catani";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const fontData = await fetch(
    new URL("./NeueHaasUnica-Medium.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 48,
          color: "#ffffff",
          background: "#1D1D1D",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Neue Haas Unica"',
        }}
      >
        Elena Catani
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Neue Haas Unica",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
