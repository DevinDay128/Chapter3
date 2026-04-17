import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "New Construction in Myrtle Beach",
  description:
    "Buying new construction on the Grand Strand: builder contracts, warranties, and why buyer representation matters.",
  alternates: { canonical: "/buyers/new-construction" },
};

export default function NewConstructionPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Buyers", href: "/buyers" },
          { name: "New construction", href: "/buyers/new-construction" },
        ]}
      />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Buying new construction</h1>
        <p>
          Starter content for new-construction buyers — builder contract
          review, upgrade selection, and independent inspection strategy.
        </p>
      </article>
    </Section>
  );
}
