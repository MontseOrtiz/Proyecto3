import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";
import {
  allProducts,
  deleteProduct,
  updateProduct,
  sabores
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

  sabores = category => {
    sabores(category)
      .then(response => {
        this.setState({ products: response });
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
        <Link to={`/sabores`}>
          <Button type="primary">Sabores</Button>
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
                  <Link to={`/edit/${product._id}`}>
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

// export default AllProductsAdmin;
