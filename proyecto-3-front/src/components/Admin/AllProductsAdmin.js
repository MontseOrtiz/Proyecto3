import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";
import { deleteProduct } from "../../services/product";

class AllProductsAdmin extends Component {
  state = {
    user: {},
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

  deleteProduct = id => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/product/products/${id}`)
      .then(r => {
        console.log(r);
        this.allProducts();
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
      <div style={{ background: "#ECECEC" }}>
        <Link to={`/new`}>
          <Button type="primary">Agregar producto nuevo</Button>
        </Link>
        <Row gutter={16} style={{ background: "#ECECEC", padding: "30px" }}>
          {products.map((product, index) => {
            return (
              <Col span={6} key={product._id} style={{ paddingBottom: 12 }}>
                <Card
                  style={{ width: 300 }}
                  cover={<img src={product.photo} alt="producto" />}
                >
                  <p>{product.name}</p>
                  <p>
                    Peso: {product.weight} <span>{product.measure}</span>
                  </p>
                  <p>Precio: {product.price} MXN</p>
                  <p>Categoría: {product.category}</p>
                  <Link to={`/product/${product._id}`}>
                    <Button type="primary">Editar</Button>
                  </Link>
                  <Button
                    type="danger"
                    onClick={() => this.deleteProduct(product._id)}
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
