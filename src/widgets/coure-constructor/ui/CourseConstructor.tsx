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
    setIsEditing(currentActivity === 'course')
  }, [currentActivity])

  return (
    <Html distanceFactor={1} transform occlude position={[0.012, 1.500, -3.20]}>
      <ContextBridge>
        <div
          onClick={clickHandler}
          className="border-white border-1 w-242 h-151 pointer-events-auto"
        >
          <AnimatePresence mode="wait">
            {isEditing ? <div className='w-full h-full flex'><Sidebar/><Main/></div> : <Preview key='preview'/>}
          </AnimatePresence>
        </div>
      </ContextBridge>
    </Html>
  );
};

export default CourseConstructor;
