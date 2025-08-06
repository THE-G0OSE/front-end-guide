import { useGLTF } from "@react-three/drei";
import type { LocationType } from "./types";
import type { ThreeEvent } from "@react-three/fiber";
import { locationsConfig } from "@/shared/config";
import { useAppSelector } from "../useAppSelector";
import {
  CameraSelection,
  setCurrentActivity,
  setCurrentLocation,
} from "@/widgets/camera";
import { useAppDispatch } from "../useAppDispatch";
import { setCurrentStage } from "@/features/auth";

const models: Record<LocationType, string> = {
  outside: "/нема такого",
  tavern: "/tavern.glb",
  academy: "/academy.glb",
};

interface IProps {
  type: LocationType;
}

export const useModel = ({ type }: IProps) => {
  const triggers = locationsConfig[type].triggers;
  const { currentActivity, currentLocation } = useAppSelector(CameraSelection);

  const dispatch = useAppDispatch();

  const clickHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (triggers[e.object.name] !== currentActivity) {
      dispatch(
        setCurrentActivity({
          location: type,
          activity: triggers[e.object.name],
        })
      );
    }
    dispatch(setCurrentStage('none'));
  };

  const exitHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (currentLocation === type) {
      dispatch(setCurrentLocation("outside"));
    }
  };
  const scene = useGLTF("/models" + models[type]).scene;
  return { scene, clickHandler, exitHandler };
};
