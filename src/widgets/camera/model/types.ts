import type { LocationType } from "@hooks"

export interface ICameraScheme {
    currentLocation: LocationType,
    currentPosition: [number, number, number],
    currentRotation: [number, number, number],
    currentCursorBasedOffset: [number, number],
    currentActivity: string | null
}

export type changeActivityPayload = {
    location: LocationType,
    activity: string | null
}