import React from "react";

import "./App.css";
import Registraion from "./Component/Registration";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Api from "./Component/Api";
import Edit from "./Component/Edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Api />
        <Switch>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/Edit/:id" exact component={Edit}></Route>
          <Route path="/" exact component={Registraion}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
