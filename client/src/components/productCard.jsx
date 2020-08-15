import React from "react";
import { Link, NavLink} from 'react-router-dom';

const productCard = ({ name, price, image }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} class="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center">$ {price}</p>
        <NavLink to="/products/:id" className="btn btn-primary ml-auto mr-auto">VER MAS</NavLink>
        {/* <a href="#/products/:id" className="btn btn-primary ml-auto mr-auto">
          See more details... </a>*/}
        
      </div>
    </div>
  );
};

export default productCard;
