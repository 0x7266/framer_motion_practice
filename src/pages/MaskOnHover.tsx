import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import mask from "../assets/mask.svg";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import {
	containerVariants,
	cursorVariants,
	textVariants,
} from "../variants/MaskOnHoverVariants";

export function MaskOnHover() {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 50;

	return (
		<>
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: -10, transition: { duration: 0.6 } }}
				exit={{ y: -200 }}
				className="absolute z-40"
			>
				<Link to="/">
					<HomeIcon />
				</Link>
			</motion.div>
			<div className="w-full flex flex-col items-center text-3xl md:text-8xl font-bold overflow-hidden">
				<motion.div
					variants={cursorVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					custom={{ size, x, y }}
					className="absolute h-screen bg-violet-500 grid place-content-center w-full"
					style={{
						WebkitMaskImage: `url(${mask})`,
						WebkitMaskRepeat: "no-repeat",
					}}
				>
					<div
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="text-zinc-100"
					>
						<span>AAAAAAAAAAAAAAAAA</span>
						<br />
						<span className="text-violet-300">AAAAAAAAAAAAAAAAA</span>
						<br />
						<span>AAAAAAAAAAAAAAAAA</span>
						<br />
						<span>AAAAAAAAAAAAAAAAA</span>
					</div>
				</motion.div>
				<motion.div
					variants={containerVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					className="h-screen grid place-content-center max-w-screen text-zinc-300"
				>
					<motion.div variants={textVariants} custom={0}>
						MaskOnHover
					</motion.div>
					<motion.div
						variants={textVariants}
						className="text-green-900"
						custom={1}
					>
						MaskOnHover
					</motion.div>
					<motion.div variants={textVariants} custom={2}>
						MaskOnHover
					</motion.div>
					<motion.div
						variants={textVariants}
						className="text-green-900"
						custom={3}
					>
						MaskOnHover
					</motion.div>
					<motion.div variants={textVariants} custom={4}>
						MaskOnHover
					</motion.div>
					<motion.div
						variants={textVariants}
						className="text-green-900"
						custom={5}
					>
						MaskOnHover
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
