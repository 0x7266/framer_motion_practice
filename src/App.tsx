import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { AnimatePresence } from "framer-motion";
import ScaleOnScroll from "./pages/ScaleOnScroll";
import GradientOnHover from "./pages/GradientOnHover";
import ChangeCardOnDrag from "./pages/ChangeCardOnDrag";
import { MaskOnHover } from "./pages/MaskOnHover";
import SlideToConfirm from "./pages/SlideToConfirm";
import RandomAnimationOnScroll from "./pages/RandomAnimationsOnScroll";

function App() {
	const location = useLocation();
	return (
		<div className="min-h-screen bg-zinc-900 overflow-hidden">
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Index />} />
					<Route path="/scaleonscroll" element={<ScaleOnScroll />} />
					<Route path="/gradientonhover" element={<GradientOnHover />} />
					<Route path="/changecardondrag" element={<ChangeCardOnDrag />} />
					<Route path="/maskonhover" element={<MaskOnHover />} />
					<Route path="/slidetoconfirm" element={<SlideToConfirm />} />
					<Route
						path="/randomanimationsonscroll"
						element={<RandomAnimationOnScroll />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
