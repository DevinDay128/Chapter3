import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  const full = [{ name: "Home", href: "/" }, ...trail];
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          full.map((t) => ({ name: t.name, url: `${site.url}${t.href}` })),
        )}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-brand-700">
        <ol className="flex flex-wrap items-center gap-1">
          {full.map((item, i) => {
            const last = i === full.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="text-brand-900">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-brand-500">
                      {item.name}
                    </Link>
                    <span aria-hidden>/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
