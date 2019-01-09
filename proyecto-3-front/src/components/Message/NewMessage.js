import React, { Component } from "react";
import { newMessage } from "../../services/message";
import { Layout } from "antd";
const { Content, Footer } = Layout;

class NewMessage extends Component {
  state = {
    message: {}
  };

  newMessage = e => {
    const { message } = this.state;
    e.preventDefault();
    newMessage(message)
      .then(r => {
        console.log(r);
        this.props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleText = e => {
    const { message } = this.state;
    const field = e.target.name;
    message[field] = e.target.value;
    console.log(message);
    this.setState({ message });
  };

  render() {
    const { message } = this.state;
    console.log(message);
    return (
      <Layout>
        <Content>
          <div className="div_form_principal">
            <div className="div_form_product">
              <form method="POST" onSubmit={this.newMessage}>
                <label>Nombre:</label>
                <input type="text" name="name" onChange={this.handleText} />
                <label>Email:</label>
                <input type="email" name="email" onChange={this.handleText} />

                <label>Teléfono:</label>
                <input
                  type="number"
                  name="telephone"
                  onChange={this.handleText}
                />

                <label>Mensaje:</label>
                <textarea
                  name="message"
                  onChange={this.handleText}
                  defaultValue="Agrege Mensaje"
                />
                <input type="submit" name="submit" />
              </form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bioingredient Technology, S.A. de C.V.
        </Footer>
      </Layout>
    );
  }
}

export default NewMessage;
