import React, { Component } from "react";
import { Menu, Icon, Avatar } from "antd";
import { logout } from "../../services/auth";
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

  logout = e => {
    const { user } = this.state;
    e.preventDefault();
    logout(user)
      .then(r => {
        console.log("Deslogeado", r);
        localStorage.clear();
        console.log(this.props);
      })

      .catch(e => {
        console.log(e);
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
          <Menu.Item key="products">
            <Link to="/allProducts">
              <Icon type="shop" />
              Productos
            </Link>
          </Menu.Item>

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
          <Menu.Item key="CDCUser">
            <Link to="/cart">
              <Icon type="shopping-cart" />
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Avatar style={{ backgroundColor: "#4b6ebf" }} icon="user" />
                Hola {user.name}
              </span>
            }
          >
            <MenuItemGroup>
              <Menu.Item key="settingUser:1">
                <Link to={`/profile/${user._id}`}>
                  <Icon type="smile" />
                  Mi perfil
                </Link>
              </Menu.Item>
              <Menu.Item key="settingUser:2">
                <Link to={"/allMessages"}>
                  <Icon type="bars" />
                  Mis pedidos
                </Link>
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to="/" onClick={this.logout}>
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

export default NavAdminLog;
