import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getCart} from "../Redux/actions/orderActions"
import {addToOrder} from "../Redux/actions/orderLineActions";
import OrderLine from '../components/OrderLine'
import store from "../Redux/store"

store.dispatch(getCart());

export const Order = ({cart}) => {

  const sum = () => {
    Array.from(document.getElementsByClassName("subtotal")).map(e => e.innerHTML)
  }
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
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody className="text-center">
            {cart.map(e => <OrderLine name={e.product.name} price={e.product.price} quantity={e.quantity} />)}
              </tbody>
            </table>
            <div className="mt-4 d-flex justify-content-around">
            <h5 className ="">Total: ${cart[0] ? cart.map(e => e.quantity * e.product.price).reduce((a, b) => a + b) : 0}</h5>
            <div>
            <button className="btn btn-success">Confirmar compra</button>
            <button className="btn btn-danger">Vaciar carrito</button>
            </div>
            </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
  return {
      cart: state.cart.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
