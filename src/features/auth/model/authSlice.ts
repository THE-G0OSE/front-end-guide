import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuthScheme, stage } from "./types";
import type { IStore } from "@/app/providers/store";

const initialState: IAuthScheme = {
    currentStage: 'none'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentStage: (state, action: PayloadAction<stage>) => {
            state.currentStage = action.payload
        }
    }
})


export const authReducer = authSlice.reducer
export const {setCurrentStage} = authSlice.actions
export const authSelection = (state: IStore) => state.AuthReducer