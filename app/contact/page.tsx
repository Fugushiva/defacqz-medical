import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demandez votre rendez-vous en moins de 2 minutes",
  description:
    "Prenez rendez-vous au Defacqz Medical Center 125. Formulaire rapide, rappel sous 24–48h ouvrées. Téléphone et alternative Doctoranytime disponibles.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/contact",
  },
  openGraph: {
    title: "Demandez votre rendez-vous en moins de 2 minutes",
    description:
      "Prenez rendez-vous au Defacqz Medical Center 125. Formulaire rapide, rappel sous 24–48h ouvrées.",
    url: "https://defacqz-medical.vercel.app/contact",
    images: [
      {
        url: "/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Prendre rendez-vous — Defacqz Medical Center 125",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demandez votre rendez-vous en moins de 2 minutes",
    description:
      "Formulaire rapide, rappel sous 24–48h ouvrées. Defacqz Medical Center 125, Saint-Gilles.",
    images: ["/og/contact.png"],
  },
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-brand-primary mb-4">
        Demandez votre rendez-vous en moins de 2 minutes
      </h1>
      <p className="text-neutral-400 text-sm mt-4">Formulaire complet — Phase M4</p>
    </section>
  );
}
