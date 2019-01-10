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
        this.setState({ product: r });
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.singleProductc(this.props.match.params.id);
  }
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { product } = this.state;
    return (
      <div className="back">
        <div className="flex">
          <div className="detail-photo">
            <img src={product.photo} alt={product.name} />
          </div>
          <div className="product-detail">
            <h3>{product.name}</h3>
            <hr />
            <p className="descript">Descripción: {product.description}</p>
            <p className="price">Precio: $ {product.price} MXN</p>
            <p>Categoría: {product.category}</p>
            <Link to="/allProducts">
              <button className="boton-single">Todos los productos</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
