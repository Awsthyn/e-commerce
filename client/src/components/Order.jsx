import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getCart} from "../Redux/actions/orderActions"
import {addToOrder} from "../Redux/actions/orderLineActions";
import OrderLine from '../components/OrderLine'
import store from "../Redux/store"

store.dispatch(getCart());

export const Order = ({cart}) => {
    return (
        <div>
            <h1 className="d-flex justify-content-center m-3">Carrito</h1>
            <div className="">
            <table className="table ">
              <thead className="text-center">
                <tr>
                  <td>X</td>
                  <td>Producto</td>
                  <td>Precio</td>
                  <td>Cantidad</td>
                  <td></td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody className="text-center">
            {cart.map(e => <OrderLine productId={e.productId} price={e.price} quantity={e.quantity} />)}
              </tbody>
            </table>  
            <h5 className ="d-flex ml-auto">Total: $</h5>
            <button className="btn btn-success">Comprar</button>
            <button className="btn btn-danger">Cancelar</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
  return {
      cart: state.order.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
