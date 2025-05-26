export interface waterQuality {
	label: string;
	value: number | null;
	min: number;
	max: number;
}

export const waterQuality = [
	{
		name: "pH",
		label: "PH",
		value: null,
		min: 4,
		max: 14,
	},
	{
		name: "BOD",
		label: "BOD",
		value: null,
		min: 4,
		max: 14,
	},
	{
		name: "Temperature",
		label: "TEMPERATURE",
		value: null,
		min: 4,
		max: 14,
	},
	{
		name: "Turbidity",
		label: "TURBIDITY",
		value: null,
		min: 4,
		max: 14,
	},
	{
		name: "COD",
		label: "COD",
		value: null,
		min: 4,
		max: 200,
	},
	{
		name: "TSS",
		label: "TSS",
		value: null,
		min: 4,
		max: 14,
	},
];
