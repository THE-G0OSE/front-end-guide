import { type LocationType } from "@hooks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { changeActivityPayload, ICameraScheme } from "./types";
import type { IStore } from "@/app/providers/store";
import { locationsConfig } from "@/widgets/scenes";

const { cameraRotation } = locationsConfig["outside"];

const initialState: ICameraScheme = {
  currentLocation: "outside",
  currentPosition: [0, 0, 0],
  currentRotation: cameraRotation,
  currentCursorBasedOffset: [0, 0],
  currentActivity: null,
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<LocationType>) => {
      state.currentLocation = action.payload;
      state.currentRotation = locationsConfig[action.payload].cameraRotation;
      state.currentPosition = [0, 0, 0];
    },
    setCurrenPosition: (
      state,
      action: PayloadAction<[number, number, number]>
    ) => {
      state.currentPosition = action.payload;
    },
    setCurrentRotation: (
      state,
      action: PayloadAction<[number, number, number]>
    ) => {
      state.currentRotation = action.payload;
    },
    setCurrentCursorBasedOffset: (
      state,
      action: PayloadAction<[number, number]>
    ) => {
      state.currentCursorBasedOffset = action.payload;
    },
    setCurrentActivity: (
      state,
      action: PayloadAction<changeActivityPayload | null>
    ) => {
      if (action.payload) {
        state.currentActivity = action.payload.activity;
        state.currentPosition = locationsConfig[
          action.payload.location
        ].activities!.find(
          (act) => act.name === action.payload!.activity
        )!.cameraPosition;
      } else {
        state.currentActivity = null;
        state.currentPosition = [0, 0, 0];
      }
      state.currentCursorBasedOffset = [0, 0];
    },
  },
});

export const cameraReducer = cameraSlice.reducer;
export const {
  setCurrenPosition,
  setCurrentLocation,
  setCurrentRotation,
  setCurrentCursorBasedOffset,
  setCurrentActivity,
} = cameraSlice.actions;
export const CameraSelection = (state: IStore) => state.CameraReducer;
