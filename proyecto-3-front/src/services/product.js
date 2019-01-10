import axios from "axios";
import firebase from "./firebase";

const host = "https://bioproject3.herokuapp.com/product";

//Create a product
export const newProduct = product => {
  return axios
    .post(host + "/new", product, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Review

//All products
export const allProducts = () => {
  return axios
    .get(host + "/products")
    .then(response => response.data)
    .catch(err => err.response);
};

//Flavors
export const sabores = category => {
  return axios
    .get(host + "/sabores", category)
    .then(response => response.data)
    .catch(err => err.response);
};

//Colors
export const colores = category => {
  return axios
    .get(host + "/colores", category)
    .then(response => response.data)
    .catch(err => err.response);
};

//Raw material
export const materiasPrimas = category => {
  return axios
    .get(host + "/materias-primas", category)
    .then(response => response.data)
    .catch(err => err.response);
};

//Single product
export const singleProduct = id => {
  return axios
    .get(host + "/" + id)
    .then(response => response.data)
    .catch(err => err.response);
};

//Update a product
export const updateProduct = product => {
  return axios
    .put(host + "/edit/" + product._id, product, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Delete a product
export const deleteProduct = id => {
  return axios
    .delete(host + "/" + id, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Upload Photos
export const uploadFile = file => {
  console.log("subiendo");
  const task = firebase
    .storage()
    .ref("Productos")
    .child(file.name)
    .put(file);

  return task.then(snap => snap.ref.getDownloadURL()).then(link => link);
};
