import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function getRandomHexColor(): string {
	const num = Math.floor(Math.random() * 16777216);
	const hex = num.toString(16);
	const color = hex.padStart(6, "0");
	return "#" + color;
}

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
		<nav className="w-screen flex flex-col text-zinc-100 text-9xl font-extrabold uppercase bg-zinc-900">
			{links.map((link, index) => (
				<motion.div
					initial={{
						y: index * -25,
						backgroundColor: "rgb(24 24 27)",
						border: "2px solid white",
						borderLeft: "none",
						borderRight: "none",
					}}
					whileHover={{
						backgroundColor: link.color,
						translateY: -20,
					}}
				>
					<Link to={link.path}>{link.name}</Link>
				</motion.div>
			))}
		</nav>
	);
}
