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
			name: "posts --- scroll animations",
			path: "/posts",
			color: getRandomHexColor(),
		},
		{ name: "blablablablabla1", path: "/", color: getRandomHexColor() },
		{ name: "blablablablabla2", path: "/", color: getRandomHexColor() },
		{ name: "blablablablabla3", path: "/", color: getRandomHexColor() },
		{ name: "blablablablabla4", path: "/", color: getRandomHexColor() },
		{ name: "blablablablabla5", path: "/", color: getRandomHexColor() },
		{ name: "blablablablabla6", path: "/", color: getRandomHexColor() },
	];
	return (
		<nav className="w-screen flex flex-col text-zinc-100 text-7xl font-bold uppercase bg-zinc-900">
			{links.map((link, index) => (
				<motion.div
					initial={{
						y: (index + 1) * -18,
						backgroundColor: "rgb(24 24 27)",
						border: "2px solid white",
						borderLeft: "none",
						borderRight: "none",
					}}
					whileHover={{
						backgroundColor: link.color,
						y: (index + 1) * -20,
					}}
				>
					<Link to={link.path} className="p-2">
						{link.name}
					</Link>
				</motion.div>
			))}
		</nav>
	);
}
