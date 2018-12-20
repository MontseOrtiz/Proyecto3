import React from "react";

const Signup = ({ signup, handleText }) => {
  return (
    <div>
      <form method="POST" onSubmit={signup}>
        Signup
        <p>
          Nombre(s):
          <input type="text" name="name" onChange={handleText} />
        </p>
        <p>
          Apellido(s):
          <input type="text" name="lastname" onChange={handleText} />
        </p>
        <p>
          Correo:
          <input type="email" name="email" onChange={handleText} />
        </p>
        <p>
          Telefono:
          <input type="tel" name="telephones" onChange={handleText} />
        </p>
        <p>
          Contraseña:
          <input type="password" name="password" onChange={handleText} />
        </p>
        <p>
          Foto de perfil:
          {/* <input type="password" name="password" onChange={handleText} /> */}
        </p>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Signup;
