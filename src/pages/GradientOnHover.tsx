import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "../assets/HomeIcon";

export default function GradientOnHover() {
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
			<div className="w-full h-full flex flex-col items-center justify-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: { duration: 1.5, when: "afterChildren" },
					}}
					// transition={{ staggerChildren: 2 }}
					className="flex flex-col gap-10 text-zinc-200 text-7xl font-alfa uppercase bg-zinc-700 rounded-lg p-5 h-3/5 max-h-[500px] overflow-hidden"
				>
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
							transition={{ delay: 0.2, duration: 0.8 }}
							className="w-full h-6 rounded-lg bg-gray-500"
						/>
						<motion.div
							initial={{ x: "600px" }}
							exit={{ x: "600px" }}
							animate={{ x: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="w-full h-6 rounded-lg bg-gray-500"
						/>
						<motion.div
							initial={{ x: "-600px" }}
							exit={{ x: "-600px" }}
							animate={{ x: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="w-full h-6 rounded-lg bg-gray-500"
						/>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
