import React from 'react'
import logo1 from "./assets/Logo1.png";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"
import img1 from "./assets/F2.JPEG";
import img2 from "./assets/M2.JPEG";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function RealMadrid() {
    const products = [
        {
          id: 1,
          name: "Real Madrid 2012",
          price: 599,
          image: img1,
          link:"/RealMadrid2012"
        },
        {
          id: 2,
          name: "Real Madrid 2024",
          price: 499,
          image: img2,
          link:"/RealMadrid2025"
        }
    ];
    
const { cart } = useContext(CartContext);
const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <>
    <div className="one">
      <img className="logo" src={logo1} alt="logo" />
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
    
    <h2 className='nc'>Real Madrid Jerseys</h2>

    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          link={product.link}
        />
      ))}
    </div>
    </>
  )
}

export default RealMadrid