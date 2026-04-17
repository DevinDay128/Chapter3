import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { subMarkets, calculators, buildings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Invest in Myrtle Beach Real Estate — Investor Hub",
  description:
    "Why Myrtle Beach is a strong investment market: STR demand, tax treatment, lending options, building-level data, and sub-market analysis across the Grand Strand.",
  alternates: { canonical: "/invest" },
};

const faqs = [
  {
    question: "Why invest in Myrtle Beach?",
    answer:
      "Myrtle Beach draws roughly 19 million annual visitors across a nine-month tourism season, produces above-average short-term-rental yields in permitted zones, and has no state-level STR preemption — meaning the regulatory environment is defined at the municipal level and varies substantially across the Grand Strand.",
  },
  {
    question: "Can I finance a vacation rental with a DSCR loan in Myrtle Beach?",
    answer:
      "Yes, most non-condotel, warrantable condos and single-family homes are DSCR-eligible. Condotels (hotel-zoned properties with front-desk rental programs) typically require specialty lending at higher rates. Chapter 3 Realty underwrites every listing against current DSCR loan constraints before you offer.",
  },
  {
    question: "What is the minimum STR permit process in Myrtle Beach city limits?",
    answer:
      "Short-term rentals inside Myrtle Beach city limits generally require zoning compliance, a business license, a Horry County accommodations tax account, SC sales-and-use tax registration, and compliance with overlay districts. See the STR Regulations page for the full, city-by-city breakdown.",
  },
  {
    question: "What sub-markets produce the strongest STR yield?",
    answer:
      "Historically, Garden City, North Myrtle Beach's Cherry Grove, and downtown oceanfront towers produce the highest gross revenue. Net yield is a different question — HOA fees, insurance, and assessment history vary widely by building.",
  },
];

export default function InvestorHubPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Section>
        <Breadcrumbs trail={[{ name: "Invest", href: "/invest" }]} />

        <header className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Investor Hub
          </p>
          <h1 className="mt-2">Invest in Myrtle Beach real estate.</h1>
          <p className="mt-4 text-lg text-brand-800">
            The Grand Strand is the largest short-term-rental market in the
            Carolinas. Chapter 3 Realty underwrites every deal with
            building-level data, lender intelligence, and current regulatory
            status across eight sub-markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/invest/grand-investor-tool" className="btn-primary">
              Open the Grand Investor Tool
            </Link>
            <Link href="/free-investment-analysis" className="btn-secondary">
              Request a free underwrite
            </Link>
          </div>
        </header>
      </Section>

      <Section className="bg-brand-50">
        <h2>Why Myrtle Beach?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-semibold text-brand-700">~19M</p>
            <p className="mt-2 font-semibold">Annual visitors</p>
            <p className="mt-1 text-sm text-brand-800">
              Nine-month tourism season anchored by families, golfers, and
              snowbird traffic from Oct–Apr.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-semibold text-brand-700">8</p>
            <p className="mt-2 font-semibold">Distinct sub-markets</p>
            <p className="mt-1 text-sm text-brand-800">
              Each with its own STR regulation, HOA dynamic, and ADR curve.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-semibold text-brand-700">0%</p>
            <p className="mt-2 font-semibold">SC state income tax on pass-through STR LLCs</p>
            <p className="mt-1 text-sm text-brand-800">
              When structured correctly with a tax advisor; Chapter 3 coordinates
              referrals but does not provide tax advice.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <h2>Sub-market guides</h2>
          <Link href="/invest/sub-markets" className="text-sm font-semibold">
            See all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {subMarkets.map((m) => (
            <Link
              key={m.slug}
              href={`/invest/sub-markets/${m.slug}`}
              className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
            >
              <div className="font-serif text-lg">{m.name}</div>
              <p className="mt-2 text-sm text-brand-800">{m.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <div className="flex items-end justify-between gap-4">
          <h2>Calculators</h2>
          <Link href="/invest/calculators" className="text-sm font-semibold">
            All calculators →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => (
            <Link
              key={c.slug}
              href={`/invest/calculators/${c.slug}`}
              className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
            >
              <div className="font-serif text-lg">{c.name}</div>
              <p className="mt-2 text-sm text-brand-800">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <h2>Building analyses</h2>
          <Link href="/invest/buildings" className="text-sm font-semibold">
            All buildings →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {buildings.map((b) => (
            <Link
              key={b.slug}
              href={`/invest/buildings/${b.slug}`}
              className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
            >
              <div className="font-serif text-lg">{b.name}</div>
              <p className="text-xs text-brand-600">{b.address}</p>
              <p className="mt-2 text-sm text-brand-800">{b.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-900 text-white">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-white">Monthly STR market report</h2>
            <p className="mt-3 text-brand-100">
              Fresh occupancy, ADR, and RevPAR data across the Grand Strand.
              Published monthly with YoY deltas and sub-market commentary.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/invest/market-report" className="btn-primary">
              Read the latest report
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <h2>Frequently asked investor questions</h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((f) => (
            <div key={f.question}>
              <dt className="font-semibold text-brand-900">{f.question}</dt>
              <dd className="mt-2 text-brand-800">{f.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm text-brand-700">
          Questions we did not answer? Contact{" "}
          <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a> or call{" "}
          <a href={`tel:${site.nap.phone}`}>{site.nap.phoneDisplay}</a>.
        </p>
      </Section>
    </>
  );
}
