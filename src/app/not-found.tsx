import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-prose">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
          404
        </p>
        <h1 className="mt-2">That page has drifted out to sea.</h1>
        <p className="mt-4 text-lg text-brand-800">
          The URL you requested isn't on chapter3realty.com. Try one of these:
        </p>
        <ul className="mt-6 list-disc pl-6">
          <li><Link href="/">Homepage</Link></li>
          <li><Link href="/invest">Investor Hub</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </Section>
  );
}
