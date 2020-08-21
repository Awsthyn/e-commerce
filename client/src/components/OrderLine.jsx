import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
//import {addToOrder } from "../Redux/actions/orderActions"

export function OrderLine({ productId, price, quantity }) {
	return (
					<tr>
						<td type="button btn-sm" className="btn btn-danger btn-sm">X</td>
						<td>{productId}</td>
						<td>{price}</td>
						<td>{quantity}</td>
            <td><Counter /></td>
            <td>{quantity * price}</td>
					</tr>
	);
}

export default connect(null, null)(OrderLine);
