import React, { Component } from "react";

import NavAdminLog from "./NavAdminLog";
// import NavUserLog from "./NavUserLog";
import NavbarNoUser from "./NavbarNoUser";

class Navbar extends Component {
  state = {
    current: "Home",
    user: {},
    products: []
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  componentWillMount = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(loggedUser);

    if (loggedUser) this.setState({ loggedUser });
  };
  render() {
    const { loggedUser } = this.state;
    return <nav>{!loggedUser ? <NavbarNoUser /> : <NavAdminLog />}</nav>;
  }
}

export default Navbar;
