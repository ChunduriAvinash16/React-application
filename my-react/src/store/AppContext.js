import React,{ createContext } from "react";

const AppContext=createContext({loggedIn:false , user:{}});


export default AppContext;