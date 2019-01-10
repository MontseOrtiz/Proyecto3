import axios from "axios";

const host = "http://localhost:3000/message";

//Create a Message
export const newMessage = message => {
  return axios
    .post(host + "/new", message, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};

//Review

// All Messages
export const allMessages = () => {
  return axios
    .get(host + "/messages")
    .then(response => response.data)
    .catch(err => err.response);
};

//Delete a product
export const deleteMessage = id => {
  return axios
    .delete(host + "/" + id, { withCredentials: true })
    .then(response => response.data)
    .catch(err => err.response);
};
