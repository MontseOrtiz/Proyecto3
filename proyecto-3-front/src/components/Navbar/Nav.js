import React from "react";
import { Menu, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = () => {
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
        <Menu.Item key="CDC">
          <Link to="/new">
            <Icon type="shopping-cart" />
            CDC
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
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
              Hola USUARIO
            </span>
          }
        >
          <MenuItemGroup>
            <Menu.Item key="setting:2">
              <Link to="/profile">Mi perfil</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">Mis pedidos</Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key="profile">
          <Link to="/profile">
            <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
            Perfil
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Nav;
