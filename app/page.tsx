import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { SpecialitesPreview } from "@/components/sections/SpecialitesPreview";
import { PourquoiNous } from "@/components/sections/PourquoiNous";
import { Testimonials } from "@/components/sections/Testimonials";
import { Timeline } from "@/components/sections/Timeline";
import { CTAFinale } from "@/components/sections/CTAFinale";

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
        url: "/og?page=home",
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
    images: ["/og?page=home"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SpecialitesPreview />
      <PourquoiNous />
      <Testimonials />
      <Timeline />
      <CTAFinale />
    </>
  );
}
