import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductDetailsCard from "../../Components/PorductCards/ProductDetailsCard";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/productDetails',
                element: <ProductDetailsCard />
            }
        ]
    }
]);

export default router;