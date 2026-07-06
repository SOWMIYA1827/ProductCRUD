import { useState } from "react";
import "./Product.css";

function Product({ products, addFavorite, addCart }) {

  const [search, setSearch] = useState("");

  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page">

      <h1>Product Details</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">

        {filterProducts.map((product) => (

          <div className="flip-card" key={product.id}>

            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">

                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h2>₹ {product.price}</h2>

              </div>

              {/* BACK */}
              <div className="flip-card-back">

                <h3>{product.category}</h3>
                <p>{product.description}</p>

                <button onClick={() => addFavorite(product)}>
                  ❤️ Favorite
                </button>

                <button onClick={() => addCart(product)}>
                  🛒 Add Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Product;