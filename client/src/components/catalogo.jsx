import React from "react";
import ProductCard from "./productCard";

const array = [
  {
    name: "La mano de Dios",
    price: 100000,
    image:
      "https://images.mediotiempo.com/PmwyUX2dhdem0VmpU09tAI4F62k=/958x596/uploads/media/2019/06/22/mano-dios-gol-maradona-inglaterra.jpg",
  },
  {
      name: "Croma en oferta. Ver descripción.",
      price: 500,
      image: "https://pbs.twimg.com/profile_images/1263596368641224705/iAWtOr6g.jpg"
  },
  {
      name: "Poema de Lorem Ipsum",
      price: 1000,
      image: "https://ihdemu.com/images/blog/que-es-lorem-ipsum.jpg"
  }
];

const catalogo = () => {
  return (
    <div className="container">
      {array.map((e) => (
        <ProductCard key={e} name= {e.name} price={e.price} image= {e.image} />
      ))}
    </div>
  );
};

export default catalogo;
