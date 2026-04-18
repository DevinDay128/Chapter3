import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Investment Analysis",
  description:
    "Send us a property or sub-market and receive a free underwrite: cap rate, cash-on-cash, break-even occupancy, and STR permit posture.",
  alternates: { canonical: "/free-investment-analysis" },
};

export default function FreeInvestmentAnalysisPage() {
  return (
    <Section>
      <Breadcrumbs
        trail={[{ name: "Free Investment Analysis", href: "/free-investment-analysis" }]}
      />
      <header className="mt-6 max-w-3xl">
        <h1>Request a free underwrite</h1>
        <p className="mt-4 text-lg text-brand-800">
          Send a property address, MLS number, or a sub-market and we will
          return a full pro forma within one business day.
        </p>
      </header>

      <form
        action="/api/lead"
        method="post"
        className="mt-10 grid gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm md:max-w-2xl"
      >
        <input type="hidden" name="intent" defaultValue="Free Investment Analysis" />

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Full name</span>
          <input name="name" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Email</span>
          <input type="email" name="email" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Property address / MLS # / market</span>
          <input name="subject" required className="rounded-md border border-brand-200 px-3 py-2" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Strategy</span>
          <select name="strategy" className="rounded-md border border-brand-200 px-3 py-2">
            <option>Short-term rental</option>
            <option>Mid-term rental</option>
            <option>Long-term rental</option>
            <option>Primary or second home</option>
            <option>Still deciding</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Anything else we should know?</span>
          <textarea name="message" rows={4} className="rounded-md border border-brand-200 px-3 py-2" />
        </label>

        <button type="submit" className="btn-primary justify-self-start">
          Send my request
        </button>
      </form>
    </Section>
  );
}
