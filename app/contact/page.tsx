import type { Metadata } from "next";
import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

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
        url: "/og?page=contact",
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
    images: ["/og?page=contact"],
  },
};

const contactInfoItems = [
  {
    icon: Phone,
    title: "Téléphone",
    content: (
      <a
        href={`tel:${CONTACT.phoneE164}`}
        className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        {CONTACT.phoneDisplay}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: (
      <address className="not-italic text-neutral-700">
        Rue Defacqz 125
        <br />
        1060 Saint-Gilles, Bruxelles
      </address>
    ),
  },
  {
    icon: Clock,
    title: "Horaires",
    content: (
      <p className="text-neutral-700">
        Lun–Jeu : 08h30–17h00
        <br />
        Vendredi : 08h30–16h00
      </p>
    ),
  },
  {
    icon: Calendar,
    title: "Doctoranytime",
    content: (
      <a
        href={CONTACT.doctoranytimeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        Réserver en ligne →
      </a>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="contact-heading"
        className="bg-neutral-50 py-16 md:py-24 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
              Prise de rendez-vous
            </p>
            <h1
              id="contact-heading"
              className="text-neutral-900 mb-6"
            >
              Demandez votre rendez-vous en moins de 2 minutes
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Remplissez le formulaire ci-dessous. Notre équipe vous contactera
              dans les <strong>24 à 48 heures ouvrées</strong> pour confirmer
              votre rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* Main content: form + sidebar */}
      <section
        aria-labelledby="form-heading"
        className="py-16 md:py-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <h2
                id="form-heading"
                className="font-heading text-xl font-semibold text-neutral-900 mb-8"
              >
                Formulaire de contact
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar — 1/3 */}
            <aside aria-label="Informations de contact">
              <div className="sticky top-24 space-y-6">
                <h2 className="font-heading text-xl font-semibold text-neutral-900">
                  Nous contacter
                </h2>

                <div className="space-y-4">
                  {contactInfoItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent-soft">
                        <item.icon
                          className="size-5 text-brand-primary"
                          aria-hidden="true"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 mb-1">
                          {item.title}
                        </p>
                        <div className="text-sm">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* RGPD note */}
                <div className="rounded-xl bg-brand-accent-soft p-4 text-sm text-neutral-700">
                  <p className="font-semibold text-neutral-900 mb-1">
                    Protection de vos données
                  </p>
                  <p className="leading-relaxed">
                    Vos informations sont traitées conformément au RGPD et ne
                    sont jamais partagées avec des tiers. Consultez notre{" "}
                    <a
                      href="/politique-confidentialite"
                      className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-hover"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
