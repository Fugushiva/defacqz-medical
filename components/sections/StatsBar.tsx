import { Accessibility, MessageCircle, Stethoscope, Clock } from "lucide-react";

const stats = [
  {
    icon: Stethoscope,
    value: "4",
    label: "spécialités en neurosciences",
  },
  {
    icon: MessageCircle,
    value: "48h",
    label: "Réponse sous 48h ouvrées",
  },
  {
    icon: Accessibility,
    value: "PMR",
    label: "Accès entièrement adapté",
  },
  {
    icon: Clock,
    value: "Lun–Ven",
    label: "Consultations sur rendez-vous",
  },
] as const;

export function StatsBar() {
  return (
    <section
      aria-label="Chiffres clés du cabinet"
      className="bg-brand-primary py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <Icon
                className="size-7 text-brand-accent"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <span className="text-2xl font-heading font-bold text-white">
                {value}
              </span>
              <span className="text-sm text-white/70 leading-snug">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
