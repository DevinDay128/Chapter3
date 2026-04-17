import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { webApplicationSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { calculators } from "@/lib/content";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) return {};
  return {
    title: `${calc.name} Calculator`,
    description: calc.blurb,
    alternates: { canonical: `/invest/calculators/${calc.slug}` },
  };
}

const howTo: Record<string, { question: string; answer: string }[]> = {
  "cap-rate": [
    {
      question: "What is a cap rate?",
      answer:
        "Cap rate is net operating income divided by purchase price, expressed as a percentage. It is the unlevered annual yield of the asset.",
    },
    {
      question: "What is a good cap rate in Myrtle Beach?",
      answer:
        "Long-term-rental cap rates in Conway and Carolina Forest trend 5-7%. Oceanfront STR-operated condos often pencil to 6-9% gross cap but net yields depend on HOA and assessments.",
    },
  ],
  "cash-on-cash": [
    {
      question: "How is cash-on-cash return calculated?",
      answer:
        "Annual pre-tax cash flow divided by total cash invested (down payment, closing costs, reserves, rehab).",
    },
  ],
  "vacation-rental-roi": [
    {
      question: "What inputs drive STR ROI in Myrtle Beach?",
      answer:
        "ADR, occupancy, cleaning fee pass-through, HOA, insurance (including wind/hail), property management split, and seasonal utility load.",
    },
  ],
  "break-even-occupancy": [
    {
      question: "What is break-even occupancy?",
      answer:
        "The minimum occupancy percentage required for STR revenue to equal all operating and debt-service expenses.",
    },
  ],
  dscr: [
    {
      question: "What DSCR do Myrtle Beach lenders require?",
      answer:
        "Most DSCR programs in the Grand Strand require 1.0-1.25 minimum; best pricing typically starts at 1.25+.",
    },
  ],
  "1031-timeline": [
    {
      question: "What are the 1031 deadlines?",
      answer:
        "45 days to identify replacement property(ies) from the sale date and 180 days to close on the identified property(ies).",
    },
  ],
};

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) notFound();
  const url = `${site.url}/invest/calculators/${calc.slug}`;
  const faqs = howTo[calc.slug] ?? [];

  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: `${calc.name} Calculator`,
            description: calc.blurb,
            url,
          }),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "Calculators", href: "/invest/calculators" },
            { name: calc.name, href: `/invest/calculators/${calc.slug}` },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <h1>{calc.name} calculator</h1>
          <p className="mt-4 text-lg text-brand-800">{calc.blurb}</p>
        </header>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Interactive calculator
          </p>
          <p className="mt-2 text-brand-800">
            The interactive module ships in the next release. In the interim,
            request a custom underwrite and we will return the {calc.name}{" "}
            figure alongside a full pro forma.
          </p>
          <Link href="/free-investment-analysis" className="btn-primary mt-5">
            Request a free underwrite
          </Link>
        </div>

        {faqs.length > 0 && (
          <div className="mt-10 max-w-prose">
            <h2>Frequently asked</h2>
            <dl className="mt-4 space-y-6">
              {faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-semibold text-brand-900">{f.question}</dt>
                  <dd className="mt-2 text-brand-800">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="mt-10">
          <Link href="/invest" className="text-sm font-semibold">
            ← Back to the Investor Hub
          </Link>
        </div>
      </Section>
    </>
  );
}
