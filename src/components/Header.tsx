import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { label: "Invest", href: "/invest" },
  { label: "Buyers", href: "/buyers" },
  { label: "Sellers", href: "/sellers" },
  { label: "Tools", href: "/invest/grand-investor-tool" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-brand-900">
          <span aria-hidden className="inline-block h-8 w-8 rounded-full bg-brand-700 text-center leading-8 text-white">
            3
          </span>
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-brand-800">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-brand-600" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="rounded-md bg-brand-700 px-3 py-2 text-white hover:bg-brand-600"
                href={site.cincUrl}
                rel="noopener"
              >
                Search Listings
              </a>
            </li>
          </ul>
        </nav>
        <a
          className="md:hidden rounded-md bg-brand-700 px-3 py-2 text-sm font-semibold text-white"
          href={`tel:${site.nap.phone}`}
        >
          Call
        </a>
      </div>
    </header>
  );
}
