import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toProductDetails } from "../Redux/actions/productActions"
import { addToOrder, getCart, getGuestCart, editQuantity } from "../Redux/actions/cartActions"
import { connect } from "react-redux";
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

export function ProductCard({dataProduct, sessionUser, id, name, price, image, stock, toProductDetails, addToOrder, getCart, cart, editQuantity }) {
  let history = useHistory()
  useEffect(() => {
    if(!sessionUser.id) getGuestCart()
    else getCart(sessionUser.id)
    
    
  }, [])

  //if(!sessionUser.id) cart = JSON.parse(localStorage.getItem('guestCart'))

  function handleCart(id) {
    let indexProductCart = cart.findIndex(e => e.product.id == id)
    // console.log('productId: ' + id)
    // console.log(indexProductCart)
    // console.log(cart)
    if(indexProductCart === -1) {
      if(stock < 1) {swal("Lo sentimos", "No se ha podido agregar a carrito debido a falta temporal de stock.", "error")}
      else {
        if(!sessionUser.id){
          cart.length == 0 ? cart[0] = {id: 1, quantity: 1, product: dataProduct} : cart[cart.length] = {id: cart[cart.length-1].id + 1, quantity: 1, product: dataProduct}
          localStorage.setItem("guestCart", JSON.stringify(cart))
          alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")
        }
        else {
        addToOrder(id, 1, sessionUser.id); 
        alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")}

      }
    }
    else {
      if (stock <= cart[indexProductCart].quantity) { swal("Lo sentimos", "no disponemos de la cantidad que usted está solicitando", "error") }
      else {
        if(!sessionUser.id){
          cart[indexProductCart].quantity++
          localStorage.setItem("guestCart", JSON.stringify(cart))
          alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")
        }
        else {
        editQuantity(cart[indexProductCart].id, cart[indexProductCart].quantity + 1, sessionUser.id)
        alerta("Agregado", "El producto se agregó al carrito correctamente", "4000")

        getCart(sessionUser.id)}
      }
    }
  }

  return (
    <div className="card bg-light p-2 m-3 shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
      <img src={image} className={styles.product_card} alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
        {stock < 1 ? <h5 className="card-title text-center"><sup className="bg-danger text-white mr-2 pl-2 pr-2 rounded">Sin Stock</sup>{name}</h5> : <h5 className="card-title text-center">{name}</h5>}
        {!price ? <p className="card-text text-center"></p> : <p className="card-text text-center">${price}</p>}
        {id !== -1 ?
          <div className="row">
            <button data-id={id} type='button' className="btn btn-dark ml-auto mr-auto" onClick={(e) => {
              history.push(`/products/${e.target.getAttribute('data-id')}`)
              toProductDetails(id)
            }}>
              Ver más detalles...
        </button>
        <button type='button' className="btn btn-danger ml-auto mr-auto btn-sm" data-toggle="tooltip" data-html="true" title="Agregar a 'Favoritos'">
        <svg width="20" height="20" viewBox="0 0 16 16" className="mt-2 mr-2 bi bi-heart-fill text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
        </button>
            <button data-id={id} type='button' data-toggle="tooltip" data-html="true" title="Agregar a carrito"
              className="btn btn-dark ml-auto mr-auto"
              onClick={(e) => {
                handleCart(e.target.getAttribute("data-id"))              
              }}
            >
              <i data-id={id} className="fas fa-cart-plus "></i>
            </button>
          </div>
          : <></>}
      </div>
    </div>
  );
};

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
  return {
    productDetails: state.products.productDetails,
    cart: state.cart.cart,
    sessionUser: state.session.sessionUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toProductDetails: (id) => dispatch(toProductDetails(id)),
    addToOrder: (productId, quantity, userId) => dispatch(addToOrder(productId, quantity, userId)),
    getCart: (userId) => dispatch(getCart(userId)),
    getGuestCart: () => dispatch(getGuestCart()),
    editQuantity: (orderLineId, quantity, userId) => dispatch(editQuantity(orderLineId, quantity, userId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
