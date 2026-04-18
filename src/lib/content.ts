export const subMarkets = [
  {
    slug: "north-myrtle-beach",
    name: "North Myrtle Beach",
    lat: 33.8160,
    lon: -78.6800,
    summary:
      "Family-oriented STR market with strong shoulder-season demand, Cherry Grove oceanfront, and restrictive permit rules relative to Myrtle Beach proper.",
  },
  {
    slug: "surfside",
    name: "Surfside Beach",
    lat: 33.6067,
    lon: -78.9714,
    summary:
      "'The Family Beach' — smaller oceanfront inventory, strict rental overlay districts, and steady rental performance for single-family homes.",
  },
  {
    slug: "garden-city",
    name: "Garden City",
    lat: 33.5838,
    lon: -78.9978,
    summary:
      "High STR demand, mix of oceanfront condos and beach boxes, pier-driven tourism, and competitive ADR in summer months.",
  },
  {
    slug: "murrells-inlet",
    name: "Murrells Inlet",
    lat: 33.5515,
    lon: -79.0317,
    summary:
      "MarshWalk lifestyle, Wacca Wache marina access, fewer STR permits, stronger long-term-rental yields than beach-adjacent zips.",
  },
  {
    slug: "pawleys-island",
    name: "Pawleys Island",
    lat: 33.4321,
    lon: -79.1320,
    summary:
      "Historic, regulated island — low STR density, premium ADR for permitted rentals, plantation-adjacent investor plays on the mainland.",
  },
  {
    slug: "conway",
    name: "Conway",
    lat: 33.8360,
    lon: -79.0478,
    summary:
      "Workforce housing, long-term-rental cashflow, and new construction growth tied to Coastal Carolina University and Hwy 501 corridor.",
  },
  {
    slug: "carolina-forest",
    name: "Carolina Forest",
    lat: 33.7650,
    lon: -78.9670,
    summary:
      "Planned-community master subdivisions, primary-residence buyer depth, and reliable long-term-rental performance.",
  },
  {
    slug: "little-river",
    name: "Little River",
    lat: 33.8791,
    lon: -78.6370,
    summary:
      "Intracoastal access, casino-boat tourism, golf communities, and pockets of Horry County STR allowance.",
  },
] as const;

export type SubMarket = (typeof subMarkets)[number];

export const calculators = [
  {
    slug: "vacation-rental-roi",
    name: "Vacation Rental ROI",
    blurb: "Revenue, expenses, and ROI for Myrtle Beach STR properties.",
  },
  {
    slug: "cap-rate",
    name: "Cap Rate",
    blurb: "Net operating income over purchase price — instant cap rate.",
  },
  {
    slug: "cash-on-cash",
    name: "Cash-on-Cash Return",
    blurb: "Annual cash flow divided by cash invested.",
  },
  {
    slug: "break-even-occupancy",
    name: "Break-Even Occupancy",
    blurb: "Minimum STR occupancy needed to service expenses.",
  },
  {
    slug: "dscr",
    name: "DSCR",
    blurb: "Debt service coverage ratio for investor loans.",
  },
  {
    slug: "1031-timeline",
    name: "1031 Timeline",
    blurb: "45-day identification and 180-day close deadlines.",
  },
] as const;

export type Calculator = (typeof calculators)[number];

export const neighborhoods = [
  {
    slug: "market-common",
    name: "Market Common",
    summary:
      "Walkable, mixed-use neighborhood on the former Myrtle Beach Air Force Base with condos, townhomes, and single-family.",
  },
  {
    slug: "carolina-forest",
    name: "Carolina Forest",
    summary:
      "Master-planned communities with schools, amenities, and strong primary-residence demand.",
  },
  {
    slug: "barefoot-resort",
    name: "Barefoot Resort",
    summary:
      "Gated golf community in North Myrtle Beach with Intracoastal access and a mix of condos and single-family.",
  },
  {
    slug: "grande-dunes",
    name: "Grande Dunes",
    summary:
      "Premier Atlantic Coast community with a marina, golf, and a mix of oceanfront and Intracoastal homes.",
  },
] as const;

export const buildings = [
  {
    slug: "ocean-creek",
    name: "Ocean Creek Resort",
    address: "10600 North Kings Hwy, Myrtle Beach, SC",
    summary: "57-acre oceanfront resort with on-site rental program and mixed unit types.",
  },
  {
    slug: "kingston-plantation",
    name: "Kingston Plantation (Royale Palms / Brighton / Margate)",
    address: "9800 Queensway Blvd, Myrtle Beach, SC",
    summary: "Master-planned oceanfront community with Hilton-managed rental programs.",
  },
  {
    slug: "horizon-at-77th",
    name: "Horizon at 77th",
    address: "7700 N Ocean Blvd, Myrtle Beach, SC",
    summary: "Oceanfront condo-tel with strong owner-occupancy and consistent STR performance.",
  },
  {
    slug: "bay-view-resort",
    name: "Bay View Resort",
    address: "504 N Ocean Blvd, Myrtle Beach, SC",
    summary: "Boardwalk-adjacent oceanfront tower popular with walk-to-everything renters.",
  },
] as const;

export const blogPosts = [
  {
    slug: "myrtle-beach-str-market-report-q1",
    title: "Myrtle Beach STR Market Report — Q1",
    description:
      "Occupancy, ADR, and RevPAR across the eight Grand Strand sub-markets, with YoY comparisons and takeaways.",
    datePublished: "2026-04-01",
    dateModified: "2026-04-10",
    author: "Devin Day",
    category: "Market Updates",
    readingMinutes: 12,
  },
  {
    slug: "str-regulations-grand-strand-guide",
    title: "STR Regulations Across the Grand Strand",
    description:
      "A municipality-by-municipality breakdown of short-term rental permits, zoning overlays, and enforcement.",
    datePublished: "2026-03-18",
    author: "Devin Day",
    category: "STR Regulations",
    readingMinutes: 18,
  },
  {
    slug: "dscr-loans-for-oceanfront-condos",
    title: "DSCR Loans for Oceanfront Condos: What Actually Qualifies",
    description:
      "Not every oceanfront condo in Myrtle Beach is DSCR-eligible. Here's how lenders evaluate condotels versus warrantable condos.",
    datePublished: "2026-03-05",
    author: "Devin Day",
    category: "Financing",
    readingMinutes: 9,
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];
