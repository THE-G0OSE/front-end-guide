import { authSelection, setCurrentStage, setToken, useLoginMutation, useRegistrationMutation } from "@/features/auth/model"
import type { IRegistrationForm } from "../ui/registration"
import type { ILoginForm } from "../ui/login/model/types"
import { useAppDispatch, useAppSelector, useMonolog } from "@hooks"
import { monologPhrases } from "@/shared/config/monolog/monologPhrases"

type IAuthFunc<T> = (
    data: T,
    okCallback?: () => void,
    errorCallback?: () => void,
) => void

export const useAuth = () => {

    const dispatch = useAppDispatch()
    const { currentStage } = useAppSelector(authSelection)
    const [loginMutation] = useLoginMutation()
    const [registrationMutation] = useRegistrationMutation()
    const {setMonolog} = useMonolog()

    const login: IAuthFunc<ILoginForm> = async (data, okCallback?, errorCallback?) => {
        try {
            const { token } = await loginMutation({
                username: data.username,
                password: data.password,
            }).unwrap();
            dispatch(setToken(token));
            setMonolog(monologPhrases.loginComplete);
            setTimeout(() => {
                if (currentStage === 'login') dispatch(setCurrentStage('none'))
            }, 2000);
            if(okCallback)okCallback()
        } catch {
            setMonolog(monologPhrases.loginFailed)
            if(errorCallback)errorCallback()
        }
    }

    const registration:IAuthFunc<IRegistrationForm> = async (data, okCallback?, errorCallback?) => {
        try {
           await registrationMutation({
            username: data.username,
            password: data.password,
           }).unwrap();
           setMonolog(monologPhrases.registrationComplete)
           setTimeout(() => {
            if (currentStage === 'registration') dispatch(setCurrentStage("login"))
           }, 2000)
           if(okCallback)okCallback()
        } catch {
            setMonolog(monologPhrases.registrationFailed)
            if(errorCallback)errorCallback()
        }
    }

    return {login, registration}

}