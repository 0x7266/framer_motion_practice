import { motion, useScroll, useTransform } from "framer-motion";

export default function RandomAnimationOnScroll() {
	const { scrollYProgress } = useScroll();
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	return (
		<div className="min-h-[300dvh] bg-slate-900 flex flex-col items-center justify-center">
			<motion.div className="w-60 h-60 bg-rose-300" style={{ rotate }} />
		</div>
	);
}
