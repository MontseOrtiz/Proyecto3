const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

//Create a Message
router.post("/new", (req, res, next) => {
  Message.create({
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    message: req.body.message
  })
    .then(response => res.json(response))
    .catch(e => res.json(e));
});

//Review

// All Messages
router.get("/messages", (req, res, next) => {
  Message.find()
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Delete a message
router.delete("/:id", (req, res, next) => {
  Message.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({ message: "Mensaje eliminado" });
    })
    .catch(e => res.json(e));
});

module.exports = router;
