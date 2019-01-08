import React, { Component } from "react";
import { Menu, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavAdminLog extends Component {
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

  componentWillMount = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (user) this.setState({ user });
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
              <Menu.Item key="setting:2">Sabores</Menu.Item>
              <Menu.Item key="setting:3">Colores</Menu.Item>
              <Menu.Item key="setting:4">Materias Primas</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          {user.role.admin && (
            <Menu.Item key="login">
              <Link to="/login">
                <Icon type="user" />
                ADMIN
              </Link>
            </Menu.Item>
          )}
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
          {!user.role.admin ? (
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
          ) : (
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
                  Hola {user.name}
                </span>
              }
            >
              <MenuItemGroup>
                <Menu.Item key="setting:2">
                  <Link to="/profile/:id">Mi perfil</Link>
                </Menu.Item>
                <Menu.Item key="setting:2">Estado de pedidos</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          )}
          {/* {!user.role.admin && (
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
                  <Link to="/profile">
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
          )}

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
                Hola {user.name}
              </span>
            }
          >
            <MenuItemGroup>
              <Menu.Item key="setting:2">
                <Link to="/profile">Mi perfil</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">Estado de pedidos</Menu.Item>
            </MenuItemGroup>
          </SubMenu> */}
        </Menu>
      </nav>
    );
  }
}

export default NavAdminLog;
