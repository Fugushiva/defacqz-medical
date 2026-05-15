import { MapPin, Award, HeartHandshake } from "lucide-react";

const arguments_ = [
  {
    icon: MapPin,
    title: "Proximité & accessibilité",
    description:
      "Situé au cœur de Saint-Gilles, notre cabinet est facilement accessible en transports en commun et entièrement adapté aux personnes à mobilité réduite (PMR). Pas de déplacement en périphérie pour des soins spécialisés.",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Notre équipe de spécialistes en neurosciences bénéficie d'une formation universitaire de haut niveau et d'une expérience clinique solide. Note Google 4,6/5 sur 28 avis — la confiance de nos patients parle pour nous.",
  },
  {
    icon: HeartHandshake,
    title: "Suivi personnalisé",
    description:
      "Chaque patient est unique. Nous prenons le temps d'écouter, d'expliquer et de construire avec vous un plan de soins adapté à votre situation. Continuité de suivi garantie avec votre spécialiste référent.",
  },
] as const;

export function PourquoiNous() {
  return (
    <section
      aria-labelledby="pourquoi-nous-heading"
      className="py-16 md:py-24 bg-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
            Pourquoi nous choisir
          </p>
          <h2
            id="pourquoi-nous-heading"
            className="font-heading text-neutral-900 mb-4"
          >
            Ce qui nous distingue
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Le Defacqz Medical Center 125 est le seul cabinet de Saint-Gilles à
            nommer ses spécialistes en neurosciences dans son écosystème
            numérique.
          </p>
        </div>

        {/* Arguments */}
        <ul className="grid gap-8 md:grid-cols-3">
          {arguments_.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-sm"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-primary/10">
                <Icon
                  className="size-6 text-brand-primary"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
