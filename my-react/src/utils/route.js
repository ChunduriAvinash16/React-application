import React from 'react';
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default[
    {
        path:"/",
        exact:true,
        component:()=><Home/>
    },
    {
        path:"/login",
        exact:true,
        component:()=><Login/>
    },
    {
        path:"/gallery",
        exact:true,
        component:()=><Gallery/>
    }
]