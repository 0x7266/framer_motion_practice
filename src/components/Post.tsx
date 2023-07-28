import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { imageVariants, textVariants, titleVariants } from "../variants/posts";

export function Post({
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
		<motion.div className="flex flex-col items-center">
			<motion.div
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}
				initial="initial"
				whileInView="inView"
				transition={{ staggerChildren: 0.3 }}
				viewport={{ amount: 0.2, once: true }}
				ref={ref}
				className="lg:w-4/5 xl:w-3/5 bg-slate-600 flex flex-col gap-5 items-center justify-around border-4 p-10 rounded-xl shadow overflow-hidden"
			>
				<motion.div
					variants={titleVariants}
					className="text-9xl text-white font-bold uppercase"
				>
					{post.title}
				</motion.div>
				<motion.div variants={textVariants} className="text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
					alias saepe rerum quasi! Iure, quos. Velit excepturi corrupti cum
					autem maxime, officiis repellendus repellat sunt ducimus, dolores hic
					animi voluptate! Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Praesentium libero natus id distinctio enim officia quis tenetur
					quibusdam, laudantium excepturi repellendus. Culpa explicabo fugiat
					similique maiores facilis vero magnam nemo. Repudiandae ipsa
					recusandae, consequuntur fugiat mollitia in? Nobis culpa laudantium,
					vel soluta molestiae veritatis quis cupiditate inventore reprehenderit
					ut explicabo tempore nulla aliquid commodi autem asperiores, natus,
					numquam adipisci! Doloremque! Pariatur id earum eaque temporibus
					veniam omnis nobis autem veritatis velit. Qui quas impedit natus,
					facere consequuntur reprehenderit ut porro dignissimos vel, eius cum
					ratione earum quisquam dolores. Obcaecati, enim!
				</motion.div>
				<motion.div
					variants={imageVariants}
					className={`w-full h-96 ${post.img}`}
				/>
			</motion.div>
		</motion.div>
	);
}
