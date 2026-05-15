import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Accessibility,
  Bus,
  Car,
  Phone,
  Calendar,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GoogleMapsEmbed } from "@/components/maps/GoogleMapsEmbed";

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

const horaires = [
  { jour: "Lundi", heures: "08h30 – 17h00" },
  { jour: "Mardi", heures: "08h30 – 17h00" },
  { jour: "Mercredi", heures: "08h30 – 17h00" },
  { jour: "Jeudi", heures: "08h30 – 17h00" },
  { jour: "Vendredi", heures: "08h30 – 16h00" },
  { jour: "Samedi", heures: "Fermé" },
  { jour: "Dimanche", heures: "Fermé" },
] as const;

const faqItems = [
  {
    q: "Comment se prépare une première consultation ?",
    a: "Pour votre première consultation, munissez-vous de votre carte d'identité, de votre carte SIS (carte d'assurance maladie), de vos ordonnances médicales en cours, et si possible d'un résumé de votre historique médical ou d'une lettre de votre médecin généraliste. Arrivez 10 minutes avant l'heure prévue pour les formalités administratives.",
  },
  {
    q: "Que faut-il apporter lors de la consultation ?",
    a: "Apportez : carte d'identité, carte SIS, résultats d'examens antérieurs (IRM, scanner, EEG, analyses sanguines), liste de vos médicaments actuels avec les dosages, et si vous avez un agenda des symptômes (crises, maux de tête, etc.), il sera très utile au médecin.",
  },
  {
    q: "Combien de temps dure la consultation ?",
    a: "Une première consultation dure généralement 45 à 60 minutes. Les consultations de suivi durent 20 à 30 minutes. Ces durées peuvent varier selon la complexité de votre situation. Nous prenons le temps nécessaire pour chaque patient.",
  },
  {
    q: "Le cabinet est-il conventionné ?",
    a: "Oui, le Defacqz Medical Center 125 est conventionné avec l'INAMI. Les consultations sont remboursées par la mutualité selon les tarifs en vigueur. Renseignez-vous auprès de votre mutualité pour connaître votre quote-part personnelle.",
  },
] as const;

function InfoPratiquesSchema() {
  const schema = [
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
          name: "Informations pratiques",
          item: "https://defacqz-medical.vercel.app/informations-pratiques",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function InformationsPratiquesPage() {
  return (
    <>
      <InfoPratiquesSchema />

      {/* Hero */}
      <section
        aria-labelledby="info-pratiques-h1"
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
                Informations pratiques
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Votre venue
            </p>
            <h1
              id="info-pratiques-h1"
              className="font-heading text-neutral-900 mb-6"
            >
              Tout pour préparer votre venue sereinement
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Adresse, horaires, accès PMR et transports — toutes les
              informations pour préparer votre consultation au Defacqz Medical
              Center 125.
            </p>
          </div>
        </div>
      </section>

      {/* PMR Alert */}
      <div className="bg-brand-accent-soft border-y border-brand-accent/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Accessibility
              className="size-5 text-brand-primary shrink-0"
              aria-hidden="true"
              strokeWidth={1.5}
            />
            <p className="text-sm font-medium text-neutral-700">
              <strong className="text-neutral-900">Accès PMR complet</strong> —
              Notre cabinet est entièrement accessible aux personnes à mobilité
              réduite : entrée de plain-pied, ascenseur, sanitaires adaptés.
            </p>
          </div>
        </div>
      </div>

      {/* Main info grid */}
      <section
        aria-labelledby="infos-grid-heading"
        className="py-16 md:py-24 bg-white"
      >
        <h2 id="infos-grid-heading" className="sr-only">
          Informations pratiques détaillées
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Address card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <MapPin
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Adresse
              </h3>
              <address className="not-italic text-neutral-700 text-sm leading-relaxed">
                <strong className="text-neutral-900">
                  Defacqz Medical Center 125
                </strong>
                <br />
                Rue Defacqz 125
                <br />
                1060 Saint-Gilles
                <br />
                Bruxelles, Belgique
              </address>
              <a
                href="https://maps.google.com/?q=Rue+Defacqz+125+1060+Saint-Gilles+Bruxelles"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Ouvrir dans Google Maps
                <svg
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Hours card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <Clock
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Horaires d&apos;ouverture
              </h3>
              <table className="w-full text-sm" aria-label="Horaires du cabinet">
                <tbody>
                  {horaires.map(({ jour, heures }) => {
                    const isClosed = heures === "Fermé";
                    return (
                      <tr key={jour} className="border-b border-neutral-100 last:border-0">
                        <td className="py-1.5 font-medium text-neutral-900">
                          {jour}
                        </td>
                        <td
                          className={`py-1.5 text-right ${
                            isClosed ? "text-neutral-400" : "text-neutral-700"
                          }`}
                        >
                          {heures}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-neutral-400">
                Consultations uniquement sur rendez-vous
              </p>
            </div>

            {/* PMR card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <Accessibility
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Accessibilité PMR
              </h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Entrée de plain-pied sans marche
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Ascenseur accessible aux fauteuils roulants
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Sanitaires adaptés PMR
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Couloirs larges (≥ 90 cm)
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Places de parking PMR à proximité
                </li>
              </ul>
            </div>

            {/* Transport card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <Bus
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Transports en commun
              </h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li>
                  <p className="font-semibold text-neutral-900">Tram</p>
                  <p>Lignes 81, 97 — Arrêt Defacqz (2 min à pied)</p>
                </li>
                <li>
                  <p className="font-semibold text-neutral-900">Bus STIB</p>
                  <p>Lignes 54, 60 — Arrêt Hôtel des Monnaies (5 min à pied)</p>
                </li>
                <li>
                  <p className="font-semibold text-neutral-900">Métro</p>
                  <p>
                    Ligne 2/6 — Station Porte de Hal (10 min à pied) ou Horta
                    (12 min à pied)
                  </p>
                </li>
              </ul>
            </div>

            {/* Parking card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <Car
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Parking & voiture
              </h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Stationnement en voirie rue Defacqz (zone bleue)
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Parking Q-Park Hôtel des Monnaies (300 m)
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-primary"
                    aria-hidden="true"
                  />
                  Places PMR réservées rue Defacqz
                </li>
              </ul>
            </div>

            {/* Contact card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                <Phone
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                Contact & rendez-vous
              </h3>
              <div className="space-y-3 text-sm text-neutral-700">
                <div>
                  <p className="font-semibold text-neutral-900">Téléphone</p>
                  <a
                    href="tel:+3225551234"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    02/555.12.34
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    Rendez-vous en ligne
                  </p>
                  <Link
                    href="/contact"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    Via notre formulaire de contact
                  </Link>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Doctoranytime</p>
                  <a
                    href="https://www.doctoranytime.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    Réserver via Doctoranytime
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder (consent-aware) */}
      <section
        aria-labelledby="map-heading"
        className="py-12 bg-neutral-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="map-heading"
            className="font-heading text-xl font-semibold text-neutral-900 mb-6"
          >
            Plan d&apos;accès
          </h2>
          <GoogleMapsEmbed height={400} />
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-pratiques-heading"
        className="py-16 md:py-24 bg-white"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-pratiques-heading"
            className="font-heading text-neutral-900 mb-8"
          >
            Questions pratiques
          </h2>
          <Accordion>
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-pratiques-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="info-cta-heading"
        className="py-16 bg-brand-primary"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="info-cta-heading"
            className="font-heading text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Prêt à nous rendre visite ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Prenez rendez-vous en ligne — réponse sous 24 à 48 heures ouvrées.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-primary shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Calendar className="size-5" aria-hidden="true" />
            Demander un rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
