import { useGLTF } from "@react-three/drei"
import type { LocationType } from "./types"

const models: Record<LocationType, string> = {
    "outside": "/нема такого",
    "tavern": '/tavern.glb'
}

interface IProps {
    type: LocationType
}

export const useModel = ({type}: IProps) => {
    const scene = useGLTF('/models' + models[type])
    return scene
}