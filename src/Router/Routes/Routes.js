import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/serviceDetails/${params.id}`);
                }
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
]);

export default routes;