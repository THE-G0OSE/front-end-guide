import type { FC, ReactNode } from "react"
import { Canvas } from '@react-three/fiber'
import { Camera, Lights } from "./components"

interface IProps {
    children: ReactNode
}

const CustomCanvas: FC<IProps> = ({children}) => {
  return (
    <Canvas style={{background: "#63e3ff" }}>
        <Camera/>
        <Lights/>
       {children} 
    </Canvas>
  )
}

export default CustomCanvas