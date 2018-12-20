import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/Authentication/UserPage";
import Profile from "./components/Authentication/Profile";
import CrudProduct from "./components/Admin/CrudProduct";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={UserPage} />
    <Route path="/login" component={UserPage} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/new" component={CrudProduct} />
  </Switch>
);

export default Routes;
