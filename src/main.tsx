import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="min-h-screen bg-zinc-900 flex flex-col items-center py-5 scroll-smooth overflow-hidden">
			<AnimatePresence mode="wait">
				<RouterProvider router={router} key={location.pathname} />;
			</AnimatePresence>
		</div>
	</React.StrictMode>
);
