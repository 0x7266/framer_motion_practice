import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../variants/index";
import { getRandomHexColor } from "../utils/getRandomHexColor";

export default function Index() {
	const links = [
		{
			name: "scale on scroll",
			path: "/scaleonscroll",
			color: getRandomHexColor(),
		},
		{
			name: "gradient on hover",
			path: "/gradientonhover",
			color: getRandomHexColor(),
		},
		{
			name: "change card on drag",
			path: "/changecardondrag",
			color: getRandomHexColor(),
		},
		{ name: "mask on hover", path: "/maskonhover", color: getRandomHexColor() },
		{ name: "link 5", path: "/", color: getRandomHexColor() },
		{ name: "link 6", path: "/", color: getRandomHexColor() },
		{ name: "link 7", path: "/", color: getRandomHexColor() },
	];
	return (
		<motion.nav
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ staggerChildren: 0.1 }}
			className="w-screen flex flex-col text-zinc-200 text-7xl font-alfa uppercase py-5"
		>
			{links.map((link, index) => (
				<Link to={link.path} key={index}>
					<motion.div
						whileHover={{
							backgroundColor: link.color,
							translateY: -20,
						}}
						variants={textVariants}
						custom={{ index, color: link.color }}
					>
						<div className="pt-2">{link.name}</div>
					</motion.div>
				</Link>
			))}
		</motion.nav>
	);
}
