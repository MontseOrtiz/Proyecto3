import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Icon } from "antd";
import DrawerCart from "../Cart/DrawerCart";
import { allProducts } from "../../services/product";

class AllProductsUser extends Component {
  state = {
    products: [],
    cart: {},
    visible: false,
    leId: 0
  };

  allProducts = () => {
    allProducts()
      .then(response => {
        this.setState({ products: response });
      })
      .catch(e => console.log(e));
  };

  // allProductsFiltro = search => {
  //   let url;
  //   if (search)
  //     url = "http://localhost:3000/product/products/?category=" + search;
  //   else url = "http://localhost:3000/product/products";
  //   axios
  //     .get(url)
  //     .then(response => {
  //       this.setState({ products: response.data });
  //       // console.log(response.data);
  //     })
  //     .catch(e => console.log(e));
  // };

  handleItem = _id => {
    let { products, cart } = this.state;
    let product = products.find(product => product["_id"] === _id);
    product.qty = cart[product._id] ? cart[product._id].qty + 1 : 1;
    product.total = product.qty * parseFloat(product.price);
    cart = { ...cart, [product._id]: product };
    this.setState({ cart, visible: true });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // singleProductc = id => {
  //   console.log("re", id);
  //   singleProduct(id)
  //     .then(r => {
  //       console.log(r);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  singleProductc = id => {
    this.setState({ leId: id });
  };

  componentWillMount() {
    this.allProducts();
  }

  // componentDidUpdate() {
  //   this.allProductsFiltro();
  // }

  render() {
    const { products, visible, cart } = this.state;
    //console.log(products);

    return (
      <div style={{ background: "#ECECEC" }}>
        <div style={{ width: "90%", margin: "0 auto" }}>
          {/* <button onClick={this.allProductsFiltro("Sabores")}>Sabores</button>
        <button onClick={this.allProductsFiltro("Colores")}>Colores</button> */}
          {/* <p onClick={this.allProductsFiltro("Sabores")}>sab</p> */}
          <Row gutter={16} style={{ background: "#ECECEC", padding: "35px" }}>
            {products.map((product, index) => {
              return (
                <Col span={6} key={product._id} style={{ paddingBottom: 12 }}>
                  <Card
                    key={product.id}
                    style={{ width: 300 }}
                    cover={
                      <img
                        style={{ width: "80%", marginLeft: "10%" }}
                        src={product.photo}
                        alt="producto"
                      />
                    }
                  >
                    <h3 style={{ fontSize: "24px" }}>{product.name}</h3>

                    <p>
                      Peso: {product.weight} <span>{product.measure}</span>
                    </p>
                    <p>Precio: {product.price} MXN</p>
                    <p>Categoría: {product.category}</p>
                    <p>Descripción: {product.description}</p>
                    <div
                      className="justify"
                      style={{
                        display: "flex"
                      }}
                    >
                      <Link to={`/allProducts/${product._id}`}>
                        <Button
                          style={{ marginRight: "20px" }}
                          type="primary"
                          onClick={() => this.singleProductc(product._id)}
                        >
                          Características
                        </Button>
                      </Link>
                      <Button
                        type="primary"
                        onClick={() => this.handleItem(product._id)}
                      >
                        <Icon type="shop" />
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <DrawerCart
            visible={visible}
            onClose={() => this.setState({ visible: false })}
            cart={cart}
          />
        </div>
      </div>
    );
  }
}

export default AllProductsUser;
