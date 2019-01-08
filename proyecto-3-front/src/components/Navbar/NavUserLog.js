import React, { Component } from "react";
import { Menu, Icon, Avatar, Badge } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavUserLog extends Component {
  state = {
    current: "Home",
    user: {},
    products: []
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const { user } = this.state;
    return (
      <nav>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="homeUser">
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
              <Menu.Item key="settingUser:1">
                <Link to="/allProducts">Todos los productos </Link>
              </Menu.Item>
              <Menu.Item key="settingUser:2">
                <Link to="/sabores">Sabores</Link>
              </Menu.Item>
              <Menu.Item key="settingUser:3">
                <Link to="/colores"> Colores</Link>
              </Menu.Item>
              <Menu.Item key="settingUser:4">
                <Link to="/colores">Materias Primas</Link>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="aboutusUser">
            <Link to="/about-us">
              <Icon type="home" />
              Quíenes somos
            </Link>
          </Menu.Item>
          <Menu.Item key="questionsUser">
            <Link to="/questions">
              <Icon type="question-circle" />
              Preguntas frecuentes
            </Link>
          </Menu.Item>
          <Menu.Item key="alipayUser">
            <a
              href="https://goo.gl/maps/QydRsBxfNyF2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="environment" />
              Ubicación
            </a>
          </Menu.Item>
          <Menu.Item key="CDCUser">
            <Badge count={0} showZero>
              <a href="/new" className="head-example" />
              <Icon type="shopping-cart" />
            </Badge>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
                Hola USUARIO{user.name}
              </span>
            }
          >
            <MenuItemGroup>
              <Menu.Item key="settingUser:1">
                <Link to="/profile/:id">
                  <Icon type="smile" />
                  Mi perfil
                </Link>
              </Menu.Item>
              <Menu.Item key="settingUser:2">
                <Icon type="bars" />
                Mis pedidos
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to="/signup">
                  <Icon type="logout" />
                  Cerrar sesión
                </Link>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </nav>
    );
  }
}

export default NavUserLog;
