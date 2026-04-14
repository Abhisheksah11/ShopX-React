import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1 style={{ color: "green" }}>✅ Payment Successful!</h1>
      <p>Your order has been placed successfully.</p>

      <Link to="/" style={{ color: "blue" }}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;