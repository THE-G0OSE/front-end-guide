import type { RootState } from "@/app/providers/store";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector