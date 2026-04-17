import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Chapter 3 Team",
  description: "Meet the team behind Chapter 3 Realty.",
  alternates: { canonical: "/team" },
};

const team = [
  {
    name: site.founder.name,
    role: site.founder.role,
    bio: site.founder.bio,
  },
  {
    name: "Timmy",
    role: "Agent",
    bio: "Working alongside Devin on investor and primary-residence transactions across the Grand Strand.",
  },
];

export default function TeamPage() {
  return (
    <Section>
      <Breadcrumbs trail={[{ name: "Team", href: "/team" }]} />
      <header className="mt-6 max-w-3xl">
        <h1>The team</h1>
        <p className="mt-4 text-lg text-brand-800">
          A small, focused team today, with clear plans to grow carefully.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {team.map((m) => (
          <article
            key={m.name}
            className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl">{m.name}</h2>
            <p className="text-sm text-brand-600">{m.role}</p>
            <p className="mt-3 text-sm text-brand-800">{m.bio}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-brand-700">
        Interested in joining?{" "}
        <Link href="/contact">Reach out</Link>.
      </p>
    </Section>
  );
}
