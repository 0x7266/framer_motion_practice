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
		transition: { duration: 0.05 },
	}),
};

export const cursorVariants: Variants = {
	initial: { opacity: 0 },
	animate: ({ size, x, y }) => ({
		WebkitMaskSize: `${size}px`,
		WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
		transition: {
			type: "tween",
			ease: "backOut",
			duration: 0.5,
			opacity: { duration: 2 },
		},
		opacity: 1,
	}),
	exit: {
		opacity: 0,
		transition: { duration: 0.8 },
	},
};
