import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../model/useAuth";

import type { IRegistrationForm } from "../model/types";

import Sign from "../../sign/ui/Sign";

const RegistrationForm = () => {

  const [isSigned, setIsSigned] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>();

  const { registration } = useAuth();

  const onSubmit = async (data: IRegistrationForm) => {
    await registration(data, () => {
      setIsSigned(true);
      setTimeout(() => {
        setIsSigned(false);
      }, 10000);
    });
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
      <Sign errors={errors} isSigned={isSigned} />
    </form>
  );
};

export default RegistrationForm;
