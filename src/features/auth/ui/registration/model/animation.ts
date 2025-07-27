import type { Variants } from "motion/react";

export const signatureVar: Variants = {
    'hide': {pathLength: 0, transition: {duration: .3}},
    'show': {pathLength: 1, transition: {duration: 1.3}},
}