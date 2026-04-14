import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./product.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h4>{product.title}</h4>

      <p className="price">${product.price}</p>

      <p>⭐ {product.rating}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;