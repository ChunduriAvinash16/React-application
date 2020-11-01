import React, { createContext, useEffect, useState } from 'react';
import "./assets/css/style.css";
import {BrowserRouter as Router,Redirect,Route, Switch } from "react-router-dom";
import route from './utils/Hooks/routes';
import Header from './components/Header';
import firebase from './config/firebase';
import AppContext from './store/AppContext';
import AuthRoute from './utils/Hooks/routes/AuthRoute';
import GuestRoute from './utils/Hooks/routes/GuestRoute';
import Loading from './components/Loading';
import NotFound from './pages/404';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
  //  const [title, seTtitle] = useState("Hello react 2");

  useEffect(() => {
      setIsLoading(true);
    firebase.auth().onAuthStateChanged ((user)=>{
        if(user){
            setisLoggedIn(true);
            setUser(user);
            setIsLoading(false);
        }else{
            setisLoggedIn(false);
            setUser({});
            setIsLoading(false);
        }
    })       
    }, [])

    if(isLoading) return <Loading/>


    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn,user]}>
             <Header/>            
                <Switch>
                    {route.map((r,index)=>{
                        if(r.protected==="guest"){
//                            if(isLoggedIn) return <Redirect to="/"/>;
                                return(
                                <GuestRoute
                                    key={index}
                                    path={r.path}
                                    exact={r.exact}
                                    component={r.component}
                                />)
                            }
                        if(r.protected==="auth"){
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
                      <Route path="*"><NotFound/></Route>
                </Switch>
            </AppContext.Provider>
        </Router>

    )
}

export default App;
