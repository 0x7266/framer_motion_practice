import { useState, useEffect } from "react";

type Position = {
	x: number;
	y: number;
};

export default function useMousePosition() {
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

	function updateMousePosition(e: MouseEvent) {
		setPosition((_prev) => ({ x: e.clientX, y: e.clientY }));
	}

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);
		return () => window.removeEventListener("mousedown", updateMousePosition);
	}, []);

	return position;
}
