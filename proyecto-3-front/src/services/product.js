import axios from "axios";
import firebase from "./firebase";

const host = "http://localhost:3000/product";

//Create a product
export const newProduct = product => {
  return axios
    .post(host + "/new", product, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Review

//All products
export const allProducts = products => {
  return axios
    .get(host + "/products", products)
    .then(response => response.data)
    .catch(err => err.response);
};

//Single product
export const singleProducts = products => {
  return axios
    .get(host + "/products/:id", products)
    .then(response => response.data)
    .catch(err => err.response);
};

//Update a product
export const updateProduct = product => {
  return axios
    .put(host + "/products/:id", product, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Delete a product
export const deleteProduct = product => {
  return axios
    .delete(host + "/products/" + product._id, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Upload Photos
export const uploadFile = file => {
  console.log("subiendo");
  const task = firebase
    .storage()
    .ref("Prodcutos")
    .child(file.name)
    .put(file);

  return task.then(snap => snap.ref.getDownloadURL()).then(link => link);
};
