import { Variants } from "framer-motion";

export const containerVariants: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const textVariants: Variants = {
	initial: (index: number) => ({
		x: index % 2 === 0 ? 600 : -600,
		opacity: 0,
	}),
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: (index: number) => ({
		x: index % 2 === 0 ? -600 : 600,
		opacity: 0,
	}),
};
