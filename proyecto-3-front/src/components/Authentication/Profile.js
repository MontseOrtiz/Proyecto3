import React, { Component } from "react";
import { getProfile } from "../../services/auth";
import { Link } from "react-router-dom";
import { Button } from "antd";

class Profile extends Component {
  state = {
    user: {}
  };

  getProfile = () => {
    getProfile()
      .then(user => {
        this.setState({ user });
        console.log(user);
        console.log(user.role);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    this.getProfile();
  }

  render() {
    const { user } = this.state;
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) this.props.history.push("/login");
    return (
      <div>
        <div>
          <h1>{user.name}</h1>
          <img src={user.photoURL} alt="profile_photo" />
          <Link to={`/profile/edit/${user._id}`}>
            <Button type="primary">Editar Perfil</Button>
          </Link>
        </div>
        <div>
          <div>
            <h3>Datos Personales</h3>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.lastname}</p>
            <p>Telefono: {user.telephones}</p>
          </div>
          <div>
            <h3>Direccion de envio </h3>
            <p>Dirección de la calle : {user.directionLine1}</p>
            <p> {user.directionLine1}</p>
            <p>Ciudad:: {user.city}</p>
            <p>Estado: {user.state}</p>
            <p>Código Postal: {user.cp}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
