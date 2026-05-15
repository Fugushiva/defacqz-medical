import { CalendarCheck, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Prise de rendez-vous",
    description:
      "Remplissez notre formulaire en ligne ou appelez le secrétariat. Réponse sous 24–48h ouvrées. Vous pouvez préciser votre spécialité souhaitée et vos disponibilités.",
  },
  {
    icon: Stethoscope,
    step: "02",
    title: "Consultation",
    description:
      "Rencontrez votre spécialiste dans notre cabinet PMR de Saint-Gilles. Anamnèse complète, examen clinique, prescription d'examens complémentaires si nécessaire.",
  },
  {
    icon: HeartPulse,
    step: "03",
    title: "Suivi personnalisé",
    description:
      "Un plan de soins adapté à votre situation est établi. Consultations de suivi planifiées, coordination avec votre médecin généraliste et les autres spécialistes.",
  },
] as const;

export function Timeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="py-16 md:py-24 bg-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
            Votre parcours
          </p>
          <h2
            id="timeline-heading"
            className="font-heading text-neutral-900 mb-4"
          >
            De la prise de contact au suivi
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Un parcours simple et transparent, pensé pour vous accompagner à
            chaque étape.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative" aria-label="Étapes du parcours patient">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-neutral-200 md:block md:left-1/2 md:top-12 md:h-[calc(100%-6rem)] md:-translate-x-1/2"
          />

          <div className="grid gap-8 md:gap-0 md:grid-cols-3">
            {steps.map(({ icon: Icon, step, title, description }, index) => (
              <li
                key={step}
                className={`relative flex gap-4 md:flex-col md:items-center md:text-center md:px-8 ${
                  index % 2 === 0 ? "md:pt-0" : "md:pt-16"
                }`}
              >
                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary shadow-md">
                    <Icon
                      className="size-7 text-white"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 md:mt-6">
                  <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
