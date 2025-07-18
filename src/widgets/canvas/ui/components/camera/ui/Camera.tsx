import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 110, 70]} rotation={[-Math.PI/3.3 ,0 , 0]} />
      <OrbitControls/>
    </>
  );
};

export default Camera;
