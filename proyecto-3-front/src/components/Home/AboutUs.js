import React from "react";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const AboutUs = () => {
  return (
    <Layout>
      <Content className="fondo-aboutus">
        <div className="contenido-aboutus">
          <h2>ACERCA DE NOSOTROS</h2>
          <p>
            BIOINGREDIENT TECHNOLOGY, S.A DE C.V., se inició desde 1999 como una
            empresa dedicada a la comercialización de colores, sabores, materias
            primas, fragancias y premezclas vitamínicas para la industria
            Alimentaria, Cosmética y Farmacéutica.
          </p>
          <p>
            BIOINGREDIENT TECHNOLOGY comercializa colorantes de SENSIENT COLORS,
            líder en el mercado por su calidad, seguridad y respaldo de que sus
            productos son para el consumo humano. Por otra parte, también
            comercializamos saborizantes de JOBARI COLORS AND FLAVORS. Tenemos
            las líneas de sabores líquidos y en polvo (hidrosolubles y
            liposolubles), Otros productos que manejamos son las fragancias para
            la industria cosmética, aseo personal y limpieza. Por otra parte,
            también ponemos a su disposición algunas materias primas.
          </p>
          <p>
            BIOINGREDIENT TECHNOLOGY se ha caracterizado por la constante
            búsqueda de materiales que aporten un valor agregado al consumidor
            como las premezclas vitamínicas (JOBARI COLORS) Con una experiencia
            de más de 15 años en la industria alimentaria{" "}
          </p>
          <p>
            Bioingredient Technology, S.A. de C.V., ha logrado proporcionar al
            cliente productos de primera calidad en el mercado, ya que
            mantenemos relaciones comerciales con empresas líderes en su ramo.{" "}
          </p>
          <p>
            Nuestra misión es proporcionar a nuestros clientes productos de
            calidad y un buen servicio que coadyuven al bienestar de nuestros
            consumidores.
          </p>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bioingredient Technology, S.A. de C.V.
      </Footer>
    </Layout>
  );
};

export default AboutUs;
