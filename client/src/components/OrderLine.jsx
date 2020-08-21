import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { toProductDetails } from "../Redux/actions/productActions"


export function OrderLine ({productDetails, products }) {
  
    return (
      <div>
        <table className="table table-dark mt-2 table-striped ">       
          <tbody>           
            <tr className="d-flex justify-content ml-5">
              <td type="button btn-sm" className="btn btn-danger btn-sm">X</td>
              <td>{productDetails.image}image</td>
              <td>{productDetails.name}</td>
              <td>$ {productDetails.price}</td>
              <td>
                  <Counter/>
              </td>
              <td>$ 5000000(harcodeado)</td>
            </tr>         
          </tbody>
        </table>
        
      </div>
    )
  
}

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
export default connect(mapStateToProps, mapDispatchToProps)(OrderLine)
