import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "M.L.",
    name: "M. L.",
    specialty: "Suivi épilepsie",
    rating: 5,
    text: "Prise en charge rapide et très professionnelle. Le Dr Oulad Ben Taib a pris le temps d'expliquer mon diagnostic en détail et de répondre à toutes mes questions. Je recommande vivement ce cabinet.",
  },
  {
    initials: "S.D.",
    name: "S. D.",
    specialty: "Consultation migraines",
    rating: 5,
    text: "Enfin un spécialiste qui écoute vraiment ! Après des années de migraines invalidantes, j'ai trouvé un traitement adapté. L'accueil est chaleureux et le cabinet est très bien situé.",
  },
  {
    initials: "P.V.",
    name: "P. V.",
    specialty: "Suivi SEP",
    rating: 5,
    text: "Cabinet accessible PMR, ce qui est rare et précieux. Suivi rigoureux de ma sclérose en plaques avec des explications claires à chaque consultation. Très satisfait du niveau de soins.",
  },
] as const;

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
            Témoignages patients
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-neutral-900 mb-4"
          >
            Ce que disent nos patients
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            Note moyenne de{" "}
            <strong className="text-neutral-900">4,6/5</strong> sur Google
            basée sur 28 avis vérifiés.
          </p>
        </div>

        {/* Testimonials grid */}
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {testimonials.map(({ initials, name, specialty, rating, text }) => (
            <li
              key={name}
              className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
            >
              {/* Quote icon */}
              <Quote
                className="size-8 text-brand-accent"
                aria-hidden="true"
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div
                className="flex gap-0.5"
                aria-label={`Note : ${rating} étoiles sur 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`size-4 ${i < rating ? "text-brand-accent" : "text-neutral-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-neutral-700 leading-relaxed flex-1">
                <p>&ldquo;{text}&rdquo;</p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-2 border-t border-neutral-200">
                <div
                  className="flex size-10 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-semibold"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">
                    {name}
                  </p>
                  <p className="text-xs text-neutral-400">{specialty}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        {/* Google link */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/Defacqz+Medical+Center"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Voir tous les avis sur Google
            <svg
              className="size-4"
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
      </div>
    </section>
  );
}
