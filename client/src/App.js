import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NewClient from "./pages/NewClient";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/newcustomer"]}>
            <NewClient />
          </Route>
      </Switch>
    </Router>
  )
   
}


export default App;
