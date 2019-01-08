import React, { Component } from "react";
import { allProducts } from "../../services/product";
import AllProductsAdmin from "../Admin/AllProductsAdmin";
import AllProductsUser from "../User/AllProductsUser";

class Products extends Component {
  state = {
    user: {}
  };

  allProducts = () => {
    allProducts()
      .then(response => {
        this.setState({ products: response });
      })
      .catch(e => console.log(e));
  };

  componentWillMount() {
    allProducts();
  }

  render() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    return (
      <div>{!loggedUser ? <AllProductsUser /> : <AllProductsAdmin />}</div>
    );
  }
}

export default Products;
