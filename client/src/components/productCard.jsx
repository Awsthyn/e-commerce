import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductCard({ id, name, price, image, toProductDetails }) {
  let history = useHistory()

  // function toProductDetails(e) {
  //   fetch(`http://localhost:3001/products/${valor}`)
  //     .then(r => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       //setProdsCatalog(data) })
  //     })
  //     .catch(error => {console.error(error)})
  // }

  //history.push(`/products/${valor}`)


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} class="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center">$ {price}</p>
        <button data-id={id} type= 'button' className="btn btn-primary ml-auto mr-auto" onClick={(e) => {
          
          history.push(`/products/${e.target.getAttribute('data-id')}`)
          toProductDetails(e.target.getAttribute('data-id'))
        }}>
          Ver más detalles...
        </button>
      </div>
    </div>
  );
};

