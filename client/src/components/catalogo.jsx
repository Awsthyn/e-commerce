import React from "react";
import ProductCard from "./ProductCard";
import S from"../css/catalogo.module.css";



const catalogo = ({array, categories}) => {
  console.log(categories);
  return (
    <div className="container row" >
      <div>
        <h1 className= {S.title}>Categorias</h1>
        <ul>{categories.map((e) => (
        <li key={e} id={e.id} name= {e.name} >{e.name}</li>
      ))}
        </ul>
      </div>
      <div className="row">
      {array.map((e) => (
        <ProductCard key={e} name= {e.name} price={e.price} image= {e.image} />
      ))}
      </div>
    </div>
  );
};

export default catalogo;
