import React from "react";
import s from "../css/product.module.css";
// import Product from "../../../api/src/models/Product";


export default function productComponent ({ name, description, price, stock, image }) {
  return(
    
      <div className={s.product_container}>
        <div className={s.product_img}>
          <img alt= "Imagen no encontrada">{image}</img>
          <div className={s.product_smallImgs}>
            <img alt= "Imagen no encontrada">{image}</img>
            <img alt= "Imagen no encontrada">{image}</img>
            <img alt= "Imagen no encontrada">{image}</img>
          </div>
        </div>
        <div className={s.product_data}>
          <button onClick = {()=>window.history.back()}>X</button>
          <h3>{name}NOMBRE</h3>
          <h5>{price}$1324</h5>
          <hr></hr>
          <h6>{stock}STOCK=5</h6>
          <hr></hr>
          <p>{description}DESCRIPCION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consectetur.</p>
          <hr></hr>
          <div>
            <div class="container">
              <span id="rateMe3" class="rating-faces">
                {
                  "Estrellas*****"
                }

              </span>
            </div>
          </div>
          <hr></hr>
          <buton>COMPRAR</buton>
        </div>
        {/* <rating.js file */}
          <script src="js/addons/rating.js"></script>
    </div>
  
  )
 

}
