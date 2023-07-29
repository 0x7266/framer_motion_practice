import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../variants/index";
import { getRandomHexColor } from "../utils/getRandomHexColor";
import Transition from "../utils/Transition";

export default function Index() {
	const links = [
		{
			name: "scroll animations",
			path: "/posts",
			color: getRandomHexColor(),
		},
		{ name: "link 2", path: "/", color: getRandomHexColor() },
		{ name: "link 3", path: "/", color: getRandomHexColor() },
		{ name: "link 4", path: "/", color: getRandomHexColor() },
		{ name: "link 5", path: "/", color: getRandomHexColor() },
		{ name: "link 6", path: "/", color: getRandomHexColor() },
		{ name: "link 7", path: "/", color: getRandomHexColor() },
	];
	return (
		<Transition>
			<motion.nav
				initial="initial"
				animate="animate"
				transition={{ staggerChildren: 0.3 }}
				className="w-screen flex flex-col text-zinc-200 text-7xl font-alfa uppercase bg-zinc-900"
			>
				{links.map((link, index) => (
					<motion.div
						whileHover={{
							backgroundColor: link.color,
							translateY: -20,
						}}
						variants={textVariants}
						custom={{ index, color: link.color }}
						key={index}
					>
						<div className="pt-2">
							<Link to={link.path}>{link.name}</Link>
						</div>
					</motion.div>
				))}
			</motion.nav>
		</Transition>
	);
}
