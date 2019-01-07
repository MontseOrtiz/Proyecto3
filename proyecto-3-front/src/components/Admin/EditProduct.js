import React, { Component } from "react";
import {
  updateProduct,
  uploadFile,
  singleProducts
} from "../../services/product";

class EditProduct extends Component {
  state = {
    product: {}
  };

  updateProduct = e => {
    e.preventDefault();
    const { product } = this.state;
    updateProduct(product)
      .then(r => {
        console.log(r);
        this.props.history.push("/allproducts");
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

  componentWillMount() {
    //this.product();
    const { id } = this.props.match.params;
    singleProducts(id)
      .then(product => this.setState({ product }))
      .catch(e => console.log(e));
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <form method="POST" onSubmit={this.updateProduct}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={this.handleText}
          />
          <label>Peso:</label>
          <input
            type="number"
            name="weight"
            onChange={this.handleText}
            value={product.weight}
          />
          <select
            name="measure"
            onChange={this.handleText}
            value={product.measure}
          >
            <option value="medida">Medida</option>
            <option value="gr">gr</option>
            <option value="ml">ml</option>
          </select>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            onChange={this.handleText}
            value={product.price}
          />
          <label>Categoría:</label>
          <select
            name="category"
            onChange={this.handleText}
            value={product.category}
          >
            <option value="category">Categoría</option>
            <option value="Sabores">Sabores</option>
            <option value="Colores">Colores</option>
            <option value="Materias Primas">Materias Primas</option>
          </select>
          <label>Imagen:</label>
          <img src={product.photo} alt="product" />
          <input type="file" onChange={this.handleImage} name="photo" />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default EditProduct;
