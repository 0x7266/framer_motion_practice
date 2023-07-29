import { createBrowserRouter } from "react-router-dom";
import Posts from "../pages/Posts";
import Index from "../pages/Index";
import App from "../App";

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
