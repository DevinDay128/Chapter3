import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { subMarkets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grand Strand Sub-Market Investment Guides",
  description:
    "Investor-oriented analysis of every major Grand Strand sub-market: regulation, demand, pricing, and deal archetypes.",
  alternates: { canonical: "/invest/sub-markets" },
};

export default function SubMarketsIndexPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Invest", href: "/invest" },
          { name: "Sub-markets", href: "/invest/sub-markets" },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Grand Strand sub-market guides</h1>
        <p className="mt-4 text-lg text-brand-800">
          Each sub-market has its own regulatory posture, HOA dynamic, and ADR
          profile. Pick a market to see the deal archetypes we are tracking.
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
