import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buying a Home in Myrtle Beach",
  description:
    "Guidance for first-time buyers, relocating families, and investors purchasing primary or secondary homes in the Grand Strand.",
  alternates: { canonical: "/buyers" },
};

const tracks = [
  { label: "First-time buyers", blurb: "Financing, credit, and process walk-through.", href: "/buyers/first-time" },
  { label: "Relocation", blurb: "Moving to Myrtle Beach — neighborhoods, schools, logistics.", href: "/resources/moving-to-myrtle-beach" },
  { label: "New construction", blurb: "Building in Carolina Forest, Grande Dunes, and more.", href: "/buyers/new-construction" },
  { label: "Condo buying", blurb: "Oceanfront, resort, and warrantable condo purchases.", href: "/buyers/condos" },
];

export default function BuyersPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Buyers", href: "/buyers" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Buying a home in the Grand Strand</h1>
        <p className="mt-4 text-lg text-brand-800">
          Whether it is your first purchase, a relocation, a second home, or a
          new-construction contract, Chapter 3 Realty represents buyers with
          the same underwriting discipline we bring to investor clients.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.cincUrl} rel="noopener" className="btn-primary">
            Search listings (CINC)
          </a>
          <Link href="/contact" className="btn-secondary">
            Speak with a buyer agent
          </Link>
        </div>
      </header>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {tracks.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
          >
            <div className="font-serif text-lg">{t.label}</div>
            <p className="mt-2 text-sm text-brand-800">{t.blurb}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
