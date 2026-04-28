/**
 * PERSONAL INFORMATION
 * Edit this file to update all personal details across the portfolio.
 */
export const personal = {
  /** Your full name — appears in nav logo, about section, footer */
  name: "Ashok Kumar",

  /** Short label shown under name in nav or hero — keep under 4 words */
  role: "Digital Systems Builder",

  /** Location string — shown in hero label */
  location: "Ariyalur, India",

  /** Hero section tagline — the main H1. Use \n for line breaks if needed */
  tagline: "I build the digital\ninfrastructure your\nbusiness runs on.",

  /** Hero subheadline — 1-2 sentences max */
  subHeadline:
    "Custom websites, internal tools, and automation systems for marketing agencies and growing Indian businesses.",

  /** 2–3 paragraph bio for the About section. Each string = one paragraph */
  bio: [
    "I'm Ashok Kumar — a full-stack developer from Tamil Nadu building digital systems for Indian businesses.",
    "I started building software to solve real problems, not to win design awards. That orientation shapes everything I build: the measure of success is whether it works for the person using it.",
    "Right now I'm building KuBros with my brother — a Digital Systems & Automation Company for Indian agencies and SMEs. This portfolio is where I show the work we're capable of.",
  ],

  /** CTA text and link for the primary hero button */
  heroCTA: {
    primary:   { label: "See My Work",       href: "#demos" },
    secondary: { label: "Book a Free Audit", href: "#contact" },
  },

  /** Social links — set href to null to hide */
  socials: {
    instagram: "https://instagram.com/ashokkubros",
    github:    "https://github.com/yourusername",
    linkedin:  null,
    twitter:   null,
  },

  /** Contact / booking details */
  contact: {
    email:        "hello@kubros.in",
    calendarLink: "https://cal.com/yourlink",
    whatsapp:     null,
  },

  /** How many new projects you take per month — shown in CTA scarcity note */
  availableSlots: 2,
};
