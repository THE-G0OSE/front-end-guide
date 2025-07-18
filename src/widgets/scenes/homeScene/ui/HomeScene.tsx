import { useModel } from "@hooks"

const HomeScene = () => {

  const tavernScene = useModel({type: 'tavern'})

  return (
    <>
       <primitive rotation={[0, Math.PI/3 * 2, 0]} position={[-40, .7, -40]}  object={tavernScene.scene}/>
       <mesh>
          <boxGeometry args={[1000, 1, 1000]}/>
          <meshStandardMaterial color={'green'} />
       </mesh>
    </>
  )
}

export default HomeScene