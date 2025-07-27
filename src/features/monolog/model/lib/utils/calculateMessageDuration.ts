import { monologSettings } from "@/shared/config"

export const calculateMessageDuration = (message: string) => {
    const wordQuantity = message.split(' ').length
    const duration = wordQuantity * monologSettings.secForWord
    return duration
}