import { site } from "./site";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    email: site.nap.email,
    telephone: site.nap.phone,
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.nap.phone,
        contactType: "customer service",
        areaServed: "US-SC",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${site.url}#localbusiness`,
    name: site.name,
    image: `${site.url}/og-image.jpg`,
    url: site.url,
    telephone: site.nap.phone,
    email: site.nap.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.nap.street,
      addressLocality: site.nap.city,
      addressRegion: site.nap.region,
      postalCode: site.nap.postalCode,
      addressCountry: site.nap.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(site.social),
  };
}

export function realEstateAgentSchema(opts: {
  name: string;
  role: string;
  license: string;
  bio: string;
  url: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: opts.name,
    jobTitle: opts.role,
    description: opts.bio,
    url: opts.url,
    identifier: opts.license,
    worksFor: { "@id": `${site.url}#organization` },
    sameAs: Object.values(site.social),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Person", name: opts.author },
    publisher: { "@id": `${site.url}#organization` },
    image: opts.image ?? `${site.url}/og-image.jpg`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webApplicationSchema(opts: {
  name: string;
  description: string;
  url: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function placeSchema(opts: {
  name: string;
  description: string;
  url: string;
  latitude?: number;
  longitude?: number;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.latitude && opts.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: opts.latitude,
            longitude: opts.longitude,
          },
        }
      : {}),
  };
}

export function realEstateListingSchema(opts: {
  name: string;
  description: string;
  url: string;
  address: string;
  priceRange?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: opts.address,
      addressLocality: site.nap.city,
      addressRegion: site.nap.region,
      addressCountry: site.nap.country,
    },
  };
}

export function toJsonLd(data: Json | Json[]): string {
  return JSON.stringify(data);
}
