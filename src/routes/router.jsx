import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Bookings from "../pages/Bookings/Bookings";
import EventDetails from "../components/Events/EventDetails";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Contact from "../pages/Contact/Contact";


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
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/bookings",
                element: <PrivateRoute>
                    <Bookings />
                </PrivateRoute>,
                loader: () => fetch("../events.json")
            },
            {
                path: "/blogs",
                element: <PrivateRoute>
                    <Blogs />
                </PrivateRoute>,
                loader: () => fetch("../blogs.json")
            },
            {
                path: "/event/:id",
                element: <PrivateRoute>
                    <EventDetails />
                </PrivateRoute>,
                loader: () => fetch("../events.json")
            },
            {
                path: "/blog/:id",
                element: <BlogDetails />,
                loader: () => fetch("../blogs.json")
            }
        ]
    }
])