import React, { Component } from "react";
import { Link } from "react-router-dom";
import { singleProduct } from "../../services/product";

class SingleProduct extends Component {
  state = {
    product: {}
  };

  singleProductc = id => {
    // console.log("re", id);
    singleProduct(id)
      .then(r => {
        console.log(r);
        this.setState({ product: r });
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    console.log(this.props);
    this.singleProductc(this.props.match.params.id);
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <div>
          <img src={product.photo} alt={product.name} />
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>Descripción: {product.description}</p>
          <p>Precio: {product.price} MXN</p>
          <p>Categoría: {product.category}</p>
          <Link to="/allProducts">
            <button>Todos los productos</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
