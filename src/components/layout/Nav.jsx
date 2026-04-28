import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { personal } from "../../data/personal";

const NAV_ITEMS = [
  { label: "Work", href: "#demos" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Nav — Fixed top navigation with scroll-aware active states and mobile drawer.
 */
export function Nav() {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);

  /* IntersectionObserver for active nav state */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-20% 0px -75% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* Mobile drawer GSAP animation */
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: "block" });
      gsap.to(drawerRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, display: "none" });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.3, ease: "power3.in" });
    }
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  /* Split name for copper accent on last word */
  const nameParts = personal.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Go to top">
          {firstName} <span>{lastName}</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${activeId === item.href.replace("#", "") ? "active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="nav-burger"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className="overlay"
        style={{ display: "none", opacity: 0 }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100dvh",
          background: "var(--color-surface)",
          borderLeft: "var(--border-dim)",
          zIndex: 110,
          transform: "translateX(100%)",
          display: "flex",
          flexDirection: "column",
          padding: "5rem 2rem 2rem",
          gap: "0.5rem",
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            color: "var(--color-ink-muted)",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className="nav-link"
            style={{
              fontSize: "var(--font-size-lg)",
              padding: "0.75rem 0",
              borderBottom: "var(--border-dim)",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
