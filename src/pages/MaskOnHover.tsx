import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import mask from "../assets/mask.svg";

export function MaskOnHover() {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 50;

	return (
		<div className="w-full flex flex-col items-center text-8xl font-bold">
			<motion.div
				className="absolute h-screen bg-violet-500 grid place-content-center w-full"
				style={{
					WebkitMaskImage: `url(${mask})`,
					WebkitMaskRepeat: "no-repeat",
				}}
				animate={{
					WebkitMaskSize: `${size}px`,
					WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
			>
				<div
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					MASKMASKMASKMASKMASKMASK
				</div>
			</motion.div>
			<div className="h-screen grid place-content-center">MaskOnHover</div>
		</div>
	);
}
