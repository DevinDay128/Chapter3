import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description: "Book a 30-minute consultation with Chapter 3 Realty.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Schedule", href: "/schedule" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Schedule a consultation</h1>
        <p className="mt-4 text-lg text-brand-800">
          Pick a 30-minute slot on the calendar. We confirm by email within
          minutes and send a Zoom link or in-office confirmation.
        </p>
      </header>
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl border border-brand-100 bg-brand-50">
        {/* Replace src with your Calendly embed once connected. */}
        <iframe
          title="Calendly booking embed"
          src="about:blank"
          className="h-full w-full"
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-sm text-brand-700">
        Calendly embed activates after production setup. Meanwhile, email{" "}
        <a href="mailto:hello@chapter3realty.com">hello@chapter3realty.com</a>.
      </p>
    </Section>
  );
}
