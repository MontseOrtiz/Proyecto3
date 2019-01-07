import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/Authentication/UserPage";
import Profile from "./components/Authentication/Profile";
import CrudProduct from "./components/Admin/CrudProduct";
import AllProducts from "./components/Admin/AllProducts";
import AboutUs from "./components/Home/AboutUs";
import Questions from "./components/Home/Questions";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={UserPage} />
    <Route path="/login" component={UserPage} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/new" component={CrudProduct} />
    <Route exact path="/edit" component={CrudProduct} />
    <Route exact path="/allProducts" component={AllProducts} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/questions" component={Questions} />
  </Switch>
);

export default Routes;
