import { configureStore/*, type ReducersMapObject*/ } from '@reduxjs/toolkit'
// import { IStore } from './types'

// const rootReducer: ReducersMaObject<IStore> = {

// }

export const makeStore = () => {
    return configureStore({
        reducer: {/*rootReducer*/},
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']