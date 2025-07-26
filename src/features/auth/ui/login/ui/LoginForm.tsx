import { useForm } from 'react-hook-form'
import type { ILoginForm } from '../model/types'
import { setToken, useLoginMutation } from '@/features/auth/model'
import { useAppDispatch } from '@hooks'

const LoginForm = () => {

  const {register, handleSubmit, formState: {isLoading}} = useForm<ILoginForm>()
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()

  const onSubmit = async (data: ILoginForm) => {
    try {
    const {token} = await login({
      username: data.username,
      password: data.password
    }).unwrap()
    dispatch(setToken(token))
    alert('success')
    } catch (err) {
      console.log(err)
    }
  }

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
              {...register('username', {minLength: {value: 8, message: 'username is too short'}, required: 'username is required', pattern: /[a-zA-Zа-яА-Я0-9_.-]+/ })}
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
              {...register('password', {minLength: {value: 8, message: 'password is too short'}, required: 'password is required'})}
              className="w-[70%] outline-none ml-5 inline border-1 px-2 py-1 border-black"
            />
          </label>
          <button className='flex' type="submit">{isLoading ? '...' : 'отправить'}</button>
    </form>
  )
}

export default LoginForm