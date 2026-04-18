import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Condo Buying in Myrtle Beach",
  description:
    "What to check before buying a Grand Strand condo: warrantability, HOA health, reserve studies, and lender posture.",
  alternates: { canonical: "/buyers/condos" },
};

export default function CondoBuyingPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Buyers", href: "/buyers" },
          { name: "Condo buying", href: "/buyers/condos" },
        ]}
      />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Condo buying</h1>
        <p>
          Starter content for condo buyers — warrantability, HOA reserve
          studies, insurance wind/hail exposure, and condotel vs. traditional
          condo lending.
        </p>
      </article>
    </Section>
  );
}
