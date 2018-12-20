import React from "react";

const Login = ({ login, handleText }) => {
  return (
    <div>
      <form method="POST" onSubmit={login}>
        Login
        <p>
          Email:
          <input type="email" name="email" onChange={handleText} />
        </p>
        <p>
          Password:
          <input type="password" name="password" onChange={handleText} />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
