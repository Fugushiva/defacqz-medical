import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Brain, Activity, Moon, ArrowRight, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
        url: "/og?page=specialites",
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
    images: ["/og?page=specialites"],
  },
};

const specialites = [
  {
    id: "epilepsie",
    icon: Zap,
    title: "Épilepsie",
    description:
      "L'épilepsie est une maladie neurologique chronique caractérisée par des crises récurrentes dues à une activité électrique anormale du cerveau. Notre équipe assure le diagnostic, le bilan étiologique et le suivi thérapeutique des épilepsies de l'adulte.",
    symptoms: [
      "Crises convulsives généralisées ou focales",
      "Absences et pertes de conscience brèves",
      "Automatismes gestuels ou verbaux",
      "Sensations anormales précédant les crises (aura)",
      "Confusion post-critique",
    ],
    approach:
      "Bilan EEG de surface et prolongé, IRM cérébrale dédiée épilepsie, ajustement des traitements antiépileptiques, éducation thérapeutique et accompagnement des restrictions d'activité.",
    faq: [
      {
        q: "Puis-je conduire si je suis épileptique ?",
        a: "La conduite automobile est soumise à des règles strictes en cas d'épilepsie. En Belgique, une période sans crise d'au moins 12 mois est généralement requise. Votre neurologue évaluera votre situation individuelle et vous guidera dans les démarches administratives auprès de la DGTR.",
      },
      {
        q: "Combien de temps dure un bilan épilepsie ?",
        a: "Un bilan complet comprend une consultation initiale (45–60 min), un EEG (30–45 min) et une IRM cérébrale (45 min). Ces examens peuvent être répartis sur plusieurs rendez-vous selon les disponibilités. Le résultat complet est généralement disponible sous 2 à 4 semaines.",
      },
    ],
  },
  {
    id: "cephalees",
    icon: Brain,
    title: "Céphalées & Migraines",
    description:
      "Les céphalées chroniques et les migraines sont parmi les motifs de consultation neurologique les plus fréquents. Notre approche combine diagnostic précis, traitement de crise et traitement de fond pour réduire significativement la fréquence et l'intensité des épisodes.",
    symptoms: [
      "Migraines avec ou sans aura",
      "Céphalées de tension chroniques",
      "Algies vasculaires de la face (cluster headache)",
      "Céphalées par abus médicamenteux",
      "Céphalées secondaires à investiguer",
    ],
    approach:
      "Agenda des céphalées, identification des facteurs déclenchants, traitement de crise adapté (triptans, AINS), traitement de fond (bêtabloquants, antiépileptiques, injections de toxine botulique), thérapies comportementales.",
    faq: [
      {
        q: "La migraine est-elle une maladie grave ?",
        a: "La migraine est une maladie neurologique chronique qui peut être très invalidante mais n'est généralement pas dangereuse en elle-même. Cependant, certains types de céphalées peuvent signaler une pathologie sous-jacente sérieuse. Une consultation neurologique permet d'établir un diagnostic précis et d'exclure les causes secondaires.",
      },
      {
        q: "Existe-t-il des traitements préventifs efficaces contre la migraine ?",
        a: "Oui, plusieurs traitements de fond ont prouvé leur efficacité : bêtabloquants (propranolol, métoprolol), antiépileptiques (valproate, topiramate), antidépresseurs tricycliques, et plus récemment les anticorps anti-CGRP (erenumab, fremanezumab). Le choix dépend de votre profil et de vos comorbidités.",
      },
    ],
  },
  {
    id: "sclerose-en-plaques",
    icon: Activity,
    title: "Sclérose en plaques",
    description:
      "La sclérose en plaques (SEP) est une maladie auto-immune du système nerveux central qui touche la myéline. Notre équipe assure le diagnostic, le suivi des poussées, l'initiation et la surveillance des traitements de fond, ainsi que la coordination avec les équipes de rééducation.",
    symptoms: [
      "Troubles visuels (névrite optique)",
      "Fatigue intense et invalidante",
      "Troubles de l'équilibre et de la coordination",
      "Troubles sensitifs (engourdissements, fourmillements)",
      "Troubles cognitifs et de la mémoire",
      "Troubles sphinctériens",
    ],
    approach:
      "IRM cérébrale et médullaire, ponction lombaire si nécessaire, initiation des traitements de fond (interférons, natalizumab, ocrelizumab), gestion des poussées par corticothérapie, coordination pluridisciplinaire (kinésithérapie, neuropsychologie, urologie).",
    faq: [
      {
        q: "La SEP est-elle héréditaire ?",
        a: "La SEP n'est pas une maladie héréditaire au sens strict, mais il existe une composante génétique. Le risque pour un enfant d'un parent atteint est d'environ 2–3%, contre 0,1% dans la population générale. Des facteurs environnementaux (vitamine D, tabac, infections virales) jouent également un rôle.",
      },
      {
        q: "Peut-on travailler avec une SEP ?",
        a: "La majorité des personnes atteintes de SEP peuvent maintenir une activité professionnelle, surtout avec un traitement de fond bien adapté. Des aménagements de poste peuvent être nécessaires. Notre équipe peut vous orienter vers les services sociaux et les associations de patients pour vous accompagner dans vos démarches.",
      },
    ],
  },
  {
    id: "troubles-du-sommeil",
    icon: Moon,
    title: "Troubles du sommeil",
    description:
      "Les troubles du sommeil affectent la qualité de vie et peuvent avoir des répercussions importantes sur la santé physique et mentale. Notre consultation spécialisée évalue et traite l'ensemble des pathologies du sommeil de l'adulte.",
    symptoms: [
      "Insomnie chronique (difficultés d'endormissement ou de maintien du sommeil)",
      "Hypersomnie et somnolence diurne excessive",
      "Syndrome des jambes sans repos",
      "Parasomnies (somnambulisme, terreurs nocturnes)",
      "Troubles du comportement en sommeil paradoxal",
      "Suspicion d'apnées du sommeil",
    ],
    approach:
      "Agenda du sommeil, actimétrie, polysomnographie si indiquée, thérapie cognitive et comportementale de l'insomnie (TCC-I), traitement médicamenteux ciblé, orientation vers un laboratoire du sommeil pour les cas complexes.",
    faq: [
      {
        q: "Quand consulter pour des troubles du sommeil ?",
        a: "Une consultation est recommandée si vos troubles du sommeil durent depuis plus de 3 mois, affectent votre fonctionnement diurne (fatigue, difficultés de concentration, irritabilité), ou si vous présentez des symptômes évocateurs d'apnées du sommeil (ronflements intenses, pauses respiratoires signalées par votre entourage, réveils en sursaut).",
      },
      {
        q: "La thérapie cognitive et comportementale est-elle plus efficace que les somnifères ?",
        a: "Oui, la TCC-I est recommandée en première intention pour l'insomnie chronique. Elle est plus efficace à long terme que les somnifères et sans effets secondaires. Elle agit sur les pensées et comportements qui entretiennent l'insomnie. Les somnifères peuvent être utiles à court terme mais ne traitent pas les causes sous-jacentes.",
      },
    ],
  },
] as const;

// Schema.org JSON-LD
function SpecialitesSchema() {
  const BASE_URL = "https://defacqz-medical.vercel.app";

  // Individual MedicalSpecialty schemas x4
  const medicalSpecialtySchemas = specialites.map((s) => ({
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "@id": `${BASE_URL}/specialites#${s.id}`,
    name: s.title,
    description: s.description,
    url: `${BASE_URL}/specialites#${s.id}`,
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: s.title,
    },
    availableService: {
      "@type": "MedicalTherapy",
      name: `Consultation ${s.title}`,
      provider: {
        "@type": "MedicalClinic",
        name: "Defacqz Medical Center 125",
        url: BASE_URL,
      },
    },
  }));

  // FAQPage schema
  const faqItems = specialites.flatMap((s) =>
    s.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  );

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Spécialités",
        item: `${BASE_URL}/specialites`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  return (
    <>
      {medicalSpecialtySchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function SpecialitesPage() {
  return (
    <>
      <SpecialitesSchema />

      {/* Hero */}
      <section
        aria-labelledby="specialites-h1"
        className="bg-neutral-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                Spécialités
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Nos spécialités
            </p>
            <h1
              id="specialites-h1"
              className="font-heading text-neutral-900 mb-6"
            >
              Quatre spécialités, un seul lieu pour vos soins en neurosciences
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Notre équipe de spécialistes vous accompagne pour le diagnostic et
              le suivi de vos pathologies neurologiques à Saint-Gilles.
            </p>

            {/* Anchor nav */}
            <nav aria-label="Navigation par spécialité">
              <ul className="flex flex-wrap gap-3">
                {specialites.map(({ id, title, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:border-brand-primary hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      <Icon className="size-4" aria-hidden="true" strokeWidth={1.5} />
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Specialties sections */}
      {specialites.map(
        ({ id, icon: Icon, title, description, symptoms, approach, faq }, index) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className={`py-16 md:py-24 scroll-mt-20 ${
              index % 2 === 0 ? "bg-white" : "bg-neutral-100"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                {/* Left: content */}
                <div>
                  <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-brand-accent-soft">
                    <Icon
                      className="size-7 text-brand-primary"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2
                    id={`${id}-heading`}
                    className="font-heading text-neutral-900 mb-4"
                  >
                    {title}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed mb-8">
                    {description}
                  </p>

                  {/* Symptoms */}
                  <div className="mb-8">
                    <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                      Symptômes pris en charge
                    </h3>
                    <ul className="space-y-2">
                      {symptoms.map((symptom) => (
                        <li
                          key={symptom}
                          className="flex items-start gap-3 text-neutral-700"
                        >
                          <span
                            className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-primary"
                            aria-hidden="true"
                          />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?specialite=${id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <Calendar className="size-4" aria-hidden="true" />
                    Prendre rendez-vous pour {title}
                  </Link>
                </div>

                {/* Right: approach + FAQ */}
                <div>
                  {/* Approach */}
                  <div className="rounded-xl bg-brand-accent-soft/50 border border-brand-accent/20 p-6 mb-6">
                    <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-3">
                      Notre approche
                    </h3>
                    <p className="text-neutral-700 leading-relaxed text-sm">
                      {approach}
                    </p>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
                      Questions fréquentes
                    </h3>
                    <Accordion>
                      {faq.map((item, i) => (
                        <AccordionItem key={i} value={`${id}-faq-${i}`}>
                          <AccordionTrigger>{item.q}</AccordionTrigger>
                          <AccordionContent>{item.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {/* Final CTA */}
      <section
        aria-labelledby="specialites-cta-heading"
        className="py-16 bg-brand-primary"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="specialites-cta-heading"
            className="font-heading text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Vous ne savez pas quelle spécialité vous concerne ?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Décrivez vos symptômes dans le formulaire — notre équipe vous
            orientera vers le bon spécialiste.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-primary shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
            Demander un rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
