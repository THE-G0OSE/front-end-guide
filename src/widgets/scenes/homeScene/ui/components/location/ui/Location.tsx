import {
  useAppDispatch,
  useAppSelector,
  useModel,
  type LocationType,
} from "@hooks";
import type { FC, MouseEvent } from "react";
import { locationsConfig } from "../model";
import {
  CameraSelection,
  setCurrentActivity,
  setCurrentLocation,
} from "@/widgets/canvas/ui/components";
import type { ThreeEvent } from "@react-three/fiber";

interface IProps {
  modelType: LocationType;
}

const Location: FC<IProps> = ({ modelType }) => {
  const model = useModel({ type: modelType }).scene;

  const { position, rotation, actions } = locationsConfig[modelType];
  const { currentLocation } = useAppSelector(CameraSelection);
  const dispatch = useAppDispatch();

  const clickHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (currentLocation !== modelType) {
      dispatch(setCurrentLocation(modelType));
    } else {
      if (e.object.name === "building") dispatch(setCurrentActivity(null))
    } if (actions) {
      const action = actions.find((act) => act.triggerName === e.object.name);
      if (action) {
        if (action.actionType === "go out") {
          dispatch(setCurrentLocation('outside'))
        } else if (action.actionType === "change activity") {
          dispatch(setCurrentActivity({location: currentLocation, activity: action.name}))
        }
      }
    }
  };

  return (
    <primitive
      onClick={clickHandler}
      position={position}
      rotation={rotation}
      object={model}
    />
  );
};

export default Location;
