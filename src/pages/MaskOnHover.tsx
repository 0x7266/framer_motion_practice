import mask from "../assets/mask.svg";

export function MaskOnHover() {
	return (
		<div className="w-full flex flex-col items-center text-8xl font-bold">
			<div
				className="absolute h-screen bg-violet-500 grid place-content-center w-full"
				style={{
					maskImage: `url(${mask})`,
					WebkitMaskImage: `url(${mask})`,
					maskRepeat: "no-repeat",
					WebkitMaskRepeat: "no-repeat",
					maskSize: "50px",
					WebkitMaskSize: "50px",
				}}
			>
				<div>MASKMASKMASKMASKMASKMASK</div>
			</div>
			<div className="h-screen grid place-content-center">MaskOnHover</div>
		</div>
	);
}
