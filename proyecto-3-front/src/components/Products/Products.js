import React, { Component } from "react";

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
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    this.setState({ user });
    console.log(user);
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        {user && user.role === "admin" ? (
          <AllProductsAdmin {...this.props} />
        ) : (
          <AllProductsUser {...this.props} />
        )}
      </div>
    );
  }
}

export default Products;
