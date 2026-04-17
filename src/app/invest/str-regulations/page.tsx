import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Grand Strand STR Regulations — City-by-City Guide",
  description:
    "Short-term rental regulations for every Grand Strand municipality: permits, zoning overlays, occupancy limits, parking rules, and enforcement posture.",
  alternates: { canonical: "/invest/str-regulations" },
};

const cities = [
  {
    city: "Myrtle Beach",
    summary:
      "Vacation rental accommodations require zoning compliance, a business license, a SC sales-and-use tax account, a Horry County accommodations tax account, and overlay-district compliance where applicable.",
  },
  {
    city: "North Myrtle Beach",
    summary:
      "City-level STR rules differ from Myrtle Beach, including registration requirements, designated districts, and parking-per-bedroom ordinances.",
  },
  {
    city: "Surfside Beach",
    summary:
      "Rental overlay districts restrict STR operation in several residential zones; permitted zones require annual registration.",
  },
  {
    city: "Garden City (unincorporated Horry County)",
    summary:
      "Horry County-level rules apply; Horry County STR ordinance requires a registration certificate and annual renewal.",
  },
  {
    city: "Murrells Inlet / Georgetown County",
    summary:
      "Georgetown County administers accommodations-tax collection; STR rules vary between the Horry and Georgetown portions of the market.",
  },
  {
    city: "Pawleys Island",
    summary:
      "Pawleys Island Town ordinance restricts short-term rentals on the island portion; mainland Georgetown County areas follow county rules.",
  },
  {
    city: "Conway",
    summary:
      "Conway generally permits STRs in commercial and mixed-use zones; residential zoning typically requires special-use review.",
  },
  {
    city: "Little River (unincorporated Horry County)",
    summary:
      "Horry County STR ordinance applies; Intracoastal and golf-community STRs are common but subject to community-level restrictions.",
  },
] as const;

const faqs = [
  {
    question: "Do I need a permit to rent short-term in Myrtle Beach?",
    answer:
      "Yes. Inside Myrtle Beach city limits, short-term vacation rentals generally require zoning approval, a city business license, a SC DOR sales/use tax ID, and a Horry County accommodations tax account. Overlay districts add additional requirements.",
  },
  {
    question: "Which municipality is most restrictive for STRs?",
    answer:
      "Pawleys Island Town (on the island) and portions of Surfside Beach impose the tightest STR rules in the Grand Strand. North Myrtle Beach and Horry County unincorporated are broadly permitted.",
  },
  {
    question: "Does Horry County have a countywide STR ordinance?",
    answer:
      "Yes — unincorporated Horry County maintains a short-term vacation rental registration requirement with annual renewal and enforcement through the county licensing office.",
  },
];

export default function StrRegulationsPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Invest", href: "/invest" },
            { name: "STR Regulations", href: "/invest/str-regulations" },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <h1>Grand Strand STR regulations</h1>
          <p className="mt-4 text-lg text-brand-800">
            A consolidated, city-by-city reference covering the permit,
            registration, and enforcement posture every Grand Strand
            municipality takes toward short-term rentals.
          </p>
          <p className="mt-3 text-sm text-brand-700">
            Last updated: monthly. Regulations change — always confirm with the
            municipality before acquisition. This page is informational and is
            not legal advice.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cities.map((c) => (
            <article
              key={c.city}
              className="rounded-xl border border-brand-100 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl">{c.city}</h2>
              <p className="mt-2 text-sm text-brand-800">{c.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-prose">
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/free-investment-analysis" className="btn-primary">
            Ask about a specific address
          </Link>
          <Link href="/invest" className="btn-secondary">
            Back to Investor Hub
          </Link>
        </div>
      </Section>
    </>
  );
}
