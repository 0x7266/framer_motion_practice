import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	imageVariants,
	textVariants,
	titleVariants,
} from "../variants/ScaleOnScrollVariants";

export function Post({ post }: { post: { title: string; img: string } }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0.2, 1], [0.85, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="w-full flex flex-col items-center"
		>
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
				className="w-4/5 xl:w-3/5 bg-slate-600 flex flex-col gap-5 items-center justify-around border-4 p-10 rounded-xl shadow overflow-hidden"
			>
				<motion.div
					variants={titleVariants}
					className="text-6xl sm:text-8xl md:text-9xl text-white font-bold uppercase"
				>
					{post.title}
				</motion.div>
				<motion.div
					initial="initial"
					whileInView="inView"
					transition={{ staggerChildren: 0.2 }}
					viewport={{ amount: 0.5, once: true }}
					className="w-full flex flex-col gap-3"
				>
					<motion.div
						variants={textVariants}
						className="w-full h-6 rounded-lg bg-gray-500"
					/>
					<motion.div
						variants={textVariants}
						className="w-full h-6 rounded-lg bg-gray-500"
					/>
					<motion.div
						variants={textVariants}
						className="w-full h-6 rounded-lg bg-gray-500"
					/>
				</motion.div>
				<motion.div
					variants={imageVariants}
					className={`w-full h-28 md:h-96 rounded-lg ${post.img}`}
				/>
			</motion.div>
		</motion.div>
	);
}
