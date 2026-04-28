import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal — Custom hook for GSAP scroll animations.
 * Attach the returned ref to any element.
 *
 * @param {object} [options]
 * @param {number} [options.y=30]
 * @param {number} [options.duration=0.8]
 * @param {number} [options.delay=0]
 * @param {string} [options.start="top 88%"]
 * @returns {React.RefObject}
 */
export function useScrollReveal({
  y = 30,
  duration = 0.8,
  delay = 0,
  start = "top 88%",
} = {}) {
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
          start,
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [y, duration, delay, start]);

  return ref;
}
