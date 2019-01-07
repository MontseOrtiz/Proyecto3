import React, { Component } from "react";
import { newProduct, updateProduct, uploadFile } from "../../services/product";

class NewProduct extends Component {
  state = {
    product: {}
  };

  newProduct = e => {
    const { product } = this.state;
    e.preventDefault();
    newProduct(product)
      .then(r => {
        console.log(r);
        this.props.history.push("/allproducts");
      })
      .catch(e => {
        console.log(e);
      });
  };

  updateProduct = e => {
    const { product } = this.state;
    e.preventDefault();
    updateProduct(product)
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
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
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <form method="POST" onSubmit={this.newProduct}>
          <label>Nombre:</label>
          <input type="text" name="name" onChange={this.handleText} />
          <label>Peso:</label>
          <input type="number" name="weight" onChange={this.handleText} />
          <select name="measure" onChange={this.handleText}>
            <option value="medida">Medida</option>
            <option value="gr">gr</option>
            <option value="ml">ml</option>
          </select>
          <label>Precio:</label>
          <input type="number" name="price" onChange={this.handleText} />
          <label>Categoría:</label>
          <select name="category" onChange={this.handleText}>
            <option value="category">Categoría</option>
            <option value="Sabores">Sabores</option>
            <option value="Colores">Colores</option>
            <option value="Materias Primas">Materias Primas</option>
          </select>
          <label>Imagen:</label>
          <input type="file" onChange={this.handleImage} name="photo" />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default NewProduct;
