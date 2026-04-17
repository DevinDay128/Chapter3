import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Chapter 3 Realty's commitment to WCAG 2.1 AA accessibility and how to report accessibility concerns.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Accessibility", href: "/accessibility" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Accessibility statement</h1>
        <p>
          Chapter 3 Realty is committed to digital accessibility. We target
          conformance with the Web Content Accessibility Guidelines (WCAG) 2.1
          Level AA for our public-facing content.
        </p>
        <h2>Report an issue</h2>
        <p>
          If you encounter an accessibility barrier, please contact{" "}
          <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a> with a
          description of the issue and the URL where it occurred.
        </p>
        <h2>Ongoing work</h2>
        <p>
          We test with keyboard navigation, screen readers, and automated
          tooling. Accessibility is a continuous improvement program, not a
          one-time audit.
        </p>
      </article>
    </Section>
  );
}
