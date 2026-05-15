import Link from "next/link";
import { Brain, Zap, Activity, Moon, ArrowRight } from "lucide-react";

const specialites = [
  {
    icon: Zap,
    slug: "epilepsie",
    title: "Épilepsie",
    description:
      "Diagnostic et suivi des épilepsies de l'adulte. Bilan EEG, ajustement thérapeutique, accompagnement au long cours.",
    href: "/specialites#epilepsie",
  },
  {
    icon: Brain,
    slug: "cephalees",
    title: "Céphalées & Migraines",
    description:
      "Prise en charge des migraines chroniques, céphalées de tension et algies vasculaires de la face.",
    href: "/specialites#cephalees",
  },
  {
    icon: Activity,
    slug: "sclerose-en-plaques",
    title: "Sclérose en plaques",
    description:
      "Suivi neurologique de la SEP, traitement de fond, gestion des poussées et rééducation fonctionnelle.",
    href: "/specialites#sclerose-en-plaques",
  },
  {
    icon: Moon,
    slug: "troubles-du-sommeil",
    title: "Troubles du sommeil",
    description:
      "Évaluation et traitement des insomnies, hypersomnies, syndrome des jambes sans repos et parasomnies.",
    href: "/specialites#troubles-du-sommeil",
  },
] as const;

export function SpecialitesPreview() {
  return (
    <section
      aria-labelledby="specialites-preview-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
            Nos spécialités
          </p>
          <h2
            id="specialites-preview-heading"
            className="font-heading text-neutral-900 mb-4"
          >
            Quatre expertises, un seul lieu
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Notre équipe de spécialistes en neurosciences vous accompagne pour
            le diagnostic et le suivi de vos pathologies neurologiques.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {specialites.map(({ icon: Icon, title, description, href }) => (
            <li key={title}>
              <Link
                href={href}
                className="group flex flex-col h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-brand-accent-soft">
                  <Icon
                    className="size-6 text-brand-primary"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">
                  {title}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed flex-1">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/specialites"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Voir toutes nos spécialités
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
