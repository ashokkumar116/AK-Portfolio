import { testimonials } from "../../data/testimonials";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="testimonials" className="section">
      <div className="container-main">
        <SectionHeader label="Testimonials" title="What Clients Say" center />

        {!hasTestimonials ? (
          <ScrollReveal>
            <div className="testimonial-placeholder" style={{ maxWidth: "600px", marginInline: "auto" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-lg)", fontStyle: "italic", color: "var(--color-ink)", marginBottom: "1rem" }}>
                I'm building my first cohort of clients right now.
              </p>
              <p style={{ fontSize: "var(--font-size-sm)" }}>
                Until the reviews come in, the Demo Tools section above is your proof of work. Every tool there is live, functional, and built for real operational problems.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="testimonial-card">
                  <p className="testimonial-text">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.avatar ? <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : t.initials}
                    </div>
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
