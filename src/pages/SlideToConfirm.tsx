import { motion } from "framer-motion";

export default function SlideToConfirm() {
	return (
		<>
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="bg-sky-700 w-[500px] rounded-full flex justify-center items-center text-2xl text-zinc-200 relative h-20">
					<motion.div
						drag="x"
						className="bg-cyan-800 p-5 rounded-full h-16 w-16 text-6xl"
					>
						<span className="relative -top-[27px]">&#187;</span>
					</motion.div>
					<span className="m-5 font-bold">SLIDE TO CONFIRM</span>
				</div>
			</div>
		</>
	);
}
