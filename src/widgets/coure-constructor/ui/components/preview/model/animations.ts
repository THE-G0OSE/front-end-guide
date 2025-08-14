import type { Variants } from "motion/react";

export const firstWordVar: Variants = {
    center: {x: 0, y: 0, transition: {duration: 1.8, type: 'spring', stiffness: 50}},
    aside: {x: -500, y: -500, transition: {duration: 1.8, type: 'spring', stiffness: 20, delay: .4}}
}

export const secondWordVar: Variants = {
    center: {x: 0, y: 0, transition: {duration: 1.8, type: 'spring', stiffness: 50}},
    aside: {x: 600, y: 0, transition: {duration: 1.8, type: 'spring', stiffness: 40, delay: .4}}
}

export const thirdWordVar: Variants = {
    center: {x: 0, y: 0, transition: {duration: 1.8, type: 'spring', stiffness: 50}},
    aside: {x: -500, y: 500, transition: {duration: 1.8, type: 'spring', stiffness: 20, delay: .4}}
}