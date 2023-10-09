import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";

const images = [
	"https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	"https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
	"https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	"https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	"https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
	"https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
	"https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
	"https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
	"https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
	"https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	"https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const imgVariants = {
	initial: (direction: number) => ({ opacity: 0, x: -400 * direction }),
	animate: { opacity: 1, x: 0 },
	exit: (direction: number) => ({ opacity: 0, x: 400 * direction }),
};

export default function RandomAnimationOnScroll() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 80,
		damping: 60,
		restDelta: 0.001,
	});
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
	const borderRadius = useTransform(scrollYProgress, [1, 0], [0, 10]);
	const x = useTransform(scrollYProgress, [1, 0], [0, 300]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setDirection((_prev) =>
			scrollYProgress.getPrevious() - latest < 0 ? -1 : 1
		);
		setIndex(Math.round(latest * 10));
	});

	return (
		<>
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: -10, transition: { duration: 0.6 } }}
				exit={{ y: -200 }}
				className="absolute z-40"
			>
				<Link to="/">
					<HomeIcon />
				</Link>
			</motion.div>
			<div className="min-h-[300dvh] bg-slate-900 flex flex-col items-center">
				<motion.div
					className="fixed top-0 left-0 right-0 h-3 bg-rose-500 self-start z-10"
					style={{ scaleX, transformOrigin: "0%" }}
				/>
				<motion.div
					className="fixed top-20 w-60 h-60 bg-rose-300"
					style={{ rotate, scale, borderRadius, x }}
				/>

				<div className="fixed top-96">
					<div className="relative flex justify-center items-center w-[350px] h-[350px] border-4 rounded-2xl overflow-hidden">
						<AnimatePresence initial={false} key={direction}>
							<motion.img
								custom={direction}
								variants={imgVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.3 }}
								src={images[index]}
								key={images[index]}
								className="absolute object-cover h-[350px] w-[350px] rounded-xl"
							/>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	);
}
