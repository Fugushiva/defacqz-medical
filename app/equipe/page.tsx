import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Languages,
  Stethoscope,
  Calendar,
  Users,
} from "lucide-react";

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

function EquipeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr Nordeyn Oulad Ben Taib",
      jobTitle: "Neurochirurgien",
      description:
        "Neurochirurgien spécialisé en neurosciences cliniques au Defacqz Medical Center 125 à Saint-Gilles, Bruxelles.",
      worksFor: {
        "@type": "MedicalOrganization",
        name: "Defacqz Medical Center 125",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rue Defacqz 125",
          addressLocality: "Saint-Gilles",
          postalCode: "1060",
          addressCountry: "BE",
        },
      },
      medicalSpecialty: "Neurochirurgie",
      knowsLanguage: ["fr", "ar", "en"],
      url: "https://defacqz-medical.vercel.app/equipe",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://defacqz-medical.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Notre équipe",
          item: "https://defacqz-medical.vercel.app/equipe",
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function EquipePage() {
  return (
    <>
      <EquipeSchema />

      {/* Hero */}
      <section
        aria-labelledby="equipe-h1"
        className="bg-neutral-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-700 font-medium" aria-current="page">
                Notre équipe
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Notre équipe
            </p>
            <h1
              id="equipe-h1"
              className="font-heading text-neutral-900 mb-6"
            >
              Les médecins qui prendront soin de vous
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Une équipe de spécialistes en neurosciences, engagée à vous offrir
              des soins de qualité dans un cadre humain et accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Dr Oulad Ben Taib profile */}
      <section
        aria-labelledby="dr-taib-heading"
        className="py-16 md:py-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div
                className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center"
                aria-label="Photo du Dr Nordeyn Oulad Ben Taib — à venir"
              >
                <div className="text-center p-8">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-brand-primary/10">
                    <Stethoscope
                      className="size-10 text-brand-primary"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Photo à venir
                  </p>
                </div>
              </div>
            </div>

            {/* Profile content */}
            <div className="order-1 lg:order-2">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-accent-soft px-3 py-1 text-xs font-semibold text-neutral-700">
                <Stethoscope className="size-3.5" aria-hidden="true" />
                Neurochirurgien
              </div>

              <h2
                id="dr-taib-heading"
                className="font-heading text-neutral-900 mt-3 mb-2"
              >
                Dr Nordeyn Oulad Ben Taib
              </h2>
              <p className="text-brand-primary font-semibold mb-6">
                Neurochirurgien — Defacqz Medical Center 125
              </p>

              <p className="text-neutral-700 leading-relaxed mb-8">
                Le Dr Nordeyn Oulad Ben Taib est neurochirurgien spécialisé en
                neurosciences cliniques. Il exerce au Defacqz Medical Center 125
                à Saint-Gilles, où il assure des consultations de neurochirurgie
                et de neurologie. Son approche combine rigueur diagnostique et
                écoute attentive du patient.
              </p>

              {/* Details */}
              <dl className="space-y-5">
                {/* Formation */}
                <div className="flex gap-4">
                  <dt className="flex-shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-accent-soft">
                      <GraduationCap
                        className="size-5 text-brand-primary"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </div>
                  </dt>
                  <dd>
                    <p className="font-semibold text-neutral-900 mb-1">
                      Formation
                    </p>
                    <ul className="text-neutral-700 text-sm space-y-1" role="list">
                      <li>Doctorat en médecine — Université Libre de Bruxelles (ULB)</li>
                      <li>Spécialisation en neurochirurgie</li>
                      <li>Formation complémentaire en neurosciences cliniques</li>
                    </ul>
                  </dd>
                </div>

                {/* Specialties */}
                <div className="flex gap-4">
                  <dt className="flex-shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-accent-soft">
                      <Stethoscope
                        className="size-5 text-brand-primary"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </div>
                  </dt>
                  <dd>
                    <p className="font-semibold text-neutral-900 mb-1">
                      Domaines de compétence
                    </p>
                    <ul className="text-neutral-700 text-sm space-y-1" role="list">
                      <li>Neurochirurgie générale</li>
                      <li>Neurologie clinique</li>
                      <li>Épilepsie et troubles du mouvement</li>
                      <li>Pathologies de la colonne vertébrale</li>
                    </ul>
                  </dd>
                </div>

                {/* Languages */}
                <div className="flex gap-4">
                  <dt className="flex-shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-accent-soft">
                      <Languages
                        className="size-5 text-brand-primary"
                        aria-hidden="true"
                        strokeWidth={1.5}
                      />
                    </div>
                  </dt>
                  <dd>
                    <p className="font-semibold text-neutral-900 mb-1">
                      Langues de consultation
                    </p>
                    <p className="text-neutral-700 text-sm">
                      Français · Arabe · Anglais
                    </p>
                  </dd>
                </div>
              </dl>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact?specialite=neurochirurgie"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  <Calendar className="size-4" aria-hidden="true" />
                  Prendre rendez-vous avec le Dr Oulad Ben Taib
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other practitioners alert */}
      <section
        aria-labelledby="autres-praticiens-heading"
        className="py-12 bg-neutral-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-neutral-200 bg-white p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-accent-soft">
              <Users
                className="size-6 text-brand-primary"
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex-1">
              <h2
                id="autres-praticiens-heading"
                className="font-heading text-lg font-semibold text-neutral-900 mb-1"
              >
                Autres praticiens disponibles
              </h2>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Notre cabinet accueille d&apos;autres spécialistes en
                neuropsychologie et psychiatrie. Contactez le secrétariat pour
                connaître les disponibilités et prendre rendez-vous avec le
                praticien adapté à votre situation.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Contacter le secrétariat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
