import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "First-Time Homebuyers in Myrtle Beach",
  description:
    "A step-by-step guide for first-time buyers on the Grand Strand: financing, inspections, insurance, and closing.",
  alternates: { canonical: "/buyers/first-time" },
};

export default function FirstTimeBuyersPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Buyers", href: "/buyers" },
          { name: "First-time buyers", href: "/buyers/first-time" },
        ]}
      />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>First-time homebuyers</h1>
        <p>
          Starter content for first-time buyers on the Grand Strand. Expanded
          at launch to include financing options, credit prep, inspection
          checklists, and closing-cost walkthroughs.
        </p>
      </article>
    </Section>
  );
}
