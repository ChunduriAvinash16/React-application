import React from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import route from './utils/route';
function App() {
  //  const [title, seTtitle] = useState("Hello react 2");
    return (
        <Router>
            {route.map((r)=>(
                <Route
                 path={r.path}
                 exact={r.exact}
                 component={r.component}
                />
            ))}
        </Router>

    )
}

export default App;
