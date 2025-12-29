/**
 * Framer Motion Animation Variants
 * Production-ready animation presets for consistent UX
 * Uses cubic-bezier easing: [x1, y1, x2, y2]
 */

import { Variants } from "framer-motion";

// Easing presets (cubic-bezier values) - typed as const tuples
const easeOut = [0.4, 0, 0.2, 1] as [number, number, number, number]; // Material Design standard
const easeIn = [0.4, 0, 1, 1] as [number, number, number, number];
const easeInOut = [0.4, 0, 0.6, 1] as [number, number, number, number];

/**
 * Fade In - Basic entrance animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * Fade In Up - Slide up with fade
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/**
 * Fade In Down - Slide down with fade
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/**
 * Fade In Left - Slide from left with fade
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/**
 * Fade In Right - Slide from right with fade
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/**
 * Scale In - Zoom in effect
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * Stagger Container - Parent container for staggered children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger Item - Child item for staggered animations
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

/**
 * Card Hover - Smooth hover effect for cards
 */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

/**
 * Button Hover - Button interaction animation
 */
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: easeInOut,
  },
};

/**
 * Button Tap - Button press animation
 */
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

/**
 * Slide In - Full slide entrance animation
 */
export const slideIn = (direction: "left" | "right" | "up" | "down" = "left"): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "up":
        return { y: -100, opacity: 0 };
      case "down":
        return { y: 100, opacity: 0 };
    }
  };

  return {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };
};

/**
 * Rotate In - Rotate entrance animation
 */
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/**
 * Bounce In - Spring bounce entrance
 */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Viewport Config - Standard viewport detection settings
 */
export const viewportConfig = {
  once: true, // Animate only once when element enters viewport
  margin: "-100px", // Start animation 100px before element enters viewport
  amount: 0.3, // Trigger when 30% of element is visible
};

/**
 * Page Transition - Full page transition animation
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};
