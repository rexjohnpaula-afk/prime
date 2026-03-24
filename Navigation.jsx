import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Logo1.png";
import Slider from "./Slider";
import NewArivals from "./NewArrivals";
import Footer from "./Footer";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";


function Navigation() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
     <div className="one">
      <img className="logo" src={logo} alt="logo" />
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Login">Login</Link>
      <Link to="/cart" className="cart-link">
          <FaShoppingCart size={20} />
          <span style={{ marginLeft: "5px" }}>Cart</span>

          {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
      </Link>
      <div className="product-dropdown">
            <Link to="/">Products</Link>

            <div className="dropdown-content">
              <Link to="/HalfSleeve">Half Sleeve</Link>
              <Link to="/FullSleeve">Full Sleeve</Link>
              <Link to="/ClubCollections">Club Wise Jerseys</Link>
            </div>
          </div>
     
      </div>
    </div>
    <Slider/>
    <NewArivals/>
    <Footer/>
    
    </>
  );
}

export default Navigation;