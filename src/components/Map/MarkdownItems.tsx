import { FC } from "react";
import { ErrorIcon, StatusAnimation, Styles } from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface Item {
	label: string;
	status_start?: string;
	status_overload?: string;
	tag_status?: string;
	tag_overload?: string;
	mqqt_tag?: string;
}

interface MarkdownItemsProps {
	item: Item;
}

const MarkdownItems: FC<MarkdownItemsProps> = ({ item }) => {
	const stations = useSelector((state: RootState) => state.station.stations);

	let runStatus = null;
	let overloadStatus = null;
	for (const station of stations) {
		const found = station.items.find(
			(i: {
				tag_status?: string;
				tag_overload?: string;
				mqqt_tag?: string;
				status_start?: string;
				status_overload?: string;
			}) =>
				(i.tag_status && i.tag_status === item.tag_status) ||
				(i.tag_overload && i.tag_overload === item.tag_overload) ||
				(typeof i.mqqt_tag === "string" &&
					typeof item.mqqt_tag === "string" &&
					i.mqqt_tag === item.mqqt_tag),
		);
		if (found) {
			runStatus = found.status_start;
			overloadStatus = found.status_overload;
			break;
		}
	}

	const isActive = runStatus === "ON";
	const isOverload = overloadStatus === "ON";
	const hasError = isOverload;
	const styles = Styles(isActive, hasError);

	return (
		<div className="flex items-center gap-4 mt-1 p-2 font-semibold">
			<StatusAnimation color={styles.ballColor} />
			<div className="flex items-center gap-1 text-3xl">
				<p
					className={` ${styles.textColor} transition-colors duration-300 whitespace-nowrap mr-4`}>
					{item.label}
				</p>
				{isOverload && <ErrorIcon />}
			</div>
		</div>
	);
};

export default MarkdownItems;
