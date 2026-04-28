import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — GSAP ScrollTrigger wrapper component.
 * Wraps children and applies a fade-up animation on scroll entry.
 *
 * @param {object} props
 * @param {number} [props.delay=0] — animation delay in seconds
 * @param {number} [props.y=30] — translate distance
 * @param {number} [props.duration=0.8] — animation duration
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function ScrollReveal({
  delay = 0,
  y = 30,
  duration = 0.8,
  className = "",
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
