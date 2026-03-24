import React, { useState } from "react";
const img4 = "/src/assets/M4.JPEG";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Aresnal2024() {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  
const { addToCart } = useContext(CartContext);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    
const item = {
  name: "Aresnal 2024",
  price: 499,
  size,
  quantity,
  image: img4 
};


addToCart(item);
alert("Item added to cart");
  };

  const handleBuyNow = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    alert(`Proceeding to buy Size ${size}`);
  };

  return (
    <div className="jersey-container">
      <div className="jersey-card">
        <img
          src={img4}
          alt="Jersey"
          className="jersey-image"
        />

        <div className="jersey-details">
          <h2 className="jersey-name">Aresnal 2024</h2>
          <p className="jersey-price"><del>₹699</del>&nbsp;₹499</p>

          <div className="size-section">
            <h4>Select Size:</h4>
            <label>
  <input type="radio" name="size" value="S" onChange={handleSizeChange} />
  <span>S</span>
</label>

<label>
  <input type="radio" name="size" value="M" onChange={handleSizeChange} />
  <span>M</span>
</label>

<label>
  <input type="radio" name="size" value="L" onChange={handleSizeChange} />
  <span>L</span>
</label>

<label>
  <input type="radio" name="size" value="XL" onChange={handleSizeChange} />
  <span>XL</span>
</label>
          </div>

          <div className="quantity-section">
            <h4>Quantity:</h4>
            <div className="quantity-box">
              <button onClick={decreaseQty}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>

          <div className="button-group">
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aresnal2024;