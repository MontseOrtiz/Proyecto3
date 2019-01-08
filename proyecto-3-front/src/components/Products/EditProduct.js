import React, { Component } from "react";
import {
  updateProduct,
  uploadFile,
  singleProducts
} from "../../services/product";
import { Layout } from "antd";

const { Content, Footer } = Layout;

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

  handleSelectChange = value => {
    console.log(value);
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
      <Layout>
        <Content>
          <div className="div_form_principal">
            <div className="div_form_product">
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
                  value={product.weight}
                  onChange={this.handleText}
                />
                <select
                  name="measure"
                  value={product.measure}
                  onChange={this.handleText}
                >
                  <option value="medida">Unidad de medida</option>
                  <option value="gr">gr</option>
                  <option value="ml">ml</option>
                </select>
                <label>Precio:</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={this.handleText}
                />
                <label>Categoría:</label>
                <select
                  name="category"
                  value={product.category}
                  onChange={this.handleText}
                >
                  <option value="category">Categoría</option>
                  <option value="Sabores">Sabores</option>
                  <option value="Colores">Colores</option>
                  <option value="Materias Primas">Materias Primas</option>
                </select>
                <label>Imagen:</label>
                <img
                  src={product.photo}
                  alt="product"
                  style={{ height: 100 }}
                />
                <input type="file" onChange={this.handleImage} name="photo" />
                <input type="submit" name="submit" />
              </form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bioingredient Technology, S.A. de C.V.
        </Footer>
      </Layout>
    );
  }
}

export default EditProduct;
