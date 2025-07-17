import CustomCanvas from "@/widgets/canvas/ui/Canvas";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-green-100 text-black dark:bg-green-950 dark:text-white">
      <CustomCanvas>
        <mesh>
          <meshStandardMaterial color={'green'}/>
          <boxGeometry scale={[100, 1, 100]} />
        </mesh>
      </CustomCanvas>
    </div>
  );
};

export default HomePage;
