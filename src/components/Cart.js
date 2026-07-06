function Cart({ products = [], purchaseProducts }) {

  const total = products.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">

      <h2 className="cart-title">🛒 Shopping Cart</h2>

      {products.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        <div className="cart-grid">

          {products.map((item) => (
            <div className="cart-card" key={item.id}>

              <img
                className="cart-img"
                src={item.image}
                alt={item.title}
              />

              <div className="cart-details">

                <h3 className="cart-name">{item.title}</h3>

                <p className="cart-qty">
                  Qty: <b>{item.quantity}</b>
                </p>

                <p className="cart-price">
                  ₹ {item.price}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

      <div className="cart-footer">

        <h3 className="cart-total">
          Total: ₹ {total}
        </h3>

        <button
          className="cart-buy-btn"
          onClick={purchaseProducts}
        >
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default Cart;