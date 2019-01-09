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
    category: req.body.category,
    description: req.body.description
  })
    .then(response => res.json(response))
    .catch(e => res.json(e));
});

//Review

// All products
router.get("/products", (req, res, next) => {
  Product.find()
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

//Filtros
router.get("/products", (req, res, next) => {
  const { category } = req.query;
  console.log(category);
  if (category) {
    Product.find({ category })
      .populate("user")
      .then(response => {
        res.json(response);
      })
      .catch(e => res.json(e));
  } else {
    Product.find()
      .populate("user")
      .then(response => {
        res.json(response);
      })
      .catch(e => res.json(e));
  }
});

//Single product
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log("in, id:", id);
  Product.findById(id)
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
