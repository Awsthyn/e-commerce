import React from "react";
import Product from "../../../api/src/models/Product.js";

export default function Product ({ name, description, price, stock, image }) {
  return(
    <div className="product_container">
    <div className="product_images">
      <img>{image}</img>
      <div>
        <img>{image}</img>
        <img>{image}</img>
        <img>{image}</img>
      </div>
    </div>
    <div className="product_data">
      <h3>{name}</h3>
      <h5>{price}</h5>
      <hr></hr>
      <h6>{stock}</h6>
      <hr></hr>
      <p>{description}</p>
      <hr></hr>
      <div><span>ESTRELLAS</span></div>
      <hr></hr>
      <buton></buton>
    </div>
  </div>
  )
 

}
