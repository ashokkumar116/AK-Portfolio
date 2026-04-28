import { projects } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ExternalLink, Code2 } from "lucide-react";

export function CaseStudies() {
  const sorted = [...projects].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

  return (
    <section id="case-studies" className="section">
      <div className="container-main">
        <SectionHeader label="Case Studies" title="Built to Solve, Not to Impress" subtitle="Each project started with a real business problem." />
        {sorted.length === 0 ? (
          <div className="callout"><span>Projects are being built live. Check the Demo Tools section above for working software you can try right now.</span></div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {sorted.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <article className="project-card">
                  <div className="project-thumbnail">
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(184,115,51,0.05) 9px, rgba(184,115,51,0.05) 10px), repeating-linear-gradient(-45deg, transparent, transparent 9px, rgba(184,115,51,0.05) 9px, rgba(184,115,51,0.05) 10px)" }} />
                    <div aria-hidden="true" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-lg)", border: "var(--border-mid)", background: "var(--color-copper-glow)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "var(--font-size-2xl)", color: "var(--color-copper)" }}>{project.title.charAt(0)}</div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-2xs)", color: "var(--color-ink-subtle)", letterSpacing: "var(--letter-spacing-wider)", textTransform: "uppercase" }}>{project.category}</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-tag-row">
                      <Tag>{project.category}</Tag>
                      {project.stack.slice(0, 4).map((tech) => (<Tag key={tech} variant="ink">{tech}</Tag>))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <div className="project-meta-row"><span className="project-meta-key">Problem</span><span className="project-meta-val">{project.problem}</span></div>
                      <div className="project-meta-row"><span className="project-meta-key">Solution</span><span className="project-meta-val">{project.solution}</span></div>
                      <div className="project-meta-row"><span className="project-meta-key">Outcome</span><span className="project-meta-val">{project.outcome}</span></div>
                    </div>
                    <div className="project-links">
                      {project.links.demo && <Button variant="primary" size="sm" href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} demo`}><ExternalLink size={14} /> Live Demo</Button>}
                      {project.links.code && <Button variant="ghost" size="sm" href={project.links.code} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code`}><Code2 size={14} /> Code</Button>}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
