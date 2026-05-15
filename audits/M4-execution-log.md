# M4 Execution Log — Formulaire Contact

**Date:** 2026-05-15  
**Branch:** phase/M4-formulaire-contact  
**HEAD:** 36f19a4  
**Executor:** claude-sonnet-4-6 (hermes-phase-executor)

---

## Pre-flight

- **Git state:** Clean (master at c3abddb after squash-merging M3)
- **M3 merge:** M3 was on branch `phase/M3-pages-core` — squash-merged to master as `c3abddb` before creating M4 branch
- **vM3 tag:** Already existed on M3 branch tip (cb00f6d), not re-tagged on master

---

## Task 1 — lib/env.ts + lib/contact-schema.ts

**Complexity:** easy  
**Agent:** direct write  
**Files written:**
- `lib/env.ts` — replaced stub with Zod validation; dev-mode graceful fallback; production throws on missing vars
- `lib/contact-schema.ts` — shared Zod schema (contactFormSchema), ContactFormData type, MOTIF_LABELS, MOTIF_OPTIONS

**Commit:** `1761e04`  
**Validation:** `npx tsc --noEmit` ✅  

**Notes:** Schema extracted to `lib/contact-schema.ts` (not in `actions.ts`) because Next.js `"use server"` files can only export async functions — exporting a Zod schema object would cause a build error.

---

## Task 2 — app/contact/actions.ts (Server Action)

**Complexity:** medium  
**Agent:** direct write  
**Files written:**
- `app/contact/actions.ts` — `sendContactForm` Server Action; validates with Zod; sends via Resend SDK; graceful dev-mode fallback when `RESEND_API_KEY` is empty; HTML email template with escapeHtml sanitization

**Commit:** `97fab4c`  
**Validation:** `npx tsc --noEmit` ✅, `npm run lint` ✅  

**Notes:**
- Rate limiting: TODO comment left for Upstash Ratelimit (MVP scope)
- `from:` domain `defacqz-medical.be` must be verified in Resend before production deploy

---

## Task 3 — components/forms/ContactForm.tsx + app/contact/page.tsx + layout.tsx

**Complexity:** medium-code  
**Agent:** direct write  
**Files written:**
- `components/forms/ContactForm.tsx` — react-hook-form + zodResolver; 7 fields (prenom, nom, telephone, email, motif select, message textarea, consentement checkbox); accessible error messages with aria-describedby + aria-invalid + aria-live; loading state on submit; sonner toast on success/error; ConfirmationModal (custom dialog, no shadcn Dialog dependency needed); framer-motion fadeUp stagger
- `app/contact/page.tsx` — full page with hero + 2/3 form + 1/3 sidebar (phone, address, hours, Doctoranytime, RGPD note)
- `app/layout.tsx` — added `<Toaster position="bottom-right" richColors closeButton />`

**Commit:** `b2de259`  
**Validation:** `npx tsc --noEmit` ✅, `npm run lint` ✅  

**ESLint fix required:**
- `jsx-a11y/no-autofocus` on modal close button → removed `autoFocus` prop

---

## Task 4 — components/maps/GoogleMapsEmbed.tsx + informations-pratiques update

**Complexity:** medium  
**Agent:** direct write  
**Files written:**
- `components/maps/GoogleMapsEmbed.tsx` — consent-aware component; reads `hermes-consent-defacqz-medical-center` from localStorage via lazy useState initializer (avoids useEffect setState lint error); shows placeholder with "Afficher la carte" + "Ouvrir dans Maps" buttons; loads iframe on consent; "Retirer mon consentement" button; SSR-safe (returns null during server render via `typeof window === "undefined"` guard)
- `app/informations-pratiques/page.tsx` — replaced 28-line placeholder block with `<GoogleMapsEmbed height={400} />`

**Commit:** `36f19a4`  
**Validation:** `npx tsc --noEmit` ✅, `npm run lint` ✅  

**ESLint fix required:**
- `react-hooks/set-state-in-effect` — refactored from `useEffect(() => setHasConsent(...))` to lazy `useState(readConsent)` initializer

---

## Phase Verification

```
npm run build → ✅ PASS
  - Compiled successfully in 6.4s
  - TypeScript: PASS
  - All 8 routes static: /, /contact, /equipe, /informations-pratiques, /mentions-legales, /politique-confidentialite, /specialites, /_not-found
  - Sitemap generated

npx tsc --noEmit → ✅ PASS (0 errors)
npm run lint → ✅ PASS (0 errors, 0 warnings)
```

---

## Checkpoint 2.5 Visual Review

Screenshots could not be taken automatically (no background dev server on Windows PowerShell). Manual visual review required before M5.

**Pages to review:**
- `http://localhost:3000/contact` — form layout, sidebar, mobile responsive
- `http://localhost:3000/informations-pratiques` — map placeholder/consent flow
- All pages: Toaster visible on form submit

---

## Errors Recovered

| Error | Fix |
|-------|-----|
| `"use server"` file exports non-async (schema) | Moved schema to `lib/contact-schema.ts` |
| `jsx-a11y/no-autofocus` on modal button | Removed `autoFocus` prop |
| `react-hooks/set-state-in-effect` in GoogleMapsEmbed | Refactored to lazy `useState(readConsent)` initializer |

---

## Telemetry

- cascade_max_level: 1
- pii_sanitization_calls: 0
- subagent_dispatches: 0
- direct_writes_by_executor: 8 files
- commits: 4
- files_touched: 9

---

## Audit

- `npm run build`: PASS
- `npx tsc --noEmit`: PASS
- `npm run lint`: PASS
- `@hermes-phase-audit`: SKIPPED (no audit agent available in this context)
