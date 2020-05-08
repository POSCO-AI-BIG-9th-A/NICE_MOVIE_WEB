import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Join from "Routes/Join";
import Login from "Routes/Login";
import Watched from "Routes/Watched";
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/watched" component={Watched} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Route path="/join" component={Join} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
