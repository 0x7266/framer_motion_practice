import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Post } from "../components/Post";
import HomeIcon from "../assets/HomeIcon";

const data = [
	{
		title: "Title 1",
		img: "bg-orange-300",
	},
	{
		title: "Title 2",
		img: "bg-rose-300",
	},
	{
		title: "Title 3",
		img: "bg-blue-300",
	},
	{
		title: "Title 4",
		img: "bg-green-300",
	},
	{
		title: "Title 5",
		img: "bg-violet-300",
	},
];

export default function ScrollAnimation() {
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
			{data.map((post, index) => (
				<Post post={post} key={index} />
			))}
		</div>
	);
}
