import type { IAuthScheme } from "@/features/auth";
import type { IThemeScheme } from "@/features/theme";
import type { ICameraScheme } from "@/widgets/camera";
import type { authApiReducer } from "@/features/auth";
import type { IMonologScheme } from "@/features/monolog/model";
import type { courseApiReducer, IEditingCourseScheme } from "@/widgets/coure-constructor";

export interface IStore {
    ThemeReducer: IThemeScheme
    CameraReducer: ICameraScheme
    MonologReducer: IMonologScheme
    AuthReducer: IAuthScheme
    EditingCourseReducer: IEditingCourseScheme
    AuthApi: ReturnType<typeof authApiReducer>
    CourseApi: ReturnType<typeof courseApiReducer>
}