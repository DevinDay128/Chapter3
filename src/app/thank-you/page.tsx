import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <Section>
      <div className="max-w-prose">
        <h1>Thank you — your message is in.</h1>
        <p className="mt-4 text-lg text-brand-800">
          We respond within one business day. Feel free to keep exploring.
        </p>
        <ul className="mt-6 list-disc pl-6">
          <li><Link href="/invest">Investor Hub</Link></li>
          <li><Link href="/invest/grand-investor-tool">Grand Investor Tool</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
    </Section>
  );
}
