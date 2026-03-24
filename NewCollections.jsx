import React from 'react'
import logo from "./assets/Logo1.png";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"
import img1 from "./assets/B1.JPEG";
import img2 from "./assets/M1.JPEG";
import img3 from "./assets/M2.JPEG";
import img4 from "./assets/M3.JPEG";
import img5 from "./assets/M4.JPEG";
import img6 from "./assets/P1.JPEG";
import img7 from "./assets/F1.JPEG";
import img8 from "./assets/F2.JPEG";
import img9 from "./assets/F3.JPEG";
import img10 from "./assets/F4.JPEG";
import { FaShoppingCart } from "react-icons/fa";



function NewCollections() {
    const products = [
        {
          id: 1,
          name: "Bayern 2014",
          price: 499,
          image: img1,
          link: "/Bayern2014"
        },
        {
          id: 2,
          name: "AC Milan 2009",
          price: 499,
          image: img2,
          link: "/AcMilan2009"
        },
        {
          id: 3,
          name: "Real Madrid 2025",
          price: 499,
          image: img3,
          link: "/RealMadrid2025"
        },
        {
          id: 4,
          name: "Aresnal 2012",
          price: 599,
          image:  img4,
          link: "/JerseyPage"
        },
        {
            id: 5,
            name: "Aresnal 2024",
            price: 599,
            image:  img5,
            link: "/Aresnal2024"
          },
          {
            id: 6,
            name: "PSG 2025",
            price: 599,
            image:  img6,
            link: "/PSG2025"
          },
          {
            id: 7,
            name: "Sporting 2002",
            price: 599,
            image:  img7,
            link: "/Sporting2002"
          },
          {
            id: 8,
            name: "Real Madrid 2012",
            price: 599,
            image:  img8,
            link:"/RealMadrid2012"
          },
          {
            id: 9,
            name: "Barcelona 2009",
            price: 599,
            image:  img9,
            link: "/Barcelona2009"
          },
          {
            id: 10,
            name: "Barcelona 1999",
            price: 599,
            image:  img10,
            link: "/Barcelona1999"
          }
          
      ];
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
    <h2 className='nc'>New Collections</h2>

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
  );
}

export default NewCollections;