import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { realEstateListingSchema, faqSchema } from "@/lib/schema";
import { buildings } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return buildings.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = buildings.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.name} — Investor Analysis`,
    description: `${b.summary} Rentability, HOA structure, lender eligibility, and investor commentary.`,
    alternates: { canonical: `/invest/buildings/${b.slug}` },
  };
}

export default async function BuildingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = buildings.find((x) => x.slug === slug);
  if (!b) notFound();

  const url = `${site.url}/invest/buildings/${b.slug}`;
  const faqs = [
    {
      question: `Is ${b.name} STR eligible?`,
      answer:
        "STR eligibility depends on the zoning overlay and HOA rental policy. We maintain a live read of both for every covered building.",
    },
    {
      question: `Is ${b.name} DSCR-loan eligible?`,
      answer:
        "Condo-warrantability and front-desk operation determine DSCR eligibility. Reach out and we will confirm the current lender posture.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          realEstateListingSchema({
            name: b.name,
            description: b.summary,
            url,
            address: b.address,
          }),
          faqSchema(faqs),
        ]}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "Buildings", href: "/invest/buildings" },
            { name: b.name, href: `/invest/buildings/${b.slug}` },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <h1>{b.name}</h1>
          <p className="text-brand-600">{b.address}</p>
          <p className="mt-4 text-lg text-brand-800">{b.summary}</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { label: "Rentability", value: "STR / MTR / LTR mix" },
            { label: "HOA structure", value: "Standard / Condotel / Overlay" },
            { label: "Lender eligibility", value: "Varies — confirm before offer" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-brand-100 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                {m.label}
              </p>
              <p className="mt-2 font-semibold">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 prose-chapter3 max-w-prose">
          <h2>What investors should know</h2>
          <p>
            Full building breakdowns covering HOA fees, assessment history,
            insurance posture, rental program options, and year-over-year
            revenue trend will publish for the first 10 buildings at launch.
          </p>
          <p>
            To request an underwrite on a specific unit at {b.name}, reach out
            and we will deliver a pro forma within one business day.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/free-investment-analysis" className="btn-primary">
            Request a unit-level underwrite
          </Link>
          <Link href="/invest" className="btn-secondary">
            Back to Investor Hub
          </Link>
        </div>
      </Section>
    </>
  );
}
