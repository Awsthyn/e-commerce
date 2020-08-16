import React, {useState, useEffect} from "react";
import s from "../css/product.module.css";
import RatingPage from "./calificacionCaras";
// import Product from "../../../api/src/models/Product";

export default function productComponent({
    id,
    name,
    description,
    price,
    stock,
    image,
}) {
    console.log(image)
    return (
    <div className="container-fluid mt-4    ">
        <div className={s.product_container}>
            <div className={s.product_img}>
                <img className="m-1" src={"https://i.picsum.photos/id/472/337/337.jpg?hmac=bEq_WPOsjZOK3h-HVzIHCZZOiqLipC3jSf46XC8NUoE"} alt={name} />
                <div className= "d-flex flex-row justify-content-around  w-75">
                    <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={name} />
                    <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={name} />
                    <img className="w-25 m-1" src={"https://i.picsum.photos/id/480/200/200.jpg?hmac=q_kzh_8Ih85_5t_jN3rcD3npeNBLA41oDGtQZVkmmYs"} alt={name} />
                </div>
            </div>
            <div className={s.product_data}>
               
                <h3 className="pt-4 pb-3">{name}</h3>
                <h5>${price}</h5>
                <hr></hr>
                <h6>Stock: {stock}</h6>
                <hr></hr>
                <p>{description}</p>
                <hr></hr>
                <div>
                    <RatingPage />
                </div>
                <hr></hr>
                <button className="btn btn-success">Agregar al carrito</button>
            </div>
            {/* <rating.js file */}
            <script src="js/addons/rating.js"></script>
        </div>
    </div>    
    );
}
//