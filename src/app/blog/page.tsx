import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chapter 3 Realty Blog",
  description:
    "Market updates, investor guides, buyer and seller guides, building spotlights, STR regulations, and financing notes.",
  alternates: { canonical: "/blog" },
};

const categories = [
  "Market Updates",
  "Investor Guides",
  "Buyer Guides",
  "Seller Guides",
  "Building Spotlights",
  "STR Regulations",
  "Financing",
];

export default function BlogIndex() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Blog", href: "/blog" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>The Chapter 3 blog</h1>
        <p className="mt-4 text-lg text-brand-800">
          One blog, seven categories, two investor-focused posts per week.
        </p>
      </header>

      <ul className="mt-6 flex flex-wrap gap-2 text-sm">
        {categories.map((c) => (
          <li key={c} className="rounded-full border border-brand-200 px-3 py-1 text-brand-700">
            {c}
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
              {p.category} · {p.readingMinutes} min read
            </p>
            <h2 className="mt-2 text-xl">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-brand-800">{p.description}</p>
            <p className="mt-3 text-xs text-brand-600">
              Published {p.datePublished} · by {p.author}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
