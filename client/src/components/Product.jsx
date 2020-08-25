import React, {useEffect} from "react";

import RatingPage from "./calificacionCaras";
import { addToOrder, getCart, editQuantity } from "../Redux/actions/cartActions"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styles from '../css/product.module.css'


export function ProductComponent({id, productDetails, addToOrder, cart, getCart, editQuantity }) {
    let history = useHistory() 
    useEffect(()=>{
      getCart()
    }, [])
    function handleCart (id) {
        let indexProductCart = cart.findIndex(e => e.product.id == id)
        if(productDetails.stock>1  && productDetails.stock > cart[indexProductCart].quantity){
            if(indexProductCart == -1){
            addToOrder(id, 1)
            alert("El producto se agregó al carrito correctamente")
            }
            else {
                editQuantity(cart[indexProductCart].id, cart[indexProductCart].quantity + 1)
                alert("El producto se agregó al carrito correctamente")}
                getCart()}
        else if (productDetails.stock == cart[indexProductCart].quantity)  alert("Lo sentimos, no disponemos de la cantidad que usted está solicitando")
        else {alert("No se ha podido agregar a carrito debido a falta temporal de stock.")}
    }
    console.log(cart)
    //console.log(cart.cart.length > 0 ? cart.cart.map(e => e.product.id) : null)
    return (        
    <div className="container-fluid mt-4    ">
        <div className= "d-flex border border-secondary m-auto m-0 shadow p-3 mb-5 bg-white rounded" style={{width: "900px"}}>
            <div className="d-flex flex-column align-items-center" style={{ width: "350px" }}>
            <img id="principal" className={styles.product_img} src={productDetails.images === undefined ? "." : productDetails.images[1].url} alt={productDetails.name} />
                <div className= "d-flex flex-row justify-content-around mt-4 ml-2">
                    <img className= {styles.product_img_min}
                    src={productDetails.images === undefined ? "." : productDetails.images[0].url} alt={productDetails.name}
                    alt={productDetails.name}
                    onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className={styles.product_img_min} src={productDetails.images === undefined ? "." : productDetails.images[1].url} alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                    <img className={styles.product_img_min} src={productDetails.images === undefined ? "." : productDetails.images[2].url} alt={productDetails.name}alt={productDetails.name} onClick={(e)=> console.log(document.getElementById('principal').setAttribute('src', e.target.getAttribute("src")))} />
                </div>
            </div>
            <div className="ml-4 pl-2" style={{ width: "450px" }}>
            <button onClick={() => window.location = "/catalog"} type="button" class="close" aria-label="Close">
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
                <button data-id={id} type= 'button' 
                    className="btn btn-dark ml-auto mr-auto"
                    onClick={() => {
                        handleCart(productDetails.id);
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
        addToOrder: state.cart.addToOrder,
        cart: state.cart.cart
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToOrder: (productId, quantity) => dispatch(addToOrder(productId, quantity)),
        getCart: () => dispatch(getCart()),
        editQuantity: (orderLineId, quantity) => dispatch(editQuantity(orderLineId, quantity))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);