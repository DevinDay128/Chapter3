import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Chapter 3 Realty",
  description: "Call, email, or message Chapter 3 Realty in Myrtle Beach, SC.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Contact", href: "/contact" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>Contact Chapter 3 Realty</h1>
        <p className="mt-4 text-lg text-brand-800">
          Call, email, or send the form — we respond within one business day.
        </p>
      </header>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <address className="not-italic text-brand-800">
            <p className="font-semibold text-brand-900">{site.name}</p>
            <p>{site.nap.street}</p>
            <p>
              {site.nap.city}, {site.nap.region} {site.nap.postalCode}
            </p>
            <p className="mt-3">
              Phone:{" "}
              <a href={`tel:${site.nap.phone}`}>{site.nap.phoneDisplay}</a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${site.nap.email}`}>{site.nap.email}</a>
            </p>
          </address>
          <div className="mt-6">
            <h2 className="text-xl">Hours</h2>
            <ul className="mt-2 text-sm text-brand-800">
              {site.hours.map((h) => (
                <li key={h.days.join("-")}>
                  {h.days.join(", ")}: {h.opens} – {h.closes}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-brand-100 bg-brand-50">
            <iframe
              title="Chapter 3 Realty office map"
              src={`https://www.google.com/maps?q=${site.geo.latitude},${site.geo.longitude}&z=13&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm defaultIntent="Contact Page" />
      </div>
    </Section>
  );
}
