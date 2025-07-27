import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMonologScheme } from "./types";
import type { RootState } from "@/app/providers/store";

const initialState: IMonologScheme = {
    message: null
}

export const monologSlice = createSlice({
    name: 'monolog',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
        clearMessage: (state) => {
            state.message = null
        }
    }
})

export const monologReducer = monologSlice.reducer
export const {setMessage, clearMessage} = monologSlice.actions
export const monologSelection = (state: RootState) => state.MonologReducer