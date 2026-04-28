import { demoTools } from "../../data/demoTools";
import { SectionHeader } from "../ui/SectionHeader";
import { Tag } from "../ui/Tag";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ExternalLink } from "lucide-react";

/**
 * DemoTools — The most important section. Working software proof-of-work.
 */
export function DemoTools() {
  return (
    <section id="demos" className="section-surface">
      <div className="container-main">
        <SectionHeader
          label="Demo Tools"
          title="Working Software, Not Mockups"
        />

        {/* Intro text */}
        <ScrollReveal>
          <div style={{ maxWidth: "55ch", marginBottom: "3rem" }}>
            <p style={{ marginBottom: "0.75rem" }}>
              I don't show mockups. I show working software.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              Every tool below was built for a real operational problem.
            </p>
            <p>
              If you're looking at one and thinking "we need this" — that's
              exactly the conversation I want to have.
            </p>
          </div>
        </ScrollReveal>

        {/* Demo cards grid */}
        <div className="grid-3">
          {demoTools.map((tool, i) => {
            const isLive = tool.status === "live";
            const isComingSoon = tool.status === "coming-soon";

            return (
              <ScrollReveal key={tool.id} delay={i * 0.12}>
                <div
                  className="demo-card"
                  style={{ opacity: isComingSoon ? 0.6 : 1 }}
                >
                  {/* Browser chrome */}
                  <div className="browser-chrome">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-url">
                      tool.kubros.in/{tool.id}
                    </span>
                  </div>

                  {/* Preview area with CSS wireframe pattern */}
                  <div className="demo-preview">
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `
                          repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(184,115,51,0.06) 19px, rgba(184,115,51,0.06) 20px),
                          repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(184,115,51,0.06) 19px, rgba(184,115,51,0.06) 20px)
                        `,
                      }}
                    />
                    {/* Abstract wireframe shapes */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        padding: "1.5rem",
                        width: "100%",
                      }}
                    >
                      {/* Fake header bar */}
                      <div
                        style={{
                          height: "8px",
                          width: "60%",
                          background: "var(--color-copper-dim)",
                          borderRadius: "var(--radius-sm)",
                        }}
                      />
                      <div
                        style={{
                          height: "6px",
                          width: "40%",
                          background: "rgba(228,221,212,0.08)",
                          borderRadius: "var(--radius-sm)",
                        }}
                      />
                      {/* Fake content blocks */}
                      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                        <div
                          style={{
                            flex: 1,
                            height: "48px",
                            background: "rgba(228,221,212,0.04)",
                            border: "var(--border-dim)",
                            borderRadius: "var(--radius-sm)",
                          }}
                        />
                        <div
                          style={{
                            flex: 1,
                            height: "48px",
                            background: "rgba(228,221,212,0.04)",
                            border: "var(--border-dim)",
                            borderRadius: "var(--radius-sm)",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "32px",
                          width: "50%",
                          background: "var(--color-copper-glow)",
                          border: "var(--border-dim)",
                          borderRadius: "var(--radius-md)",
                          marginTop: "0.25rem",
                        }}
                      />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="demo-body">
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--font-size-lg)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--color-ink)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {tool.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--font-size-sm)",
                        color: "var(--color-ink-muted)",
                        lineHeight: "var(--line-height-relaxed)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {tool.description}
                    </p>

                    <Tag variant="surface">Built for: {tool.builtFor}</Tag>

                    <div className="demo-stack">
                      {tool.stack.map((tech) => (
                        <Tag key={tech} variant="ink">{tech}</Tag>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "1.25rem",
                        paddingTop: "1rem",
                        borderTop: "var(--border-dim)",
                      }}
                    >
                      {isLive && (
                        <>
                          <span className="demo-live-badge">Live</span>
                          <a
                            href={tool.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-arrow"
                            aria-label={`Try ${tool.title} live`}
                          >
                            Try it Live
                          </a>
                        </>
                      )}
                      {isComingSoon && (
                        <Tag variant="warning">In Development</Tag>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
