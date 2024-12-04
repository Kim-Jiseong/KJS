import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "About Jiseong Kim";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const isKorean = lang === "ko";
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          position: "relative",
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          alignItems: "center",
          gap: 32,
        }}
      >
        <img
          src="/images/profile1.jpg"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "9999px",
            overflow: "hidden",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <p style={{ color: "#006FEE", fontSize: "1.5rem", margin: 0 }}>
            Product Builder
          </p>
          <h2 style={{ margin: 0, fontSize: "4rem", fontWeight: 600 }}>
            {isKorean
              ? "안녕하세요. 김지성입니다."
              : "Hello, I am Jiseong Kim."}
          </h2>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Pretendard",
      //     data: await pretendardSemiBold,
      //     style: "normal",
      //     weight: 600,
      //   },
      // ],
    }
  );
}
