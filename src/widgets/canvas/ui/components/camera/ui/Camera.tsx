import { useAppSelector } from "@hooks";
import { PerspectiveCamera } from "@react-three/drei";
import { CameraSelection } from "../model";
import { locationsConfig } from "@/widgets/scenes";
import { vectorSum } from "@utils";

const Camera = () => {

  const {currentPosition, currentLocation, currentRotation} = useAppSelector(CameraSelection)

  const location = locationsConfig[currentLocation]

  const position = vectorSum(vectorSum(location.position, location.cameraPosition), currentPosition)

  return (
    <>
      <PerspectiveCamera makeDefault position={position} rotation={currentRotation} />
    </>
  );
};

export default Camera;
