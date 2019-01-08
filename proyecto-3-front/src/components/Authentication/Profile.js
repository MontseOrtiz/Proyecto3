import React, { Component } from "react";
import { getProfile } from "../../services/auth";
import ProfileAdmin from "../Admin/ProfileAdmin";
import ProfileUser from "../User/ProfileUser";

class Profile extends Component {
  state = {
    user: {}
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

  render() {
    const { user } = this.state;
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) this.props.history.push("/login");
    return (
      <div>
        <ProfileAdmin user={this.user} {...user} />
        {/* {user.role === "admin" ? (
          <ProfileAdmin user={this.user} {...user} />
        ) : (
          <ProfileUser user={this.user} {...user} />
        )} */}
      </div>
    );
  }
}

export default Profile;
