# Technical Decisions — Defacqz Medical Center 125

This document records key architectural and technical decisions made during the Hermes build pipeline (M1–M7).

---

## D1 — @base-ui/react for Accordion (M3)

**Decision:** Use `@base-ui/react` (Radix successor) instead of shadcn/ui Accordion.

**Rationale:**
- shadcn/ui Accordion relies on `@radix-ui/react-accordion` which had peer dependency conflicts with React 19.
- `@base-ui/react` is the official Radix successor, built for React 19, with better accessibility primitives.
- Provides unstyled, fully accessible accordion with keyboard navigation out of the box.

**Trade-offs:**
- Less community documentation than Radix/shadcn.
- Required custom styling (Tailwind classes applied directly).

---

## D2 — Lenis for smooth scroll (M3)

**Decision:** Use `lenis` (v1.3.x) for smooth scrolling instead of CSS `scroll-behavior: smooth`.

**Rationale:**
- CSS smooth scroll doesn't work well with fixed headers and anchor navigation.
- Lenis provides physics-based easing, better cross-browser support, and integrates with GSAP.
- The `SmoothScroll` wrapper component isolates the Lenis instance.

**Trade-offs:**
- Adds ~15KB to bundle.
- Requires `"use client"` wrapper.

---

## D3 — GSAP for hero animations (M3)

**Decision:** Use GSAP (free tier) for hero text animations instead of Framer Motion.

**Rationale:**
- GSAP provides `SplitType` integration for character-level text animations.
- More performant than Framer Motion for timeline-based animations.
- Framer Motion is still used for micro-interactions (form fields, modals) where its React integration is superior.

**Trade-offs:**
- Two animation libraries in the bundle (GSAP + Framer Motion).
- GSAP free tier: no ScrollTrigger commercial use restrictions apply here (medical site, not SaaS).

---

## D4 — Resend for transactional email (M4)

**Decision:** Use Resend as the email provider for the contact form Server Action.

**Rationale:**
- Native Next.js/React integration with TypeScript SDK.
- Generous free tier (3,000 emails/month).
- Simple API, no SMTP configuration needed.
- Supports custom sender domains (defacqz-medical.be).

**Trade-offs:**
- Requires domain verification in Resend dashboard before go-live.
- No rate limiting in MVP (documented as TODO in actions.ts).

---

## D5 — Dynamic OG images via /og/*.png (M5)

**Decision:** Use static pre-generated OG images per page instead of Next.js dynamic OG generation (`@vercel/og`).

**Rationale:**
- Static OG images are simpler, faster, and don't require Edge Runtime.
- Medical site content is stable — no need for dynamic generation.
- Avoids `@vercel/og` bundle size overhead.

**Trade-offs:**
- OG images must be manually updated if page titles change.
- Placeholder images used during development (to be replaced with real designs).

---

## D6 — next-sitemap for sitemap generation (M5)

**Decision:** Use `next-sitemap` package (postbuild script) instead of Next.js built-in sitemap.

**Rationale:**
- Next.js built-in sitemap requires `app/sitemap.ts` which doesn't support all configuration options.
- `next-sitemap` provides more control over priority, changefreq, and exclusions.
- Runs as a postbuild script, generating `public/sitemap.xml` automatically.

**Trade-offs:**
- Extra dependency.
- Sitemap is static (generated at build time), not dynamic.

---

## D7 — 3-layer noindex strategy (M6)

**Decision:** Implement noindex at 3 levels: robots.txt, X-Robots-Tag header, and metadata.

**Rationale:**
- Belt-and-suspenders approach to prevent accidental indexing during development/staging.
- robots.txt: respected by all major crawlers.
- X-Robots-Tag: respected by Google even without robots.txt.
- metadata robots: Next.js native, generates `<meta name="robots">` tag.

**Pre-launch action:** All 3 must be flipped to allow indexing. See DEPLOYMENT.md.

---

## D8 — localStorage for cookie consent (M6)

**Decision:** Store cookie consent in `localStorage` under key `hermes-consent-defacqz-medical-center`.

**Rationale:**
- Simpler than cookie-based storage for a static site.
- No server-side cookie parsing needed.
- Consent is per-device, which is acceptable for RGPD compliance.

**Trade-offs:**
- Consent is lost if user clears localStorage.
- Not shared across subdomains (acceptable for single-domain site).

---

## D9 — startTransition for setState in useEffect (M7)

**Decision:** Wrap `setState` calls inside `useEffect` bodies with `startTransition()`.

**Rationale:**
- ESLint rule `react-hooks/set-state-in-effect` flags direct `setState` calls in effects as potential performance issues.
- `startTransition` marks the state update as non-urgent, preventing cascading renders.
- Applied to `CookieBanner` (visibility check) and `ConsentAnalytics` (consent check).

---

## D10 — npm audit: postcss vulnerability (M7)

**Decision:** Accept the moderate postcss vulnerability in Next.js 16's internal dependency.

**Rationale:**
- The vulnerability (GHSA-qx2v-qp2m-jg93) is in Next.js's internal postcss, not in user-facing code.
- `npm audit fix --force` would downgrade Next.js to v9.3.3 — a breaking change.
- The XSS vector requires an attacker to control CSS input, which is not possible in this static site.
- Will be resolved when Next.js releases a patch (tracked upstream).

---

*Last updated: 2026-05-15 — Phase M7*
