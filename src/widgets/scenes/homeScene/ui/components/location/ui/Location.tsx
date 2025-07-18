import { useAppDispatch, useAppSelector, useModel, type LocationType } from "@hooks";
import type { FC } from "react";
import { locationsConfig } from "../model";
import { CameraSelection, setCurrentLocation } from "@/widgets/canvas/ui/components";

interface IProps {
  modelType: LocationType;
}

const Location: FC<IProps> = ({ modelType }) => {

  const model = useModel({ type: modelType }).scene;

  const { position, rotation } = locationsConfig[modelType];
  const { currentLocation } = useAppSelector(CameraSelection)
 const dispatch = useAppDispatch()

  const clickHandler = () => {
    if (currentLocation !== modelType) {
     dispatch(setCurrentLocation(modelType))
    } else {
     dispatch(setCurrentLocation('outside'))
    }
  }

  return <primitive onClick={clickHandler} position={position} rotation={rotation} object={model} />;
};

export default Location;
