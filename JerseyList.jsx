import React from "react";
import ProductCard from "./ProductCard"
import img1 from "./assets/B1.JPEG";
import img2 from "./assets/M1.JPEG";
import img3 from "./assets/M2.JPEG";
import img4 from "./assets/M3.JPEG";




function JerseyList() {

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
      name: "Ac Milan  2009",
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
    }
    ];

  return (
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
  );
}

export default JerseyList;