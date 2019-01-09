import React, { Component } from "react";
import { getProfile } from "../../services/auth";
// import axios from "axios";
import AllProductsAdmin from "../Admin/AllProductsAdmin";
import AllProductsUser from "../User/AllProductsUser";

class Products extends Component {
  state = {
    user: {}
  };

  // allProductsFiltro = () => {
  //   const { search } = this.props.location;
  //   let url;
  //   if (search) url = "http://localhost:3000/product/products" + search;
  //   else url = "http://localhost:3000/product/products";
  //   axios
  //     .get(url)
  //     .then(response => {
  //       this.setState({ products: response.data });
  //       console.log(response.data);
  //     })
  //     .catch(e => console.log(e));
  // };

  componentWillMount() {
    getProfile()
      .then(user => {
        this.setState({ user });
        console.log(user);
        console.log(user.role);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;
    // const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    return (
      <div>
        {user.role === "admin" ? (
          <AllProductsAdmin {...this.props} />
        ) : (
          <AllProductsUser {...this.props} />
        )}
      </div>
    );
  }
}

export default Products;
