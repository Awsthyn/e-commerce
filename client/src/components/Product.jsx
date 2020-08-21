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
        <div className= "d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded" style={{width: "900px"}}>
            <div className="d-flex flex-column align-items-center" style={{ width: "320px" }}>
            <img id="principal" className="m-1 border border-secondary" style={{ width: "325px" }} src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} />
                <div className= "d-flex flex-row justify-content-around  w-75">
                    <img className="w-25 border border-secondary" 
                    src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[0].url}.jpg`} 
                    alt={productDetails.name}
                    onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className="w-25 border border-secondary" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className="w-25 border border-secondary" src={productDetails.images == undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[2].url}.jpg`} alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                </div>
            </div>
            <div className="ml-4 pl-2" style={{ width: "450px" }}>
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