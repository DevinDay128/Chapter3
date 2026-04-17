import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { realEstateAgentSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Chapter 3 Realty",
  description:
    "Why Chapter 3 Realty exists, what we stand for, and the team behind the investor-focused, full-service Myrtle Beach brokerage.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={realEstateAgentSchema({
          name: site.founder.name,
          role: site.founder.role,
          license: site.founder.license,
          bio: site.founder.bio,
          url: `${site.url}/about#founder`,
        })}
      />
      <Section>
        <Breadcrumbs trail={[{ name: "About", href: "/about" }]} />
        <header className="mt-6 max-w-3xl">
          <h1>About Chapter 3 Realty</h1>
          <p className="mt-4 text-lg text-brand-800">
            Chapter 3 Realty is a Myrtle Beach brokerage with an investor's
            brain and a full-service practice. We underwrite deals for a living
            and we bring the same discipline to every primary-residence client
            we represent.
          </p>
        </header>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 prose-chapter3 max-w-prose">
            <h2>Our founding story</h2>
            <p>
              Chapter 3 was founded because the Grand Strand's investor-buyer
              population was being underserved by generalist brokerages. Buyers
              were closing on properties that did not pencil, sellers were
              missing investor buyer pools, and primary-residence clients were
              paying for advice that lacked data backbone.
            </p>
            <h2>Our mission</h2>
            <p>
              Bring underwriting, lending intelligence, and regulatory literacy
              to every Grand Strand transaction. Treat every client as if their
              decision is going to show up on a spreadsheet — because it will.
            </p>
            <h2>How we are different</h2>
            <ul>
              <li>Proprietary STR and DSCR underwriting on every listing we touch.</li>
              <li>Building-level data on the highest-traffic oceanfront towers.</li>
              <li>Transparent, documented process from intake to close.</li>
              <li>Investor network ready to transact when a property fits.</li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Contact
            </p>
            <p className="mt-2">{site.nap.street}</p>
            <p>
              {site.nap.city}, {site.nap.region} {site.nap.postalCode}
            </p>
            <p className="mt-3">
              <a href={`tel:${site.nap.phone}`}>{site.nap.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a>
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              Contact us
            </Link>
          </aside>
        </div>

        <div id="founder" className="mt-16 max-w-prose prose-chapter3">
          <h2>Founder bio — {site.founder.name}</h2>
          <p>
            {site.founder.name}, {site.founder.role}. {site.founder.bio}
          </p>
          <p>
            <strong>License:</strong> {site.founder.license}
          </p>
          <p>
            <strong>Specialties:</strong> vacation rental underwriting, DSCR
            financing, STR regulatory compliance, oceanfront condo transactions.
          </p>
        </div>
      </Section>
    </>
  );
}
