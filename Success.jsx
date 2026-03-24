import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { FaHome } from "react-icons/fa";

function Success() {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  // 🔥 Clear cart when page loads
  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="page-center">
    <div className="success-container">

      {/* Animated Tick */}
      <div className="checkmark-circle">
        <div className="checkmark">✔</div>
      </div>

      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your purchase 🎉</p>

      <button onClick={() => navigate("/")}>
      <FaHome /> Back to Home
      </button>

    </div>
    </div>
  );
}

export default Success;