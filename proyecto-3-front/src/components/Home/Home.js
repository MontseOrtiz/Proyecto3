import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Content, Footer } = Layout;

const Home = () => (
  <div>
    <Layout>
      <Content>
        <div className="home-cover">
          <img src="./images/Fondo.png" alt="Logo" />
        </div>

        <div>
          <div className="Prod">
            <h2>Nuestros Productos</h2>
            <p>
              Contamos con colores, sabores, materias primas, fragancias y
              premezclas vitamínicas para la industria Alimentaria, Cosmética y
              Farmacéutica.
            </p>
          </div>

          <div />
          <div className="caracteristicas">
            <div className="div1">
              <img
                alt="Colores"
                src="../../images/Home-Productos-Colores.jpg"
              />
            </div>
            <div className="div2">
              <img
                alt="Sabores"
                src="../../images/Home-Productos-Sabores.jpeg"
              />
            </div>
            <div className="div3">
              <img
                alt="Materias primas"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            </div>
          </div>
          <div className="contacto">
            <div>
              <h2>Contacto</h2>
              <p className="tel">01 55 5745 3333</p>
            </div>
            <div>
              <h2>Dirección</h2>
              <p className="dir">
                Manuel Calero N°9 Santa Martha Acatitla 09510 Iztapalapa, CDMX
                México
              </p>
            </div>
            <div>
              <h2>Horario de atención</h2>
              <p className="hr">
                lun.: 8:00–4:30 <br />
                mar.: 8:00–4:30
                <br />
                mié.: 8:00–4:30
                <br />
                jue.: 8:00–4:30
                <br />
                vie.: 8:00–4:30
                <br />
                sáb.: Cerrado
                <br />
                dom.: Cerrado
              </p>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bioingredient Technology, S.A. de C.V.
      </Footer>
    </Layout>
  </div>
);

export default Home;
