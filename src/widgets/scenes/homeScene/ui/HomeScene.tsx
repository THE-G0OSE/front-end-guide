import { Location } from "@/widgets/location";

const HomeScene = () => {
  return (
    <>
      <Location modelType={"tavern"} />
      <Location modelType={"academy"} />
      <mesh>
        <boxGeometry args={[1000, 1, 1000]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  );
};

export default HomeScene;
