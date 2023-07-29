import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariants } from "../variants/index/index";
import { Post } from "../components/Post";
import HomeIcon from "../assets/HomeIcon";

export default function GradientOnHover() {
	return (
		<>
			<motion.div
				initial={{ y: -200 }}
				animate={{ y: -10, transition: { duration: 0.6 } }}
				exit={{ y: -200 }}
			>
				<Link to="/">
					<HomeIcon />
				</Link>
			</motion.div>
			<motion.nav
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ staggerChildren: 0.1 }}
				className="w-screen flex flex-col text-zinc-200 text-7xl font-alfa uppercase"
			>
				<Post post={{ title: "hover me", img: "" }}></Post>
			</motion.nav>
		</>
	);
}
