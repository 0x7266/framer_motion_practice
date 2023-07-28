import { Link } from "react-router-dom";
import { Post } from "../components/Post";

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
		<>
			<Link to="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					viewBox="0 0 256 256"
					className="absolute left-2 top-2 fill-zinc-100 hover:fill-zinc-400 active:top-3 transition-all"
				>
					<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
				</svg>
			</Link>
			{data.map((post, index) => (
				<Post post={post} key={index} />
			))}
		</>
	);
}
