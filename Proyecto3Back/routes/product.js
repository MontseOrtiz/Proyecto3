const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//Create a product
router.post("/new", (req, res, next) => {
  Product.create({
    name: req.body.name,
    weight: req.body.weight,
    measure: req.body.measure,
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

//Colors
router.get("/colores", (req, res, next) => {
  Product.find({ category: req.body.category })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Flavors
router.get("/sabores/:category", (req, res, next) => {
  const { category } = req.params;
  Product.find({ category })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Raw Materials
router.get("/materias-primas", (req, res, next) => {
  Product.find({ category: req.body.category })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Single product
router.get("/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Update a product
router.put("/edit/:id", (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Delete a product
router.delete("/:id", (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json({ message: "Producto eliminado" });
    })
    .catch(e => res.json(e));
});

module.exports = router;
