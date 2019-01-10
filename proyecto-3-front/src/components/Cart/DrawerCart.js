import React from "react";
import { Drawer, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const DrawerCart = ({ visible, onClose, cart }) => {
  if (cart === {}) return <p>Tu carrito esta vacío</p>;
  return (
    <Drawer title="Cesta" placement="right" onClose={onClose} visible={visible}>
      {Object.values(cart).map(item => (
        <span key={item._id}>
          <Icon type={item.photo} />
          <br />
          <strong>Producto: {item.name}</strong>
          <p>Qty: {item.qty}</p>
          <p>
            Price: {item.price} x {item.qty}
          </p>
        </span>
      ))}

      <Link to="/cart">
        <Button>Proceder al pago</Button>
      </Link>
    </Drawer>
  );
};

export default DrawerCart;
