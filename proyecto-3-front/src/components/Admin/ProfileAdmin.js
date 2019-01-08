import React from "react";

const ProfileAdmin = user => {
  return (
    <div>
      Soy Admin
      <h1>{user.name}</h1>
      <img src={user.photoURL} alt="profile_photo" />
      <button>Editar Perfil</button>
    </div>
  );
};

export default ProfileAdmin;
