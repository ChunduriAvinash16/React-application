import React, { createContext, useEffect, useState } from 'react';
import "./assets/css/style.css";
import {BrowserRouter as Router,Redirect,Route, Switch } from "react-router-dom";
import route from './utils/route';
import Header from './components/Header';
import firebase from './config/firebase';
import AppContext from './store/AppContext';
import AuthRoute from './utils/Hooks/routes/AuthRoute';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState({})
  //  const [title, seTtitle] = useState("Hello react 2");

  useEffect(() => {
    firebase.auth().onAuthStateChanged ((user)=>{
        if(user){
            setisLoggedIn(true);
            setUser(user);
        }else{
            setisLoggedIn(false);
            setUser({});
        }
    })       
    }, [])


    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn,user]}>
             <Header/>            
                <Switch>
                    {route.map((r,index)=>{



                        if(r.path==="/gallery"){
                            return(
                            <AuthRoute 

                            key={index}
                            path={r.path}
                            exact={r.exact}
                            component={r.component}

                            />)
                        }
 
                            return(
                           <Route
                            key={index}
                            path={r.path}
                            exact={r.exact}
                            component={r.component}
                            />
                        ); 
                      })}
                </Switch>
            </AppContext.Provider>
        </Router>

    )
}

export default App;
