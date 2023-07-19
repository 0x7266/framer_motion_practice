import { motion } from "framer-motion";

const data = [
	{
		title: "Title 1",
		text: "Text 1",
		img: "https://images.unsplash.com/photo-1531668383211-64743e924c66",
	},
	{
		title: "Title 2",
		text: "Text 2",
		img: "https://images.unsplash.com/photo-1533709752211-118fcaf03312",
	},
	{
		title: "Title 3",
		text: "Text 3",
		img: "https://images.unsplash.com/photo-1555589228-5dc844368071",
	},
	{
		title: "Title 4",
		text: "Text 4",
		img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
	},
	{
		title: "Title 5",
		text: "Text 5",
		img: "https://images.unsplash.com/photo-1597787185613-cf51d79fa7e4",
	},
];

export default function Posts() {
	return (
		<>
			{data.map((post, index) => (
				<div
					key={index}
					className="w-3/5 flex flex-col gap-5 items-center justify-around h-screen"
				>
					<div className="text-9xl text-white font-bold uppercase">
						{post.title}
					</div>
					<div className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						alias saepe rerum quasi! Iure, quos. Velit excepturi corrupti cum
						autem maxime, officiis repellendus repellat sunt ducimus, dolores
						hic animi voluptate! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Praesentium libero natus id distinctio enim
						officia quis tenetur quibusdam, laudantium excepturi repellendus.
						Culpa explicabo fugiat similique maiores facilis vero magnam nemo.
						Repudiandae ipsa recusandae, consequuntur fugiat mollitia in? Nobis
						culpa laudantium, vel soluta molestiae veritatis quis cupiditate
						inventore reprehenderit ut explicabo tempore nulla aliquid commodi
						autem asperiores, natus, numquam adipisci! Doloremque! Pariatur id
						earum eaque temporibus veniam omnis nobis autem veritatis velit. Qui
						quas impedit natus, facere consequuntur reprehenderit ut porro
						dignissimos vel, eius cum ratione earum quisquam dolores. Obcaecati,
						enim!
					</div>
					<motion.img
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						src={post.img}
						alt={post.text}
						className="w-full max-h-96 object-none"
					/>
				</div>
			))}
		</>
	);
}
