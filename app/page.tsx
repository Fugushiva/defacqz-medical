import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Des spécialistes en neurosciences, près de chez vous à Saint-Gilles",
  description:
    "Cabinet de neurosciences à Saint-Gilles (1060). Neurochirurgie, neurologie, neuropsychologie, psychiatrie. 4,6/5 sur Google. Prise de rendez-vous rapide.",
  alternates: {
    canonical: "https://defacqz-medical.vercel.app/",
  },
  openGraph: {
    title:
      "Des spécialistes en neurosciences, près de chez vous à Saint-Gilles",
    description:
      "Cabinet de neurosciences à Saint-Gilles (1060). Neurochirurgie, neurologie, neuropsychologie, psychiatrie. 4,6/5 sur Google.",
    url: "https://defacqz-medical.vercel.app/",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Defacqz Medical Center 125 — Cabinet de neurosciences à Saint-Gilles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Des spécialistes en neurosciences, près de chez vous à Saint-Gilles",
    description:
      "Cabinet de neurosciences à Saint-Gilles (1060). Neurochirurgie, neurologie, neuropsychologie, psychiatrie.",
    images: ["/og/home.png"],
  },
};

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-brand-primary mb-4">
        Des spécialistes en neurosciences, près de chez vous à Saint-Gilles
      </h1>
      <p className="text-neutral-700 max-w-2xl text-lg">
        Neurochirurgie · Neurologie · Neuropsychologie · Psychiatrie
      </p>
      <p className="mt-4 text-neutral-400 text-sm">Contenu complet — Phase M3</p>
    </section>
  );
}
