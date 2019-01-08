import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        {/* <nav>
          <Link to="/new">Agregar nuevo producto</Link>
        </nav> */}
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
