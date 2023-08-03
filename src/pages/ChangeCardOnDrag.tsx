import { useState } from "react";
import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion";
import { getRandomHexColor } from "../utils/getRandomHexColor";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";

type Point = {
	x: number;
	y: number;
};

type DragStart = {
	axis: "x" | "y" | null;
	animation: Point;
};

export default function ChangeCardOnDrag() {
	const [cards, setCards] = useState([
		{ text: "up or down", background: getRandomHexColor() },
		{ text: "left or right", background: getRandomHexColor() },
		{ text: "swipe me!", background: getRandomHexColor() },
	]);

	const [dragStart, setDragStart] = useState<DragStart>({
		axis: null,
		animation: { x: 0, y: 0 },
	});

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const scale = useTransform(
		dragStart.axis === "x" ? x : y,
		[-175, 0, 175],
		[1, 0.5, 1]
	);

	function onDirectionLock(axis: "x" | "y") {
		setDragStart((prev) => ({ ...prev, axis }));
	}

	function onDragEnd(_e: DragEvent, info: PanInfo) {
		// console.log({ x: e.x, y: e.y });
		if (dragStart.axis === "x") {
			if (info.offset.x >= 100) animateCardSwipe({ x: 175, y: 0 });
			if (info.offset.x <= -100) animateCardSwipe({ x: -175, y: 0 });
		}
		if (dragStart.axis === "y") {
			if (info.offset.y >= 100) animateCardSwipe({ x: 0, y: 175 });
			if (info.offset.y <= -100) animateCardSwipe({ x: 0, y: -175 });
		}
	}

	function animateCardSwipe(animation: Point) {
		setDragStart({ ...dragStart, animation });

		setTimeout(() => {
			setDragStart({ axis: null, animation: { x: 0, y: 0 } });
			x.set(0);
			y.set(0);
			setCards([
				{
					text: "just another card",
					background: getRandomHexColor(),
				},
				...cards.slice(0, cards.length - 1),
			]);
		}, 200);
	}

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
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="w-72 h-72 p-3 relative border grid place-items-center rounded-3xl overflow-hidden">
					{cards.map((card, index) =>
						index === cards.length - 1 ? (
							<motion.div
								key={index}
								drag
								dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
								dragDirectionLock
								onDirectionLock={onDirectionLock}
								onDragEnd={onDragEnd}
								whileTap={{ scale: 0.85 }}
								animate={dragStart.animation}
								transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
								className="absolute w-5/6 h-5/6 rounded-3xl p-4 flex flex-col items-center justify-center text-zinc-200 text-3xl font-bold"
								style={{
									backgroundColor: card.background,
									x,
									y,
									zIndex: index,
								}}
							>
								{card.text}
							</motion.div>
						) : (
							<motion.div
								transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
								key={index}
								className="absolute w-5/6 h-5/6 rounded-3xl p-4 flex flex-col items-center justify-center text-zinc-200 text-3xl font-bold"
								style={{
									backgroundColor: card.background,
									scale,
									zIndex: index,
								}}
							>
								{card.text}
							</motion.div>
						)
					)}
				</div>
			</div>
		</>
	);
}
