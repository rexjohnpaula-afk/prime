import React from 'react'
import logo from "./assets/Logo1.png";
import { Link } from "react-router-dom";
import ClubCard from './ClubCard'
import img1 from "./assets/C1.JPEG";
import img2 from "./assets/C2.JPEG";
import img3 from "./assets/C3.JPEG";
import img4 from "./assets/C4.JPEG";
import img5 from "./assets/C5.JPEG";
import img6 from "./assets/C6.JPEG";
import img7 from "./assets/C7.JPEG";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function ClubCollections() {
    const products = [
        {
          id: 1,
          name: "PSG",
          image: img1,
          link: "/Psg"
        },
        {
            id: 2,
            name: "Barcelona",
            image: img2,
            link: "/Barcelona"
        },
        {
            id: 3,
            name: "Aresnal",
            image: img3,
            link: "/Aresnal"
        },
        {
            id: 4,
            name: "Bayern",
            image: img4,
            link: "/Bayern"
        },
        {
            id: 5,
            name: "Chelsea",
            image: img5,
            link: "/Chelsea"
        },
        {
            id: 6,
            name: "Liverpool",
            image: img6,
            link: "/Liverpool"
        }, 
        {
            id: 7,
            name: "Real Madrid",
            image: img7,
            link: "/RealMadrid"
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
    <h2 className='nc'>Pick Your Favorite Club</h2>
    <div className="c-container">
        {products.map((product) => (
        <ClubCard
         
          image={product.image}
          name={product.name}
          link={product.link}
          
        />
      ))}
    </div>
    
    
    </>
  )
}

export default ClubCollections