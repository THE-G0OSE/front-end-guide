import type { LocationType } from "@hooks";
import type { locationConfig } from "./types";

export const locationsConfig: Record<LocationType, locationConfig> = {
    outside: {
        rotation: [0, 0 , 0],
        position: [0, 0, 0],
        cameraPosition: [0, 70, 40],
        cameraRotation: [-Math.PI/3.3, 0, 0],
        cameraChasingMaxAngle: Math.PI / 8,
        triggers: {},
        activities: {}
    },
    tavern: {
        rotation: [0, -Math.PI / 3, 0],
        position: [-20, 0.03, -40],
        cameraPosition: [2.0, 2, 3.0],
        cameraRotation: [0, .6, 0],
        cameraChasingMaxAngle: Math.PI / 2,
        triggers: {
            Cube003: 'auth',
            Cube003_1: 'auth',
            building: null,
        },
        activities: {
                auth: {
                cameraPosition: [-3.7, .3, -3.7],
                cameraRotation: [-Math.PI / 3, 0, 0],
                cameraChasingMaxAngle: Math.PI / 4
                },
        }
    },
    academy: {
        rotation: [0, -Math.PI / 10, 0],
        position: [20, 0.50, -40],
        cameraPosition: [-2.5, 1.5, 8.7],
        cameraRotation: [0, -Math.PI / 10, 0],
        cameraChasingMaxAngle: Math.PI / 2,
        triggers: {
            desk: 'course'
        },
        activities: {
            course: {
                cameraPosition: [3, 0, -9],
                cameraRotation: [0, 0, 0],
                cameraChasingMaxAngle: Math.PI / 4
            }
        }
    }
} 