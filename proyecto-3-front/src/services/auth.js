import axios from "axios";

const host = "http://localhost:3000/auth";

//signup

export const signup = user => {
  return axios
    .post(host + "/signup", user)
    .then(response => response.data)
    .catch(err => err.response);
};

//login

export const login = user => {
  return axios
    .post(host + "/login", user, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//logout
export const logout = () => {
  return axios
    .get(host + "/logout", { withCredentials: true })
    .then(r => r.data)
    .catch(e => e.response);
};

//profile
export const getProfile = () => {
  return axios
    .get(host + "/profile", { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};
