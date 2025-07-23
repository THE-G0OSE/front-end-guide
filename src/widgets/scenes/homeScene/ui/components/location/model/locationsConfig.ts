import type { LocationType } from "@hooks";
import type { locationConfig } from "./types";

export const locationsConfig: Record<LocationType, locationConfig> = {
    outside: {
        rotation: [0, 0 , 0],
        position: [0, 0, 0],
        cameraPosition: [0, 70, 40],
        cameraRotation: [-Math.PI/3.3, 0, 0],
        cameraChasingMaxAngle: Math.PI / 8
    },
    tavern: {
        rotation: [0, -Math.PI / 3, 0],
        position: [-20, 0.03, -40],
        cameraPosition: [2.0, 2, 3.0],
        cameraRotation: [0, .6, 0],
        cameraChasingMaxAngle: Math.PI / 3,
        actions: [
            {
                name: 'exit',
                triggerName: 'cover',
                actionType: 'go out'
            },
            {
                name: 'auth',
                triggerName: 'Cube003',
                actionType: 'change activity'
            },
            {
                name: 'auth',
                triggerName: 'Cube003_1',
                actionType: 'change activity'
            }
        ],
        activities: [
            {
                name: 'auth',
                cameraPosition: [-3.7, .3, -3.7],
                cameraRotation: [-Math.PI / 3, 0, 0],
                cameraChasingMaxAngle: Math.PI / 4
            }
        ]
    }
} 