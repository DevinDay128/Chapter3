import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Moving to Myrtle Beach — Relocation Guide",
  description:
    "Neighborhoods, schools, cost of living, weather, commute, and healthcare considerations for moving to Myrtle Beach.",
  alternates: { canonical: "/resources/moving-to-myrtle-beach" },
};

export default function MovingGuidePage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Resources", href: "/resources" },
          { name: "Moving to Myrtle Beach", href: "/resources/moving-to-myrtle-beach" },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Moving to Myrtle Beach</h1>
        <p className="mt-4 text-lg text-brand-800">
          A practical relocation guide for families, remote workers, and
          retirees considering the Grand Strand.
        </p>
      </header>
      <div className="prose-chapter3 mt-8 max-w-prose">
        <h2>Neighborhoods at a glance</h2>
        <p>
          Primary-residence buyers cluster in Market Common, Carolina Forest,
          and Grande Dunes. Downtown-oceanfront living is concentrated in
          Myrtle Beach proper.
        </p>
        <h2>Cost of living and taxes</h2>
        <p>
          South Carolina property taxes on primary residences are substantially
          lower than on second homes and investment properties — confirm your
          assessment class with Horry County.
        </p>
        <h2>Weather and commute</h2>
        <p>
          Humid subtropical climate, summer hurricane exposure, short commutes
          across the Strand with heavy seasonal congestion during June-August.
        </p>
      </div>
    </Section>
  );
}
