import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>

             <img src={item.image} alt={item.name} className="cart-img" />
              
             <div className="cart-details">
             <h3>{item.name}</h3>
             <p>Size: {item.size}</p>
             <p>Quantity: {item.quantity}</p>
             <p>Price: ₹{item.price}</p>

             <p className="subtotal">
             Subtotal: ₹{item.price * item.quantity}
             </p>
             </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}

          
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn" onClick={() => navigate("/summary")}>
             Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;