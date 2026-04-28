import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    text: "\"We use 6 tools and none of them talk to each other. Every Monday starts with an hour of copy-pasting data.\"",
  },
  {
    icon: Clock,
    text: "\"I spend more time managing operations than doing the actual work my clients pay me for.\"",
  },
  {
    icon: DollarSign,
    text: "\"We tried a no-code tool but it broke the moment we tried to customize anything.\"",
  },
];

const BEFORE_ITEMS = [
  "Scattered tools that don't sync",
  "Manual reporting every week",
  "No system for client onboarding",
  "Founder = the entire process",
];

const AFTER_ITEMS = [
  "One dashboard, one source of truth",
  "Auto-generated reports in seconds",
  "Clients onboard themselves",
  "Systems run without you",
];

/**
 * Problem — Pain cards + Before/After comparison.
 */
export function Problem() {
  return (
    <section id="problem" className="section-surface">
      <div className="container-main">
        <SectionHeader
          label="The Problem"
          title="Sound familiar?"
          subtitle="These are real quotes from the founders I talk to every week."
        />

        {/* Pain cards */}
        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {PAIN_POINTS.map((pain, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="pain-card">
                <div className="pain-card-icon">
                  <pain.icon size={18} />
                </div>
                <p className="pain-card-text">{pain.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Before / After */}
        <ScrollReveal delay={0.2}>
          <div className="before-after">
            <div className="before-col">
              <p className="before-col-label">Before</p>
              {BEFORE_ITEMS.map((item, i) => (
                <div key={i} className="before-item">{item}</div>
              ))}
            </div>
            <div className="after-col">
              <p className="after-col-label">After</p>
              {AFTER_ITEMS.map((item, i) => (
                <div key={i} className="after-item">{item}</div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
