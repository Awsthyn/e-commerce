import React from "react";
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
    console.log({
        id: id,
        name: name,
        description,
        price,
        stock,
        image,
    })
    return (
        <div className={s.product_container}>
            <div className={s.product_img}>
                <img src={image} alt={name} />
                <div className={s.product_smallImgs}>
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                </div>
            </div>
            <div className={s.product_data}>
                <button onClick={() => window.history.back()}>X</button>
                <h3>{name}</h3>
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
                <button>COMPRAR</button>
            </div>
            {/* <rating.js file */}
            <script src="js/addons/rating.js"></script>
        </div>
    );
}
