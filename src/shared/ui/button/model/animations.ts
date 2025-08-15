import type { Variants } from "motion/react";

export const fadeInVar: Variants = {
    hide: {y: "80%", opacity: 0, transition: {duration: .3, ease: "easeInOut"}},
    show: {y: 0, opacity: 1, transition: {duration: .3, ease: "easeInOut"}},
}

export const slideLeftVar: Variants = {
    hide: {x: -100, transition: {duration: .3, type: 'spring', stiffness: 100}},
    show: {x: 0, transition: {duration: .3, type: 'spring', stiffness: 100}}
}

export const slideRightVar: Variants = {
    hide: {x: 100, transition: {duration: .3, type: 'spring', stiffness: 100}},
    show: {x: 0, transition: {duration: .3, type: 'spring', stiffness: 100}}
}