import React from 'react'
import { Link } from "react-router-dom";
import logo from "./assets/Logo1.png";
import email from "./assets/e1.PNG";
import ph1 from "./assets/ph2.PNG";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Contact() {
  

const { cart } = useContext(CartContext);
const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <div>
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
    <h1 className='con'>Contact</h1>
    <div className='dcon'>
        <p>No Exchage. </p><br />
        <p>Read Terms And Condition.</p><br />
        <p>Shipping Details.</p><br />
        <p>Privacy Policies.</p>
    </div>
    <div className='dcon2'>
        <img src={email} alt="email"  className='eimg'/>
        <span className='sp3'>primesports@gmail.com</span>
        <img src={ph1} alt="phone" className='eimg1'/>
        <span className='sp1'>13324 89765</span>
        <img src={ph1} alt="phone" className='eimg2'/>
        <span className='sp2'>13324 89765</span>
    </div>
    </div>
  )
}

export default Contact
