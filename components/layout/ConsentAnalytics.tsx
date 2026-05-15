"use client";

import { useEffect, useState, startTransition } from "react";
import { Analytics } from "@vercel/analytics/react";

const CONSENT_KEY = "hermes-consent-defacqz-medical-center";

interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function ConsentAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (raw) {
        const consent = JSON.parse(raw) as ConsentState;
        const enabled = consent.analytics === true;
        startTransition(() => setAnalyticsEnabled(enabled));
      }
    } catch {
      // No consent stored — analytics off by default
    }
  }, []);

  if (!analyticsEnabled) return null;

  return <Analytics />;
}
