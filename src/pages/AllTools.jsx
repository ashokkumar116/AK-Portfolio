import { useState } from "react";
import { Link } from "react-router-dom";
import { demoTools } from "../data/demoTools";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ProjectCarousel } from "../components/ui/ProjectCarousel";
import { Search, ArrowLeft } from "lucide-react";

export default function AllTools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(demoTools.map((tool) => tool.category))];

  const filteredTools = demoTools.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-24 pb-20">
      <section className="section">
        <div className="container-main">
          <ScrollReveal>
            <Link to="/" className="flex items-center gap-2 text-ink-muted hover:text-copper mb-8 transition-colors">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </ScrollReveal>

          <SectionHeader
            label="Portfolio"
            title="All Proof-of-Work Projects"
          />

          {/* Search & Filters */}
          <ScrollReveal delay={0.1}>
            <div className="filter-container">
              <div className="search-wrapper">
                <Search className="search-icon" size={18} />
                <input 
                  type="text" 
                  placeholder="Search projects, tech, or features..." 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="category-filters">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {filteredTools.length > 0 ? (
            <div className="grid-3">
              {filteredTools.map((tool, i) => {
                const isLive = tool.status === "live";
                const isComingSoon = tool.status === "coming-soon";

                return (
                  <ScrollReveal key={tool.id} delay={i * 0.05}>
                    <div
                      className="demo-card"
                      style={{ opacity: isComingSoon ? 0.6 : 1 }}
                    >
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
                          <div className="demo-preview" />
                        )}
                      </Link>

                      <div className="demo-body">
                        <div className="flex justify-between items-start mb-2">
                          <Tag variant="copper" className="text-[10px] py-0.5 px-2">
                            {tool.category}
                          </Tag>
                        </div>
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
                          
                          <Link to={`/tool/${tool.id}`} className="btn-arrow">
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-ink-muted text-lg">No projects found matching your search.</p>
              <button 
                className="btn btn-secondary btn-sm mt-4"
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
