import { logOut } from "@/features/auth";
import { useMeQuery } from "@/features/auth";
import { HomeScene } from "@/widgets";
import { CustomCanvas } from "@/widgets";
import { useAppDispatch } from "@hooks";
import { useEffect } from "react";

const HomePage = () => {
  const { data: user, status } = useMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ((status === "fulfilled" || status === "rejected") && !user && window.localStorage.getItem('token')) {
      dispatch(logOut());
    }
  }, [status]);
  return (
    <div className="w-screen h-screen bg-green-100 text-black dark:bg-green-950 dark:text-white">
      <CustomCanvas>
        <HomeScene />
      </CustomCanvas>
    </div>
  );
};

export default HomePage;
