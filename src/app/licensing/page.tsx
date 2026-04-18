import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Licensing & Credentials",
  description: "Chapter 3 Realty licensing, credentials, and regulatory disclosures.",
  alternates: { canonical: "/licensing" },
};

export default function LicensingPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Licensing", href: "/licensing" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Licensing &amp; credentials</h1>
        <p>
          {site.legalName} is a South Carolina licensed real estate brokerage.
        </p>
        <h2>Regulatory bodies</h2>
        <ul>
          <li>South Carolina Real Estate Commission</li>
          <li>National Association of REALTORS&reg;</li>
          <li>Local MLS boards applicable to the Grand Strand</li>
        </ul>
        <h2>Licenses</h2>
        <ul>
          <li>{site.founder.name} — {site.founder.role} — {site.founder.license}</li>
        </ul>
        <h2>Certifications &amp; specialties</h2>
        <ul>
          <li>Vacation rental / short-term rental strategy</li>
          <li>DSCR loan intake and condo-warrantability review</li>
          <li>1031 exchange coordination (non-tax advisory)</li>
        </ul>
      </article>
    </Section>
  );
}
