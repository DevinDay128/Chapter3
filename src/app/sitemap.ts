import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  subMarkets,
  calculators,
  neighborhoods,
  buildings,
  blogPosts,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/invest",
    "/invest/grand-investor-tool",
    "/invest/calculators",
    "/invest/sub-markets",
    "/invest/buildings",
    "/invest/str-regulations",
    "/invest/market-report",
    "/buyers",
    "/sellers",
    "/neighborhoods",
    "/blog",
    "/about",
    "/team",
    "/contact",
    "/schedule",
    "/free-investment-analysis",
    "/home-valuation",
    "/resources",
    "/resources/financing",
    "/resources/moving-to-myrtle-beach",
    "/privacy",
    "/terms",
    "/afba-disclosure",
    "/fair-housing",
    "/licensing",
    "/accessibility",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicEntries: MetadataRoute.Sitemap = [
    ...subMarkets.map((m) => ({
      url: `${site.url}/invest/sub-markets/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...calculators.map((c) => ({
      url: `${site.url}/invest/calculators/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...neighborhoods.map((n) => ({
      url: `${site.url}/neighborhoods/${n.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...buildings.map((b) => ({
      url: `${site.url}/invest/buildings/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified ?? p.datePublished),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticEntries, ...dynamicEntries];
}
