export function MaskOnHover() {
	return (
		<div className="w-full flex flex-col items-center text-8xl font-bold main">
			<div className="absolute h-screen grid place-content-center mask w-full">
				<div>MASKMASKMASKMASKMASKMASK</div>
			</div>
			<div className="h-screen grid place-content-center body">MaskOnHover</div>
		</div>
	);
}
