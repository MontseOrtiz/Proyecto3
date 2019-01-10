import React, { Component } from "react";
import { updateProfile, uploadFile } from "../../services/auth";
import { Layout } from "antd";

const { Content, Footer } = Layout;

class EditProfile extends Component {
  state = {
    user: {}
  };

  updateProfile = e => {
    e.preventDefault();
    const { user } = this.state;
    updateProfile(user)
      .then(user => {
        this.setState({ user });
        localStorage.setItem("loggedUser", JSON.stringify(user));
        this.props.history.push("/profile/" + user._id);
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

    this.setState({ user });
  };

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <Layout>
        <Content>
          <div className="div_form_principal">
            <div className="div_form_product">
              <form method="POST" onSubmit={this.updateProfile}>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={this.handleText}
                />
                <label>Apellido:</label>
                <input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={this.handleText}
                />

                <label>Telefono:</label>
                <input
                  type="number"
                  name="telephones"
                  value={user.telephones}
                  onChange={this.handleText}
                />

                <label>Imagen:</label>
                <img src={user.photoURL} alt="user" style={{ height: 100 }} />
                <input type="file" onChange={this.handleImage} name="photo" />

                <label>Direccion de la calle 1:</label>
                <input
                  type="text"
                  name="directionLine1"
                  value={user.directionLine1}
                  onChange={this.handleText}
                />

                <label>Direccion de la calle 2:</label>
                <input
                  type="text"
                  name="directionLine2"
                  value={user.directionLine2}
                  onChange={this.handleText}
                />

                <label>Ciudad:</label>
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={this.handleText}
                />
                <label>Estado:</label>
                <input
                  type="text"
                  name="state"
                  value={user.state}
                  onChange={this.handleText}
                />
                <label>Código postal:</label>
                <input
                  type="number"
                  name="cp"
                  value={user.cp}
                  onChange={this.handleText}
                />
                <input type="submit" name="submit" />
              </form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bioingredient Technology, S.A. de C.V.
        </Footer>
      </Layout>
    );
  }
}

export default EditProfile;
