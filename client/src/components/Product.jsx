import React, { useEffect } from "react";

import RatingPage from "./calificacionCaras";
import { addToOrder, getCart, editQuantity } from "../Redux/actions/cartActions"
import { toProductDetails } from "../Redux/actions/productActions"
import  ProductReview  from "./ProductReview"
import { connect } from "react-redux";
import Review from "./Review";
import swal from 'sweetalert';
import styles from '../css/product.module.css'

const alerta = (tit, tex, tim) => {
    swal({
        title: tit, //"¿Finalizar compra?",
        text: tex, //"¿Desea completar la compra de los productos del carrito?",
        icon: "success",
        timer: tim, //"4000"
    })
}

export function ProductComponent({ id, productDetails, addToOrder, cart, getCart, editQuantity, stock, sessionUser, toProductDetails }) {
    const url =  window.location.href
    const ubication = url.lastIndexOf('/')
    
    useEffect(()=>{
      toProductDetails(url.slice(ubication+1))  
      getCart(sessionUser.id)// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])// eslint-disable-next-line react-hooks/exhaustive-deps

    function handleCart(id, userId) {
        let indexProductCart = cart.findIndex(e => Number(e.product.id) === Number(productDetails.id))
        if (indexProductCart === -1) {
            if (productDetails.stock < 1) { swal("Lo sentimos", "No se ha podido agregar a carrito debido a falta temporal de stock.", "error") }
            else {
                addToOrder(id, 1, userId);
                alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")
            }
        }
        else {
            if (stock <= cart[indexProductCart].quantity) { alert("Lo sentimos, no disponemos de la cantidad que usted está solicitando") }
            else {
                editQuantity(cart[indexProductCart].id, cart[indexProductCart].quantity + 1, userId)
                alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")
            }
            getCart(userId)
        }
    }

    return (
        <div className="container-fluid mt-4 ">
            <div className="d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded" style={{ width: "900px" }}>
                <div className="d-flex flex-column align-items-center" style={{ width: "350px" }}>
                    <img id="principal" className={styles.product_img} src={productDetails.images === undefined ? "." : productDetails.images[1].url} alt={productDetails.name} />
                    <div className="d-flex flex-row justify-content-around mt-4 ml-2">
                        <img className={styles.product_img_min}
                            src={productDetails.images === undefined ? "." : productDetails.images[0].url} alt={productDetails.name}
                            onClick={(e) => console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                        <img className={styles.product_img_min} src={productDetails.images === undefined ? "." : productDetails.images[1].url} alt={productDetails.name} onClick={(e) => console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                        <img className={styles.product_img_min} src={productDetails.images === undefined ? "." : productDetails.images[2].url} alt={productDetails.name} onClick={(e) => console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    </div>
                </div>
                <div className="ml-4 pl-2" style={{ width: "450px" }}>
                    <button onClick={() => window.location = "/catalog"} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 className="pt-4 pb-3">{productDetails.name}</h3>
                    <hr></hr>
                    {productDetails.stock < 1 ? <h6 class="text-danger">Temporalmente sin Stock</h6> : <h6>Stock: {productDetails.stock}</h6>/* <h6>Stock: {productDetails.stock}</h6> */}
                    <hr></hr>
                    <h5>$ {productDetails.price}</h5>
                    <hr></hr>
                    <p>{productDetails.description}</p>
                    <hr></hr>
                    <div>
                        <RatingPage />
                    </div>
                    <hr></hr>
                    <button data-id={id} type='button'
                        className="btn btn-dark ml-auto mr-auto"
                        onClick={() => {
                            handleCart(productDetails.id, sessionUser.id);
                        }}
                    >
                        Agregar al carrito</button>

                </div>
                <script src="js/addons/rating.js"></script>
            </div>
            <ProductReview reviews={productDetails.reviews}/>
            <Review product={id} />
        </div>
    );
}

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
    return {
        productDetails: state.products.productDetails,
        addToOrder: state.cart.addToOrder,
        cart: state.cart.cart,
        sessionUser: state.session.sessionUser,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        toProductDetails: (id) => dispatch(toProductDetails(id)),
        addToOrder: (productId, quantity, userId) => dispatch(addToOrder(productId, quantity, userId)),
        getCart: (userId) => dispatch(getCart(userId)),
        editQuantity: (orderLineId, quantity, userId) => dispatch(editQuantity(orderLineId, quantity, userId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);