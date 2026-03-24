import React from "react";
import { Link } from "react-router-dom";


function ProductCard({ image, name, price, link }) {
console.log("Navigating to:", link);
  return (
    
      <div className="card">
        <Link to={link} onClick={() => window.scrollTo(0,0)} className="club-link">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className="price">
          <del>₹699</del>&nbsp;₹{price}
        </p>
        </Link>
        
      </div>
   
  );
}

export default ProductCard;