import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tout pour préparer votre venue sereinement",
  description:
    "Adresse, horaires, accès PMR, transports et parking du cabinet rue Defacqz 125 à Saint-Gilles. Préparez votre première consultation.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/informations-pratiques",
  },
  openGraph: {
    title: "Tout pour préparer votre venue sereinement",
    description:
      "Adresse, horaires, accès PMR, transports et parking du cabinet rue Defacqz 125 à Saint-Gilles.",
    url: "https://defacqz-medical.vercel.app/informations-pratiques",
    images: [
      {
        url: "/og/informations-pratiques.png",
        width: 1200,
        height: 630,
        alt: "Informations pratiques — Defacqz Medical Center 125",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tout pour préparer votre venue sereinement",
    description:
      "Adresse, horaires, accès PMR et transports du cabinet rue Defacqz 125 à Saint-Gilles.",
    images: ["/og/informations-pratiques.png"],
  },
};

export default function InformationsPratiquesPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-brand-primary mb-4">
        Tout pour préparer votre venue sereinement
      </h1>
      <p className="text-neutral-400 text-sm mt-4">Contenu complet — Phase M3</p>
    </section>
  );
}
