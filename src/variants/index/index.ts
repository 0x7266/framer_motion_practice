interface Props {
	index: number;
	color: string;
}
export const textVariants = {
	initial: {
		y: "100vh",
		backgroundColor: "rgb(24 24 27)",
		border: "2px solid rgb(228 228 231)",
		borderLeft: "none",
		borderRight: "none",
	},
	animate: ({ index }: Props) => ({
		y: index * -25,
		transition: {
			type: "spring",
			bounce: 0.2,
			duration: 0.3,
			when: "afterParent",
		},
	}),
};
