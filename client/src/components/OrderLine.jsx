import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toProductDetails } from '../Redux/actions/productActions';
import Counter from '../components/Counter';
//import {addToOrder } from "../Redux/actions/orderActions"


export function OrderLine({ name, price, quantity }) {
	return (
					<tr>
						<td type="button btn-sm" className="btn btn-danger btn-sm">X</td>
						<td>{name}</td>
						<td>{price}</td>
            <td>{quantity}</td>
						<td><Counter/></td>
            <td>{quantity * price}</td>
					</tr>

	);
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

export default connect(mapStateToProps, null)(OrderLine);
