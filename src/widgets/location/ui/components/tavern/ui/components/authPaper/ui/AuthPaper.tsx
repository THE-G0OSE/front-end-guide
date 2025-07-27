import {
  authSelection,
  LoginForm,
  RegistrationForm,
  setCurrentStage,
} from "@/features/auth";
import { useAppDispatch, useAppSelector } from "@hooks";
import { Html, useContextBridge } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type FC, type MouseEvent } from "react";
import { ReactReduxContext } from "react-redux";
import { Euler, Mesh, Quaternion } from "three";

interface IProps {
  type: "login" | "registration";
}

const AuthPaper: FC<IProps> = ({ type }) => {
  const meshRef = useRef<Mesh>(null);
  const dispatch = useAppDispatch();
  const { currentStage } = useAppSelector(authSelection);
  const clickHandle = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(setCurrentStage(type));
  };

  const ContextBridge = useContextBridge(ReactReduxContext);

  useFrame(() => {
    if (currentStage === type) {
      meshRef.current!.position.lerp({ x: -1.8, y: 1.9, z: 1.1 }, 0.05);
      meshRef.current!.quaternion.slerp(
        new Quaternion().setFromEuler(new Euler(0, 0, -Math.PI / 3)),
        0.05
      );
    } else {
      meshRef.current!.position.lerp(
        { x: -2.3, y: 1.355, z: type === "login" ? 1.3 : 1.7 },
        0.1
      );
      meshRef.current!.quaternion.slerp(
        new Quaternion().setFromEuler(new Euler(0, 0, 0)),
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={clickHandle}
      name="auth-paper"
      scale={[0.4, 0.01, 0.3]}
      position={[-2.3, 1.355, type === "login" ? 1.3 : 1.7]}
    >
      <boxGeometry />
      <meshBasicMaterial color={"#fde487"} />
      <Html
        position={[0, 0.55, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        transform
        occlude
      >
        <ContextBridge>
          <div
            className="w-full pointer-events-auto px-2 font-main h-full text-black"
            onClick={clickHandle}
          >
            {type === "login" ? <LoginForm /> : <RegistrationForm />}
          </div>
        </ContextBridge>
      </Html>
    </mesh>
  );
};

export default AuthPaper;
