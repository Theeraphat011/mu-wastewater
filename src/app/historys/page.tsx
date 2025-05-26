import { FC } from "react";

const Historys: FC = () => {
	return (
		<div className="w-full h-screen overflow-y-hidden flex items-center justify-center bg-[#001239]">
			<div className="text-white text-7xl h-full w-full">
				<iframe src="http://10.41.31.225:3000/d/cemuybr5kwpa8a/data?orgId=1&from=2025-05-24T23:12:47.873Z&to=2025-05-25T00:06:20.500Z&timezone=browser&var-station=3&var-sensor=" frameBorder="0" className="w-full h-full"></iframe>
			</div>
		</div>
	);
};
export default Historys;
