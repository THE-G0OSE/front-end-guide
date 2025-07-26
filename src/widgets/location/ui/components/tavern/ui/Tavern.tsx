import { useModel } from "@hooks";
import { AuthPaper } from "./components";

const Tavern = () => {
  const model = useModel({ type: "tavern" }).scene;


  return (
    <>
      <primitive object={model} />
      <AuthPaper type='login'/> 
      <AuthPaper type='registration'/> 
    </>
  );
};

export default Tavern;
