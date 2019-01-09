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
router.get("/message", (req, res, next) => {
  Message.find()
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

module.exports = router;
