import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Home Valuation",
  description: "Request a data-driven home valuation for your Grand Strand property.",
  alternates: { canonical: "/home-valuation" },
};

export default function HomeValuationPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Home Valuation", href: "/home-valuation" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Free home valuation</h1>
        <p className="mt-4 text-lg text-brand-800">
          Comp-based valuation prepared by a licensed agent — not an automated
          estimate. Delivered within two business days.
        </p>
      </header>

      <form
        action="/api/lead"
        method="post"
        className="mt-10 grid gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm md:max-w-2xl"
      >
        <input type="hidden" name="intent" defaultValue="Home Valuation" />
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Full name</span>
          <input name="name" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Email</span>
          <input type="email" name="email" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Property address</span>
          <input name="address" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Selling timeline</span>
          <select name="timeline" className="rounded-md border border-brand-200 px-3 py-2">
            <option>Researching</option>
            <option>3 - 6 months</option>
            <option>1 - 3 months</option>
            <option>Ready now</option>
          </select>
        </label>
        <button type="submit" className="btn-primary justify-self-start">
          Request valuation
        </button>
      </form>
    </Section>
  );
}
