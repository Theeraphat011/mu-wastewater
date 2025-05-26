export interface StationItem {
	label: string;
	tag_status?: string;
	tag_overload?: string;
	mqqt_tag?: string;
	status_start?: string; 
	status_overload?: string; 
}

export interface Station {
	id: number;
	station: string;
	x: number;
	y: number;
	pointerPosition: string;
	RS?: StationItem[];
	CT?: StationItem[];
	LS?: StationItem[];
}

const DataStation: Station[] = [
	{
		id: 1,
		station: "PUMP STATION PS-01",
		x: 0.84,
		y: 0.1,
		pointerPosition: "bottom",
		RS: [
			{
				label: "SP-01",
				tag_status: "PS1/PUMP/SP1/STATUS",
				tag_overload: "PS1/PUMP/SP1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-02",
				tag_status: "PS1/PUMP/SP2/STATUS",
				tag_overload: "PS1/PUMP/SP2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-03",
				tag_status: "PS1/PUMP/SP3/STATUS",
				tag_overload: "PS1/PUMP/SP3/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		LS: [
			{ label: "LS04", status_start: "OFF", mqqt_tag: "PS1/LS4/STATUS" },
			{ label: "LS03", status_start: "OFF", mqqt_tag: "PS1/LS3/STATUS" },
			{ label: "LS02", status_start: "OFF", mqqt_tag: "PS1/LS2/STATUS" },
			{ label: "LS01", status_start: "OFF", mqqt_tag: "PS1/LS1/STATUS" },
		],
	},
	{
		id: 2,
		station: "PUMP STATION PS-02",
		x: 0.94,	
		y: 0.1,
		pointerPosition: "bottom",
		RS: [
			{
				label: "SP-04",
				tag_status: "PS2/PUMP/SP4/PSTATUS",
				tag_overload: "PS2/PUMP/SP4/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-05",
				tag_status: "PS2/PUMP/SP5/PSTATUS",
				tag_overload: "PS2/PUMP/SP5/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-06",
				tag_status: "PS2/PUMP/SP6/PSTATUS",
				tag_overload: "PS2/PUMP/SP6/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		LS: [
			{ label: "LS04", status_start: "OFF", mqqt_tag: "PS2/LS4/STATUS" },
			{ label: "LS03", status_start: "OFF", mqqt_tag: "PS2/LS3/STATUS" },
			{ label: "LS02", status_start: "OFF", mqqt_tag: "PS2/LS2/STATUS" },
			{ label: "LS01", status_start: "OFF", mqqt_tag: "PS2/LS1/STATUS" },
		],
	},
	{
		id: 3,
		station: "PUMP STATION PS-03",
		x: 0.84,
		y: 0.215,
		pointerPosition: "bottom",
		RS: [
			{
				label: "SPA-01",
				tag_status: "PS3/PUMP/SPA1/PSTATUS",
				tag_overload: "PS3/PUMP/SPA1/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SPA-02",
				tag_status: "PS3/PUMP/SPA2/PSTATUS",
				tag_overload: "PS3/PUMP/SPA2/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		LS: [
			{ label: "LS02", status_start: "OFF", mqqt_tag: "PS3/LS2/STATUS" },
			{ label: "LS01", status_start: "OFF", mqqt_tag: "PS3/LS1/STATUS" },
		],
	},
	{
		id: 4,
		station: "PUMP STATION PS-04",
		x: 0.94,
		y: 0.215,
		pointerPosition: "bottom",
		RS: [
			{
				label: "SPA-03",
				tag_status: "PS4/PUMP/SPA3/PSTATUS",
				tag_overload: "PS4/PUMP/SPA3/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SPA-04",
				tag_status: "PS4/PUMP/SPA4/PSTATUS",
				tag_overload: "PS4/PUMP/SPA4/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		LS: [
			{ label: "LS02", status_start: "OFF", mqqt_tag: "PS4/LS2/STATUS" },
			{ label: "LS01", status_start: "OFF", mqqt_tag: "PS4/LS1/STATUS" },
		],
	},
	{
		id: 5,
		station: "CHLORINE CONTACT CHAMBER",
		x: 0.56,
		y: 0.585,
		pointerPosition: "bottom",
		LS: [
			{
				label: "CLP-01",
				tag_status: "CC1/CHLORINE/CLP1/PSTATUS",
				tag_overload: "CC1/CHLORINE/CLP1/POVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 6,
		station: "FINAL CLARIFIER NO.2",
		x: 0.575,
		y: 0.183,
		pointerPosition: "bottom",
		LS: [
			{
				label: "SCL-02",
				tag_status: "CLA2/PUMP/SCL2/STATUS",
				tag_overload: "CLA2/PUMP/SCL2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 7,
		station: "FINAL CLARIFIER NO.1",
		x: 0.45,
		y: 0.295,
		pointerPosition: "bottom",
		LS: [
			{
				label: "SCL-01",
				tag_status: "CLA1/PUMP/SCL1/STATUS",
				tag_overload: "CLA1/PUMP/SCL1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 8,
		station: "AERATION NO.2",
		x: 0.18,
		y: 0.46,
		pointerPosition: "bottom",
		LS: [
			{
				label: "SA-04",
				tag_status: "AER2/PUMP/SA4/STATUS",
				tag_overload: "AER2/PUMP/SA4/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SA-05",
				tag_status: "AER2/PUMP/SA5/STATUS",
				tag_overload: "AER2/PUMP/SA5/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SA-06",
				tag_status: "AER2/PUMP/SA6/STATUS",
				tag_overload: "AER2/PUMP/SA6/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 9,
		station: "AERATION NO.1",
		x: 0.28,
		y: 0.56,
		pointerPosition: "bottom",
		LS: [
			{
				label: "SA-01",
				tag_status: "AER1/PUMP/SA1/STATUS",
				tag_overload: "AER1/PUMP/SA1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SA-02",
				tag_status: "AER1/PUMP/SA2/STATUS",
				tag_overload: "AER1/PUMP/SA2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SA-03",
				tag_status: "AER1/PUMP/SA3/STATUS",
				tag_overload: "AER1/PUMP/SA3/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 10,
		station: "RETURN SLUDGE TANK",
		x: 0.4,
		y: 0.11,
		pointerPosition: "bottom",
		LS: [
			{
				label: "RSP-01",
				tag_status: "RETANK/PUMP/RSP1/STATUS",
				tag_overload: "RETANK/PUMP/RSP1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "RSP-02",
				tag_status: "RETANK/PUMP/RSP2/STATUS",
				tag_overload: "RETANK/PUMP/RSP2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "RSP-03",
				tag_status: "RETANK/PUMP/RSP3/STATUS",
				tag_overload: "RETANK/PUMP/RSP3/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		RS:[
			{
				label: "EXP-01",
				tag_status: "RETANK/PUMP/EXP1/STATUS",
				tag_overload: "RETANK/PUMP/EXP1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "EXP-02",
				tag_status: "RETANK/PUMP/EXP2/STATUS",
				tag_overload: "RETANK/PUMP/EXP2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "LS1",
				status_start: "OFF",
				mqqt_tag: "MU/WASTEWATER/RETANK/LS1/STATUS",
			},
			{
				label: "LS2",
				status_start: "OFF",
				mqqt_tag: "MU/WASTEWATER/RETANK/LS2/STATUS",
			},
		]
	},
	{
		id: 11,
		station: "EQUALIZATION TANK NO 1",
		x: 0.487,
		y: 0.9,
		pointerPosition: "top",
		LS: [
			{
				label: "AEJ-01",
				tag_status: "EQ1/PUMP/AEJ1/STATUS",
				tag_overload: "EQ1/PUMP/AEJ1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "AEJ-02",
				tag_status: "EQ1/PUMP/AEJ2/STATUS",
				tag_overload: "EQ1/PUMP/AEJ2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "AEJ-03",
				tag_status: "EQ1/PUMP/AEJ3/STATUS",
				tag_overload: "EQ1/PUMP/AEJ3/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
		CT: [
			{
				label: "LS5",
				status_start: "OFF",
				mqqt_tag: "EQ1/LS5/STATUS",
			},
			{
				label: "LS4",
				status_start: "OFF",
				mqqt_tag: "EQ1/LS4/STATUS",
			},
			{
				label: "LS3",
				status_start: "OFF",
				mqqt_tag: "EQ1/LS3/STATUS",
			},
			{
				label: "LS2",
				status_start: "OFF",
				mqqt_tag: "EQ1/LS2/STATUS",
			},
			{
				label: "LS1",
				status_start: "OFF",
				mqqt_tag: "EQ1/LS1/STATUS",
			},
		],
		RS: [
			{
				label: "SP-01",
				tag_status: "EQ1/PUMP/SP1/STATUS",
				tag_overload: "EQ1/PUMP/SP1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-02",
				tag_status: "EQ1/PUMP/SP2/STATUS",
				tag_overload: "EQ1/PUMP/SP2/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "SP-03",
				tag_status: "EQ1/PUMP/SP3/STATUS",
				tag_overload: "EQ1/PUMP/SP3/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 12,
		station: "SCREEN AND GRIT CHAMBER",
		x: 0.76,
		y: 0.44,
		pointerPosition: "bottom",
		LS: [
			{
				label: "MSC-01",
				tag_status: "GRIT/PUMP/MCP1/STATUS",
				tag_overload: "GRIT/PUMP/MCP1/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
		],
	},
	{
		id: 13,
		station: "SLUDGE STORAGE TANK",
		x: 0.54,
		y: 0.43,
		pointerPosition: "bottom",
		LS: [
			{
				label: "AEJ-10",
				tag_status: "SLUDGE/PUMP/AEJ10/STATUS",
				tag_overload: "vSLUDGE/PUMP/AEJ10/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},
			{
				label: "AEJ-11",
				tag_status: "SLUDGE/PUMP/AEJ11/STATUS",
				tag_overload: "vSLUDGE/PUMP/AEJ11/OVERLOAD",
				status_start: "OFF",
				status_overload: "OFF"
			},

		],
	},
];

export default DataStation;
