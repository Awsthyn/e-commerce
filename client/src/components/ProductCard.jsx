import React from "react";
import { useHistory } from "react-router-dom";
import { toProductDetails } from "../Redux/actions/productActions"
import { addToOrder } from "../Redux/actions/orderLineActions"
import { connect } from "react-redux";
import store from "../Redux/store"


export function ProductCard({ id, name, price, image }) {
  let history = useHistory()

  return(    
    <div className="card bg-light p-2 m-3 shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top rounded border border-dark" alt={name} />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text text-center">$ {price}</p>
        <div className="row">
        <button data-id={id} type= 'button' className="btn btn-dark ml-auto mr-auto" onClick={(e) => {
          history.push(`/products/${e.target.getAttribute('data-id')}`)
          store.dispatch(toProductDetails(id))
        }}>
          Ver más detalles...
        </button>
        <button data-id={id} type= 'button' 
          className="btn btn-dark ml-auto mr-auto"
          onClick={(e) => {
            history.push(`/Order`)
            store.dispatch(addToOrder(id))
          }}
        >
          <i class="fas fa-cart-plus "></i>
        </button>
        </div>
        
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);