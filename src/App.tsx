import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="bg-slate-950 flex flex-col items-center p-10">
			<div className="container flex flex-col items-center gap-5">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
