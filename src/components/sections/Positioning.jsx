import { ScrollReveal } from "../ui/ScrollReveal";

/**
 * Positioning — "What I Do" section. Pure resonance-building, prose only.
 */
export function Positioning() {
  return (
    <section id="positioning" className="section">
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <ScrollReveal>
          <p className="section-label" style={{ justifyContent: "center" }}>
            What I Do
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <blockquote
            className="text-quote"
            style={{
              borderLeft: "none",
              paddingLeft: 0,
              maxWidth: "600px",
              marginInline: "auto",
              marginBottom: "2rem",
            }}
          >
            I don't build websites. I build the digital operating layer that
            lets your business run without you holding every thread.
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="divider-copper-center" />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p style={{ marginBottom: "1.25rem", maxWidth: "55ch", marginInline: "auto" }}>
            Most businesses outgrow their tools long before they outgrow their
            market. Spreadsheets become bottlenecks. WhatsApp becomes the CRM.
            The founder becomes the system. I fix that.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p style={{ maxWidth: "55ch", marginInline: "auto" }}>
            I work primarily with marketing agencies and growing Indian SMEs —
            businesses doing ₹20L–₹2Cr annually — who need custom websites,
            internal dashboards, and automation systems that actually work the
            way they work.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
