import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financing Guide — DSCR, Conventional, FHA, VA",
  description:
    "A practical financing guide for Myrtle Beach buyers and investors, including DSCR loan mechanics and our AfBA relationship with BrickWood Mortgage.",
  alternates: { canonical: "/resources/financing" },
};

export default function FinancingGuidePage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[
          { name: "Resources", href: "/resources" },
          { name: "Financing", href: "/resources/financing" },
        ]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Financing guide</h1>
        <p className="mt-4 text-lg text-brand-800">
          Loan programs, qualification notes, and the documented AfBA
          relationship that connects Chapter 3 Realty to BrickWood Mortgage.
        </p>
      </header>

      <div className="prose-chapter3 mt-8 max-w-prose">
        <h2>Loan programs</h2>
        <ul>
          <li>Conventional conforming — primary, second home, investment.</li>
          <li>FHA / VA — primary residence only.</li>
          <li>DSCR — investor qualification on property income.</li>
          <li>Bank statement / Non-QM — self-employed borrowers.</li>
          <li>Portfolio condotel — specialty product for front-desk-operated condos.</li>
        </ul>

        <h2>AfBA disclosure</h2>
        <p>
          {site.name} has an Affiliated Business Arrangement with{" "}
          {site.partners.mortgage.name}. See the full{" "}
          <Link href="/afba-disclosure">AfBA disclosure page</Link> for
          details. You are not required to use any particular lender.
        </p>
      </div>
    </Section>
  );
}
