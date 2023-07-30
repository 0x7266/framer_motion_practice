import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import HomeIcon from "../assets/HomeIcon";
import { Link } from "react-router-dom";

export default function Demo() {
	const [mousePostion, setMousePosition] = useState({ x: 0, y: 0 });

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();

		const xPosition = clientX - left;
		const yPosition = clientY - top;
		setMousePosition({ x: xPosition, y: yPosition });
	}

	return (
		<>
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: -10, transition: { duration: 0.6 } }}
				exit={{ y: -200 }}
			>
				<Link to="/">
					<HomeIcon />
				</Link>
			</motion.div>
			<div className="h-full flex flex-col items-center justify-center">
				<div
					className="flex flex-col justify-center h-4/5 max-h-[700px]"
					onMouseMove={handleMouseMove}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{
							opacity: 0,
							transition: { duration: 1.5, when: "afterChildren" },
							backgroundColor: "transparent",
						}}
						className="relative text-zinc-200 text-7xl font-alfa uppercase bg-gray-900 rounded-3xl p-14 overflow-hidden h-full"
					>
						<motion.div
							className="absolute inset-0"
							style={{
								background: `radial-gradient(450px circle at ${mousePostion.x}px ${mousePostion.y}px, rgba(14, 165, 233, .15), transparent 80%)`,
							}}
						/>
						<motion.div className="invisible flex flex-col gap-10">
							<motion.h1 initial={{ y: -300 }} animate={{ y: 0 }}>
								HOVER ME
							</motion.h1>
							<motion.div
								initial="initial"
								whileInView="inView"
								transition={{ staggerChildren: 0.2 }}
								viewport={{ amount: 0.5, once: true }}
								className="w-full flex flex-col gap-3"
							>
								<motion.div
									initial={{ x: "-600px" }}
									exit={{ x: "-600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.2, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
								<motion.div
									initial={{ x: "600px" }}
									exit={{ x: "600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.3, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
								<motion.div
									initial={{ x: "-600px" }}
									exit={{ x: "-600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
}
