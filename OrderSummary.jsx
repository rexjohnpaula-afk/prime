import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate, useLocation } from "react-router-dom";

function OrderSummary() {
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const buyNowItem = location.state?.buyNowItem;

  const items = buyNowItem ? [buyNowItem] : cart;

  
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="summary-container">
      <h2>Order Summary</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div className="summary-item" key={index}>
              
              <img src={item.image} alt={item.name} />

              <div className="summary-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>

                <p className="subtotal">
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <h3>Total: ₹{totalPrice}</h3>

            <button className="place-order-btn" onClick={() => navigate("/payment", { state: { items } })}>
            Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderSummary;