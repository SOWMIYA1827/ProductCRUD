import { useNavigate } from "react-router-dom";
import "./Favorites.css";

function Favorites({ favorites = [], addCart }) {

  const navigate = useNavigate();

  function handleAddToCart(product) {
    addCart(product);
    navigate("/user/cart");
  }

  return (
    <div className="favorites-container">

      <h2 className="favorites-title">❤️ Favorite Products</h2>

      {favorites.length === 0 ? (
        <p className="empty-text">No favorites yet</p>
      ) : (
        <div className="favorites-grid">

          {favorites.map((product) => (
            <div className="favorite-card" key={product.id}>

              <img
                className="favorite-img"
                src={product.image}
                alt={product.title}
              />

              <h3 className="favorite-name">
                {product.title}
              </h3>

              <p className="favorite-price">
                ₹ {product.price}
              </p>

              <button
                className="cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                🛒 Move to Cart
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;