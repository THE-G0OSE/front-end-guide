type activity = {
    cameraRotation: [number, number, number]
    cameraPosition: [number, number, number]
    cameraChasingMaxAngle: number
}

export type locationConfig = {
    position: [number, number, number]
    rotation: [number, number, number]
    cameraPosition: [number, number, number]
    cameraRotation: [number, number, number]
    cameraChasingMaxAngle: number
    triggers: Record<string, string | null>
    activities: Record<string, activity>
}