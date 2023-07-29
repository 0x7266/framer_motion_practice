import { motion } from "framer-motion";
import { ReactElement } from "react";
import { transitionVariants } from "../variants/page";

export default function Transition({ children }: { children: ReactElement }) {
	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.8 }}
			className="w-full flex flex-col gap-3"
		>
			{children}
		</motion.div>
	);
}
