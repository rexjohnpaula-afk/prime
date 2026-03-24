import React from 'react'
import logo from "./assets/Logo1.png";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"
import img1 from "./assets/B1.JPEG";
import img2 from "./assets/M1.JPEG";
import img3 from "./assets/M2.JPEG";
import img4 from "./assets/M3.JPEG";
import img5 from "./assets/M4.JPEG";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function HalfSleeve() {
    const products = [
        {
          id: 1,
          name: "Bayern 2014",
          price: 499,
          image: img1,
          link:"/Bayern2014"
        },
        {
          id: 2,
          name: "AC Milan 2009",
          price: 499,
          image: img2,
          link:"/AcMilan2009"
        },
        {
          id: 3,
          name: "Real Madrid 2025",
          price: 499,
          image: img3,
          link:"/RealMadrid2025"
        },
        {
          id: 4,
          name: "Aresnal 2012",
          price: 599,
          image:  img4,
          link:"/JerseyPage"
        },
        {
            id: 5,
            name: "Aresnal 2024",
            price: 599,
            image:  img5,
            link:"/Aresnal2024"
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
    <h2 className='nc'>Half Sleeve Jerseys</h2>

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

export default HalfSleeve
