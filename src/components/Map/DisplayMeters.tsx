import React, { useMemo, useCallback, FC } from "react";
import { useSelector } from "react-redux";
import { waterQuality as waterQualityConfig } from "../../mock/waterQuality";
// import RandomWaterInit from "@/components/RandomWaterInit";

interface WaterQualityState {
	waterQuality: Record<string, string | number | null>;
}

interface ParamConfig {
	label: string;
	min: number;
	max: number;
}

const DisplayMeters: FC = () => {
	const waterQuality = useSelector((state: WaterQualityState) => state.waterQuality);

	const paramConfig = useMemo(() => {
		return waterQualityConfig.reduce<Record<string, ParamConfig>>((acc, item) => {
			if (!item.label) return acc;
			const id = String(item.label);
			acc[id] = {
				label: item.label,
				min: item.min,
				max: item.max,
			};
			return acc;
		}, {});
	}, []);

	const isValidNumber = useCallback((value: string | number | null | undefined): boolean => {
		if (value === null || value === undefined || value === "") return false;
		const num = parseFloat(String(value));
		return !isNaN(num);
	}, []);

	const formatValue = useCallback(
		(value: string | number | null | undefined): string => {
			return isValidNumber(value) ? Number.parseFloat(String(value)).toFixed(2) : "---";
		},
		[isValidNumber],
	);

	const getValueColor = useCallback(
		(paramId: string, value: string | number | null | undefined): string => {
			if (!isValidNumber(value)) return "text-[#00E2A1]";

			const numValue = parseFloat(String(value));
			const config = paramConfig[paramId];
			if (!config) return "text-[#00E2A1]";
			if (numValue < config.min) return "text-[#00E2A1]";
			if (numValue > config.max) return "text-[#00E2A1]";
			return "text-[#00E2A1]";
		},
		[isValidNumber, paramConfig],
	);

	return (
		<div className="absolute top-[3%] left-[2%] scale-[45%] z-20">
			<div className="container-meter">
				<div className="grid grid-cols-2 gap-2 border-none">
					{waterQualityConfig
						.filter((item) => item.label)
						.map(({ label, name }) => {
							const id = String(label);
							const value = waterQuality[id];
							return (
								<div key={id} className="container-quality">
									<span className="font-bold text-lg text-white">{name}:</span>
									<span
										className={`text-3xl font-bold ${getValueColor(
											id,
											value,
										)}`}>
										{formatValue(value)}
									</span>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default React.memo(DisplayMeters);
