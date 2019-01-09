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
    console.log(total, cart);

    return (
      <div>
        {Object.values(cart).map(product => (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.qty}</p>
            <p>${product.total}</p>
          </div>
        ))}
        <h2>Total {total}</h2>
      </div>
    );
  }
}

export default Cart;
