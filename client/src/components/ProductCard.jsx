import React from "react";
import { useHistory } from "react-router-dom";
import { toProductDetails } from "../Redux/actions/productActions"
import { addToOrder } from "../Redux/actions/cartActions"
import { connect } from "react-redux";
import styles from '../css/product.module.css'


export function ProductCard({ id, name, price, image, stock, toProductDetails, addToOrder }) {
  let history = useHistory()

  function handleCart (id) {
    if(stock>=1){
      addToOrder(id, 1)
      alert("El producto se agregó al carrito correctamente")
    }
    else {alert("No se ha podido agregar a carrito debido a falta temporal de stock.")}
  }

  return(
    <div className="card bg-light p-2 m-3 shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
      <img src={image} className={styles.product_card} alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
  {stock<1 ?<h5 className="card-title text-center"><sup className="bg-danger text-white mr-2 pl-2 pr-2 rounded">Sin Stock</sup>{name}</h5>:<h5 className="card-title text-center">{name}</h5>}
        { !price ? <p className="card-text text-center"></p> : <p className="card-text text-center">${price}</p> }
        {id !== -1 ?
        <div className="row">
        <button data-id={id} type= 'button' className="btn btn-dark ml-auto mr-auto" onClick={(e) => {
          history.push(`/products/${e.target.getAttribute('data-id')}`)
          toProductDetails(id)
        }}>
          Ver más detalles...
        </button>
        <button data-id={id} type= 'button'
          className="btn btn-dark ml-auto mr-auto"
          onClick={(e) => {
            handleCart(e.target.getAttribute("data-id"))
            // addToOrder(e.target.getAttribute("data-id"), 1)
            // history.push(`/Order`)
          }}
        >
          <i data-id={id} className="fas fa-cart-plus "></i>
        </button>
        </div>
        :<></>}
      </div>
    </div>
  );
};

//-------------------- CONEXIONES REDUX ----------------------------------

function mapStateToProps(state) {
  return {
    productDetails: state.productDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      toProductDetails: (id) => dispatch(toProductDetails(id)),
      addToOrder: (productId, quantity) => dispatch(addToOrder(productId, quantity))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
