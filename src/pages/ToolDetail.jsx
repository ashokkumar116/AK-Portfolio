import { useParams, Link } from "react-router-dom";
import { demoTools } from "../data/demoTools";
import { Tag } from "../components/ui/Tag";
import { ProjectCarousel } from "../components/ui/ProjectCarousel";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ExternalLink, CheckCircle2, ArrowLeft, Users, Zap, Calendar } from "lucide-react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function ToolDetail() {
  const { id } = useParams();
  const tool = demoTools.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tool) {
    return (
      <div className="container-main pt-32 pb-20 text-center">
        <h1 className="section-title">Project Not Found</h1>
        <p className="mb-8">The project you are looking for does not exist.</p>
        <Link to="/all-tools" className="btn btn-primary">
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-20">
      {/* Detail Hero Section */}
      <section className="detail-hero">
        <div className="container-main">
          <ScrollReveal>
            <Link to="/all-tools" className="flex items-center gap-2 text-ink-muted hover:text-copper mb-8 transition-colors">
              <ArrowLeft size={18} />
              <span>Back to All Projects</span>
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Tag variant="copper">
                    {tool.category}
                  </Tag>
                  <span className="text-ink-subtle text-xs">•</span>
                  <span className="text-ink-muted text-xs uppercase tracking-widest">{tool.builtFor}</span>
                </div>
                <h1 className="section-title mb-2">{tool.title}</h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tool.stack.map((tech) => (
                    <Tag key={tech} variant="surface">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                {tool.demoUrl && (
                  <a
                    href={tool.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {/* <ExternalLink className="h-5 w-10" /> */}
                    Live Demo
                  </a>
                )}
                {tool.githubUrl && (
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-surface"
                  >
                    {/* <FaGithub /> */}
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          <div className="detail-grid">
            {/* Left Column: Carousel & Description */}
            <div className="detail-content">
              <ScrollReveal delay={0.2}>
                <div className="demo-preview-container mb-12">
                  <ProjectCarousel images={tool.images || [tool.previewImage]} autoScroll={true} />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="detail-section">
                  <h2>Project Overview</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    {tool.longDescription || tool.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="detail-section">
                  <h2 className="flex items-center gap-2">
                    <Users size={24} className="text-copper" />
                    Who is this built for?
                  </h2>
                  <div className="card-elevated border-l-4 border-l-copper">
                    <p className="text-ink leading-relaxed">
                      {tool.bestFor || "This solution is custom-built for businesses needing high-performance digital tools."}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Key Features & Stack */}
            <aside className="detail-sidebar">
              <ScrollReveal delay={0.4}>
                <div className="card-elevated">
                  <div className="detail-section">
                    <h2>Key Features</h2>
                    <ul className="feature-list">
                      {(tool.features || ["Fully responsive design", "Custom backend integration", "Optimized performance"]).map((feature, i) => (
                        <li key={i} className="feature-item">
                          <CheckCircle2 size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="my-8 border-dim" />

                  <div className="detail-section">
                    <h2>Development Context</h2>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <Zap size={18} className="text-copper" />
                        <div>
                          <span className="block text-xs uppercase tracking-widest text-ink-subtle">Status</span>
                          <span className={tool.status === "live" ? "text-success" : "text-warning"}>
                            {tool.status === "live" ? "Production Ready" : "In Development"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-copper" />
                        <div>
                          <span className="block text-xs uppercase tracking-widest text-ink-subtle">Timeline</span>
                          <span className="text-ink">{tool.timeline || "4-6 Weeks"}</span>
                        </div>
                      </div>
                      {/* <div>
                        <span className="block text-xs uppercase tracking-widest text-ink-subtle mb-1">My Role</span>
                        <span className="text-ink">{tool.role || "Full-Stack Developer"}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Sticky Mini CTA */}
              <ScrollReveal delay={0.5}>
                <div className="card-glow mt-6 text-center">
                  <h3 className="mb-4 text-ink">Need a similar solution?</h3>
                  <Link to="/book-audit" className="btn btn-primary w-full">
                    Book an Audit Call
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-surface-2 mt-20">
        <div className="container-main text-center">
          <ScrollReveal>
            <h2 className="section-title mb-4">Let's Build Your Command Center</h2>
            <p className="section-subtitle mx-auto mb-8">
              If you're impressed by {tool.title}, imagine what we could build together for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-audit" className="btn btn-primary btn-lg">
                Book My Free Audit
              </Link>
              <Link to="/all-tools" className="btn btn-secondary btn-lg">
                Explore More Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
