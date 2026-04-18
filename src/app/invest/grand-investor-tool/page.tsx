import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webApplicationSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { calculators } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Grand Investor Tool — Myrtle Beach Underwriting Suite",
  description:
    "Free underwriting tools for Myrtle Beach investors: DSCR calculator, rent estimator, STR analysis, and live market dashboard.",
  alternates: { canonical: "/invest/grand-investor-tool" },
};

const faqs = [
  {
    question: "Is the Grand Investor Tool free?",
    answer: "Yes. Every calculator, rent estimate, and STR analysis module is free with no account required.",
  },
  {
    question: "Where does the STR data come from?",
    answer:
      "STR metrics are aggregated from AirDNA, Rabbu, and Chapter 3's proprietary transaction database, with manual reconciliation against tracked comparable listings.",
  },
];

export default function GrandInvestorToolPage() {
  const url = `${site.url}/invest/grand-investor-tool`;
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: "Grand Investor Tool",
            description:
              "DSCR calculator, rent estimator, short-term-rental analysis, and live market dashboard for the Myrtle Beach / Grand Strand real-estate investor.",
            url,
          }),
          faqSchema(faqs),
        ]}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "Grand Investor Tool", href: "/invest/grand-investor-tool" },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            The Grand Investor Tool
          </p>
          <h1 className="mt-2">Underwrite Myrtle Beach deals in under 60 seconds.</h1>
          <p className="mt-4 text-lg text-brand-800">
            Four modules, one interface: DSCR, Rent Estimator, STR Analysis, and
            Market Dashboard. Every calculation reflects current Grand Strand
            conditions and is cross-checked against Chapter 3's transaction
            data.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "DSCR Calculator",
              blurb:
                "Projected rent ÷ (principal + interest + taxes + insurance + HOA). Optimized for condotel exclusions.",
              href: "/invest/calculators/dscr",
            },
            {
              name: "Rent Estimator",
              blurb:
                "Submarket rent comps for long-term, mid-term, and short-term strategies.",
              href: "/invest/calculators/vacation-rental-roi",
            },
            {
              name: "STR Analysis",
              blurb:
                "Projected revenue, expenses, ADR, occupancy, and net yield on a per-property basis.",
              href: "/invest/calculators/vacation-rental-roi",
            },
            {
              name: "Market Dashboard",
              blurb:
                "Live sub-market trends — inventory, median price, days-on-market, STR supply, and YoY RevPAR.",
              href: "/invest/market-report",
            },
          ].map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="block rounded-2xl border border-brand-100 bg-white p-6 no-underline shadow-sm hover:border-brand-500"
            >
              <div className="font-serif text-xl">{m.name}</div>
              <p className="mt-2 text-sm text-brand-800">{m.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-700">
                Launch module →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50">
        <h2>All calculators</h2>
        <p className="mt-2 max-w-prose text-brand-800">
          Each calculator is a standalone page with its own inputs, explanation,
          and linked blog guides.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
    </>
  );
}
