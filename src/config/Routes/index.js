import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import {Login, Register, MainApp } from "../../pages";

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={MainApp} />
        </Switch>
    </Router>
  );
};

export default Routes;