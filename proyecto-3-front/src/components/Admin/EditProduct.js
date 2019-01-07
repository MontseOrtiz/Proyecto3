import React, { Component } from "react";
import axios from "axios";
import { uploadFile } from "../../services/product";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      weight: this.props.product.weight,
      measure: this.props.product.measure,
      price: this.props.product.price,
      category: this.props.product.category,
      photo: this.props.product.photo
    };
  }

  handleFormSubmit = e => {
    const { name, weight, measure, price, category, photo } = this.state;

    e.preventDefault();

    axios
      .put(
        `http://localhost:3000/product/products/${this.props.product._id}`,
        name,
        weight,
        measure,
        price,
        category,
        photo
      )
      .then(() => {
        this.props.getProduct();
      })
      .catch(error => console.log(error));
  };

  handleImage = e => {
    console.log(e.target.files);
    const { product } = this.state;
    const file = e.target.files[0];
    uploadFile(file).then(link => {
      product["photo"] = link;
      this.setState({ product });
      console.log("done");
    });
  };

  handleText = e => {
    const { product } = this.state;
    const field = e.target.name;
    product[field] = e.target.value;
    console.log(product);
    this.setState({ product });
  };

  render() {
    return (
      <div>
        <p>Yo edito</p>
        <form method="POST" onSubmit={this.handleFormSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleText}
          />
          <label>Peso:</label>
          <input
            type="number"
            name="weight"
            value={this.state.weight}
            onChange={this.handleText}
          />
          <select name="measure" onChange={this.handleText}>
            <option value="gr">gr</option>
            <option value="ml">ml</option>
          </select>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleText}
          />
          <label>Categoría:</label>
          <select name="category" onChange={this.handleText}>
            <option value="Sabores">Sabores</option>
            <option value="Colores">Colores</option>
            <option value="Materias Primas">Materias Primas</option>
          </select>
          <label>Imagen:</label>
          <img src={this.state.photo} alt="producto" />
          <input type="file" onChange={this.handleImage} name="photo" />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default EditProduct;
