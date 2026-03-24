import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Logo1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      user => user.email === form.email && user.password === form.password
    );

    if (!validUser) {
      alert("Invalid email or password!");
      return;
    }

    // Save logged in user
    localStorage.setItem("currentUser", JSON.stringify(validUser));

    alert("Login successful!");
    window.location.href = "/";
  };
  
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
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />

        <button type="submit">Login</button>

        <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
      </form>
    </div>
    </>
  );
}

export default Login;