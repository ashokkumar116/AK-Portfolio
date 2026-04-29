/**
 * TECH STACK
 * Grouped by category. Add or remove items freely.
 * The section renders each category as a labeled group of chips.
 */
export const techStack = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Docker", "Netlify", "Render", "Cloudinary", "Zoho Mail SMTP"],
  },
  {
    category: "Integrations",
    items: ["Claude API", "Meta Ads API", "Google Analytics API", "Razorpay"],
  },
  {
    category: "Currently Exploring",
    items: [ "Redis", "Next.js"],
    /** Set muted: true to render these chips in the .stack-chip-exploring style */
    muted: true,
  },
];
