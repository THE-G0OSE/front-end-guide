import type { Variants } from "motion/react";

export const tabVar: Variants = {
    hide: {x: 0, y: 45, opacity: 1, transition: {duration: .2, type: 'spring', stiffness: 100}},
    show: {x: 0, y: 0, opacity: 1, transition: {duration: .4, ease: "easeOut"}},
    hover: {x: 50, y: 0, opacity: 1, transition: {duration: .3, type: 'spring', stiffness: 200}}
}

export const btnContainerVar: Variants = {
    hide: {x: 0, y: 40, opacity: 0, transition: {duration: .2, type: 'spring', stiffness: 100}},
    show: {x: 0, y: 0, opacity: 1, transition: {duration: .4, ease: "easeOut"}},
    hover: {x: -45, rotateZ: -45, y: 0, opacity: 1, transition: {duration: .5, type: 'spring', stiffness: 100}}
}