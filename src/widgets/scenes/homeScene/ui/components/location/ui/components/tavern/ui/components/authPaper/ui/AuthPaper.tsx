import { authSelection, setCurrentStage } from "@/features/auth";
import { useAppDispatch, useAppSelector } from "@hooks";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type FC, type MouseEvent } from "react";
import { Euler, Mesh, Quaternion } from "three";

interface IProps { 
  type: 'login' | 'registration'
}

const AuthPaper: FC<IProps> = ({type}) => {
  const meshRef = useRef<Mesh>(null)
  const dispatch = useAppDispatch()
  const {currentStage} = useAppSelector(authSelection)
  const clickHandle = (e: MouseEvent) => {
    e.stopPropagation()
    dispatch(setCurrentStage(type))
  }

  useFrame(() => {
    if(currentStage === type) {
      meshRef.current!.position.lerp({x: -1.8, y: 1.9, z: 1.1}, .05)
      meshRef.current!.quaternion.slerp((new Quaternion()).setFromEuler(new Euler(0, 0, -Math.PI / 3)), .05)
    } else {
      meshRef.current!.position.lerp({x: -2.3, y: 1.355, z: type === 'login' ? 1.3 : 1.7}, .1)
      meshRef.current!.quaternion.slerp((new Quaternion()).setFromEuler(new Euler(0, 0, 0)), .1)
    }
  })

  return (
    <mesh ref={meshRef} onClick={clickHandle} name="auth-paper" scale={[0.4, 0.01, 0.3]} position={[-2.3, 1.355, type === 'login' ? 1.3 : 1.7]}>
      <boxGeometry />
      <meshBasicMaterial color={"#fde487"} />
      <Html
        position={[-0.2, 1.4, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        transform
        occlude
      >
        <div
          className="w-full pointer-events-auto font-main h-full text-black"
          onClick={clickHandle}
        >
          <p className="text-center w-full"> {type === 'registration' ? 'Бланк регистрации' : 'Заявление о восстановлении'}</p>
          <br />
          <p>{type === 'registration' ? 'хочу вступить в гильдию' : 'Прошу воостановить мой пропуск'}</p>
          <p>ниже предоставляю мой псевдоним и пароль</p>
          <br />
          <label>
            Псевдоним:
            <input
              id={`${type}-login-input`}
              type="text"
              className="w-[60%] ml-5 inline outline-none tracking-wider px-2 py-1 border-1 border-black"
            />
          </label>
          <br />
          <br />
          <label>
            Пароль:
            <input
              id={`${type}-pass-input`}
              type="password"
              className="w-[70%] outline-none ml-5 inline border-1 px-2 py-1 border-black"
            />
          </label>
        </div>
      </Html>
    </mesh>
  );
};

export default AuthPaper;
