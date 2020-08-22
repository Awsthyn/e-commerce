import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
//import {addToOrder } from "../Redux/actions/orderActions"

export function OrderLine({ dataid, name, price, quantity }) {

	return (
		<tr>
			<td data-id={dataid} type="button btn-sm" className="btn btn-danger btn-sm">
				X
			</td>
			<td>{name}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>
				<Counter />
			</td>
			<td className="subtotal">{quantity * price}</td>
		</tr>
	);
}

function mapStateToProps(state) {
	return {
		productDetails: state.products.productDetails,
	};
}


export default connect(mapStateToProps, null)(OrderLine);
