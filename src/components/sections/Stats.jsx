import { stats } from "../../data/stats";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Stats() {
  return (
    <section id="stats" className="section-surface">
      <div className="container-main">
        <SectionHeader label="Numbers" title="At a Glance" center />

        <div className="divider-copper-center" style={{ marginBottom: "2.5rem" }} />

        <div className="grid-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 0.1}>
              <div className="stat-card">
                <p className="stat-number">
                  {stat.number}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </p>
                <p className="stat-label">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider-copper-center" style={{ marginTop: "2.5rem" }} />
      </div>
    </section>
  );
}
