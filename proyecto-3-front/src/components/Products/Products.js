import React, { Component } from "react";
import axios from "axios";
import { deleteProduct } from "../../services/product";

class Products extends Component {
  state = {
    user: {},
    products: []
  };

  allProducts = () => {
    axios
      .get("http://localhost:3000/product/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(e => console.log(e));
  };

  deleteProduct = id => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/product/products/${id}`)
      .then(r => {
        console.log(r);
        this.allProducts();
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.allProducts();
  }
  render() {
    return <div />;
  }
}

export default Products;
