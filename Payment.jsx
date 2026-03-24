import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { FaGooglePay, FaCreditCard, FaMoneyBillWave, FaCheck } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function Payment() {
  const [method, setMethod] = useState("");

  const { cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

 
  const items = location.state?.items || cart;


  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="payment-container">

      <h2>Payment Options</h2>

      <div className="payment-methods">

        {/* UPI */}
        <div 
          className={`payment-card ${method === "UPI" ? "active" : ""}`}
          onClick={() => setMethod("UPI")}
        >
          <div className="payment-left">
            <FaGooglePay className="payment-icon" />
            <span>UPI Payment</span>
          </div>
          {method === "UPI" && <FaCheck className="payment-check" />}
        </div>

        {/* Card */}
        <div 
          className={`payment-card ${method === "Card" ? "active" : ""}`}
          onClick={() => setMethod("Card")}
        >
          <div className="payment-left">
            <FaCreditCard className="payment-icon" />
            <span>Credit / Debit Card</span>
          </div>
          {method === "Card" && <FaCheck className="payment-check" />}
        </div>

        {/* COD */}
        <div 
          className={`payment-card ${method === "COD" ? "active" : ""}`}
          onClick={() => setMethod("COD")}
        >
          <div className="payment-left">
            <FaMoneyBillWave className="payment-icon" />
            <span>Cash on Delivery</span>
          </div>
          {method === "COD" && <FaCheck className="payment-check" />}
        </div>

      </div>

    
      <h3 className="payment-total">Total: ₹{totalPrice}</h3>

      
      <button className="pay-btn" onClick={handlePayment}>
        {method === "COD" ? "Place Order" : "Pay Now"}
      </button>

    </div>
  );
}

export default Payment;