import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { Link } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import NavbarNoUser from "./components/Navbar/NavbarNoUser";
import NavAdminLog from "./components/Navbar/NavAdminLog";

class App extends Component {
  state = {
    current: "Home",
    user: {}
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
    return (
      <div>
        <nav>
          <Link to="/new">Agregar nuevo producto</Link>
        </nav>
        {/* <nav>{!loggedUser ? <NavbarNoUser /> : <NavAdminLog />}</nav> */}
        {!loggedUser ? <NavbarNoUser /> : <NavAdminLog />}
        {/* <Navbar /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
