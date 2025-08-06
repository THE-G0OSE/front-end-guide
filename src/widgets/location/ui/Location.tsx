import {useAppDispatch, useAppSelector, type LocationType } from "@hooks";
import type { FC } from "react";
import { locationsConfig } from "@/shared/config/locations";
import { Tavern } from "./components";
import { Academy } from "./components/academy";
import type { ThreeEvent } from "@react-three/fiber";
import { CameraSelection, setCurrentLocation } from "@/widgets/camera";

interface IProps {
  modelType: LocationType;
}

const componentFromType = {
  tavern: <Tavern />,
  academy: <Academy/>,
  outside: <></>,
};

const Location: FC<IProps> = ({ modelType }) => {

  const {position, rotation} = locationsConfig[modelType]
  const {currentLocation} = useAppSelector(CameraSelection)
  const dispatch = useAppDispatch()
  
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    if (currentLocation !== modelType) {
      dispatch(setCurrentLocation(modelType)) 
    }
  }

  return (
    <group onClick={onClick} position={position} rotation={rotation}>
      {componentFromType[modelType]}
    </group>
  );
};

export default Location;
