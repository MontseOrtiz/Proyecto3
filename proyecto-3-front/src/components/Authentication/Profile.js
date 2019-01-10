import React, { Component } from "react";
import { getProfile } from "../../services/auth";
import { Link } from "react-router-dom";

import { Card, Icon } from "antd";

const { Meta } = Card;

class Profile extends Component {
  state = {
    user: {}
  };

  getProfile1 = id => {
    getProfile(id)
      .then(user => {
        this.setState({ user });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    // console.log(loggedUser._id);
    this.setState({ user: loggedUser });
  }

  render() {
    const { user } = this.state;
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) this.props.history.push("/login");
    return (
      <div className="fondo-profile">
        <div className="card-profile">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://lamasonagency.com/wp-content/uploads/2015/06/Facebook-no-profile-picture-icon-620x389-620x321.jpg"
                }
                alt="profile_photo"
              />
            }
            actions={[
              <Link to={`/profile/edit/${loggedUser._id}`}>
                <Icon type="edit" /> Editar Perfil
              </Link>
            ]}
          >
            <Meta
              title={
                <div>
                  <div>
                    <h3 style={{}}>Datos Personales</h3>
                    <hr />
                    <p>Nombre: {user.name}</p>
                    <p>Apellido: {user.lastname}</p>
                    <p>Telefono: {user.telephones}</p>
                  </div>
                  <br />
                  <div>
                    <h3>Direccion de envio </h3>
                    <hr />
                    <p>Dirección de la calle : {user.directionLine1}</p>
                    <p> {user.directionLine1}</p>
                    <p>Ciudad:: {user.city}</p>
                    <p>Estado: {user.state}</p>
                    <p>Código Postal: {user.cp}</p>
                  </div>
                </div>
              }
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
