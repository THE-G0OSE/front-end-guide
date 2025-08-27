import type { Variants } from "motion/react";

export const loaderContainerVar: Variants = {
    hide: {x: -40, opacity: 0},
    load: {x: 0, opacity: 1, transition: {staggerChildren: .1, duration: .2, type: 'spring', stiffness: 100}}
}

export const loaderPointVar: Variants = {
    load: {y: [0, -10, 0], transition: {repeat: Infinity, repeatType: "loop", duration: .8, ease: "easeInOut"}}
}