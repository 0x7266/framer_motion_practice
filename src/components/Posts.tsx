import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

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

function Post({
	post,
}: {
	post: { title: string; text: string; img: string };
}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0.2, 1], [0.95, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]);
	return (
		<motion.div
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			ref={ref}
			className="lg:w-4/5 xl:w-3/5 bg-slate-600 flex flex-col gap-5 items-center justify-around border-4 p-10 rounded-xl shadow"
		>
			<div className="text-9xl text-white font-bold uppercase">
				{post.title}
			</div>
			<div className="text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias
				saepe rerum quasi! Iure, quos. Velit excepturi corrupti cum autem
				maxime, officiis repellendus repellat sunt ducimus, dolores hic animi
				voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Praesentium libero natus id distinctio enim officia quis tenetur
				quibusdam, laudantium excepturi repellendus. Culpa explicabo fugiat
				similique maiores facilis vero magnam nemo. Repudiandae ipsa recusandae,
				consequuntur fugiat mollitia in? Nobis culpa laudantium, vel soluta
				molestiae veritatis quis cupiditate inventore reprehenderit ut explicabo
				tempore nulla aliquid commodi autem asperiores, natus, numquam adipisci!
				Doloremque! Pariatur id earum eaque temporibus veniam omnis nobis autem
				veritatis velit. Qui quas impedit natus, facere consequuntur
				reprehenderit ut porro dignissimos vel, eius cum ratione earum quisquam
				dolores. Obcaecati, enim!
			</div>
			<div className={`w-full h-96 ${post.img}`} />
		</motion.div>
	);
}
