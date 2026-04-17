import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { placeSchema } from "@/lib/schema";
import { neighborhoods } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = neighborhoods.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: `${n.name} Neighborhood Guide`,
    description: n.summary,
    alternates: { canonical: `/neighborhoods/${n.slug}` },
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = neighborhoods.find((x) => x.slug === slug);
  if (!n) notFound();
  const url = `${site.url}/neighborhoods/${n.slug}`;
  return (
    <>
      <JsonLd data={placeSchema({ name: n.name, description: n.summary, url })} />
      <Section>
        <Breadcrumbs
          trail={[
            { name: "Neighborhoods", href: "/neighborhoods" },
            { name: n.name, href: `/neighborhoods/${n.slug}` },
          ]}
        />
        <header className="mt-6 max-w-3xl">
          <h1>{n.name}</h1>
          <p className="mt-4 text-lg text-brand-800">{n.summary}</p>
        </header>
      </Section>
    </>
  );
}
