import type { IAuthScheme } from "@/features/auth";
import type { IThemeScheme } from "@/features/theme";
import type { ICameraScheme } from "@/widgets/camera";
import type { authApiReducer } from "@/features/auth";

export interface IStore {
    ThemeReducer: IThemeScheme
    CameraReducer: ICameraScheme
    AuthReducer: IAuthScheme
    AuthApi: ReturnType<typeof authApiReducer>
}