import { motion, useScroll, useTransform } from "framer-motion";

export default function RandomAnimationOnScroll() {
	const { scrollYProgress } = useScroll();
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
	const borderRadius = useTransform(scrollYProgress, [0, 1], [0, "100%"]);
	return (
		<div className="min-h-[300dvh] bg-slate-900 flex flex-col items-center">
			<motion.div
				className="fixed top-0 left-0 right-0 h-3 bg-rose-500 self-start z-10"
				style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
			/>
			<motion.div
				className="fixed top-20 w-60 h-60 bg-rose-300"
				style={{ rotate, scale }}
			/>
		</div>
	);
}
