import React from "react";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const Questions = () => {
  return (
    <Layout>
      <Content className="content-questions">
        <div className="top-part-questions">
          <h2>PREGUNTAS FRECUENTES</h2>
        </div>
        <div className="questions">
          <div>
            <h4>¿QUÉ SON LAS PREMEZCLAS VITAMÍNICAS?</h4>
            <p>
              Las premezclas se usan como parte o suplemento de la alimentación
              humana, ya sea que aporten nutrientes o para obtener efectos
              beneficiosos tanto para el bienestar físico y mental o para
              reducir riesgos de enfermedades.
            </p>
          </div>
          <div>
            <h4>¿QUÉ ES UN COLOR?</h4>
            <p>
              Un color es Es cualquier sustancia que puede impartir color cuando
              se añade o se aplica a un alimento, medicamento, cosmético o al
              cuerpo humano.
            </p>
          </div>
          <div>
            <h4>¿QUÉ ES UN SABOR?</h4>
            <p>
              Es un concentrado de sustancias aromáticas y gustativas que
              imparten olor y sabor a los alimentos.
            </p>
          </div>
          <div>
            <h4>¿QUÉ ES UNA FRAGANCIA?</h4>
            <p>Líquido aromático aplicado para desprender el olor deseado </p>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bioingredient Technology, S.A. de C.V.
      </Footer>
    </Layout>
  );
};

export default Questions;
