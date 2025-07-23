import type { FC, ReactNode, PointerEvent } from "react";
import { Canvas } from '@react-three/fiber';
import { Camera, Lights, setCurrentCursorBasedOffset } from "./components";
import { useAppDispatch } from "@hooks";

interface IProps {
  children: ReactNode;
}

const CustomCanvas: FC<IProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const handlePointer = (x: number, y: number) => {
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    const normX = (x - xCenter) / xCenter;
    const normY = -(y - yCenter) / yCenter;
    dispatch(setCurrentCursorBasedOffset([normX, normY]));
  };

  const pointerMoveHandle = (e: PointerEvent) => {
    handlePointer(e.clientX, e.clientY);
  }

  return (
    <Canvas
      onPointerMove={pointerMoveHandle}
      style={{ background: "#63e3ff", touchAction: "none", pointerEvents: "auto" }}
    >
      <Camera />
      <Lights />
      {children}
    </Canvas>
  );
};

export default CustomCanvas;