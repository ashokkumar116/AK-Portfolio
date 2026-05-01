import { Link } from "react-router-dom";
import { demoTools } from "../../data/demoTools";
import { SectionHeader } from "../ui/SectionHeader";
import { Tag } from "../ui/Tag";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ProjectCarousel } from "../ui/ProjectCarousel";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

/**
 * DemoTools — The most important section. Working software proof-of-work.
 */
export function DemoTools() {
  // Show only featured tools on the home page
  const featuredTools = demoTools.filter(tool => tool.featured);

  return (
    <section id="demos" className="section-surface">
      <div className="container-main">
        <SectionHeader
          label="Demo Projects"
          title="Working Software, Not Mockups"
        />

        {/* Demo cards grid */}
        <div className="grid-3">
          {featuredTools.map((tool, i) => {
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

                  <Link to={`/tool/${tool.id}`} className="demo-preview-link">
                    {tool.images && tool.images.length > 0 ? (
                      <ProjectCarousel images={tool.images} autoScroll={true} interval={4000} />
                    ) : tool.previewImage ? (
                      <img src={tool.previewImage} alt={tool.title} className="demo-preview" />
                    ) : (
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
                      </div>
                    )}
                  </Link>

                  {/* Body */}
                  <div className="demo-body">
                    <Link to={`/tool/${tool.id}`}>
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
                    </Link>
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
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        {isLive && <span className="demo-live-badge">Live</span>}
                        {isComingSoon && <Tag variant="warning">In Development</Tag>}
                      </div>
                      
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <Link to={`/tool/${tool.id}`} className="btn-arrow">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Button */}
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <ScrollReveal delay={0.4}>
            <Link to="/all-tools" className="btn btn-secondary btn-lg">
              View All Projects
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
