import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chapter 3 Realty collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Privacy", href: "/privacy" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Privacy policy</h1>
        <p>Last updated: {new Date().toISOString().slice(0, 10)}.</p>
        <p>
          {site.legalName} ("we", "us") respects your privacy. This policy
          explains what we collect, how we use it, and your rights.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Contact information you submit via forms (name, email, phone).</li>
          <li>Usage data (pages viewed, referrers) via analytics.</li>
          <li>Lead preferences (buyer / seller / investor / strategy).</li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>Respond to your inquiries and deliver requested materials.</li>
          <li>Market follow-up related to the service you requested.</li>
          <li>Improve site performance and content.</li>
        </ul>

        <h2>Your rights</h2>
        <p>
          You may request access, correction, or deletion of your data at any
          time by emailing <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a>.
        </p>

        <h2>Third parties</h2>
        <p>
          We use Google Analytics, our CRM, and email service providers. We do
          not sell your information.
        </p>
      </article>
    </Section>
  );
}
