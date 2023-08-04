import { motion } from "framer-motion";

export default function SlideToConfirm() {
	return (
		<>
			<div className="bg-sky-700 w-96 rounded-full flex justify-center items-center text-2xl text-zinc-200 relative h-20">
				<motion.div
					drag="x"
					className="flex items-center justify-center bg-cyan-800 p-5 rounded-full h-16 w-16 text-6xl absolute left-2"
				>
					<span className="relative -top-2 left-[2px]">&#187;</span>
				</motion.div>
				<span className="m-5 font-bold">SLIDE TO CONFIRM</span>
			</div>
		</>
	);
}
