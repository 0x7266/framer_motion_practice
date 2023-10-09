import { Variants } from "framer-motion";

export const containerVariants: Variants = {
	initial: { rotate: "-360deg", scale: 0 },
	animate: {
		rotate: "0deg",
		scale: 1,
		transition: { type: "spring", stiffness: 50, damping: 10 },
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: { type: "spring", stiffness: 90 },
	},
};
