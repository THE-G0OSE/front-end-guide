import { useAppSelector } from "@hooks";
import { PerspectiveCamera } from "@react-three/drei";
import { CameraSelection } from "../model";
import { locationsConfig } from "@/widgets/scenes";
import { vectorSum } from "@utils";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { cameraMovementConfig } from "../model/cameraMovementConfig";
import { Euler, QuadraticBezierCurve3, Quaternion, Vector3 } from "three";

const Camera = () => {
  const { currentPosition, currentLocation, currentRotation } =
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
  }, [currentLocation, currentPosition, currentRotation]);

  useFrame(() => {
    if (progress.current >= 1) return;

    const elapsed = (performance.now() - startTime.current!) / 1000;

    progress.current = Math.min(elapsed / duration, 1);

    const t = 1 - (1 - progress.current) ** 2;

    if (curve.current) {
      curve.current.getPoint(t, tmpVec);
      camera.position.copy(tmpVec);
    }

    camera.quaternion.slerp(goalRotation.current, t * .1);
  });

  return (
    <>
      <PerspectiveCamera makeDefault />
    </>
  );
};

export default Camera;
