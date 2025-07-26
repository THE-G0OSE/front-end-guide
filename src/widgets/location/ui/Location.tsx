import { useAppDispatch, useAppSelector, type LocationType } from "@hooks";
import type { FC, MouseEvent } from "react";
import { locationsConfig } from "@/shared/config/locations";
import {
  CameraSelection,
  setCurrentActivity,
  setCurrentLocation,
} from "@/widgets/camera";
import type { ThreeEvent } from "@react-three/fiber";
import { Tavern } from "./components";
import { setCurrentStage } from "@/features/auth";

interface IProps {
  modelType: LocationType;
}

const componentFromType = {
  tavern: <Tavern />,
  outside: <></>,
};

const Location: FC<IProps> = ({ modelType }) => {
  const { position, rotation, actions } = locationsConfig[modelType];
  const { currentLocation, currentActivity } = useAppSelector(CameraSelection);
  const dispatch = useAppDispatch();

  const clickHandler = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (currentLocation !== modelType) {
      dispatch(setCurrentLocation(modelType));
    } else {
      if (e.object.name === "building") dispatch(setCurrentActivity(null));
      if (e.object.name !== "auth-paper") dispatch(setCurrentStage("none"));
    }
    if (actions) {
      const action = actions.find((act) => act.triggerName === e.object.name);
      if (action) {
        if (action.actionType === "go out") {
          dispatch(setCurrentLocation("outside"));
        } else if (
          action.actionType === "change activity" &&
          currentActivity !== action.name
        ) {
          dispatch(
            setCurrentActivity({
              location: currentLocation,
              activity: action.name,
            })
          );
        }
      }
    }
  };

  return (
    <group onClick={clickHandler} position={position} rotation={rotation}>
      {componentFromType[modelType]}
    </group>
  );
};

export default Location;
