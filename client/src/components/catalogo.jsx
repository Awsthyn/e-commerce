import React from "react";
import ProductCard from "./ProductCard";



const catalogo = ({array, toProductDetails}) => {
  return (
    <div className="container">
      <div className="row">
      {array.map((e) => (
        <ProductCard key={e} id= {e.id} name= {e.name} price={e.price} image= {e.image} toProductDetails= {toProductDetails} />
      ))}
      </div>
    </div>
  );
};

export default catalogo;
