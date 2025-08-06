import { useModel } from "@hooks";
import { AuthPaper } from "./components";
import { useMemo } from "react";

const Tavern = () => {
  const {scene, clickHandler, exitHandler} = useModel({ type: "tavern" });

  const objects = useMemo(() => ({
    building: scene.getObjectByName('building'),
    boards: scene.getObjectByName('boards'),
    stones: scene.getObjectByName('stones'),
    'registration-desk': scene.getObjectByName('registration-desk'),
    'roof-2': scene.getObjectByName('roof-2'),
    cover: scene.getObjectByName('cover'),
    wood: scene.getObjectByName('wood')

  }), [scene])

  return (
    <>
      {objects.building && <primitive onClick={clickHandler} object={objects.building} />}
      {objects.boards && <primitive object={objects.boards} />}
      {objects.stones && <primitive object={objects.stones} />}
      {objects.wood && <primitive object={objects.wood} />}
      {objects['roof-2'] && <primitive object={objects['roof-2']} />}
      {objects['registration-desk'] && <primitive onClick={clickHandler} object={objects['registration-desk']} />}
      {objects.cover && <primitive onClick={exitHandler} object={objects.cover} />}
      <AuthPaper type='login'/> 
      <AuthPaper type='registration'/> 
    </>
  );
};

export default Tavern;
