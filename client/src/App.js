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
import NewJob from "./pages/NewJob"
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import Customers from "./pages/Customers";
import Navigation from "./components/Nav";
import { Card } from 'react-bootstrap';
import { CurrCustProvider } from "./utils/currentCustomerContext"
import Jobs from "./pages/Jobs";
// import { AllCustomersProvider } from "./utils/allCustomersContex"


function App() {
  return (
    <div>
      <Navigation />
      <CurrCustProvider>
      <Card style={{margin: "10px"}}>
      <Card.Body>
    <Router>
      <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/newcustomer"]}>
            <NewClient />
          </Route>
          {/* <Route exact path={["/newjob"]}>
            <NewJob />
          </Route> */}
          <Route exact path={["/customers"]}>
            <Customers />
          </Route>
          <Route exact path={["/jobs"]}>
            <Jobs />
          </Route>

          <Route exact path={["/admin"]}>
            <Admin />
          </Route>
          <Route exact path={["/admin/addproduct"]}>
            <AddProduct />
          </Route>



      </Switch>
    </Router>
    </Card.Body>
    </Card>
    </CurrCustProvider>
    {/* // </AllCustomersProvider> */}
    </div>
  )
   
}


export default App;
