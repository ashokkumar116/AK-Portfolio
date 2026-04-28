import { techStack } from "../../data/techStack";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container-main">
        <SectionHeader label="Tech Stack" title="Tools I Build With" />

        <ScrollReveal>
          <div className="stack-statement">
            I build with production-grade tools, not drag-and-drop builders. Every project is custom-coded, version-controlled, and deployable in a way that you actually own. No Wix. No Squarespace. No lock-in.
          </div>
        </ScrollReveal>

        {techStack.map((group, gi) => (
          <ScrollReveal key={group.category} delay={gi * 0.08}>
            <div className="stack-category">
              <p className="stack-category-label">{group.category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((item) => (
                  <span key={item} className={group.muted ? "stack-chip stack-chip-exploring" : "stack-chip"}>{item}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
