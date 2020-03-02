import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";

import Verify from "./screens/Verify";
import Home from "./screens/Home";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Verify} />
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
