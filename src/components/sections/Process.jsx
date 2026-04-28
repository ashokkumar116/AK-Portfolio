import { processSteps } from "../../data/process";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Process() {
  return (
    <section id="process" className="section-surface">
      <div className="container-main">
        <div className="grid-2">
          <div>
            <SectionHeader label="Process" title="How I Work" />
            <p>A clear, repeatable process means you're never guessing what's happening or when. Every engagement follows this path — no exceptions, no ambiguity.</p>
          </div>
          <div className="process-list">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.12}>
                <div className="process-step">
                  <div className="process-number">{step.id}</div>
                  <div className="process-content">
                    <h3 className="process-title">{step.title}</h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-2xs)", color: "var(--color-ink-subtle)", letterSpacing: "var(--letter-spacing-wider)", textTransform: "uppercase" }}>{step.duration}</span>
                    <p className="process-body" style={{ marginTop: "0.5rem" }}>{step.description}</p>
                    <span className="process-output">{step.output}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
