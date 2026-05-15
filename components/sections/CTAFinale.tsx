import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function CTAFinale() {
  return (
    <section
      aria-labelledby="cta-finale-heading"
      className="py-16 md:py-24 bg-brand-primary"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-finale-heading"
          className="font-heading text-white mb-4"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Prêt à prendre rendez-vous ?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Notre secrétariat répond à vos demandes sous 24 à 48 heures ouvrées.
          Consultations disponibles du lundi au vendredi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-primary shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Calendar className="size-5" aria-hidden="true" />
            Demander un rendez-vous
          </Link>
          <a
            href={`tel:${CONTACT.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone className="size-5" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <p className="mt-8 text-white/60 text-sm">
          Rue Defacqz 125, 1060 Saint-Gilles · Accès PMR · Lun–Ven
        </p>
      </div>
    </section>
  );
}
