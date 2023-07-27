import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const data = [
	{
		title: "Title 1",
		text: "Text 1",
		img: "https://unsplash.com/photos/M5tzZtFCOfs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNDk3NTk4fA&force=true&w=640",
	},
	{
		title: "Title 2",
		text: "Text 2",
		img: "https://unsplash.com/photos/40XgDxBfYXM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNDk3ODI5fA&force=true&w=640",
	},
	{
		title: "Title 3",
		text: "Text 3",
		img: "https://unsplash.com/photos/oZPwn40zCK4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNDk3ODQyfA&force=true&w=640",
	},
	{
		title: "Title 4",
		text: "Text 4",
		img: "https://unsplash.com/photos/PSpf_XgOM5w/download?force=true&w=640",
	},
	{
		title: "Title 5",
		text: "Text 5",
		img: "https://unsplash.com/photos/ISG-rUel0Uw/download?force=true&w=640",
	},
];

export default function Posts() {
	return (
		<>
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
	const scaleProgress = useTransform(scrollYProgress, [0.2, 1], [0.4, 1]);
	return (
		<motion.div
			style={{
				scale: scaleProgress,
				opacity: scrollYProgress,
			}}
			ref={ref}
			className="w-3/5 bg-slate-600 flex flex-col gap-5 items-center justify-around border-4 p-10 rounded-xl shadow"
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
			<img src={post.img} alt={post.text} className="" />
		</motion.div>
	);
}
