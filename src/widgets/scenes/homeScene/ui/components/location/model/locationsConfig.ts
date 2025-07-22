import type { LocationType } from "@hooks";
import type { locationConfig } from "./types";

export const locationsConfig: Record<LocationType, locationConfig> = {
    outside: {
        rotation: [0, 0 , 0],
        position: [0, 0, 0],
        cameraPosition: [0, 70, 40],
        cameraRotation: [-Math.PI/3.3, 0, 0]
    },
    tavern: {
        rotation: [0, -Math.PI / 3, 0],
        position: [-20, 0.03, -40],
        cameraPosition: [1, 2, 1.5],
        cameraRotation: [0, .6, 0]
    }
} 