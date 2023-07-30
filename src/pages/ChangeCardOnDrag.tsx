import { useState } from "react";
import { motion } from "framer-motion";
import { getRandomHexColor } from "../utils/getRandomHexColor";

export default function ChangeCardOnDrag() {
	const [cards, setCards] = useState([
		{ text: "up or down", background: getRandomHexColor() },
		{ text: "left or right", background: getRandomHexColor() },
		{ text: "swipe me!", background: getRandomHexColor() },
	]);
	const [dragStart, setDragStart] = useState({
		axis: null,
		animation: { x: 0, y: 0 },
	});

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div className="w-72 h-72 p-3 relative border grid place-items-center rounded-3xl overflow-hidden">
				{cards.map((card, index) => (
					<motion.div
						drag
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						dragDirectionLock
						onDirectionLock={(axis) => console.log(axis)}
						whileTap={{ scale: 0.85 }}
						key={index}
						className="absolute w-5/6 h-5/6 rounded-3xl p-4 flex flex-col items-center justify-center text-zinc-200 text-3xl font-bold"
						style={{ backgroundColor: card.background }}
					>
						{card.text}
					</motion.div>
				))}
			</div>
		</div>
	);
}
