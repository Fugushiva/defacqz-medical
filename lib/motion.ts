/**
 * Animation constants for Framer Motion and CSS transitions.
 * Respects prefers-reduced-motion via CSS; JS animations should check
 * window.matchMedia('(prefers-reduced-motion: reduce)').matches before running.
 */

export const DURATION = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

export const EASE = {
  /** Standard ease-in-out for UI transitions */
  standard: [0.4, 0, 0.2, 1] as const,
  /** Decelerate — elements entering the screen */
  decelerate: [0, 0, 0.2, 1] as const,
  /** Accelerate — elements leaving the screen */
  accelerate: [0.4, 0, 1, 1] as const,
  /** Spring-like for interactive feedback */
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const TRANSITION = {
  base: { duration: DURATION.base, ease: EASE.standard },
  fast: { duration: DURATION.fast, ease: EASE.standard },
  slow: { duration: DURATION.slow, ease: EASE.decelerate },
  spring: { duration: DURATION.slow, ease: EASE.spring },
} as const;

/** Framer Motion variants for fade-up entrance */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION.slow,
  },
} as const;

/** Framer Motion variants for fade-in entrance */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION.base,
  },
} as const;

/** Stagger container for lists */
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;
