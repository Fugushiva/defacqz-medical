import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les médecins qui prendront soin de vous",
  description:
    "Rencontrez les spécialistes du Defacqz Medical Center 125 à Saint-Gilles. Dr Nordeyn Oulad Ben Taib, neurochirurgien, et son équipe.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/equipe",
  },
  openGraph: {
    title: "Les médecins qui prendront soin de vous",
    description:
      "Rencontrez les spécialistes du Defacqz Medical Center 125 à Saint-Gilles. Dr Nordeyn Oulad Ben Taib, neurochirurgien, et son équipe.",
    url: "https://defacqz-medical.vercel.app/equipe",
    images: [
      {
        url: "/og/equipe.png",
        width: 1200,
        height: 630,
        alt: "L'équipe médicale du Defacqz Medical Center 125",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les médecins qui prendront soin de vous",
    description:
      "Dr Nordeyn Oulad Ben Taib, neurochirurgien, et l'équipe du DMC 125 à Saint-Gilles.",
    images: ["/og/equipe.png"],
  },
};

export default function EquipePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-brand-primary mb-4">
        Les médecins qui prendront soin de vous
      </h1>
      <p className="text-neutral-400 text-sm mt-4">Contenu complet — Phase M3</p>
    </section>
  );
}
