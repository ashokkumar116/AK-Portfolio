/**
 * SERVICE TIERS / OFFER STACK
 * Controls the Services section. Each object = one pricing tier card.
 * Set featured: true on the tier you want highlighted.
 */
export const services = [
  {
    id: "digital-presence",
    tier: "Tier 1",
    name: "Digital Presence",
    priceRange: "₹5,000 – ₹22,000",
    priceNote: "one-time",
    tagline: "Fast, clean, conversion-focused website.",
    deliveryTime: "10–14 days",
    features: [
      "Landing page or multi-page site",
      "Mobile-first, responsive design",
      "SEO foundation + analytics setup",
      "Contact form + WhatsApp CTA",
    ],
    bestFor: "Agencies, consultants, and coaches needing a credible digital home.",
    cta: { label: "Start Here →", href: "#contact" },
    featured: false,
  },
  {
    id: "internal-tools",
    tier: "Tier 2",
    name: "Internal Tools & Dashboards",
    priceRange: "₹35,000 – ₹80,000",
    priceNote: "one-time + ₹8,000/month support",
    tagline: "Custom-built operational tools for your business.",
    deliveryTime: "4–6 weeks",
    features: [
      "Client portals & approval workflows",
      "Reporting dashboards",
      "Custom CRM / pipeline tracker",
      "WhatsApp & email integration",
    ],
    bestFor: "Agencies with 5+ clients managing operations on spreadsheets.",
    cta: { label: "Let's Scope It →", href: "#contact" },
    featured: true,
  },
  {
    id: "full-systems",
    tier: "Tier 3",
    name: "Full Systems Build",
    priceRange: "₹1,00,000 – ₹2,50,000",
    priceNote: "one-time + ₹15,000/month retainer",
    tagline: "End-to-end digital infrastructure.",
    deliveryTime: "8–12 weeks",
    features: [
      "Website + internal tools + automation",
      "Full workflow documentation",
      "Team onboarding + training",
      "Ongoing management & iteration",
    ],
    bestFor: "Businesses ready to remove themselves from daily operational chaos.",
    cta: { label: "Apply for This →", href: "#contact" },
    featured: false,
  },
];
