/**
 * GSAP tree-shaking imports.
 * Import from this file instead of "gsap" directly to ensure
 * only the plugins we register are bundled.
 *
 * Usage:
 *   import { gsap, ScrollTrigger } from "@/lib/gsap";
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };

/** Default GSAP ease strings aligned with motion.ts */
export const GSAP_EASE = {
  standard: "power2.inOut",
  decelerate: "power2.out",
  accelerate: "power2.in",
  spring: "back.out(1.7)",
} as const;
