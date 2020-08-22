import React from "react";

import RatingPage from "./calificacionCaras";
import { addToOrder } from "../Redux/actions/orderLineActions"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import store from "../Redux/store"


export function ProductComponent({id, productDetails, products, name, price, quantity}) {
    let history = useHistory() 

    return (        
    <div className="container-fluid mt-4    ">
        <div className= "d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded" style={{width: "900px"}}>
            <div className="d-flex flex-column align-items-center" style={{ width: "320px" }}>
            <img id="principal" className="m-1 border border-secondary" style={{ width: "325px" }} src={productDetails.images === undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} />
                <div className= "d-flex flex-row justify-content-around  w-75">
                    <img className="w-25 border border-secondary" 
                    src={productDetails.images === undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[0].url}.jpg`} 
                    alt={productDetails.name}
                    onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className="w-25 border border-secondary" src={productDetails.images === undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[1].url}.jpg`} alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className="w-25 border border-secondary" src={productDetails.images === undefined ? "." : `http://ecommerce-g5.tk/server-fotos/${productDetails.images[2].url}.jpg`} alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                </div>
            </div>
            <div className="ml-4 pl-2" style={{ width: "450px" }}>
                <h3 className="pt-4 pb-3">{productDetails.name}</h3>
                <hr></hr>
                <h6>Stock: {productDetails.stock}</h6>
                <hr></hr>
                <h5>$ {productDetails.price}</h5>
                <hr></hr>
                <p>{productDetails.description}</p>
                <hr></hr>
                <div>
                    <RatingPage />
                </div>
                <hr></hr>
                <button data-id={id} type= 'button' 
                    className="btn btn-dark ml-auto mr-auto"
                    onClick={() => {
                        history.push(`/Order`)
                        store.dispatch(addToOrder(productDetails.id, 1))
                    }}
                >
            Agregar al carrito</button>

            </div>
            <script src="js/addons/rating.js"></script>
        </div>
    </div>    
    );
}

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
    return {
        productDetails: state.products.productDetails,
        addToOrder: state.cart.addToOrder
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToOrder: (id) => dispatch(addToOrder(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);