import { useAppDispatch, useAppSelector } from "@hooks";
import { PerspectiveCamera } from "@react-three/drei";
import { CameraSelection, setCurrentCursorBasedOffset } from "../model";
import { locationsConfig } from "@/widgets/scenes";
import { vectorSum } from "@utils";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { cameraMovementConfig } from "../model/cameraMovementConfig";
import { Euler, QuadraticBezierCurve3, Quaternion, Vector3 } from "three";

const Camera = () => {
  const { currentPosition, currentLocation, currentRotation, currentCursorBasedOffset, currentActivity } =
    useAppSelector(CameraSelection);
  const location = locationsConfig[currentLocation];
  const position = useRef<[number, number, number]>([0, 0, 0]);
  const tmpVec = new Vector3();
  const config = cameraMovementConfig;
  const { camera } = useThree();
  const duration = config.duration;
  const curve = useRef<QuadraticBezierCurve3>(null);
  const startTime = useRef<number>(null);
  const progress = useRef<number>(0);
  const goalRotation = useRef<Quaternion>(new Quaternion());
  const dispatch = useAppDispatch()

  useEffect(() => {
    position.current = vectorSum(
      vectorSum(location.position, location.cameraPosition),
      currentPosition
    );
    curve.current = new QuadraticBezierCurve3(
      new Vector3(...camera.position),
      new Vector3(...config.helperPoint),
      new Vector3(...position.current)
    );
    startTime.current = performance.now();
    progress.current = 0
    goalRotation.current.setFromEuler(new Euler(...currentRotation));
    dispatch(setCurrentCursorBasedOffset([0, 0]))
  }, [currentLocation]);


  useFrame(() => {
    if (progress.current >= 1) {
      const [x, y] = currentCursorBasedOffset
      const cursorBasedRotation = new Quaternion()
      let maxAngle = locationsConfig[currentLocation].cameraChasingMaxAngle
      let activityBasedRotation = [0, 0, 0]
      if (currentActivity) {
        maxAngle = locationsConfig[currentLocation].activities!.find((act) => act.name === currentActivity)!.cameraChasingMaxAngle
        activityBasedRotation = locationsConfig[currentLocation].activities!.find((act) => act.name === currentActivity)!.cameraRotation
      }
      cursorBasedRotation.setFromEuler(new Euler(currentRotation[0] + activityBasedRotation[0] + y * maxAngle, currentRotation[1] + activityBasedRotation[1] + x * - maxAngle, currentRotation[2] + activityBasedRotation[2], 'YXZ'))
      camera.quaternion.slerp(cursorBasedRotation, config.mouseChaseSpeed)
      camera.position.lerp(new Vector3(...vectorSum(vectorSum(currentPosition, location.position), location.cameraPosition)), .05)
    } else {

    const elapsed = (performance.now() - startTime.current!) / 1000;

    progress.current = Math.min(elapsed / duration, 1);

    const t = 1 - (1 - progress.current) ** 2;

    if (curve.current) {
      curve.current.getPoint(t, tmpVec);
      camera.position.copy(tmpVec);
    }

    camera.quaternion.slerp(goalRotation.current, t * .1);

    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={position.current} />
    </>
  );
};

export default Camera;
