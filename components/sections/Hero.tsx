"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-badge]", { opacity: 0, y: 16, duration: 0.5 })
        .from("[data-hero-h1]", { opacity: 0, y: 32, duration: 0.7 }, "-=0.2")
        .from("[data-hero-sub]", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
        .from(
          "[data-hero-cta]",
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        )
        .from("[data-hero-trust]", { opacity: 0, duration: 0.5 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90vh] items-center bg-neutral-50 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent-soft/30 pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            data-hero-badge
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent-soft border border-brand-accent/20 px-4 py-1.5 text-sm font-medium text-neutral-700 mb-8"
          >
            <span
              className="size-2 rounded-full bg-brand-accent"
              aria-hidden="true"
            />
            Cabinet de neurosciences · Saint-Gilles, Bruxelles
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            data-hero-h1
            className="font-heading text-neutral-900 leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 4.5rem)" }}
          >
            Neurologie de proximité
            <br />
            <span className="text-brand-primary">à Saint-Gilles</span>
          </h1>

          {/* Subtitle */}
          <p
            data-hero-sub
            className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-10 max-w-2xl"
          >
            Cabinet spécialisé en neurosciences cliniques. Consultations sur
            rendez-vous en neurochirurgie, neurologie, neuropsychologie et
            psychiatrie.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              data-hero-cta
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <Calendar className="size-5" aria-hidden="true" />
              Prendre rendez-vous
            </Link>
            <Link
              data-hero-cta
              href="/specialites"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3.5 text-base font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Découvrir nos spécialités
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Tertiary CTA — Doctoranytime */}
          <div data-hero-cta className="mt-4">
            <a
              href={CONTACT.doctoranytimeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-brand-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Ou réservez directement sur Doctoranytime
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Trust signal */}
          <div
            data-hero-trust
            className="mt-10 flex items-center gap-3 text-sm text-neutral-400"
          >
            <div className="flex" aria-label="Note 4,6 sur 5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`size-4 ${i <= 4 ? "text-brand-accent" : "text-neutral-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>
              <strong className="text-neutral-700 font-semibold">4,6/5</strong>{" "}
              sur Google · 28 avis patients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
