import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "RESPA Affiliated Business Arrangement Disclosure",
  description:
    "Chapter 3 Realty's AfBA disclosure covering its relationship with BrickWood Mortgage under RESPA.",
  alternates: { canonical: "/afba-disclosure" },
};

export default function AfbaDisclosurePage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "AfBA Disclosure", href: "/afba-disclosure" }]} />
      <article className="mt-6 max-w-prose prose-chapter3">
        <h1>Affiliated Business Arrangement (AfBA) disclosure</h1>
        <p>Required under RESPA § 3500.15 (12 CFR 1024.15).</p>

        <h2>Parties</h2>
        <p>
          {site.legalName} ("Chapter 3") and {site.partners.mortgage.name} have
          a business relationship. Specifically, the parties may refer
          customers to one another.
        </p>

        <h2>Nature of the relationship</h2>
        <p>
          The referral of a customer by Chapter 3 to {site.partners.mortgage.name}{" "}
          (or vice versa) may provide Chapter 3 or its affiliates a financial or
          other benefit. The estimated charges or range of charges generally
          made by {site.partners.mortgage.name} are disclosed in its loan
          estimate or rate sheet, which you will receive directly.
        </p>

        <h2>Your rights</h2>
        <p>
          YOU ARE NOT REQUIRED TO USE {site.partners.mortgage.name.toUpperCase()} AS A
          CONDITION OF THE PURCHASE OR SALE OF THE SUBJECT PROPERTY. THERE ARE
          FREQUENTLY OTHER SETTLEMENT SERVICE PROVIDERS AVAILABLE WITH SIMILAR
          SERVICES. YOU ARE FREE TO SHOP AROUND TO DETERMINE THAT YOU ARE
          RECEIVING THE BEST SERVICES AND THE BEST RATE FOR THESE SERVICES.
        </p>
      </article>
    </Section>
  );
}
