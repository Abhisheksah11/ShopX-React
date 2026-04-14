import "./navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">🛍️ ShopX</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/cart">
        <button className="cart-btn">
          🛒 Cart ({cart.length})
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;