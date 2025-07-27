import type { Variants } from "motion/react";

export const monologVar: Variants = {
    hide: {y: 200, transition: {duration: .4, type: 'spring', stiffness: 100}},
    show: {y: 0, transition: {duration: .4, type: 'spring', stiffness: 100}}
}