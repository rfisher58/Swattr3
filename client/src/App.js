import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Account from "./components/pages/account/account";

const App = () => (
  <Router> 
    <div>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/account" component = {Account}/>
      </Switch>
    </div>
  </Router>
)

export default App;



