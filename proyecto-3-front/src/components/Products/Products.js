import React, { Component } from "react";
import AllProductsAdmin from "../Admin/AllProductsAdmin";
import AllProductsUser from "../User/AllProductsUser";

class Products extends Component {
  state = {
    user: {}
  };

  // componentWillMount() {
  //   getProfile()
  //     .then(user => {
  //       this.setState({ user });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    const { user } = this.state;
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) this.props.history.push("/login");
    return (
      <div>
        {user.role === "admin" ? <AllProductsAdmin /> : <AllProductsUser />}
      </div>
    );
  }
}

export default Products;
