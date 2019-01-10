import axios from "axios";
import firebase from "./firebase";

const host = "https://bioproject3.herokuapp.com/auth";

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
export const getProfile = id => {
  console.log(id);
  return axios

    .get(host + "/profile/" + id, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//edit profile

export const updateProfile = user => {
  return axios
    .put(host + "/profile/edit/" + user._id, user, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Upload Photos
export const uploadFile = file => {
  console.log("subiendo");
  const task = firebase
    .storage()
    .ref("Perfiles")
    .child(file.name)
    .put(file);

  return task.then(snap => snap.ref.getDownloadURL()).then(link => link);
};
