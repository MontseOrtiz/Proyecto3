import React from "react";

const ProfileAdmin = user => {
  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <img src={user.photoURL} alt="profile_photo" />
        <button>Editar Perfil</button>
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
};

export default ProfileAdmin;
