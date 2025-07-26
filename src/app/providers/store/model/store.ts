import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore } from './types'
import { themeReducer } from '@/features/theme'
import { cameraReducer } from '@/widgets/camera'
import { authReducer } from '@/features/auth'
import { authApiMiddleware, authApiReducer } from '@/features/auth'

const rootReducer: ReducersMapObject<IStore> = {
    ThemeReducer: themeReducer,
    CameraReducer: cameraReducer,
    AuthReducer: authReducer,
    AuthApi: authApiReducer,
}

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(authApiMiddleware)
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']