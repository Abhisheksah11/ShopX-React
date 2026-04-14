import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={card}>
          <img src={item.thumbnail} style={img} />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      {cart.length > 0 && (
        <Link to="/checkout">
          <button style={checkoutBtn}>
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;

const card = {
  display: "flex",
  gap: "20px",
  background: "#fff",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "10px",
};

const img = {
  width: "80px",
  height: "80px",
};

const checkoutBtn = {
  marginTop: "20px",
  padding: "10px",
  background: "black",
  color: "white",
};