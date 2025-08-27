import { CameraSelection, setCurrentActivity } from "@/widgets/camera";
import { useAppDispatch, useAppSelector } from "@hooks";
import { Html, useContextBridge } from "@react-three/drei";
import { useEffect, useState, type MouseEvent } from "react";
import { ReactReduxContext } from "react-redux";
import { Preview } from "./components/preview";
import { AnimatePresence } from "motion/react";
import Sidebar from "./components/sidebar/ui/Sidebar";
import Main from "./components/main/ui/Main";

const CourseConstructor = () => {
  const ContextBridge = useContextBridge(ReactReduxContext);

  const dispatch = useAppDispatch();
  const { currentActivity } = useAppSelector(CameraSelection);

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (currentActivity !== "course") {
      dispatch(setCurrentActivity({ location: "academy", activity: "course" }));
    }
  };

  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setIsEditing(currentActivity === "course");
  }, [currentActivity]);

  return (
    <Html distanceFactor={1} transform occlude position={[0.000, 1.5, -3.28]}>
      <ContextBridge>
        <div
          onClick={clickHandler}
          className="border-white border-1 w-248 h-154 pointer-events-auto"
        >
          <AnimatePresence mode="wait">
            {isEditing ? (
              <div className="w-full h-full flex">
                <AnimatePresence propagate>
                  <Sidebar key="counstructor-sidebar" />
                  <Main key="constructor-main" />
                </AnimatePresence>
              </div>
            ) : (
              <Preview key="constructor-preview" />
            )}
          </AnimatePresence>
        </div>
      </ContextBridge>
    </Html>
  );
};

export default CourseConstructor;
