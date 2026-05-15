# Deployment Checklist — Defacqz Medical Center 125

This document covers everything needed to deploy to Vercel production and go live.

---

## 1. Pre-deployment: Local verification

Run these commands and confirm all pass before deploying:

```bash
npm run build          # Must: 0 errors, all pages generated
npm run lint -- --max-warnings 0  # Must: 0 errors, 0 warnings
npx tsc --noEmit       # Must: 0 errors (ignore .next/types generated files)
```

---

## 2. Vercel environment variables

Set these in the Vercel dashboard → Project → Settings → Environment Variables:

| Variable | Environment | Description |
|---|---|---|
| `RESEND_API_KEY` | Production | API key from resend.com dashboard |
| `CONTACT_EMAIL_TO` | Production | Email address to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Production | `https://defacqz-medical.be` (or Vercel URL) |

> **Note:** `NEXT_PUBLIC_SITE_URL` is used for sitemap generation and canonical URLs.

---

## 3. Vercel domain configuration

1. In Vercel dashboard → Project → Settings → Domains
2. Add custom domain: `defacqz-medical.be` (or `www.defacqz-medical.be`)
3. Configure DNS records as instructed by Vercel (A record or CNAME)
4. Wait for SSL certificate provisioning (usually < 5 minutes)

Default Vercel URL: `defacqz-medical.vercel.app`

---

## 4. Resend sender domain verification

Before the contact form can send emails:

1. Log in to [resend.com](https://resend.com)
2. Go to Domains → Add Domain → `defacqz-medical.be`
3. Add the DNS records provided by Resend (SPF, DKIM, DMARC)
4. Wait for verification (usually 24–48h for DNS propagation)
5. The `from` address in `app/contact/actions.ts` is: `noreply@defacqz-medical.be`

---

## 5. Pre-launch: Flip noindex to allow indexing

The site is currently configured with 3-layer noindex (development safety). Before go-live:

### 5a. `public/robots.txt`
Change:
```
User-agent: *
Disallow: /
```
To:
```
User-agent: *
Allow: /
Sitemap: https://defacqz-medical.be/sitemap.xml
```

### 5b. `next.config.ts` — Remove X-Robots-Tag header
Remove or comment out:
```typescript
{
  key: "X-Robots-Tag",
  value: "noindex, nofollow",
},
```

### 5c. `app/layout.tsx` — Update metadata robots
Change:
```typescript
robots: {
  index: false,
  follow: false,
},
```
To:
```typescript
robots: {
  index: true,
  follow: true,
},
```

---

## 6. Client data to confirm before go-live

These placeholders must be replaced with real data from the client:

| Placeholder | Location | Action |
|---|---|---|
| `02/555.12.34` | `app/contact/page.tsx`, `app/informations-pratiques/page.tsx` | Replace with real phone number |
| `+3225390000` | `components/seo/SchemaOrg.tsx`, `components/layout/Footer.tsx` | Replace with real phone number |
| `À compléter — Phase M5` (BCE number) | `app/mentions-legales/page.tsx` | Add real BCE number |
| `À compléter — Phase M5` (TVA number) | `app/mentions-legales/page.tsx` | Add real TVA number |
| `À compléter — Phase M5` (Responsable) | `app/mentions-legales/page.tsx` | Add responsible person name |
| Photo placeholder | `app/equipe/page.tsx` | Replace with real doctor photo |

---

## 7. Post-launch verification

After deploying to production:

1. Visit `https://defacqz-medical.be` — confirm site loads
2. Visit `https://defacqz-medical.be/sitemap.xml` — confirm sitemap accessible
3. Test contact form — confirm email received at `CONTACT_EMAIL_TO`
4. Test cookie banner — confirm consent stored in localStorage
5. Check browser console — confirm no CSP violations
6. Run [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage
7. Submit sitemap to [Google Search Console](https://search.google.com/search-console)

---

## 8. Known limitations (post-MVP)

- **Rate limiting:** Contact form has no rate limiting. Add Upstash Ratelimit before high-traffic launch.
- **OG images:** Placeholder images used. Replace with real branded designs.
- **Doctor photo:** Placeholder shown on /equipe. Replace with real photo.
- **Doctoranytime link:** Points to `https://www.doctoranytime.be` (generic). Update with clinic-specific URL.

---

*Last updated: 2026-05-15 — Phase M7*
