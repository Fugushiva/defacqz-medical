## /impeccable critique — Defacqz Medical Center 125 (Checkpoint 2.5 M4)

**Target**: http://localhost:3000 (M4 build)
**Score**: 29/40
**P0**: 1 (phone number contradiction)
**P1**: 3 (brand color visibility, StatsBar duplicate, PourquoiNous card reflex)
**P2**: 1 (Doctoranytime buried)

### Priority Issues
1. [P0] Phone number mismatch - sidebar 02/555.12.34 vs footer +32 2 539 00 00
2. [P1] brand-primary used at /5 opacity everywhere - no committed color moment
3. [P1] StatsBar duplicates 4.6/5 rating already in Hero
4. [P1] PourquoiNous 3-column card grid is healthcare design reflex
5. [P2] Doctoranytime link buried in /contact sidebar only

### What Works
- A11y structure textbook (SkipNav, ARIA landmarks, 0 violations)
- /specialites anchor nav with pre-select from contact query param
- GSAP stagger on Hero: GPU-only, cleanup, prefers-reduced-motion
