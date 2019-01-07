import React, { Component } from "react";
import { newProduct, updateProduct, uploadFile } from "../../services/product";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

class CrudProduct extends Component {
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

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleProject();
    } else {
      return (
        <EditProduct
          theProject={this.state}
          getTheProject={this.getSingleProject}
        />
      );
    }
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        {pathname === "/new" ? (
          <NewProduct
            newProduct={this.newProduct}
            handleText={this.handleText}
            handleImage={this.handleImage}
          />
        ) : (
          <EditProduct />
        )}
      </div>
    );
  }
}

export default CrudProduct;
