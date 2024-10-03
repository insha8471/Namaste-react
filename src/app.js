import React from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Body from "./component/Body";
import Error from "./component/Error";
import Header from "./component/Header";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
    return ( 
        <div className="app">
            < Header />
            < Outlet />
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: < AppLayout />,
        children: [
            {
                path: "/",
                element: < Body />
            },
            {
                path: "/about",
                element: < About />
            }
        ],
        errorElement: < Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ AppRouter } /> );