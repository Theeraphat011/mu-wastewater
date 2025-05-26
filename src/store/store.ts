import { configureStore } from "@reduxjs/toolkit";
import stationSlice from "./slices/stationSlice";
import waterSlice from "./slices/waterSlice";

export const store = configureStore({
	reducer: {
		station: stationSlice,
		waterQuality: waterSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
