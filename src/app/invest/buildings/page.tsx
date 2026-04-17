import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Myrtle Beach Condo Building Investor Analysis",
  description:
    "Building-by-building analysis of Myrtle Beach oceanfront condos: rentability, HOA structure, lender eligibility, cap-rate ranges.",
  alternates: { canonical: "/invest/buildings" },
};

export default function BuildingsIndexPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Invest", href: "/invest" },
          { name: "Buildings", href: "/invest/buildings" },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Myrtle Beach condo building analyses</h1>
        <p className="mt-4 text-lg text-brand-800">
          We track the highest-traffic oceanfront condos and condotels. Each
          page covers lender eligibility, HOA structure, rentability, and
          recent transaction velocity.
        </p>
        <p className="mt-3 text-sm text-brand-700">
          Launching with 10 buildings at go-live, expanding to 50-80 over the
          first year.
        </p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
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
  );
}
