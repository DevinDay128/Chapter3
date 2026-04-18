import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using chapter3realty.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Terms", href: "/terms" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Terms of service</h1>
        <p>Last updated: {new Date().toISOString().slice(0, 10)}.</p>
        <p>
          By accessing chapter3realty.com you agree to these terms. Content is
          informational; nothing here is legal, tax, or financial advice. Real
          estate services are provided by {site.legalName}, a licensed South
          Carolina real estate brokerage.
        </p>
        <h2>Listings and data</h2>
        <p>
          Market data and pro-forma figures are estimates. Verify independently
          before transacting. Listing data served via CINC and applicable MLS
          feeds is subject to each provider's terms.
        </p>
        <h2>Intellectual property</h2>
        <p>
          All original content, calculators, and reports are copyrighted by{" "}
          {site.legalName}. Reproduction requires written permission.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          We make no warranty that the site will be error-free. Our liability
          is limited to the maximum extent permitted by South Carolina law.
        </p>
      </article>
    </Section>
  );
}
