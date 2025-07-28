import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/features/auth/model/useAuth";
import type { ILoginForm } from "../model/types";

import Sign from "../../sign/ui/Sign";

const LoginForm = () => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const { login } = useAuth();

  const onSubmit = async (data: ILoginForm) => {
    await login(data, () => {
      setIsSigned(true);
      setTimeout(() => {
        setIsSigned(false);
      }, 10000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center w-full">Заявление о восстановлении пропуска</p>
      <br />
      <p>Прошу воостановить мой пропуск</p>
      <p>ниже предоставляю мой псевдоним и пароль</p>
      <br />
      <label>
        Псевдоним:
        <input
          id={`login-username-input`}
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
          id={`login-pass-input`}
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
      <Sign isSigned={isSigned} errors={errors} />
    </form>
  );
};

export default LoginForm;
