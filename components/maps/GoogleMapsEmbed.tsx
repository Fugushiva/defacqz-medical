"use client";

import { useState, useCallback } from "react";
import { MapPin, ExternalLink } from "lucide-react";

// Consent key stored in localStorage — scoped to this project
const CONSENT_KEY = "hermes-consent-defacqz-medical-center";

// Google Maps embed URL for Rue Defacqz 125, 1060 Saint-Gilles, Bruxelles
// Using the embed API (no API key required for basic embed)
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.0!2d4.3469!3d50.8320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4b3b3b3b3b3%3A0x0!2sRue+Defacqz+125%2C+1060+Saint-Gilles!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe";

const MAPS_LINK =
  "https://maps.google.com/?q=Rue+Defacqz+125+1060+Saint-Gilles+Bruxelles";

/** Read consent from localStorage — returns null during SSR */
function readConsent(): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "true";
  } catch {
    return false;
  }
}

interface GoogleMapsEmbedProps {
  /** Height of the map container. Default: 400px */
  height?: number | string;
  /** Additional CSS classes for the container */
  className?: string;
}

export function GoogleMapsEmbed({
  height = 400,
  className = "",
}: GoogleMapsEmbedProps) {
  // Lazy initializer reads localStorage once on first render (client-only)
  const [hasConsent, setHasConsent] = useState<boolean | null>(readConsent);

  const grantConsent = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    setHasConsent(true);
  }, []);

  const revokeConsent = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // Ignore storage errors
    }
    setHasConsent(false);
  }, []);

  const containerStyle: React.CSSProperties = {
    height: typeof height === "number" ? `${height}px` : height,
  };

  // SSR / hydration: show placeholder until we know consent state
  if (hasConsent === null) {
    return (
      <div
        className={`w-full rounded-xl border border-neutral-200 bg-neutral-100 animate-pulse ${className}`}
        style={containerStyle}
        aria-hidden="true"
      />
    );
  }

  if (!hasConsent) {
    return (
      <div
        className={`w-full rounded-xl border border-neutral-200 bg-neutral-100 flex items-center justify-center ${className}`}
        style={containerStyle}
        role="region"
        aria-label="Carte de localisation — consentement requis"
      >
        <div className="text-center p-8 max-w-sm">
          <div className="flex size-14 items-center justify-center rounded-full bg-brand-accent-soft mx-auto mb-4">
            <MapPin
              className="size-7 text-brand-primary"
              aria-hidden="true"
              strokeWidth={1.5}
            />
          </div>

          <h3 className="font-heading text-base font-semibold text-neutral-900 mb-2">
            Carte interactive
          </h3>
          <p className="text-sm text-neutral-600 mb-1 font-medium">
            Rue Defacqz 125, 1060 Saint-Gilles
          </p>
          <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
            L&apos;affichage de la carte nécessite le chargement de Google Maps.
            En cliquant sur &laquo;&nbsp;Afficher la carte&nbsp;&raquo;, vous
            acceptez que Google puisse déposer des cookies fonctionnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={grantConsent}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Afficher la carte
            </button>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Ouvrir dans Maps
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-xl overflow-hidden border border-neutral-200 ${className}`}
      style={containerStyle}
    >
      <iframe
        src={MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation du Defacqz Medical Center 125 — Rue Defacqz 125, 1060 Saint-Gilles"
        aria-label="Carte Google Maps — Rue Defacqz 125, 1060 Saint-Gilles, Bruxelles"
      />
      <div className="flex justify-end px-3 py-1.5 bg-neutral-50 border-t border-neutral-200">
        <button
          onClick={revokeConsent}
          className="text-xs text-neutral-400 hover:text-neutral-600 underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          Retirer mon consentement
        </button>
      </div>
    </div>
  );
}
