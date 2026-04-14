import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div>
      <div style={hero}>
        <h1>🛍️ Welcome to ShopX</h1>
        <p>Discover amazing products at unbeatable prices</p>
      </div>

      {/* ✅ NEW: Search and Category in one row */}
      <div style={searchFilterRow}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchBox}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={dropdown}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Updated to use a class for the Grid */}
      <div className="product-grid">
        {products
          .filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((p) =>
            category === "all" ? true : p.category === category
          )
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </div>
  );
};

export default Home;

// --- STYLES ---

const hero = {
  textAlign: "center",
  padding: "50px",
  background: "linear-gradient(to right, #0f172a, #334155)",
  color: "white",
  margin: "20px",
  borderRadius: "10px",
};

const searchFilterRow = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "30px auto",
  maxWidth: "1200px",
};

const searchBox = {
  padding: "12px",
  width: "350px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const dropdown = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  backgroundColor: "white",
  cursor: "pointer",
  fontSize: "16px",
  textTransform: "capitalize",
};