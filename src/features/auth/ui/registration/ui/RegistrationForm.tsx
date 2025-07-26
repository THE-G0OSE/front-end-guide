import { useForm } from "react-hook-form";
import type { IRegistrationForm } from "../model/types";
import { useRegistrationMutation } from "@/features/auth/model";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<IRegistrationForm>();
  const [
    registration,
  ] = useRegistrationMutation();

  const onSubmit = async (data: IRegistrationForm) => {
    try {
    await registration({
      username: data.username,
      password: data.password,
    }).unwrap();
    } catch (_err) {
      const err = _err as {data: {message: string}}
      alert(err.data.message)
      
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            minLength: { value: 8, message: "username is too short" },
            required: "username is required",
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
            minLength: { value: 8, message: "password is too short" },
            required: "password is required",
          })}
          className="w-[70%] outline-none ml-5 inline border-1 px-2 py-1 border-black"
        />
      </label>
      <button className="flex">{isLoading ? "..." : "отправить"}</button>
    </form>
  );
};

export default RegistrationForm;
