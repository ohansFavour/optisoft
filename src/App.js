import React from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./pages/welcomePage/welcomePage";
import Home from "./pages/homePage/homepageContainer"
import Details from "./components/details/details";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component = {Home}/>
        <Route exact path="/home/details" component={Details}/>
        
      </Switch>
    </div>
  );
}

export default App;
