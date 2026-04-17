import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { placeSchema, faqSchema } from "@/lib/schema";
import { subMarkets, buildings, calculators } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return subMarkets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = subMarkets.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name} Real Estate Investment Guide`,
    description: m.summary,
    alternates: { canonical: `/invest/sub-markets/${m.slug}` },
  };
}

export default async function SubMarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = subMarkets.find((m) => m.slug === slug);
  if (!market) notFound();

  const url = `${site.url}/invest/sub-markets/${market.slug}`;
  const faqs = [
    {
      question: `Is ${market.name} a good short-term rental market?`,
      answer: market.summary,
    },
    {
      question: `What permits are required in ${market.name}?`,
      answer:
        "Permit requirements vary — see our STR Regulations guide for the city/county-level rules and enforcement posture.",
    },
  ];

  const relatedBuildings = buildings.slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          placeSchema({
            name: `${market.name}, SC`,
            description: market.summary,
            url,
            latitude: market.lat,
            longitude: market.lon,
          }),
          faqSchema(faqs),
        ]}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "Sub-markets", href: "/invest/sub-markets" },
            { name: market.name, href: `/invest/sub-markets/${market.slug}` },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <h1>{market.name} real estate investment guide</h1>
          <p className="mt-4 text-lg text-brand-800">{market.summary}</p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-brand-100 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              STR posture
            </p>
            <p className="mt-2 font-semibold">See regulations guide</p>
            <Link href="/invest/str-regulations" className="text-sm">
              Open guide →
            </Link>
          </div>
          <div className="rounded-xl border border-brand-100 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Typical deal
            </p>
            <p className="mt-2 font-semibold">Oceanfront condo / SFR</p>
            <p className="text-sm text-brand-800">
              Underwriting ranges vary by product type and HOA.
            </p>
          </div>
          <div className="rounded-xl border border-brand-100 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Next step
            </p>
            <Link href="/free-investment-analysis" className="btn-primary mt-2">
              Underwrite a deal
            </Link>
          </div>
        </div>

        <div className="mt-12 prose-chapter3 max-w-prose">
          <h2>What we track in {market.name}</h2>
          <p>
            Chapter 3 monitors closed transactions, listing velocity, and STR
            permit issuance in {market.name} on a rolling basis. When you engage
            us, you receive the most recent four quarters of sub-market-specific
            comps along with a building-level view when relevant.
          </p>

          <h2>Related buildings</h2>
          <ul>
            {relatedBuildings.map((b) => (
              <li key={b.slug}>
                <Link href={`/invest/buildings/${b.slug}`}>{b.name}</Link> —{" "}
                {b.summary}
              </li>
            ))}
          </ul>

          <h2>Useful calculators</h2>
          <ul>
            {calculators.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link href={`/invest/calculators/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
