import React from "react";
import ProductCard from "./ProductCard";



const catalogo = ({array}) => {
  return (
    <div className="container">
      <div className="row">
      {array.map((e) => (
        <ProductCard key={e} name= {e.name} price={e.price} image= {e.image} />
      ))}
      </div>
    </div>
  );
};

export default catalogo;
