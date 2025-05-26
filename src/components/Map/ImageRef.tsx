"use client"

import { useRef, useState, useEffect, FC } from "react";
import MainPoints from "./MainPoints";
import DisplayMeters from "./DisplayMeters";
import Image from "next/image";
import MAP from "@/../public/map.svg";

interface Size {
  width: number;
  height: number;
}

const ImageRef: FC = () => {
	const imgRef = useRef<HTMLImageElement | null>(null);
	const [size, setSize] = useState<Size>({ width: 0, height: 0 });
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		if (!imgRef.current) return;

		const observer = new ResizeObserver(([entry]) => {
			setSize({
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			});
			setIsLoaded(true);
		});

		observer.observe(imgRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="w-full  hide-scrollbar">
			<DisplayMeters />
			<div className="relative h-screen">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-full h-full max-w-full max-h-full">
						<Image
							width={100}
							height={100}
							src={MAP}
							alt="Icogram"
							className="w-full h-auto transform object-contain"
							ref={imgRef}
						/>
						{isLoaded && <MainPoints size={size} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageRef;
