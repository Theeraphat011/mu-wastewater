import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DataStation from "@/mock/station";

interface StationItem {
	label: string;
	tag_status?: string;
	tag_overload?: string;
	status_start?: string;
	status_overload?: string;
}
interface StationRedux {
	// topic: string;
	items: StationItem[];
}
interface StationState {
	stations: StationRedux[];
}

const initialState: StationState = {
	stations: [],
};

const stationSlice = createSlice({
	name: "station",
	initialState,
	reducers: {
		updateStation: (
			state,
			action: PayloadAction<{ topic: string; value: Record<string, number> }>,
		) => {
			const { value } = action.payload;

			const updatedStations: StationRedux[] = DataStation.map((station) => {
				const allItems = [
					...(station.RS || []),
					...(station.CT || []),
					...(station.LS || []),
				];

				allItems.forEach((item) => {
					Object.entries(value).forEach(([key, val]) => {
						if (item.mqqt_tag === key) {
							item.status_start = val === 1 ? "ON" : "OFF";
						}
						if (item.tag_status === key) {
							item.status_start = val === 1 ? "ON" : "OFF";
						}
						if (item.tag_overload === key) {
							item.status_overload = val === 1 ? "ON" : "OFF";
						}
					});
				});

				const newItems = allItems.map((item) => ({
					...item,
				}));

				return {
					// topic: station.station,
					items: newItems,
				};
			});

			state.stations = updatedStations;
		},
	},
});

export const { updateStation } = stationSlice.actions;
export default stationSlice.reducer;
