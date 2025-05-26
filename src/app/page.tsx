import { FC } from 'react';
import dynamic from 'next/dynamic';

export const revalidate = 86400;

const ImageRef = dynamic(() => import("@/components/Map/ImageRef"), {
	loading: () => <div>Loading...</div>
});

const WasteWater: FC = () => {
	return (
		<div>
			<ImageRef />
		</div>
	);
};
export default WasteWater;
