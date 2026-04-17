import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { calculators } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources — Guides, Calculators, and Reports",
  description:
    "Downloadable guides, complete calculator library, STR regulation pages, financing guides, and relocation resources.",
  alternates: { canonical: "/resources" },
};

const guides = [
  {
    title: "Myrtle Beach STR Market Report",
    blurb: "Fresh occupancy, ADR, and RevPAR data.",
    href: "/invest/market-report",
  },
  {
    title: "STR Regulations — City-by-City",
    blurb: "Municipal-level STR reference for the Grand Strand.",
    href: "/invest/str-regulations",
  },
  {
    title: "Moving to Myrtle Beach",
    blurb: "Relocation guide for families and remote workers.",
    href: "/resources/moving-to-myrtle-beach",
  },
  {
    title: "Financing guide: DSCR loans for investors",
    blurb: "Includes AfBA disclosure for BrickWood Mortgage.",
    href: "/resources/financing",
  },
];

export default function ResourcesPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Resources", href: "/resources" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Resources</h1>
        <p className="mt-4 text-lg text-brand-800">
          Everything useful in one place — guides, calculators, STR regulation
          references, financing notes, and the moving-to-Myrtle-Beach relocation
          resource.
        </p>
      </header>

      <h2 className="mt-12">Guides and downloads</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.title}
            href={g.href}
            className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
          >
            <div className="font-serif text-lg">{g.title}</div>
            <p className="mt-2 text-sm text-brand-800">{g.blurb}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-12">Calculator library</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
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
