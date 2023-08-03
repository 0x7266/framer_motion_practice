import { useState } from "react";
import { Variants, motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";
import mask from "../assets/mask.svg";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";

export function MaskOnHover() {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 50;

	const parent: Variants = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
		exit: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const child: Variants = {
		initial: (index: number) => ({
			x: index % 2 === 0 ? 600 : -600,
			opacity: 0,
		}),
		animate: {
			x: 0,
			opacity: 1,
		},
		exit: (index: number) => ({
			x: index % 2 === 0 ? -600 : 600,
			opacity: 0,
		}),
	};

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
			<div className="w-full flex flex-col items-center text-3xl md:text-8xl font-bold">
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
					variants={parent}
					initial="initial"
					animate="animate"
					exit="exit"
					className="h-screen grid place-content-center max-w-screen text-zinc-300"
				>
					<motion.div variants={child} custom={0}>
						MaskOnHover
					</motion.div>
					<motion.div variants={child} className="text-green-900" custom={1}>
						MaskOnHover
					</motion.div>
					<motion.div variants={child} custom={2}>
						MaskOnHover
					</motion.div>
					<motion.div variants={child} className="text-green-900" custom={3}>
						MaskOnHover
					</motion.div>
					<motion.div variants={child} custom={4}>
						MaskOnHover
					</motion.div>
					<motion.div variants={child} className="text-green-900" custom={5}>
						MaskOnHover
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
