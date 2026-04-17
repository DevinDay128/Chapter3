import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.description,
          url,
          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,
          author: post.author,
        })}
      />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <article className="mt-6 max-w-prose">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            {post.category} · {post.readingMinutes} min read
          </p>
          <h1 className="mt-2">{post.title}</h1>
          <p className="mt-3 text-sm text-brand-700">
            Published {post.datePublished}
            {post.dateModified ? ` · Last updated ${post.dateModified}` : ""} · by{" "}
            <Link href="/about#founder">{post.author}</Link>
          </p>
          <p className="mt-6 text-lg text-brand-800">{post.description}</p>

          <div className="prose-chapter3 mt-6">
            <h2>Overview</h2>
            <p>
              This is an initial draft post stub. Final editorial content lands
              here — with original data, sub-market comps, and lender commentary.
            </p>

            <h2>Why this matters for Myrtle Beach investors</h2>
            <p>
              Every long-form guide in this blog ties back to the{" "}
              <Link href="/invest">Investor Hub</Link> and relevant calculators
              like <Link href="/invest/calculators/dscr">DSCR</Link> and{" "}
              <Link href="/invest/calculators/cap-rate">Cap Rate</Link>.
            </p>

            <h2>Related reading</h2>
            <ul>
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
