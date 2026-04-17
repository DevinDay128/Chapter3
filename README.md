# Chapter 3 Realty

The SEO engine of Chapter 3 Realty — `chapter3realty.com`. The CINC platform handles paid traffic and IDX; this site owns organic, investor authority, and AI-recommendation citability.

Initial draft built on Next.js 15 (App Router) + TypeScript + Tailwind.

## Getting started

```bash
npm install
npm run dev
# http://localhost:3000
```

Type-check and lint:

```bash
npm run typecheck
npm run lint
```

Production build:

```bash
npm run build
npm start
```

## What's in this draft

- Homepage with hero, pathway cards (Investor / Buyer / Seller), Grand Investor Tool preview, social proof, featured content, and contact.
- Investor Hub pillar at `/invest`, with sub-routes for:
  - Grand Investor Tool (`/invest/grand-investor-tool`)
  - Calculator library (`/invest/calculators` + dynamic `/invest/calculators/[slug]`)
  - Sub-market guides (`/invest/sub-markets` + dynamic `/invest/sub-markets/[slug]` for NMB, Surfside, Garden City, Murrells Inlet, Pawleys, Conway, Carolina Forest, Little River)
  - Building analyses (`/invest/buildings` + dynamic `/invest/buildings/[slug]`)
  - STR Regulations pillar (`/invest/str-regulations`)
  - Monthly STR market report (`/invest/market-report`)
- Buyers (`/buyers`), Sellers (`/sellers`), Neighborhoods (`/neighborhoods` + dynamic).
- Blog index + dynamic post pages (`/blog`, `/blog/[slug]`) with 7 categories.
- About (`/about`), Team (`/team`), Contact (`/contact`), Schedule (`/schedule`), Free Investment Analysis (`/free-investment-analysis`), Home Valuation (`/home-valuation`), Resources (`/resources`), Moving guide, Financing guide.
- Legal: Privacy, Terms, AfBA disclosure, Fair Housing, Licensing, Accessibility.

## SEO & AEO primitives

- `app/sitemap.ts` — auto-generated `/sitemap.xml` enumerating every static and dynamic route.
- `app/robots.ts` — explicitly allows **GPTBot, PerplexityBot, ClaudeBot, Claude-Web, Googlebot, Bingbot**, plus generic `*` with `/api/` disallowed.
- Per-page `metadata.alternates.canonical` set on every page.
- JSON-LD schema helpers in `src/lib/schema.ts`:
  - `Organization` + `LocalBusiness` (sitewide via root layout)
  - `RealEstateAgent` on About
  - `Article` on blog posts + market report
  - `FAQPage` on homepage, Investor Hub, STR regulations, sub-markets, buildings, calculators
  - `WebApplication` on Grand Investor Tool + each calculator
  - `RealEstateListing` (via `Residence`) on building pages
  - `Place` on sub-markets and neighborhoods
  - `BreadcrumbList` on every deep page via the `<Breadcrumbs />` component
- Breadcrumb UI on every deep page (`<Breadcrumbs />`).
- Security headers in `next.config.mjs`: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Content-Security-Policy.
- Modern image formats (AVIF, WebP) via `next/image` defaults.

## Content / data

Structured data lives in `src/lib/content.ts`:

- `subMarkets` — 8 Grand Strand sub-markets with geo + summary.
- `calculators` — 6 investor calculators.
- `neighborhoods` — 4 residential neighborhoods.
- `buildings` — 4 flagship oceanfront buildings (expand to 10 at launch, 50-80 over year 1).
- `blogPosts` — seed posts for each content track.

Replace these data sources with a CMS or MDX pipeline when scaling past the launch set.

## TODO before launch

- Wire `/api/lead` to the CRM (CINC / Follow Up Boss / etc).
- Replace placeholder Calendly `about:blank` embed with the real URL on `/schedule`.
- Add real Google Analytics 4 + Search Console verification via `metadata.verification`.
- Supply real `og-image.jpg`, `logo.png`, and favicon in `/public`.
- Populate the first 10 building pages with real HOA, assessment, and rentability data.
- Build out the interactive calculator modules (currently placeholder CTAs linking to the free-underwrite page).
- Publish the first monthly STR market report with real occupancy / ADR / RevPAR figures.
- Confirm all NAP, licensing, and AfBA disclosure text with compliance review.

## Branch & deploy

This initial draft is developed on `claude/chapter3-realty-setup-d2xSo`.

Recommended hosting: Vercel (native Next.js) or Cloudflare Pages. Put the CDN in front to meet the Core Web Vitals targets (LCP < 2.5s, INP < 200ms, CLS < 0.1).
