import { FC } from 'react';

const StormWater: FC = () => {
	return (
		<div className="w-full h-screen overflow-y-hidden flex items-center justify-center bg-[#001239]">
			<div className="text-white text-7xl h-full w-full">
				<iframe src="http://10.41.31.245/login.php" frameBorder="0" className="w-full h-full"></iframe>
			</div>
		</div>
	);
};
export default StormWater;
