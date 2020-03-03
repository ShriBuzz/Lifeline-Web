import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";

import Verify from "./screens/Verify";
import Home from "./screens/Home";
import DriverList from "./screens/DriverList";
import TrafficList from "./screens/TrafficList";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Verify} />
          <Route path="/Home" component={Home} />
          <Route path="/Driver_list" component={DriverList} />
          <Route path="/Traffic_list" component={TrafficList} />
        </Switch>
      </Router>
    );
  }
}
