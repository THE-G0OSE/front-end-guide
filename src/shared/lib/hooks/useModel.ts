import { useGLTF } from "@react-three/drei"

type ModelType = 'tavern'

const models: Record<ModelType, string> = {
    "tavern": '/tavern.glb'
}

interface IProps {
    type: ModelType
}

export const useModel = ({type}: IProps) => {
    const scene = useGLTF('/models' + models[type])
    return scene
}