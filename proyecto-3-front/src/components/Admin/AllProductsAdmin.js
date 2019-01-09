import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";
import {
  allProducts,
  deleteProduct,
  updateProduct
} from "../../services/product";

class AllProductsAdmin extends Component {
  state = {
    user: {},
    products: []
  };

  allProducts = () => {
    allProducts()
      .then(response => {
        this.setState({ products: response });
      })
      .catch(e => console.log(e));
  };

  allProductsFiltro = () => {
    const { search } = this.props.location;

    let url;
    if (search) url = "http://localhost:3000/product/products" + search;
    else url = "http://localhost:3000/product/products";
    axios
      .get(url)
      .then(response => {
        this.setState({ products: response.data });
        console.log(response.data);
      })
      .catch(e => console.log(e));
  };

  deleteProduct = id => {
    deleteProduct(id)
      .then(r => {
        console.log(r);
        this.allProducts();
      })
      .catch(e => {
        console.log(e);
      });
  };

  updateProduct = id => {
    updateProduct(id)
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.allProductsFiltro();
  }

  render() {
    const products = this.state.products;
    console.log(products);

    return (
      <div style={{ background: "#ECECEC" }}>
        <Link to={`/new`}>
          <Button type="primary">Agregar producto nuevo</Button>
        </Link>
        <Link to={`/allProducts?category=sabores`}>
          <Button type="primary">Sabores</Button>
        </Link>
        <Row
          gutter={16}
          style={{
            background: "#ECECEC",
            padding: "40px",
            marginLeft: "25px"
          }}
        >
          {products.map((product, index) => {
            return (
              <Col span={6} key={product._id} style={{ paddingBottom: 12 }}>
                <Card
                  hoverable
                  style={{ width: 240, marginTop: "40px" }}
                  cover={<img src={product.photo} alt="producto" />}
                >
                  <p>{product.name}</p>
                  <p>
                    Peso: {product.weight} <span>{product.measure}</span>
                  </p>
                  <p>Precio: {product.price} MXN</p>
                  <p>Categoría: {product.category}</p>
                  <p>Descripción: {product.description}</p>
                  <Link to={`/edit/${product._id}`}>
                    <Button type="primary">Editar</Button>
                  </Link>
                  <Button
                    type="danger"
                    onClick={() => this.deleteProduct(product._id)}
                    style={{ marginLeft: "25px" }}
                  >
                    Eliminar
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default AllProductsAdmin;
