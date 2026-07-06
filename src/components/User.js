import { Routes, Route, Link } from "react-router-dom";

import Product from "./Product";
import Favorites from "./Favorites";
import Cart from "./Cart";
import Signout from "./Signout";

import "./User.css";

function User(props) {
  return (
    <div className="user-container">

      {/* Header */}
      <header className="user-header">

        <h1 className="company-name">Surya & Co</h1>

        <nav className="user-navbar">

          <Link className="user-nav-link" to="/user">
            🛍 Products
          </Link>

          <Link className="user-nav-link" to="/user/favorites">
            ❤️ Favorites
          </Link>

          <Link className="user-nav-link" to="/user/cart">
            🛒 Cart
          </Link>

          <div className="signout-btn">
            <Signout />
          </div>

        </nav>

      </header>

      {/* Page Content */}
      <main className="user-content">

        <Routes>

          <Route
            index
            element={
              <Product
                products={props.products}
                addFavorite={props.addFavorite}
                addCart={props.addCart}
              />
            }
          />

          <Route
            path="favorites"
            element={
              <Favorites
                favorites={props.favorites}
                addCart={props.addCart} 
              />
            }
          />

          <Route
            path="cart"
            element={
              <Cart
                products={props.cart}
                purchaseProducts={props.purchaseProducts}
              />
            }
          />

        </Routes>

      </main>

    </div>
  );
}

export default User;