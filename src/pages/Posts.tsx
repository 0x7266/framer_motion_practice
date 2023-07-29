import { Link } from "react-router-dom";
import { Post } from "../components/Post";
import HomeIcon from "../assets/HomeIcon";
import Transition from "../utils/Transition";

const data = [
	{
		title: "Title 1",
		text: "Text 1",
		img: "bg-orange-300",
	},
	{
		title: "Title 2",
		text: "Text 2",
		img: "bg-rose-300",
	},
	{
		title: "Title 3",
		text: "Text 3",
		img: "bg-blue-300",
	},
	{
		title: "Title 4",
		text: "Text 4",
		img: "bg-green-300",
	},
	{
		title: "Title 5",
		text: "Text 5",
		img: "bg-violet-300",
	},
];

export default function Posts() {
	return (
		<Transition>
			<>
				<Link to="/">
					<HomeIcon />
				</Link>
				{data.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</>
		</Transition>
	);
}
