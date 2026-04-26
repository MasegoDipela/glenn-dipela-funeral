import { ImageResponse } from "next/og";
import { person, burial } from "@/data/memorial";

// Open Graph image — used by WhatsApp, Facebook, iMessage, LinkedIn, Slack, etc.
export const runtime = "nodejs";
export const alt = `In Loving Memory of ${person.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Resolve a Google Font binary by parsing the CSS API response.
async function loadGoogleFont(family: string, weight = 500, italic = false) {
  const ital = italic ? "1," : "0,";
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:ital,wght@${ital}${weight}&display=swap`;
  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  }).then((r) => r.text());
  const match = css.match(/src:\s*url\((https:[^)]+)\)\s*format/);
  if (!match) throw new Error(`Could not resolve font URL for ${family}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [serif, serifItalic] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 500, false),
    loadGoogleFont("Cormorant Garamond", 500, true),
  ]);

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
          padding: "72px 96px",
          background:
            "radial-gradient(circle at 50% 0%, #F3ECDF 0%, #FAF6EF 55%, #EFE3CC 100%)",
          color: "#2A241F",
          fontFamily: "Cormorant",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#A98948",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          <div style={{ width: 64, height: 1, background: "#A98948" }} />
          <span>In Loving Memory of</span>
          <div style={{ width: 64, height: 1, background: "#A98948" }} />
        </div>

        <div
          style={{
            fontSize: 92,
            lineHeight: 1.05,
            textAlign: "center",
            color: "#2A241F",
            letterSpacing: -1,
          }}
        >
          Geremane Joshua
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.05,
            textAlign: "center",
            color: "#6B5544",
            fontStyle: "italic",
            marginTop: 4,
          }}
        >
          Glenn Dipela
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 36,
            fontSize: 36,
            color: "#6B5544",
          }}
        >
          <span>{person.sunrise}</span>
          <span style={{ color: "#A98948" }}>—</span>
          <span>{person.sunset}</span>
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#A8907A",
          }}
        >
          {`Affectionately known as “${person.alsoKnownAs}”`}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 96,
            right: 96,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              height: 1,
              width: "100%",
              background:
                "linear-gradient(to right, transparent, #A98948, transparent)",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 22,
              color: "#6B5544",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span>{`Burial · ${burial.date}`}</span>
            <span style={{ color: "#A98948" }}>·</span>
            <span>{burial.cemetery}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, weight: 500, style: "normal" },
        { name: "Cormorant", data: serifItalic, weight: 500, style: "italic" },
      ],
    }
  );
}
