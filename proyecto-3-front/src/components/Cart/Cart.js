import React, { Component } from "react";

class Cart extends Component {
  componentWillMount() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) this.setState({ cart });
  }

  state = {
    cart: null
  };

  render() {
    const { cart } = this.state;
    if (!cart) return <p>Tu carrito esta vacio</p>;
    let total = Object.values(cart).reduce((a, b) => a.total + b.total);
    console.log(total);

    return (
      <div className="cart-table">
        <h2>Carrito de compras</h2>
        <tbody>
          <tr>
            <th>Nombre del producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>

          {Object.values(cart).map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td>${product.total}</td>
            </tr>
          ))}
        </tbody>
        <h3>Total: {total}</h3>
        <button>Proceder al pago</button>
      </div>
    );
  }
}

export default Cart;
