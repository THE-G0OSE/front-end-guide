import { logOut } from "@/features/auth";
import { useMeQuery } from "@/features/auth";
import { MonologBox } from "@/features/monolog";
import { monologPhrases } from "@/shared/config/monolog/monologPhrases";
import { HomeScene } from "@/widgets";
import { CustomCanvas } from "@/widgets";
import { useAppDispatch, useMonolog } from "@hooks";
import { useEffect } from "react";

const HomePage = () => {
  const { data: user, status } = useMeQuery();
  const dispatch = useAppDispatch();
  const {setMonolog} = useMonolog()

  useEffect(() => {
    if ((status === "fulfilled" || status === "rejected") && !user && window.localStorage.getItem('token')) {
      dispatch(logOut());
      setMonolog(monologPhrases.jwtExp)
    } else {
      setMonolog(monologPhrases.jwtCorrect)
    }
  }, [status]);
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
