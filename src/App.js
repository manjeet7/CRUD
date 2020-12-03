import React from "react";

import "./App.css";
import Registraion from "./Component/Registration";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/" exact component={Registraion}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
