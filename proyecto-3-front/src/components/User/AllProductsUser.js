import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";

class AllProductsUser extends Component {
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

  componentWillMount() {
    this.allProducts();
  }

  render() {
    const products = this.state.products;
    console.log(products);

    return (
      <div style={{ background: "#ECECEC" }}>
        <Row gutter={16} style={{ background: "#ECECEC", padding: "35px" }}>
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

                  <Button type="primary">Agregar al carrito</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default AllProductsUser;
