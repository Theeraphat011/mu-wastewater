import { FC } from "react";
import MarkdownItems from "./MarkdownItems";
import { StationItem } from "@/mock/station";

interface MarkdownListProps {
	items: StationItem[];
}

const MarkdownList: FC<MarkdownListProps> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<MarkdownItems key={item.label} item={item} />
			))}
		</div>
	);
};

export default MarkdownList;
