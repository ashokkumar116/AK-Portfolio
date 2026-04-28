/**
 * CASE STUDIES / PROJECTS
 * Add, remove, or reorder objects in this array to update the Projects section.
 * Each project appears as a card. Set `featured: true` on up to 2 projects.
 */
export const projects = [
  {
    /** Unique ID — used as React key, do not duplicate */
    id: "kubros-audit-tool",

    /** Display title shown on the card */
    title: "KuBros Audit Tool",

    /** Short one-line description shown in card preview */
    shortDesc: "AI-Powered Agency Operations Diagnosis System",

    /** Full problem statement for expanded view */
    problem:
      "Marketing agencies don't know where their operations are broken until a client complains.",

    /** What was built */
    solution:
      "Built a vertical-specific AI audit form that diagnoses operational chaos across 6 dimensions and generates a custom PDF report with prioritized fixes.",

    /** Measurable result */
    outcome:
      "Diagnoses operational gaps in under 8 minutes. Used as the entry point for every KuBros client conversation.",

    /** Tech tags — pulled from this array and displayed as mono chips */
    stack: ["React", "Node.js", "Claude API", "PostgreSQL", "Neon", "Zoho Mail"],

    /** Category badge shown on the card */
    category: "AI Tool",

    /** Links shown in project card footer */
    links: {
      demo: "https://yourlink.com",
      code: null,
    },

    /** Set to true to show this card first and with a featured treatment */
    featured: true,
  },
];
