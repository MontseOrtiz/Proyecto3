import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/Authentication/UserPage";
import Profile from "./components/Authentication/Profile";
import AboutUs from "./components/Home/AboutUs";
import Questions from "./components/Home/Questions";
import AllProductsAdmin from "./components/Admin/AllProductsAdmin";
import NewProduct from "./components/Products/NewProduct";
import EditProduct from "./components/Products/EditProduct";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import EditProfile from "./components/Authentication/EditProfile";
import SingleProduct from "./components/Products/SingleProduct";
import NewMessage from "./components/Message/NewMessage";
import AllMessage from "./components/Message/AllMessages";
import AllProductsUser from "./components/User/AllProductsUser";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={UserPage} />
    <Route path="/login" component={UserPage} />
    <Route exact path="/profile/:id" component={Profile} />
    <Route exact path="/profile/edit/:id" component={EditProfile} />
    <Route exact path="/new" component={NewProduct} />
    <Route path="/edit/:id" component={EditProduct} />
    <Route path="/cart" component={Cart} />
    <Route exact path="/allProducts" component={Products} />
    <Route path="/allProducts/:id" component={SingleProduct} />
    <Route exact path="/sabores" component={AllProductsAdmin} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/questions" component={Questions} />
    <Route exact path="/newMessage" component={NewMessage} />
    <Route exact path="/allMessages" component={AllMessage} />
  </Switch>
);

export default Routes;
