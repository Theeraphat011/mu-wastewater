import { FC } from "react";
import dataStructure, { Station } from "@/mock/station";
import MarkdownList from "./MarkdownList";
import "./style.css";

interface Size {
	width: number;
	height: number;
}

interface MainPointsProps {
	size: Size;
}

const MainPoints: FC<MainPointsProps> = ({ size }) => {
	if (!size.width || !size.height) return null;

	return (
		<div className="px-50">
			{dataStructure.map((location: Station) => {
				const top = location.y * size.height;
				const left = location.x * size.width;

				const hasLS = Array.isArray(location.LS) && location.LS.length > 0;
				const hasRS = Array.isArray(location.RS) && location.RS.length > 0;
				const hasCT = Array.isArray(location.CT) && location.CT.length > 0;

				const pointerPosition = location.pointerPosition;

				return (
					<div
						key={location.id}
						className="absolute -translate-x-1/2 -translate-y-1/2 scale-[42%]"
						style={{ top: `${top}px`, left: `${left}px` }}>
						<div className="relative">
							{/* Container boxs*/}
							<div className={`w-auto container-endpoint`}>
								<div
									className={`container-pointer pointer-${pointerPosition}`}></div>
								<h1 className="text-4xl text-left font-semibold text-white whitespace-nowrap mb-3">
									{location.station}
								</h1>
								{/* Container display */}
								<div className="flex items-start justify-between gap-10">
									{hasLS && location.LS && <MarkdownList items={location.LS} />}
									{hasCT && location.CT && <MarkdownList items={location.CT} />}
									{hasRS && location.RS && <MarkdownList items={location.RS} />}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default MainPoints;
