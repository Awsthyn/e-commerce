import React from 'react';
import { connect } from 'react-redux';
import { deleteProductFromCart } from '../Redux/actions/orderLineActions';
import Counter from '../components/Counter';
//import {addToOrder } from "../Redux/actions/orderActions"

export function OrderLine({ dataid, name, price, quantity, deleteProductFromCart }) {

	return (
		<tr>
			<td data-id={dataid} type="button btn-sm " className="btn btn-danger btn-sm "  onClick={(e) => deleteProductFromCart(e.target.getAttribute('data-id'))}>
				X
			</td>
			<td className="border border-info">{name}</td>
			<td className="border border-info">$ {price}</td>
			<td className="border border-info">{quantity}</td>
			<td >
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
function mapDispatchToProps(dispatch) {
	return {
		deleteProductFromCart: (id) => dispatch(deleteProductFromCart(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderLine);
