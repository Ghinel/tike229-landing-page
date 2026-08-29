import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { hero } from "@/content/landing";
import { siteConfig } from "@/content/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — Votre billetterie en ligne au Bénin`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Le générateur n'accepte que ttf/otf/woff : les mêmes familles que le site, en TTF. */
const fontDir = join(process.cwd(), "src/assets/fonts");
const [bricolage, inter, jetbrainsMono] = await Promise.all([
  readFile(join(fontDir, "bricolage-grotesque-800.ttf")),
  readFile(join(fontDir, "inter-500.ttf")),
  readFile(join(fontDir, "jetbrains-mono-500.ttf")),
]);

const ink = "#000000";
const bone = "#f7f4f1";
const muted = "#8e8792";
const accent = "#e89536";

/** Image partagée sur WhatsApp, Facebook, LinkedIn, X — générée au build. */
export default async function Image() {
  const [first, second] = hero.lines;
  // Les polices chargées n'ont pas toutes le glyphe de l'espace fine insécable.
  const kicker = hero.kicker.replace(/ /g, " ");

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 64,
          background: ink,
          color: bone,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -260,
            width: 820,
            height: 820,
            background: "radial-gradient(circle, rgba(198,62,30,0.5) 0%, rgba(0,0,0,0) 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            bottom: 28,
            left: 28,
            border: `3px dashed rgba(247,244,241,0.32)`,
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: -1,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", width: 58, gap: 4, opacity: 0.28 }}>
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} style={{ width: 16, height: 16, background: bone }} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bricolage Grotesque",
            fontWeight: 800,
            fontSize: 78,
            lineHeight: 1.04,
            letterSpacing: -3,
          }}
        >
          <div>{first.text}</div>
          <div style={{ color: accent }}>{second.text}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ fontSize: 26, color: bone }}>Votre billetterie en ligne au Bénin.</div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 20,
              letterSpacing: 2,
              color: muted,
            }}
          >
            {kicker}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: bricolage, weight: 800, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: jetbrainsMono, weight: 500, style: "normal" },
      ],
    },
  );
}
