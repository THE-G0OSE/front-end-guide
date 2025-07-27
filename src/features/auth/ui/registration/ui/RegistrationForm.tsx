import { useForm } from "react-hook-form";
import type { IRegistrationForm } from "../model/types";
import {
  authSelection,
  setCurrentStage,
  useRegistrationMutation,
} from "@/features/auth/model";
import { monologPhrases } from "@/shared/config/monolog/monologPhrases";
import type { phrases } from "@/shared/config/monolog/types";
import { useAppDispatch, useAppSelector, useMonolog } from "@hooks";
import { useState } from "react";
import { motion } from "motion/react";
import { signatureVar } from "../model/animation";

const RegistrationForm = () => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>();
  const [registration] = useRegistrationMutation();
  const { setMonolog } = useMonolog();
  const dispatch = useAppDispatch();
  const {currentStage} = useAppSelector(authSelection)

  const onSubmit = async (data: IRegistrationForm) => {
    try {
      await registration({
        username: data.username,
        password: data.password,
      }).unwrap();
      setMonolog(monologPhrases.registrationComplete);
      setIsSigned(true);
      setTimeout(() => {
        if (currentStage === 'registration')
        dispatch(setCurrentStage("login"));
      }, 2000);
      setTimeout(() => {
        setIsSigned(false)
      }, 10000)
    } catch {
      setMonolog(monologPhrases.registrationFailed);
    }
  };

  const onClick = () => {
    setTimeout(() => {
      if (errors.password)
        setMonolog(monologPhrases[errors.password.message as phrases]);
      if (errors.username)
        setMonolog(monologPhrases[errors.username.message as phrases]);
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="stroke-black">
      <p className="text-center w-full">Заявление на вступление</p>
      <br />
      <p>Прошу принять меня в гильдию</p>
      <p>ниже предоставляю мой псевдоним и пароль</p>
      <br />
      <label>
        Псевдоним:
        <input
          id={`registration-username-input`}
          type="text"
          {...register("username", {
            minLength: { value: 8, message: "usernameMinLength" },
            required: "usernameRequired",
            pattern: /[a-zA-Zа-яА-Я0-9_.-]+/,
          })}
          className="w-[60%] ml-5 inline outline-none tracking-wider px-2 py-1 border-1 border-black"
        />
      </label>
      <br />
      <br />
      <label>
        Пароль:
        <input
          id={`registration-pass-input`}
          type="password"
          {...register("password", {
            minLength: { value: 8, message: "passwordMinLength" },
            required: "passwordRequired",
          })}
          className="w-[70%] outline-none ml-5 inline border-1 px-2 py-1 border-black"
        />
      </label>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div onClick={onClick} className="flex w-full justify-end">
        <span>Подпись:</span>
        <button className="h-7 relative w-15 border-b border-black">
          <motion.svg
            className='size-[190%] absolute bottom-0 left-0'
            viewBox="300 0 200 350"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              variants={signatureVar}
              initial="hide"
              animate={isSigned ? "show" : "hide"}
              d="M 45.857 260.563 C 45.857 271.725 42.813 284.125 45.857 295.283 C 50.274 311.479 67.759 312.127 81.232 307.075 C 96.505 301.348 111.373 280.639 117.917 267.114 C 137.234 227.192 121.967 178.73 130.364 136.751 C 143.928 163.89 140.19 195.743 140.19 227.154 C 140.19 237.691 141.666 264.66 149.361 272.355 C 151.506 274.5 152.903 267.342 153.947 264.494 C 155.611 259.956 157.302 255.412 158.533 250.737 C 166.504 220.446 174.323 187.517 170.979 155.748 C 170.421 150.439 169.722 140.487 167.704 135.441 C 167.53 135.007 167.049 130.2 167.049 130.2 C 167.049 130.2 168.252 137.6 168.359 141.336 C 168.515 146.793 168.359 152.255 168.359 157.714 C 168.359 192.429 165.444 217.393 180.806 248.117"
              strokeDasharray="0 1"
            />
            <motion.path
              d="M 197.183 243.531 C 199.03 237.99 204.017 230.931 207.009 225.843 C 223.799 197.3 200.345 239.827 211.595 217.327 C 213.491 213.535 218.008 202.984 214.216 204.88 C 212.458 205.759 211.762 213.203 211.595 214.707 C 210.918 220.805 209.192 239.162 213.56 243.531 C 215.479 245.449 220.975 241.599 222.077 240.911 C 228.91 236.64 234.095 229.535 237.144 221.913 C 237.65 220.647 240.419 212.086 240.419 212.086 C 240.419 212.086 240.419 216.89 240.419 219.292 C 240.419 221.115 239.287 245.814 245.66 241.566 C 251.503 237.671 253.079 231.769 254.176 225.188 C 254.243 224.79 254.176 217.327 254.176 217.327 C 254.176 217.327 256.285 229.297 262.037 225.188 C 272.494 217.719 279.738 196.412 283.655 185.883 C 284.868 182.625 293.191 157.568 286.931 154.438 C 283.268 152.607 281.394 158.305 280.38 160.334 C 276.171 168.751 275.159 177.319 274.484 186.538 C 273.383 201.582 272.633 217.359 275.139 232.394 C 277.986 249.472 287.586 267.377 287.586 284.802"
              variants={signatureVar}
              initial="hide"
              animate={isSigned ? "show" : "hide"}
              strokeDasharray="0 1"
            />
            <motion.path
              d="M 304.618 219.948 C 329.965 197.77 358.298 177.386 388.47 162.299 C 393.042 160.013 398.467 159.634 402.882 157.059"
              variants={signatureVar}
              initial="hide"
              animate={isSigned ? "show" : "hide"}
              strokeDasharray="0 1"
            />
          </motion.svg>
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
