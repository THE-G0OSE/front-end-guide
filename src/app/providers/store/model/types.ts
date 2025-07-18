import type { IThemeScheme } from "@/features/theme";
import type { ICameraScheme } from "@/widgets/canvas/ui/components";

export interface IStore {
    ThemeReducer: IThemeScheme
    CameraReducer: ICameraScheme
}