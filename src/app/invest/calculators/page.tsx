import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { calculators } from "@/lib/content";

export const metadata: Metadata = {
  title: "Real Estate Investment Calculators",
  description:
    "Free, browser-based calculators for Myrtle Beach real estate investors: cap rate, cash-on-cash, DSCR, vacation-rental ROI, break-even occupancy, and 1031 timeline.",
  alternates: { canonical: "/invest/calculators" },
};

export default function CalculatorsHubPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Invest", href: "/invest" },
          { name: "Calculators", href: "/invest/calculators" },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Real estate investment calculators</h1>
        <p className="mt-4 text-lg text-brand-800">
          A complete calculator library for the Myrtle Beach investor. Every
          module runs in-browser, requires no account, and links to a
          corresponding blog guide explaining the math.
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
