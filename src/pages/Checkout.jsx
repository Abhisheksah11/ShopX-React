import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={container}>
      <h2>🧾 Checkout</h2>

      {cart.map((item) => (
        <div key={item.id} style={itemStyle}>
          <p>{item.title} × {item.qty}</p>
          <p>${(item.price * item.qty).toFixed(2)}</p>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button style={btn} onClick={() => navigate("/success")}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;

const container = {
  maxWidth: "500px",
  margin: "auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const btn = {
  marginTop: "20px",
  padding: "10px",
  background: "green",
  color: "white",
  border: "none",
};