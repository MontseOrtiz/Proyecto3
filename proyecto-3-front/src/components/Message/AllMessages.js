import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { allMessages, deleteMessage } from "../../services/message";

class AllMessages extends Component {
  state = {
    messages: []
  };

  allMessages = () => {
    allMessages()
      .then(response => {
        this.setState({ messages: response });
      })
      .catch(e => console.log(e));
  };

  deleteMessage = id => {
    deleteMessage(id)
      .then(r => {
        console.log(r);
        this.allMessages();
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentWillMount() {
    this.allMessages();
  }

  render() {
    const { messages } = this.state;
    console.log(messages);

    return (
      <div style={{ background: "#ECECEC" }}>
        <Row
          gutter={16}
          style={{
            background: "#ECECEC",
            padding: "40px",
            marginLeft: "25px"
          }}
        >
          {messages.map((message, index) => {
            return (
              <Col span={6} key={message._id} style={{ paddingBottom: 12 }}>
                <Card
                  hoverable
                  title="Nombre de cliente: {message.name}"
                  style={{ width: 300 }}
                >
                  <p>Nombre de cliente: {message.name}</p>
                  <p>Email: {message.email}</p>
                  <p>Teléfono: {message.telephone} MXN</p>
                  <p>Mensaje: {message.message}</p>
                  <button
                    type="danger"
                    onClick={() => this.deleteMessage(message._id)}
                    style={{ marginLeft: "25px" }}
                  >
                    Eliminar
                  </button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default AllMessages;
