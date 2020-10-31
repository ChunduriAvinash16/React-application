import React from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import route from './utils/route';
import Header from './components/Header';
function App() {
  //  const [title, seTtitle] = useState("Hello react 2");
    return (
        <Router>
           <Header/>            
            <Switch>
            {route.map((r,index)=>(
                <Route
                 key={index}
                 path={r.path}
                 exact={r.exact}
                 component={r.component}
                />
            ))}
            </Switch>
        </Router>

    )
}

export default App;
