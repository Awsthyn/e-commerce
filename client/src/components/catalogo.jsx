import React from "react";
import ProductCard from "./ProductCard";

const array = [
  {
    name: "La mano de Dios",
    price: 100000,
    image:
      "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg",
  },
  {
      name: "Croma en oferta. Ver descripción.",
      price: 500,
      image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
  },
  {
      name: "Poema de Lorem Ipsum",
      price: 1000,
      image: "https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg"
  }
];

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
