import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { subMarkets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Myrtle Beach STR Market Report",
  description:
    "Monthly short-term-rental market report for the Grand Strand: occupancy, ADR, RevPAR, and inventory by sub-market.",
  alternates: { canonical: "/invest/market-report" },
};

export default function MarketReportPage() {
  const url = `${site.url}/invest/market-report`;
  const today = new Date().toISOString().slice(0, 10);
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: "Myrtle Beach STR Market Report",
          description:
            "Monthly occupancy, ADR, and RevPAR across the Grand Strand sub-markets.",
          url,
          datePublished: today,
          dateModified: today,
          author: site.founder.name,
        })}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "Market Report", href: "/invest/market-report" },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Monthly STR Market Report — {today}
          </p>
          <h1 className="mt-2">Myrtle Beach STR market report</h1>
          <p className="mt-4 text-lg text-brand-800">
            Occupancy, ADR, and RevPAR across the Grand Strand. Refreshed every
            month using AirDNA aggregate data, MLS transaction data, and
            Chapter 3 manual sampling of ~400 tracked listings.
          </p>
          <p className="mt-2 text-sm text-brand-700">
            Last updated: {today} · Author: {site.founder.name}
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { label: "Avg. Occupancy", value: "— / TBD" },
            { label: "Avg. Daily Rate", value: "$ — / TBD" },
            { label: "YoY RevPAR", value: "— / TBD" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-brand-100 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                {m.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-brand-900">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 prose-chapter3 max-w-prose">
          <h2>By sub-market</h2>
          <ul>
            {subMarkets.map((m) => (
              <li key={m.slug}>
                <Link href={`/invest/sub-markets/${m.slug}`}>{m.name}</Link>
              </li>
            ))}
          </ul>

          <h2>How to read this report</h2>
          <p>
            Occupancy reflects booked nights ÷ available nights. ADR is average
            daily rate across booked nights. RevPAR (revenue-per-available-room)
            is the product of the two and is the single most comparable metric
            across sub-markets.
          </p>
        </div>
      </Section>
    </>
  );
}
