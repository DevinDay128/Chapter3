import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { neighborhoods } from "@/lib/content";

export const metadata: Metadata = {
  title: "Myrtle Beach Neighborhoods",
  description:
    "Residential neighborhood guides for Market Common, Carolina Forest, Barefoot Resort, Grande Dunes, and more.",
  alternates: { canonical: "/neighborhoods" },
};

export default function NeighborhoodsIndex() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Neighborhoods", href: "/neighborhoods" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Myrtle Beach neighborhood guides</h1>
        <p className="mt-4 text-lg text-brand-800">
          Residential neighborhood profiles for primary-residence buyers: schools,
          amenities, HOA dynamics, and typical price ranges.
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="block rounded-xl border border-brand-100 bg-white p-5 no-underline shadow-sm hover:border-brand-500"
          >
            <div className="font-serif text-lg">{n.name}</div>
            <p className="mt-2 text-sm text-brand-800">{n.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
