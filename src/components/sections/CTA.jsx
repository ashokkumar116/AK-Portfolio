import { personal } from "../../data/personal";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const MAX_SLOTS = 3;

export function CTA() {
  const taken = MAX_SLOTS - personal.availableSlots;

  return (
    <section id="contact" className="section-surface">
      <div className="container-main">
        <ScrollReveal>
          <div className="cta-block">
            <h2 className="cta-headline">Know something is broken but not sure where?</h2>
            <p className="cta-sub">
              Book a free 20-minute audit call. I'll map the gap, recommend a solution, and give you a clear next step — whether we work together or not.
            </p>

            <div className="cta-actions">
              <Button variant="primary" size="xl" href={personal.contact.calendarLink} target="_blank" rel="noopener noreferrer" aria-label="Book a free audit call">
                Book a Free Audit Call
              </Button>
              {personal.socials.instagram && (
                <Button variant="secondary" size="lg" href={personal.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="DM on Instagram">
                  DM on Instagram
                </Button>
              )}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <span className="scarcity-note">
                I take {personal.availableSlots} new projects per month
              </span>
            </div>

            <div className="availability-bar">
              <div className="availability-dots">
                {Array.from({ length: MAX_SLOTS }).map((_, i) => (
                  <span key={i} className={`availability-dot ${i < taken ? "filled" : "empty"}`} />
                ))}
              </div>
              <span className="availability-label">
                {personal.availableSlots} slot{personal.availableSlots !== 1 ? "s" : ""} open
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
