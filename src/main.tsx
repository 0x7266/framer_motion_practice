import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="h-screen bg-zinc-900 flex flex-col items-center p-10 scroll-smooth overflow-hidden">
			<div className="container flex flex-col items-center gap-5">
				<RouterProvider router={router} />
			</div>
		</div>
	</React.StrictMode>
);
