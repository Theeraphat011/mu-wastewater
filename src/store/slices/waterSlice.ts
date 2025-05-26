import { createSlice } from "@reduxjs/toolkit";
interface WaterState {
	PH: number | null;
	BOD: number | null;
	TEMPERATURE: number | null;
	TURBIDITY: number | null;
	COD: number | null;
	TSS: number | null;
	TDS: number | null;
	[key: string]: number | null;
}

const initialState: WaterState = {
	PH: null,
	BOD: null,
	TEMPERATURE: null,
	TURBIDITY: null,
	COD: null,
	TSS: null,
	TDS: null,
};

const waterSlice = createSlice({
	name: "waterQuality",
	initialState: initialState,
	reducers: {
		updateWater: (state, action) => {
			const { topic, value } = action.payload;

			if (
				topic.startsWith("MU/WASTEWATER/WQ") &&
				typeof value === "object" &&
				value !== null
			) {
				Object.entries(value).forEach(([key, val]) => {
					const sensorname = key.split("/")[2];
					if (sensorname in state) {
						console.log("sensorname", sensorname);
						state[sensorname] = typeof val === "number" ? val : Number(val) || null;
						console.log(key, state[key]);
					}
				});
				return;
			}
		},
	},
});

export const { updateWater } = waterSlice.actions;
export default waterSlice.reducer;
