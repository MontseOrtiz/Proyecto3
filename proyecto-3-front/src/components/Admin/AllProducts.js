import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../services/product";

class AllProducts extends Component {
  state = {
    products: []
  };

  allProducts = () => {
    axios
      .get("http://localhost:3000/product/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(e => console.log(e));
  };

  deleteProduct = e => {
    e.preventDefault();
    deleteProduct()
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.allProducts();
  }

  render() {
    const products = this.state.products;
    console.log(products);

    return (
      <div>
        {products.map((product, index) => {
          return (
            <div key={product._id}>
              <h3>{product.name}</h3>

              <img src={product.photo} alt="producto" />
              <p>Peso: {product.weight} gr</p>
              <Link to={`/product/${product._id}`}>
                <button>Editar</button>
              </Link>

              <button deleteProduct={deleteProduct}>Eliminar</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllProducts;
