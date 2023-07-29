export function getRandomHexColor(): string {
	const num = Math.floor(Math.random() * 16777216);
	const hex = num.toString(16);
	const color = hex.padStart(6, "0");
	return "#" + color;
}
