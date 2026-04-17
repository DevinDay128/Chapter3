import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-brand-100 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl text-white">{site.name}</div>
          <address className="not-italic mt-3 text-sm leading-6">
            {site.nap.street}
            <br />
            {site.nap.city}, {site.nap.region} {site.nap.postalCode}
            <br />
            <a href={`tel:${site.nap.phone}`} className="hover:text-white">
              {site.nap.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.nap.email}`} className="hover:text-white">
              {site.nap.email}
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Invest</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/invest">Investor Hub</Link></li>
            <li><Link href="/invest/grand-investor-tool">Grand Investor Tool</Link></li>
            <li><Link href="/invest/calculators">Calculators</Link></li>
            <li><Link href="/invest/str-regulations">STR Regulations</Link></li>
            <li><Link href="/invest/market-report">Market Report</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/buyers">Buyers</Link></li>
            <li><Link href="/sellers">Sellers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={site.social.facebook} rel="noopener">Facebook</a></li>
            <li><a href={site.social.linkedin} rel="noopener">LinkedIn</a></li>
            <li><a href={site.social.biggerpockets} rel="noopener">BiggerPockets</a></li>
            <li><a href={site.social.youtube} rel="noopener">YouTube</a></li>
            <li><a href={site.social.instagram} rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-brand-200 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved. Equal Housing Opportunity.
            {" "}
            {site.founder.license}.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/afba-disclosure">AfBA Disclosure</Link></li>
            <li><Link href="/fair-housing">Fair Housing</Link></li>
            <li><Link href="/licensing">Licensing</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
