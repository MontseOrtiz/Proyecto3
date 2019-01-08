import React, { Component } from "react";
import { getProfile, updateProfile, uploadFile } from "../../services/auth";

class EditProfile extends Component {
  state = {
    user: {}
  };

  updateProfile = e => {
    e.preventDefault();
    const { user } = this.state;
    updateProfile(user)
      .then(r => {
        console.log(r);
        this.props.history.push("/profile");
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleImage = e => {
    console.log(e.target.files);
    const { user } = this.state;
    const file = e.target.files[0];
    uploadFile(file).then(link => {
      user["photoURL"] = link;
      this.setState({ user });
      console.log("done");
    });
  };

  handleText = e => {
    const { user } = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    console.log(user);
    this.setState({ user });
  };

  handleSelectChange = value => {
    console.log(value);
  };

  componentWillMount() {
    //this.product();
    const { id } = this.props.match.params;
    getProfile(id)
      .then(product => this.setState({ product }))
      .catch(e => console.log(e));
  }
  render() {
    return <div>yo edito perfiles</div>;
  }
}

export default EditProfile;
