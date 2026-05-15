"use client";

import { useEffect, useState, useCallback } from "react";

const CONSENT_KEY = "hermes-consent-defacqz-medical-center";

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean): ConsentState {
  const consent: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  return consent;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const consent = loadConsent();
    if (!consent) {
      setVisible(true);
    }
  }, []);

  // Expose a global function to re-open the banner from the footer
  useEffect(() => {
    const handler = () => {
      setCustomizing(false);
      setVisible(true);
    };
    window.addEventListener("open-cookie-banner", handler);
    return () => window.removeEventListener("open-cookie-banner", handler);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(true, true);
    setVisible(false);
    // Reload to apply analytics consent
    window.location.reload();
  }, []);

  const rejectAll = useCallback(() => {
    saveConsent(false, false);
    setVisible(false);
  }, []);

  const saveCustom = useCallback(() => {
    saveConsent(analyticsConsent, marketingConsent);
    setVisible(false);
    if (analyticsConsent) {
      window.location.reload();
    }
  }, [analyticsConsent, marketingConsent]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-neutral-200 shadow-2xl"
    >
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
        {!customizing ? (
          /* Default banner */
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-neutral-900 mb-1">
                Ce site utilise des cookies
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Nous utilisons des cookies nécessaires au fonctionnement du
                site et, avec votre consentement, des cookies analytiques
                anonymisés (Vercel Analytics). Aucun cookie marketing.{" "}
                <a
                  href="/politique-confidentialite"
                  className="underline hover:text-brand-primary"
                >
                  En savoir plus
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Personnaliser
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Tout accepter
              </button>
            </div>
          </div>
        ) : (
          /* Customization panel */
          <div className="space-y-4">
            <p className="text-sm font-semibold text-neutral-900">
              Personnaliser mes préférences
            </p>

            {/* Necessary — always on */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-md">
              <div className="mt-0.5">
                <input
                  type="checkbox"
                  id="cookie-necessary"
                  checked
                  disabled
                  aria-disabled="true"
                  className="h-4 w-4 rounded border-neutral-300 text-brand-primary cursor-not-allowed opacity-60"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cookie-necessary"
                  className="text-sm font-medium text-neutral-900 cursor-default"
                >
                  Nécessaires{" "}
                  <span className="text-xs font-normal text-neutral-500">
                    (toujours actifs)
                  </span>
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Fonctionnement du site, mémorisation de vos préférences.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-md">
              <div className="mt-0.5">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="h-4 w-4 rounded border-neutral-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cookie-analytics"
                  className="text-sm font-medium text-neutral-900 cursor-pointer"
                >
                  Analytiques
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Vercel Analytics — mesure d&apos;audience anonymisée. Aucune
                  donnée personnelle collectée.
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-md">
              <div className="mt-0.5">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="h-4 w-4 rounded border-neutral-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cookie-marketing"
                  className="text-sm font-medium text-neutral-900 cursor-pointer"
                >
                  Marketing
                </label>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Aucun outil marketing actuellement.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={() => setCustomizing(false)}
                className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Retour
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="px-4 py-2 text-sm font-medium bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Enregistrer mes choix
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
