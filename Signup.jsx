import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Logo1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.find(user => user.email === form.email);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    // Save new user
    users.push({
      name: form.name,
      email: form.email,
      password: form.password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "/login";
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
        <h2>Sign Up</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

        <button type="submit">Register</button>

        <p>Already have an account? <Link to="/Login">Login</Link></p>
      </form>
    </div>
    </>
  );
}

export default Signup;