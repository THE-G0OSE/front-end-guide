import { clearMessage, setMessage } from "@/features/monolog/model"
import { useAppDispatch } from "../useAppDispatch"
import { calculateMessageDuration } from "@/features/monolog/model/lib/utils/calculateMessageDuration"
import { useRef } from "react"

export const useMonolog = () => { 
  const dispatch = useAppDispatch()
  const currentMessage = useRef<number>(0)
  const setMonolog = (message: string) => {
    dispatch(setMessage(message))
    currentMessage.current += 1
    const number = currentMessage.current
    setTimeout(() => {
        if (number === currentMessage.current) dispatch(clearMessage())
    }, calculateMessageDuration(message) * 1000)
  }
  return {setMonolog}
}