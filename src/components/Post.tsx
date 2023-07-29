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

	const textVariantsLocal = {
		initial: {
			y: "500px",
			opacity: 0,
		},
		inView: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 0.7,
				when: "afterParent",
			},
		},
	};

	return (
		<div className="w-full flex flex-col items-center">
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
				<motion.div
					// variants={textVariants}
					initial="initial"
					whileInView="inView"
					transition={{ staggerChildren: 0.2 }}
					className="w-full flex flex-col gap-3"
				>
					<motion.div
						variants={textVariantsLocal}
						className="w-full h-4 rounded-full bg-gray-500"
					/>
					<motion.div
						variants={textVariantsLocal}
						className="w-full h-4 rounded-full bg-gray-500"
					/>
					<motion.div
						variants={textVariantsLocal}
						className="w-full h-4 rounded-full bg-gray-500"
					/>
				</motion.div>
				<motion.div
					variants={imageVariants}
					className={`w-full h-96 ${post.img}`}
				/>
			</motion.div>
		</div>
	);
}
