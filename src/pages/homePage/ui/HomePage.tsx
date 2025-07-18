import { HomeScene } from "@/widgets";
import { CustomCanvas } from "@/widgets";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-green-100 text-black dark:bg-green-950 dark:text-white">
      <CustomCanvas>
        <HomeScene/>
      </CustomCanvas>
    </div>
  );
};

export default HomePage;
