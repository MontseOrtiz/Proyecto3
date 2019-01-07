import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const Login = ({ login, handleText }) => {
  return (
    <Layout>
      <Content className="login-div">
        <Form method="POST" onSubmit={login} className="form-login">
          <div className="login-img">
            <img src="../../images/Logo.png" alt="Logo" />
          </div>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              name="email"
              placeholder="E-mail"
              onChange={handleText}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleText}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Iniciar sesión
            </Button>
            <p>
              ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
            </p>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bioingredient Technology, S.A. de C.V.
      </Footer>
    </Layout>
  );
};

export default Login;
