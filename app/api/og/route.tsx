import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    const fontData = await fetch(
      new URL("/public/fonts/NeueHaasUnica-Medium.woff2", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 40,
            background: "white",
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
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Neue Haas Unica",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
