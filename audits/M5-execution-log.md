# M5 Execution Log — SEO & Performance

**Phase:** M5  
**Branch:** phase/M5-seo-performance  
**Date:** 2026-05-15  
**Status:** COMPLETE  
**Build:** ✅ PASS (next build + tsc --noEmit + eslint 0 warnings)

---

## Pre-execution Notes

- M4 was not merged to master before M5 started. Performed squash merge of `phase/M4-formulaire-contact` → master before creating M5 branch.
- vM4 tag already existed (created on M4 branch tip).
- LSP errors in IDE are false positives (path alias resolution issue in editor, not in compiler).

---

## Task 1 — P0 Phone Number Fix (trivial)

**Commit:** `686fb13`  
**Files:** `lib/constants.ts` (new), `components/layout/Footer.tsx`, `components/sections/CTAFinale.tsx`, `app/contact/page.tsx`  
**Agent:** Direct write  

Created `lib/constants.ts` as single source of truth for:
- `CONTACT.phoneE164` = `+3225390000`
- `CONTACT.phoneDisplay` = `02 539 00 00`
- `CONTACT.phoneIntl` = `+32 2 539 00 00`
- `CONTACT.doctoranytimeUrl`
- `SITE.*` constants

Fixed: Footer had `+32 2 539 00 00`, CTAFinale had `tel:+3225551234` (wrong!), contact sidebar had `02/555.12.34` (wrong!). All now consume from constants.

---

## Task 2 — StatsBar Fix (trivial)

**Commit:** `98a74a7`  
**Files:** `components/sections/StatsBar.tsx`  
**Agent:** Direct edit  

Replaced `Star` icon + `4,6/5` stat with `MessageCircle` icon + `48h` / "Réponse sous 48h ouvrées". Eliminates duplicate rating signal already in Hero.

---

## Task 3 — PourquoiNous Numbered Layout (easy)

**Commit:** `98a74a7`  
**Files:** `components/sections/PourquoiNous.tsx`  
**Agent:** Direct write  

Replaced 3-column card grid (icon boxes, borders) with numbered large-type layout:
- Large number (01/02/03) in `brand-accent` color, `clamp(3rem, 6vw, 5rem)`
- Heading in Fraunces 2xl
- Body text below
- No card borders, no icon boxes

---

## Task 4 — Doctoranytime CTA (easy)

**Commit:** `98a74a7`  
**Files:** `components/sections/Hero.tsx`, `components/layout/Navbar.tsx`  
**Agent:** Direct edit  

Added tertiary Doctoranytime link:
- Hero: below primary CTAs, small text with ExternalLink icon
- Navbar desktop: secondary link before primary CTA button
- Navbar mobile: below "Prendre rendez-vous" in mobile menu

---

## Task 5 — Dynamic OG Route + Analytics (medium)

**Commit:** `c940935`  
**Files:** `app/og/route.tsx` (new), `app/layout.tsx`, all page.tsx files  
**Agent:** Direct write  

Created `app/og/route.tsx` using Next.js `ImageResponse` (edge runtime):
- Route: `/og?page=<slug>`
- Supports: home, specialites, equipe, informations-pratiques, contact, mentions-legales, politique-confidentialite
- 1200×630, brand colors, DMC 125 branding
- All 7 pages updated to use `/og?page=X` instead of static `/og/*.png`
- Added `@vercel/analytics` + `@vercel/speed-insights` to layout (already in package.json)
- Added global OG metadata to root layout

---

## Task 6 — MedicalSpecialty Schemas + Sitemap (medium)

**Commit:** `a269baf`  
**Files:** `app/specialites/page.tsx`, `app/contact/page.tsx`, `next-sitemap.config.js`  
**Agent:** Direct edit  

- Replaced single `MedicalOrganization` schema with 4 individual `MedicalSpecialty` schemas (one per anchor: épilepsie, céphalées, sclérose-en-plaques, troubles-du-sommeil)
- Added `BreadcrumbList` to `/contact` (was missing; /specialites, /equipe, /informations-pratiques already had it)
- Updated `next-sitemap.config.js` with explicit route priorities:
  - `/` → priority 1.0, monthly
  - Inner pages → priority 0.8, monthly
  - Legal pages → priority 0.3, yearly

---

## Task 7 — GSAP ScrollTrigger + Lint Clean (medium)

**Commit:** `f4a718c`  
**Files:** `components/sections/PourquoiNous.tsx`, `components/sections/Testimonials.tsx`, `components/sections/Hero.tsx`, `app/og/route.tsx`  
**Agent:** Direct write  

- `PourquoiNous`: converted to `"use client"`, added ScrollTrigger stagger animation (opacity + y, `start: "top 75%"`, `once: true`)
- `Testimonials`: converted to `"use client"`, added ScrollTrigger fade-in (opacity + y, `start: "top 80%"`, `once: true`)
- Both respect `prefers-reduced-motion`
- `Hero.tsx`: updated gsap import to `@/lib/gsap` (tree-shaking)
- Fixed 3 ESLint warnings (unused vars): `BASE_URL` in og/route.tsx, `ScrollTrigger` in PourquoiNous + Testimonials
- Final lint: 0 errors, 0 warnings

---

## Build Verification

```
✓ Compiled successfully in 9.2s
✓ TypeScript: 0 errors
✓ ESLint: 0 errors, 0 warnings
✓ next-sitemap: 1 sitemap generated
✓ All 10 routes built (9 static + 1 dynamic /og)
```

---

## Telemetry

- cascade_max_level: 1 (all tasks direct)
- pii_sanitization_calls: 0
- subagent_dispatches: 0
- direct_writes_by_executor: 7 tasks × direct

---

## Issues Encountered

1. **M4 not merged to master** — squash merged before creating M5 branch. vM4 tag already existed on M4 branch tip.
2. **LSP false positives** — IDE path alias resolution errors; compiler (tsc) reports 0 errors.
3. **3 ESLint warnings** — fixed before final commit (unused vars from import cleanup).
