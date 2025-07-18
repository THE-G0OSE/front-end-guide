import type { LocationType } from "@hooks";
import type { locationConfig } from "./types";

export const locationsConfig: Record<LocationType, locationConfig> = {
    outside: {
        rotation: [0, 0 , 0],
        position: [0, 110, 70],
        cameraPosition: [0, 0, 0],
        cameraRotation: [-Math.PI/3.3, 0, 0]
    },
    tavern: {
        rotation: [0, Math.PI / 3 * 2, 0],
        position: [-40, 0.7, -40],
        cameraPosition: [6, 3, 3],
        cameraRotation: [0, .6, 0]
    }
} 