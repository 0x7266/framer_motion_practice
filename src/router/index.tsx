import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../pages/Posts";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/posts",
		element: <Posts />,
	},
]);
