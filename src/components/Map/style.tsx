import { FC } from "react";

interface StyleResult {
	ballColor: string;
	textColor: string;
}

interface StatusAnimationProps {
	color: string;
}

export const Styles = (isActive: boolean, hasError: boolean): StyleResult => {
	if (hasError) {
		return {
			ballColor: "bg-gradient-to-t from-[#F20011] to-[#FFA18B] border-2 border-[#FFA18B]  shadow-red-500/50",
			textColor: "text-white",
		};
	}
	if (isActive) {
		return {
			ballColor: "bg-gradient-to-t from-[#0EA012] to-[#55DB58] border-2 border-[#B1EF5C] shadow-green-500/50",
			textColor: "text-white",
		};
	}
	return {
		ballColor: "bg-gradient-to-r from-[#F7F7F7] to-[#E8E8E8] border-3 border-[#E8E8E8]",
		textColor: "text-white",
	};
};

export const StatusAnimation: FC<StatusAnimationProps> = ({ color }) => (
	<div
		className={`relative w-12 h-12 rounded-full transition-colors duration-300 ${color} shadow-lg`}>
	</div>
);

export const ErrorIcon: FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="w-12 h-12 text-red-500 animate-pulse"
		aria-hidden="true">
		<path
			fillRule="evenodd"
			d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
			clipRule="evenodd"
		/>
	</svg>
);
