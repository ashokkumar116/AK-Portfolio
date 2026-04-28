/**
 * TECH STACK
 * Grouped by category. Add or remove items freely.
 * The section renders each category as a labeled group of chips.
 */
export const techStack = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Zustand", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Neon", "Drizzle ORM"],
  },
  {
    category: "Infrastructure",
    items: ["Netlify", "Render", "Cloudinary", "Zoho Mail SMTP"],
  },
  {
    category: "Integrations",
    items: ["Claude API", "Meta Ads API", "Google Analytics API", "Razorpay"],
  },
  {
    category: "Currently Exploring",
    items: ["AWS EC2", "Docker", "Redis", "Next.js"],
    /** Set muted: true to render these chips in the .stack-chip-exploring style */
    muted: true,
  },
];
