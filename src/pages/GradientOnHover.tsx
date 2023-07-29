import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../variants/index/index";
import { Post } from "../components/Post";
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
			<div className="container mx-auto">
				<motion.div
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ x: 5000 }}
					transition={{ staggerChildren: 0.1 }}
					className="flex flex-col text-zinc-200 text-7xl font-alfa uppercase"
				>
					<div className="flex flex-col">
						<h1>HOVER ME</h1>
						<motion.div
							initial="initial"
							whileInView="inView"
							transition={{ staggerChildren: 0.2 }}
							viewport={{ amount: 0.5, once: true }}
							className="w-full flex flex-col gap-3"
						>
							<motion.div className="w-full h-6 rounded-lg bg-gray-500" />
							<motion.div className="w-full h-6 rounded-lg bg-gray-500" />
							<motion.div className="w-full h-6 rounded-lg bg-gray-500" />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
