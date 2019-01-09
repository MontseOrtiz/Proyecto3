import React, { Component } from "react";
import axios from "axios";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavbarNoUser extends Component {
  state = {
    current: "Home",
    user: {},
    products: {},
    filtered: {}
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  filteredProducts = () => {
    axios
      .get("http://localhost:3000/product/products")
      .then(response => {
        let productos = response.data;
        let filt = productos.filter(x => x.category === "Sabores");
        this.setState({ filtered: filt });
        console.log(this.state.filtered);
      })
      .catch(e => console.log(e));
  };

  allProductsFiltro = () => {
    const { search } = this.props.location;
    console.log(search);

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

  render() {
    return (
      <nav>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">
              <div className="logo">
                <img src="../../images/logo.png" alt="logo" />
              </div>
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="shop" />
                Productos
              </span>
            }
          >
            <MenuItemGroup>
              <Menu.Item key="setting:1">
                <Link to="/allProducts">Todos los productos </Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to={"/allProducts"} onClick={this.filteredProducts}>
                  Sabores
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Link to={"/allProducts"} onClick={this.filteredProducts}>
                  {" "}
                  Colores
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:4">
                <Link
                  to={"/allProducts?category=Materias"}
                  onClick={this.filteredProducts}
                >
                  Materias Primas
                </Link>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="aboutus">
            <Link to="/about-us">
              <Icon type="home" />
              Quíenes somos
            </Link>
          </Menu.Item>
          <Menu.Item key="questions">
            <Link to="/questions">
              <Icon type="question-circle" />
              Preguntas frecuentes
            </Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <a
              href="https://goo.gl/maps/QydRsBxfNyF2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="environment" />
              Ubicación
            </a>
          </Menu.Item>
          <Menu.Item key="message">
            <Link to="/newMessage">
              <Icon type="message" />
              Contactanos
            </Link>
          </Menu.Item>
          <Menu.Item key="CDC">
            <Link to="/cart">
              <Icon type="shopping-cart" />
            </Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">
              <Icon type="user" />
              Iniciar sesión
            </Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup">
              <Icon type="form" />
              Registrarse
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
    );
  }
}

export default NavbarNoUser;
