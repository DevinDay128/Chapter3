import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Selling Your Home in Myrtle Beach",
  description:
    "Data-driven pricing, professional media, and full-funnel exposure for Grand Strand sellers.",
  alternates: { canonical: "/sellers" },
};

export default function SellersPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Sellers", href: "/sellers" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Selling on the Grand Strand</h1>
        <p className="mt-4 text-lg text-brand-800">
          We price with data, stage with intention, and expose your listing
          across CINC, MLS, IDX syndication, and our investor network.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/home-valuation" className="btn-primary">
            Request a home valuation
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk to a listing agent
          </Link>
        </div>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            label: "Pricing strategy",
            blurb:
              "Comp selection, days-on-market modeling, and seasonal timing analysis tuned to your sub-market.",
          },
          {
            label: "Selling timeline",
            blurb:
              "From listing prep to closing: realistic milestones and responsibility at each step.",
          },
          {
            label: "Investor buyer pool",
            blurb:
              "Access to Chapter 3's active investor database when your property pencils for an STR or long-term rental.",
          },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-brand-100 bg-white p-5 shadow-sm">
            <div className="font-serif text-lg">{s.label}</div>
            <p className="mt-2 text-sm text-brand-800">{s.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
