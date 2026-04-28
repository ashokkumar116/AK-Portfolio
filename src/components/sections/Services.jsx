import { services } from "../../data/services";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Tag } from "../ui/Tag";
import { Info } from "lucide-react";

/**
 * Services — Tiered pricing cards from services.js.
 */
export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-main">
        <SectionHeader
          label="Services"
          title="What I Build"
          subtitle="Three tiers. Clear deliverables. Fixed pricing. No surprises."
          center
        />

        <div className="grid-3">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 0.1}>
              <div
                className={svc.featured ? "tier-card-featured" : "tier-card"}
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                {svc.featured && <span className="tier-badge">Most Popular</span>}

                <p className="tier-name">{svc.tier}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-ink)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {svc.name}
                </h3>
                <p
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-ink-muted)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {svc.tagline}
                </p>

                <div className="tier-price-block">
                  <span className="text-price">{svc.priceRange}</span>
                  <span className="text-price-label" style={{ marginLeft: "0.5rem" }}>
                    {svc.priceNote}
                  </span>
                </div>

                <Tag variant="surface" style={{ alignSelf: "flex-start", marginBottom: "0.75rem" }}>
                  {svc.deliveryTime}
                </Tag>

                <ul className="tier-features">
                  {svc.features.map((feat, fi) => (
                    <li key={fi} className="tier-feature">
                      {feat}
                    </li>
                  ))}
                </ul>

                <p className="text-caption" style={{ marginBottom: "1rem" }}>
                  Best for: {svc.bestFor}
                </p>

                <div className="tier-cta" style={{ marginTop: "auto" }}>
                  <Button
                    variant={svc.featured ? "primary" : "secondary"}
                    href={svc.cta.href}
                    style={{ width: "100%" }}
                    aria-label={svc.cta.label}
                  >
                    {svc.cta.label}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout */}
        <ScrollReveal delay={0.3}>
          <div className="callout" style={{ marginTop: "2.5rem" }}>
            <Info size={20} className="callout-icon" />
            <span>
              Not sure which tier fits?{" "}
              <a
                href="#contact"
                style={{ color: "var(--color-copper)", textDecoration: "underline" }}
              >
                The free audit call
              </a>{" "}
              maps that for you.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
