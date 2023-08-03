export const titleVariants = {
	initial: {
		y: "-500px",
		opacity: 0,
	},
	inView: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 0.7,
		},
	},
};
export const textVariants = {
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
export const imageVariants = {
	initial: {
		x: "100vw",
		opacity: 0,
	},
	inView: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.2,
			duration: 0.8,
		},
	},
};
