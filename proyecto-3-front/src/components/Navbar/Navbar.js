import React, { Component } from "react";
import { getProfile } from "../../services/auth";

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

  componentWillMount() {
    getProfile()
      .then(user => {
        this.setState({ user });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(loggedUser.role);

    if (loggedUser) this.setState({ loggedUser });
  };

  render() {
    const { loggedUser } = this.state;
    return <nav>{!loggedUser ? <NavbarNoUser /> : <NavAdminLog />}</nav>;
  }
}

export default Navbar;
