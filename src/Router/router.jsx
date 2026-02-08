import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Component/Page/Home";
import Navebar from "../Component/Route page/Navebar";







 export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayOut,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:"/navbar",
                Component: Navebar
            }
        ]

    }
  ])