"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const differentiators = [
  {
    number: "01",
    title: "Proximité & accessibilité",
    description:
      "Situé au cœur de Saint-Gilles, notre cabinet est facilement accessible en transports en commun et entièrement adapté aux personnes à mobilité réduite (PMR). Pas de déplacement en périphérie pour des soins spécialisés.",
  },
  {
    number: "02",
    title: "Expertise reconnue",
    description:
      "Notre équipe de spécialistes en neurosciences bénéficie d'une formation universitaire de haut niveau et d'une expérience clinique solide. Note Google 4,6/5 sur 28 avis — la confiance de nos patients parle pour nous.",
  },
  {
    number: "03",
    title: "Suivi personnalisé",
    description:
      "Chaque patient est unique. Nous prenons le temps d'écouter, d'expliquer et de construire avec vous un plan de soins adapté à votre situation. Continuité de suivi garantie avec votre spécialiste référent.",
  },
] as const;

export function PourquoiNous() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll("[data-differentiator]");

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pourquoi-nous-heading"
      className="py-16 md:py-24 bg-neutral-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
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

        {/* Numbered differentiators */}
        <ul className="grid gap-12 md:grid-cols-3">
          {differentiators.map(({ number, title, description }) => (
            <li key={number} data-differentiator className="flex flex-col gap-4">
              {/* Large number */}
              <span
                className="font-heading font-bold text-brand-accent leading-none select-none"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                aria-hidden="true"
              >
                {number}
              </span>
              {/* Heading */}
              <h3
                className="font-heading text-2xl font-semibold text-neutral-900 leading-tight"
              >
                {title}
              </h3>
              {/* Body */}
              <p className="text-neutral-700 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
