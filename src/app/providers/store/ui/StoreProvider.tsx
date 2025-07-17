import { Provider } from 'react-redux'
import { useRef } from "react"
import { makeStore, type AppStore } from "../model"

interface IProps {
    children: React.ReactNode
}

export const StoreProvider: React.FC<IProps> = ({children}) => {
    const storeRef = useRef<AppStore>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}