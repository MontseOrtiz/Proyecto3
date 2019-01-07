import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/Authentication/UserPage";
import Profile from "./components/Authentication/Profile";
import AboutUs from "./components/Home/AboutUs";
import Questions from "./components/Home/Questions";
import AllProductsAdmin from "./components/Admin/AllProductsAdmin";
import NewProduct from "./components/Admin/NewProduct";
import EditProduct from "./components/Admin/EditProduct";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={UserPage} />
    <Route path="/login" component={UserPage} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/new" component={NewProduct} />
    <Route path="/edit/:id" component={EditProduct} />
    <Route exact path="/allProducts" component={AllProductsAdmin} />
    <Route exact path="/sabores" component={AllProductsAdmin} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/questions" component={Questions} />
  </Switch>
);

export default Routes;
