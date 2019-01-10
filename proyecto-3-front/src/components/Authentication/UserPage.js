import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { signup, login } from "../../services/auth";

class UserPage extends Component {
  state = {
    user: {}
  };

  signup = e => {
    const { user } = this.state;
    e.preventDefault();
    signup(user)
      .then(r => {
        this.props.history.push("/");
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleText = e => {
    const { user } = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({ user });
  };

  login = e => {
    const { user } = this.state;
    e.preventDefault();
    login(user)
      .then(r => {
        console.log("logeado", r);
        if (r.name) {
          localStorage.setItem("loggedUser", JSON.stringify(r));
        }

        this.props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <div>
          {pathname === "/login" ? (
            <Login login={this.login} handleText={this.handleText} />
          ) : (
            <Signup signup={this.signup} handleText={this.handleText} />
          )}
        </div>
      </div>
    );
  }
}

export default UserPage;
