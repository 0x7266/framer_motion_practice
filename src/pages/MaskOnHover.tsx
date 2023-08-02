import { useState } from "react";
import mask from "../assets/mask.svg";
import useMousePosition from "../hooks/useMousePosition";

export function MaskOnHover() {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 50;

	return (
		<div className="w-full flex flex-col items-center text-8xl font-bold">
			<div
				className="absolute h-screen bg-violet-500 grid place-content-center w-full"
				style={{
					maskImage: `url(${mask})`,
					WebkitMaskImage: `url(${mask})`,
					maskRepeat: "no-repeat",
					WebkitMaskRepeat: "no-repeat",
					maskSize: size,
					WebkitMaskSize: size,
					maskPosition: `${x}px ${y}px`,
					WebkitMaskPosition: `${x}px ${y}px`,
				}}
			>
				<div
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					MASKMASKMASKMASKMASKMASK
				</div>
			</div>
			<div className="h-screen grid place-content-center">MaskOnHover</div>
		</div>
	);
}
