import React from "react";
import s from "../css/product.module.css";
import RatingPage from "./calificacionCaras";
import { toProductDetails } from "../Redux/actions/productActions"
import { connect } from "react-redux";
import store from "../Redux/store"
import { useHistory } from "react-router-dom";
// import Product from "../../../api/src/models/Product";

export function ProductComponent({ productDetails, products }) {
console.log('ke', products)
let history = useHistory()

    return (
    <div className="container-fluid mt-4    ">
        <div className={s.product_container}>
            <div className={s.product_img}>
            <img className="m-1" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} />
                <div className= "d-flex flex-row justify-content-around  w-75">
                    <img className="w-25 m-1" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[0].url}.jpg`} alt={productDetails.name} />
                    <img className="w-25 m-1" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} />
                    <img className="w-25 m-1" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[2].url}.jpg`} alt={productDetails.name} />
                </div>
            </div>
            <div className={s.product_data}>
                <h3 className="pt-4 pb-3">{productDetails.name}</h3>
                <hr></hr>
                <h6>Stock: {productDetails.stock}</h6>
                <hr></hr>
                <p>{productDetails.description}</p>
                <hr></hr>
                <div>
                    <RatingPage />
                </div>
                <hr></hr>
                <button data-id={productDetails.id} type= 'button' className="btn btn-dark ml-auto mr-auto" onClick={(e) => {
          history.push(`/Order`)
          store.dispatch(toProductDetails(productDetails.id))
        }}>Agregar al carrito</button>
            </div>
            {/* <rating.js file */}
            <script src="js/addons/rating.js"></script>
        </div>
    </div>    
    );
}

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
    return {
        productDetails: state.products.productDetails,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toProductDetails: (id) => dispatch(toProductDetails(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);