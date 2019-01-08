import React from "react";

const ProfileUser = user => {
  return (
    <div>
      Soy Usuario
      <h1>{user.name}</h1>
      <img src={user.photoURL} alt="profile_photo" />
      <button>Editar Perfil</button>
    </div>
  );
};

export default ProfileUser;
