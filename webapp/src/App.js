import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from "./pages";
import UsersPage from "./pages/users";
import RoomPage from "./pages/room";
import NotFoundPage from "./pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/room/:id" component={RoomPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
        </Router>
      );
    }
}

export default App;
