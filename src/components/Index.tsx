import { Link } from "react-router-dom";
export default function Index() {
	return (
		<nav className="text-zinc-100 text-5xl font-bold uppercase hover:text-zinc-400 relative active:top-1">
			<Link to="/posts">Posts --- scroll animations</Link>
		</nav>
	);
}
