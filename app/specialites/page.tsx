import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quatre spécialités, un seul lieu pour vos soins en neurosciences",
  description:
    "Découvrez nos consultations en neurochirurgie, neurologie, neuropsychologie et psychiatrie à Saint-Gilles. Une équipe dédiée pour vous accompagner.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/specialites",
  },
  openGraph: {
    title: "Quatre spécialités, un seul lieu pour vos soins en neurosciences",
    description:
      "Découvrez nos consultations en neurochirurgie, neurologie, neuropsychologie et psychiatrie à Saint-Gilles.",
    url: "https://defacqz-medical.vercel.app/specialites",
    images: [
      {
        url: "/og/specialites.png",
        width: 1200,
        height: 630,
        alt: "Spécialités du Defacqz Medical Center 125",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quatre spécialités, un seul lieu pour vos soins en neurosciences",
    description:
      "Neurochirurgie, neurologie, neuropsychologie et psychiatrie à Saint-Gilles.",
    images: ["/og/specialites.png"],
  },
};

export default function SpecialitesPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-brand-primary mb-4">
        Quatre spécialités, un seul lieu pour vos soins en neurosciences
      </h1>
      <p className="text-neutral-400 text-sm mt-4">Contenu complet — Phase M3</p>
    </section>
  );
}
