export const site = {
  name: "Chapter 3 Realty",
  legalName: "Chapter 3 Realty, LLC",
  domain: "chapter3realty.com",
  url: "https://chapter3realty.com",
  tagline: "Myrtle Beach's investor-focused, full-service real estate brokerage.",
  description:
    "Chapter 3 Realty is the investor-focused, full-service brokerage serving Myrtle Beach, North Myrtle Beach, and the Grand Strand. Vacation rental analysis, DSCR loans, STR regulations, and buyer/seller representation.",
  nap: {
    street: "1234 Ocean Blvd, Suite 200",
    city: "Myrtle Beach",
    region: "SC",
    postalCode: "29577",
    country: "US",
    phone: "+1-843-555-0123",
    phoneDisplay: "(843) 555-0123",
    email: "hello@chapter3realty.com",
  },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" },
    { days: ["Sunday"], opens: "11:00", closes: "15:00" },
  ],
  geo: {
    latitude: 33.6891,
    longitude: -78.8867,
  },
  serviceArea: [
    "Myrtle Beach",
    "North Myrtle Beach",
    "Surfside Beach",
    "Garden City",
    "Murrells Inlet",
    "Pawleys Island",
    "Conway",
    "Carolina Forest",
    "Little River",
  ],
  social: {
    facebook: "https://www.facebook.com/chapter3realty",
    linkedin: "https://www.linkedin.com/company/chapter3realty",
    biggerpockets: "https://www.biggerpockets.com/users/chapter3realty",
    youtube: "https://www.youtube.com/@chapter3realty",
    instagram: "https://www.instagram.com/chapter3realty",
  },
  cincUrl: "https://search.chapter3realty.com",
  founder: {
    name: "Devin Day",
    role: "Founder & Broker-in-Charge",
    license: "SC Real Estate License #00000000",
    bio: "Devin Day founded Chapter 3 Realty to bring data-driven investor representation to the Grand Strand market.",
  },
  partners: {
    mortgage: {
      name: "BrickWood Mortgage",
      url: "https://brickwoodmortgage.com",
      relationship: "Affiliated Business Arrangement (AfBA)",
    },
  },
} as const;

export type Site = typeof site;
