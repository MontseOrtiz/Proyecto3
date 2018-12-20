const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//Create a product
router.post("/new", (req, res, next) => {
  Product.create({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    photo: req.body.photo,
    category: req.body.category
  })
    .then(response => res.json(response))
    .catch(e => res.json(e));
});

//Review

//All products
router.get("/products", (req, res, next) => {
  Product.find()
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Single product
router.get("/products/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Update a product
router.put("/products/:id", (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(response => {
      res.json(response, { message: "Producto modificado exitosamente" });
    })
    .catch(e => res.json(e));
});

//Delete a product
router.delete("/books/:id", (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({ message: "Producto eliminado" });
    })
    .catch(e => res.json(e));
});

module.exports = router;
