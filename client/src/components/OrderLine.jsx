import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {addToOrder } from "../Redux/actions/orderActions"


export function OrderLine ({productDetails, products, orderProducts }) {
  
    return (
      <div>
        <table className="table table-dark mt-2 table-striped ">       
          <tbody>           
            <tr className="d-flex justify-content ml-5">
              <td type="button btn-sm" className="btn btn-danger btn-sm">X</td>
              <td>{orderProducts.images}image</td>
              <td>{orderProducts.name}</td>
              <td>$ {orderProducts.price}</td>
              <td>
                  <Counter/>
              </td>
              <td>$ 5(harcodeado)</td>
            </tr>         
          </tbody>
        </table>
        
      </div>
    )
  
}

function mapStateToProps(state) {
  return {
      orderProducts: state.order.orderProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      addToOrder: (id) => dispatch(addToOrder(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderLine)
