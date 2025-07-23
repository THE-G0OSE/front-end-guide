
type actionType = "go out" | "change activity"

type locationTrigger = {
    name: string
    triggerName: string
    actionType: actionType
}

type activity = {
    name: string
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
    actions?: locationTrigger[]
    activities?: activity[]
}