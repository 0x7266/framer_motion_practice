import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import HomeIcon from "../assets/HomeIcon";
import { Link } from "react-router-dom";

export default function Demo() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div className="flex flex-col gap-5">
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: -10, transition: { duration: 0.6 } }}
				exit={{ y: -200 }}
			>
				<Link to="/">
					<HomeIcon />
				</Link>
			</motion.div>
			<div className="h-screen flex flex-col items-center sm:justify-center">
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{
						x: [40, -40, 0, 40, -40, 0, 40, -40, 0, 40, -40, 0, 40, -40, 0],
						scale: [1, 0],
						transition: { duration: 0.6 },
					}}
					className="relative flex flex-col justify-center w-11/12 sm:w-full max-w-lg min-h-fit group rounded-3xl border border-gray-700 bg-gray-900 overflow-hidden"
					onMouseMove={handleMouseMove}
				>
					<motion.div
						className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"
						style={{
							background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, .15), transparent 80%)`,
						}}
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{
							opacity: 0,
							transition: { duration: 1.5, when: "afterChildren" },
							backgroundColor: "transparent",
						}}
						transition={{ delayChildren: 4 }}
						className="text-zinc-200 text-4xl md:text-7xl font-alfa uppercase p-6 h-full flex flex-col gap-10"
					>
						<motion.h1 initial={{ y: -300 }} animate={{ y: 0 }}>
							HOVER ME
						</motion.h1>
						<motion.div
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
							<div className="flex gap-3">
								<motion.div
									initial={{ x: "-600px" }}
									exit={{ x: "-600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
								<motion.div
									initial={{ x: "600px" }}
									exit={{ x: "600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
							</div>
							<motion.div
								initial={{ x: "-600px" }}
								exit={{ x: "-600px" }}
								animate={{ x: 0 }}
								transition={{ delay: 0.7, duration: 0.4 }}
								className="w-full h-6 rounded-lg bg-gray-500"
							/>
							<div className="flex gap-3">
								<motion.div
									initial={{ x: "-600px" }}
									exit={{ x: "-600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.9, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
								<motion.div
									initial={{ x: "600px" }}
									exit={{ x: "600px" }}
									animate={{ x: 0 }}
									transition={{ delay: 0.9, duration: 0.4 }}
									className="w-full h-6 rounded-lg bg-gray-500"
								/>
							</div>
							<motion.div
								initial={{ y: "800px" }}
								exit={{ y: "800px" }}
								animate={{ y: 0 }}
								transition={{ delay: 0.9, duration: 0.4 }}
								className="h-60 w-full bg-slate-800 rounded-lg"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
