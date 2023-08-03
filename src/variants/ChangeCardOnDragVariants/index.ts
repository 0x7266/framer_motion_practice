import { Variants } from "framer-motion";

export const containerVariants: Variants = {
	initial: { x: 500, y: -500, opacity: 0 },
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 50, damping: 10 },
	},
	exit: {
		x: -700,
		y: 700,
		opacity: 0,
		transition: { type: "spring", stiffness: 90 },
	},
};
