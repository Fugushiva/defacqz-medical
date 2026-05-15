import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const BASE_URL = "https://defacqz-medical.vercel.app";

const PAGE_TITLES: Record<string, string> = {
  home: "Neurologie de proximité à Saint-Gilles",
  specialites: "Quatre spécialités en neurosciences",
  equipe: "Les médecins qui prendront soin de vous",
  "informations-pratiques": "Tout pour préparer votre venue",
  contact: "Demandez votre rendez-vous",
  "mentions-legales": "Mentions légales",
  "politique-confidentialite": "Politique de confidentialité",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? "home";
  const title = PAGE_TITLES[page] ?? PAGE_TITLES.home;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#f5f8f8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#2a5f5f",
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: "32px" }}>⚕</span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#2a5f5f",
              letterSpacing: "-0.02em",
            }}
          >
            Defacqz Medical Center 125
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#1a2e2e",
            lineHeight: "1.1",
            maxWidth: "900px",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#6b8080",
            marginBottom: "48px",
          }}
        >
          Neurochirurgie · Neurologie · Neuropsychologie · Psychiatrie
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "18px", color: "#9aafaf" }}>
            ⭐ 4,6/5 sur Google · Accès PMR
          </span>
          <span style={{ fontSize: "18px", color: "#9aafaf" }}>
            Rue Defacqz 125, 1060 Saint-Gilles
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
