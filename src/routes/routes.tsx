import { createBrowserRouter } from "react-router-dom";
import Counter from "../components/Counter";
import Home from "../components/Home";
import Create from "../components/Create";


export const router = createBrowserRouter([
    {
        path: '/counter',
        element: <Counter/>,
    },
    {
       path:'/',
       element: <Home/>
    },
    {
       path:'/create',
       element: <Create/>
    },
])
