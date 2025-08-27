import { useMeQuery } from "@/features/auth";
import { MonologBox } from "@/features/monolog";
import { HomeScene } from "@/widgets";
import { CustomCanvas } from "@/widgets";

const HomePage = () => {
  useMeQuery();

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-green-100 text-black dark:bg-green-950 dark:text-white">
      <CustomCanvas>
        <HomeScene />
      </CustomCanvas>
      <MonologBox/>
    </div>
  );
};

export default HomePage;
