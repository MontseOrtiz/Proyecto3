import React from "react";
import { Layout, Carousel, Card, Col, Row } from "antd";
// import { Link } from "react-router-dom";

const { Content, Footer } = Layout;
const { Meta } = Card;

const Home = () => (
  <div>
    <Layout>
      <Content>
        <Carousel autoplay>
          <div className="carousel_div1">
            <img src="../../images/Logo.png" alt="Logo" />
            <h3>1</h3>
          </div>
          <div className="carousel_div2">
            <h3>2</h3>
          </div>
          <div className="carousel_div3">
            <h3>3</h3>
          </div>
          <div className="carousel_div4">
            <h3>4</h3>
          </div>
        </Carousel>
        <div style={{ background: "#fcfcfc", padding: "30px" }}>
          <div>
            <h2>Nuestros Productos</h2>
            <p>
              Contamos con colores, sabores, materias primas, fragancias y
              premezclas vitamínicas para la industria Alimentaria, Cosmética y
              Farmacéutica.
            </p>
          </div>

          <Row type="flex" justify="space-around">
            <Col span={3}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="Colores"
                    src="../../images/Home-Productos-Colores.jpg"
                  />
                }
              >
                <Meta title="Colores" />
              </Card>
            </Col>
            <Col span={3}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="Sabores"
                    src="../../images/Home-Productos-Sabores.jpeg"
                  />
                }
              >
                <Meta title="Sabores" />
              </Card>
            </Col>
            <Col span={3}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="Materias primas"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Materias Primas" />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bioingredient Technology, S.A. de C.V.
      </Footer>
    </Layout>
  </div>
);

export default Home;
