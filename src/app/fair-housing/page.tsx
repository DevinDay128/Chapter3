import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Fair Housing Statement",
  description:
    "Chapter 3 Realty's Fair Housing and Equal Housing Opportunity statement.",
  alternates: { canonical: "/fair-housing" },
};

export default function FairHousingPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Fair Housing", href: "/fair-housing" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Fair Housing statement</h1>
        <p>
          Chapter 3 Realty is committed to the letter and the spirit of U.S.
          policy for the achievement of equal housing opportunity throughout
          the nation.
        </p>
        <p>
          We do not discriminate on the basis of race, color, religion, sex,
          handicap, familial status, national origin, sexual orientation, or
          gender identity. We encourage and support an affirmative advertising
          and marketing program in which there are no barriers to obtaining
          housing.
        </p>
      </article>
    </Section>
  );
}
