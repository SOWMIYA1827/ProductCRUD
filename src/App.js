import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";

function App() {

  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // ---------------- FETCH PRODUCTS ----------------
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ---------------- SAVE PRODUCT ----------------
  const saveProducts = async (product) => {
    try {
      const res = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );

      setProducts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // ---------------- DELETE PRODUCT ----------------
  const deleteProducts = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // ---------------- UPDATE PRODUCT ----------------
  const updateProducts = async (product) => {
    try {
      const res = await axios.put(
        `https://fakestoreapi.com/products/${product.id}`,
        product
      );

      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? res.data : p
        )
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // ---------------- FAVORITES (FIXED) ----------------
  function addFavorite(product) {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        alert("⚠️ Product already in Favorites");
        return prev;
      }

      alert("✅ Product added to Favorites ❤️");
      return [...prev, product];
    });
  }

  // ---------------- CART (FIXED) ----------------
  function addCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    alert("🛒 Product added to Cart");
  }

  // ---------------- PURCHASE ----------------
  function purchaseProducts() {
    alert("✅ Purchased Successfully!");
    setCart([]);
  }

  // ---------------- APP ROUTES ----------------
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* USER */}
        <Route
          path="/user/*"
          element={
            <User
              products={products}
              favorites={favorites}
              cart={cart}
              addFavorite={addFavorite}
              addCart={addCart}
              purchaseProducts={purchaseProducts}
            />
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <Admin
              products={products}
              saveProducts={saveProducts}
              deleteProducts={deleteProducts}
              updateProducts={updateProducts}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;