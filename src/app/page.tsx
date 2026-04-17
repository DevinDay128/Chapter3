import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${site.name} — Myrtle Beach Investor-Focused Real Estate`,
  description: site.description,
  alternates: { canonical: "/" },
};

const pathways = [
  {
    label: "Investors",
    href: "/invest",
    blurb:
      "Vacation-rental underwriting, DSCR financing, STR regulations, and building-level data for the Grand Strand.",
  },
  {
    label: "Buyers",
    href: "/buyers",
    blurb:
      "First-time homebuyers, relocation, new construction, and oceanfront condo purchasing — handled end-to-end.",
  },
  {
    label: "Sellers",
    href: "/sellers",
    blurb:
      "Data-driven pricing, professional media, and exposure across CINC + MLS + IDX partners.",
  },
];

const featured = [
  {
    eyebrow: "Market Report",
    title: "Myrtle Beach STR Market Report — Latest Edition",
    href: "/invest/market-report",
    summary:
      "Monthly STR supply, ADR, occupancy, and RevPAR across 8 Grand Strand sub-markets.",
  },
  {
    eyebrow: "Building Analysis",
    title: "Oceanfront Condo Analysis: Top 10 Buildings",
    href: "/invest/buildings",
    summary:
      "Rentability, HOA structure, lender policy, and cap-rate ranges for the highest-traffic oceanfront towers.",
  },
  {
    eyebrow: "Investor Guide",
    title: "STR Regulations by Municipality",
    href: "/invest/str-regulations",
    summary:
      "A city-by-city guide to permits, zoning, occupancy limits, and enforcement across the Grand Strand.",
  },
];

const faqs = [
  {
    question: "What makes Chapter 3 Realty different?",
    answer:
      "We are a full-service brokerage with an investor-first operating model. Every buyer, seller, and investor client benefits from underwriting discipline, market data, and a transparent process.",
  },
  {
    question: "Do you only work with investors?",
    answer:
      "No. We represent buyers, sellers, and investors across the Grand Strand. Our investor tooling makes us a better partner for traditional transactions as well.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Myrtle Beach, North Myrtle Beach, Surfside, Garden City, Murrells Inlet, Pawleys Island, Conway, Carolina Forest, and Little River.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <Section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
              Investor-Focused. Full-Service.
            </p>
            <h1>Myrtle Beach real estate, underwritten like an investment.</h1>
            <p className="mt-5 max-w-prose text-lg text-brand-800">
              {site.name} is the investor-first, full-service brokerage serving the
              Grand Strand. We underwrite every deal with vacation-rental data,
              financing intelligence, and building-level context — whether you are
              buying a primary home or closing your tenth STR.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/invest/grand-investor-tool" className="btn-primary">
                Open the Grand Investor Tool
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to a broker
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl">Free investment analysis</h2>
            <p className="mt-2 text-sm text-brand-800">
              Send a property or sub-market and receive an underwrite back — cap
              rate, cash-on-cash, break-even occupancy, and STR permit status.
            </p>
            <Link href="/free-investment-analysis" className="btn-primary mt-4">
              Request an underwrite
            </Link>
          </div>
        </div>
      </Section>

      {/* Pathway cards */}
      <Section>
        <h2 className="sr-only">Primary pathways</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pathways.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block rounded-2xl border border-brand-100 bg-white p-6 no-underline shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                I am a
              </div>
              <div className="mt-1 font-serif text-2xl text-brand-900">{p.label}</div>
              <p className="mt-3 text-brand-800">{p.blurb}</p>
              <span className="mt-5 inline-block font-semibold text-brand-700 group-hover:text-brand-500">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Grand Investor Tool preview */}
      <Section className="bg-brand-900 text-white">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sand-200">
              The Grand Investor Tool
            </p>
            <h2 className="text-white">Underwrite the Grand Strand in under 60 seconds.</h2>
            <p className="mt-4 text-brand-100">
              DSCR calculator, rent estimator, STR analysis, and a live market
              dashboard — free, no account required.
            </p>
            <Link href="/invest/grand-investor-tool" className="btn-primary mt-6">
              Launch the tool
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {["DSCR", "Rent Estimator", "STR Analysis", "Market Dashboard"].map((t) => (
              <li
                key={t}
                className="rounded-xl bg-brand-800 p-5 text-center font-semibold"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Social proof */}
      <Section>
        <h2>Trusted across the Grand Strand</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-brand-100 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Google Reviews
            </p>
            <p className="mt-2 text-2xl font-semibold">5.0 ★★★★★</p>
            <p className="mt-1 text-sm text-brand-800">
              Verified client reviews on Google Business Profile.
            </p>
          </div>
          <div className="rounded-xl border border-brand-100 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              BiggerPockets
            </p>
            <p className="mt-2 text-2xl font-semibold">Investor-friendly agent</p>
            <a href={site.social.biggerpockets} rel="noopener" className="mt-1 inline-block text-sm">
              View profile →
            </a>
          </div>
          <div className="rounded-xl border border-brand-100 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Press
            </p>
            <p className="mt-2 text-2xl font-semibold">As seen in</p>
            <p className="mt-1 text-sm text-brand-800">
              Myrtle Beach Sun News, WMBF, Grand Strand Business Journal.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured investor content */}
      <Section className="bg-brand-50">
        <div className="flex items-end justify-between gap-4">
          <h2>Featured investor content</h2>
          <Link href="/blog" className="text-sm font-semibold">
            See all posts →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featured.map((f) => (
            <article
              key={f.href}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                {f.eyebrow}
              </p>
              <h3 className="mt-2">
                <Link href={f.href}>{f.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-brand-800">{f.summary}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2>Talk to a Chapter 3 broker</h2>
            <p className="mt-3">
              Call{" "}
              <a href={`tel:${site.nap.phone}`} className="font-semibold">
                {site.nap.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.nap.email}`} className="font-semibold">
                {site.nap.email}
              </a>
              .
            </p>
            <p className="mt-3 text-brand-800">
              {site.nap.street}
              <br />
              {site.nap.city}, {site.nap.region} {site.nap.postalCode}
            </p>
            <p className="mt-6 text-sm text-brand-700">
              Looking for active listings? Use our{" "}
              <a href={site.cincUrl} rel="noopener" className="font-semibold">
                CINC-powered property search
              </a>
              .
            </p>
          </div>
          <ContactForm defaultIntent="Homepage" />
        </div>
      </Section>
    </>
  );
}
