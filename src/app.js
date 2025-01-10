import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import About from "./component/About";
import Body from "./component/Body";
import Error from "./component/Error";
import Header from "./component/Header";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import appStore from "./utils/appStore";
import Login from "./component/Login";



const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name : "Inshaa",
        }
        setUserName(data.name)
    },[])
    
    return ( 
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
                <div className="app">
                    < Header />
                    < Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            }, {
                path: "/restaurants/:resId",
                element: < RestaurantMenu />
            },
            {
                path:"/contact",
                element:< Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: < Login />
            }
        ],
        errorElement: < Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ AppRouter } /> );