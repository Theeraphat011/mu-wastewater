import { FC } from "react";

const Historys: FC = () => {
	return (
		<div className="w-full h-screen overflow-y-hidden flex items-center justify-center bg-[#001239]">
			<div className="text-white text-7xl h-full w-full">
				<iframe src="http://localhost/grafana/d/femyo58gkmd4wc/all-status?orgId=1&from=now-12h&to=now&timezone=browser" frameBorder="0" className="w-full h-full"></iframe>
			</div>
		</div>
	);
};
export default Historys;
