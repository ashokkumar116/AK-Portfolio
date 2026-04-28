import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { personal } from "../../data/personal";
import { Button } from "../ui/Button";
import { ChevronDown } from "lucide-react";

/**
 * Hero — Full viewport height, left-aligned with architectural grid accent.
 */
export function Hero() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(labelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          h1Ref.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          subRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          btnRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          scrollRef.current,
          { opacity: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Split tagline on \n */
  const taglineParts = personal.tagline.split("\n");

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-full"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(184,115,51,0.12) 0%, transparent 60%),
          repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(184,115,51,0.03) 59px, rgba(184,115,51,0.03) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(184,115,51,0.03) 59px, rgba(184,115,51,0.03) 60px),
          var(--color-base)
        `,
      }}
    >
      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "720px" }}>
          <div ref={labelRef} className="hero-label">
            <span>{personal.role}</span>
            <span style={{ color: "var(--color-ink-subtle)" }}>·</span>
            <span>{personal.location}</span>
          </div>

          <h1 ref={h1Ref} className="text-hero" style={{ marginBottom: "1.5rem" }}>
            {taglineParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < taglineParts.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p ref={subRef} className="text-lead" style={{ marginBottom: "2.5rem" }}>
            {personal.subHeadline}
          </p>

          <div ref={btnRef} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Button
              variant="primary"
              size="lg"
              href={personal.heroCTA.primary.href}
              aria-label={personal.heroCTA.primary.label}
            >
              {personal.heroCTA.primary.label}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personal.heroCTA.secondary.href}
              aria-label={personal.heroCTA.secondary.label}
            >
              {personal.heroCTA.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <span>Scroll</span>
      </div>

      {/* Right-side architectural grid accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          opacity: 0.06,
          background: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(184,115,51,0.5) 39px, rgba(184,115,51,0.5) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(184,115,51,0.5) 39px, rgba(184,115,51,0.5) 40px)
          `,
          maskImage: "linear-gradient(to left, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent 80%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </section>
  );
}
