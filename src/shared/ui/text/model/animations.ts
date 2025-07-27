import type { Variants } from "motion/react";

export const textContainerVar: Variants = {
    show: {transition: {staggerChildren: .05}}
}

export const animatedLetterVar: Variants = {
  hide: {
    y: 20,
    opacity: 0,
    rotateZ: 180,
    transition: { duration: 0.2, type: "spring", stiffness: 100 },
  },
  show: {
    y: 0,
    opacity: 1,
    rotateZ: 0,
    transition: { duration: 0.2, type: "spring", stiffness: 100 },
  },
};
