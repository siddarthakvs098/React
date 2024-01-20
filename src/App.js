import React,{lazy , Suspense } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Sample from "./components/Sample"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import RestuarantMenu from "./components/RestuarantMenu";
import Shimmer from "./components/Shimmer";
// import Grocexry from "./components/Grocery";
import UserContext from "../utils/UserContext";
import { useEffect,useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy( ()=> { return import("./components/Grocery")})

const AppLayout = ()=>{
    
    const [userName , setUserName]  = useState("");
     useEffect(()=>{
        const userName = "Siddartha"; 
        setUserName(userName);
     },[]);


    return (
        <Provider store={appStore} >
            <UserContext.Provider value = {{loggedInUser: userName , setUserName  }}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
        
        
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children : [
            {
                path:"",
                element:<Body/>
            },
            {
                path:"about",
                element:<Outlet/>,
                children:[
                    {
                        path : "",
                        element : <About/>
                    },
                    {
                        path : "sample",
                        element : <Sample/>
                    }
                ]

            },
            {   path :"contact",
                element:<Contact/>
            },
            {   path :"/grocery",
                element: <Suspense fallback={<Shimmer/>}>
                        <Grocery/>  
                    </Suspense>  
            },
            {
                path :"restuarant/:resid",
                element:<RestuarantMenu/>,
                errorElement:<Error/>
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);