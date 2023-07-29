import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { AnimatePresence } from "framer-motion";
import ScrollAnimation from "./pages/ScrollAnimation";
import GradientOnHover from "./pages/GradientOnHover";

function App() {
	const location = useLocation();
	return (
		<div className="min-h-screen h-screen bg-zinc-900 overflow-hidden py-5">
			<AnimatePresence mode="wait">
				<Routes key={location.pathname} location={location}>
					<Route index element={<Index />} />
					<Route path="/scrollanimation" element={<ScrollAnimation />} />
					<Route path="/gradientonhover" element={<GradientOnHover />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
