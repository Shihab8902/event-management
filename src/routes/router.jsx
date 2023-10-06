import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])